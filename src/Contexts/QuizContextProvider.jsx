import React, { useState } from "react";
import QuizContext from "./QuizContext";

const QuizContextProvider = ({ children }) => {

  const [category, setCategory] = useState(9);
  const [level, setLevel] = useState('easy');
  const [numofQuestions, setNumOfQuestions] = useState(5);

  return (
    <QuizContext.Provider
      value={{ category, setCategory, level, setLevel, numofQuestions, setNumOfQuestions}}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider
