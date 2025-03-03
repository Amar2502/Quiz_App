import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuizContext from "../Contexts/QuizContext";

function Home() {

  const {category, setCategory, level, setLevel, numofQuestions, setNumOfQuestions} = useContext(QuizContext)

  return (
      <div className="min-h-screen bg-slate-500 flex items-center justify-center">
        <div className="max-w-lg w-full p-6 rounded-lg shadow-lg bg-gray-600">
          <div className="text-center mb-6">
            <img
              src="/Quizlogo.png"
              alt="Quiz Logo"
              className="mx-auto w-16 h-16 mb-4"
            />
            <h1 className="text-2xl font-bold text-white">Quiz Time</h1>
          </div>

          <form>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-white font-semibold mb-2"
              >
                Select Category
              </label>
              <select
                id="category"
                className="w-full px-3 py-2 bg-gray-300 text-black rounded-md outline-none cursor-pointer"
                onChange={(e)=>{
                  setCategory(Number(e.target.value))
                  
                }}
              >
                <option value="9">General Knowledge</option>
                <option value="17">Science</option>
                <option value="23">History</option>
                <option value="21">Sports</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="difficulty"
                className="block text-white font-semibold mb-2"
              >
                Select Difficulty
              </label>
              <select
                id="difficulty"
                className="w-full px-3 py-2 bg-gray-300 text-black rounded-md outline-none cursor-pointer"
                onChange={(e)=>{
                  setLevel(e.target.value)
                }}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="num_of_questions"
                className="block text-white font-semibold mb-2"
              >
                Select Number Of Questions
              </label>
              <select
                id="numofquestions"
                className="w-full px-3 py-2 bg-gray-300 text-black rounded-md outline-none cursor-pointer"
                onChange={(e)=>{
                  setNumOfQuestions(Number(e.target.value))
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
            </div>

            <Link to="/quizshow">
              <button
                type="submit"
                className="w-full py-2 px-4 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
  );
}

export default Home;
