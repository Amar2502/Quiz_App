import React, { useState, useContext, useEffect } from "react";
import QuizContext from "../Contexts/QuizContext";
import { Link, useNavigate } from "react-router-dom";

const QuizShow = () => {
  const { category, setCategory, level, setLevel, numofQuestions, setNumOfQuestions } = useContext(QuizContext);
  const [submit, setSubmit] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [nextQuestion, setNextQuestion] = useState(false);
  const [numofSolvedQuestions, setNumOfSolvedQuestions] = useState(0);
  const [numofCorrectQuestions, setNumOfCorrectQuestions] = useState(0);
  
  const navigate = useNavigate();

  const correctaudio = new Audio("/correctanswer.mp3");
  const wrongaudio = new Audio("/wronganswer.mp3");

  const handlesubmit = (e) => {
    let getid = 0;
    for (let i = 0; i < options.length; i++) {
      if (userAnswer !== options[i]) {
        getid++;
      } else {
        break;
      }
    }

    console.log(getid);

    const button = document.getElementById(`${getid}`);

    if (correctAnswer === userAnswer) {
      setNumOfCorrectQuestions((prev)=>prev+1)
      button.style.backgroundColor = "green";
      correctaudio.play();
      setTimeout(() => {
        setNextQuestion((prev) => !prev);
      }, 500);
    } else {
      button.style.backgroundColor = "red";
      wrongaudio.play();
      setTimeout(() => {
        setNextQuestion((prev) => !prev);
      }, 500);
    }

    setTimeout(() => {
      button.style.backgroundColor = ""; // Reset to default
    }, 1500);

    setNumOfSolvedQuestions((prev) => prev+1);

    setSubmit((prev) => !prev);
  };

  const handlenextquestion = (e) => {
    setNextQuestion((prev) => !prev);
  };

  if(numofQuestions==numofSolvedQuestions) {
    document.getElementById("submit").style.cursor = "not-allowed"
    document.getElementById("quizcontainer").style.cursor = "not-allowed"
    document.getElementById("scorecard").innerText = `ScoreCard - ${numofCorrectQuestions} / ${numofSolvedQuestions}`
    const per = (numofCorrectQuestions/numofSolvedQuestions)*100;
    document.getElementById("result").innerText = `Result - ${per}%`

    setTimeout(() => {
      navigate("/")
    }, 5000);
  }

  useEffect(() => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // Swap the elements
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
      }
      return array;
    }

    const fetchData = async () => {
      try {
        const url = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${level}&type=multiple`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response
        console.log(data.results); // Log the parsed data
        const inans = data.results[0].incorrect_answers;
        const coans = data.results[0].correct_answer;
        setCorrectAnswer(coans);
        const array = [...inans, coans];
        setQuiz(data);
        const shuffledOptions = shuffleArray(array);
        setOptions(shuffledOptions);
      } catch (error) {
        console.error("Error fetching the quiz data:", error); // Handle errors
      }
    };
    // Call the fetch function when the component mounts
    fetchData();
  }, [nextQuestion]);

  return (
    <div className="py-5 bg-slate-500 flex">
      <div id="quizcontainer" className="w-1/2 mx-auto bg-gray-600 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Quiz Time!
        </h2>

        {/* Question */}
        <div className="mb-6">
          <p id="question" className="text-lg font-semibold text-white">
            {quiz && quiz.results && quiz.results[0]?.question
              ? quiz.results[0]?.question
              : "Loading..."}
          </p>
        </div>

        {/* Options */}
        <div className="mb-6">
          <button
            className="w-full mb-2 p-2 rounded-md bg-slate-300 hover:bg-gray-300 focus:bg-blue-500"
            id="0"
            value={options && options[0]}
            onClick={(e) => setUserAnswer(e.target.value)}
          >
            {options[0]}
          </button>
          <button
            className="w-full mb-2 p-2 rounded-md bg-slate-300 hover:bg-gray-300 focus:bg-blue-500"
            id="1"
            value={options && options[1]}
            onClick={(e) => setUserAnswer(e.target.value)}
          >
            {options[1]}
          </button>
          <button
            className="w-full mb-2 p-2 rounded-md bg-slate-300 hover:bg-gray-300 focus:bg-blue-500"
            id="2"
            value={options && options[2]}
            onClick={(e) => setUserAnswer(e.target.value)}
          >
            {options[2]}
          </button>
          <button
            className="w-full mb-2 p-2 rounded-md bg-slate-300 hover:bg-gray-300 focus:bg-blue-500"
            id="3"
            value={options && options[3]}
            onClick={(e) => setUserAnswer(e.target.value)}
          >
            {options[3]}
          </button>
        </div>

        {/* Scorecard */}
        <div className="mb-6">
          <p id="scorecard" className="text-lg font-semibold text-white">
            
          </p>
          <p id="result" className="text-lg font-semibold text-white">
            
          </p>
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={handlesubmit}
            id="submit"
          >
            Submit
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600"
            onClick={handlenextquestion}
          >
            Next Question
          </button>
          <Link to="/">
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Reset
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizShow;
