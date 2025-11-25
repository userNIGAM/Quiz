import React, { useState } from "react";
import quizData from "./question.json";

const Quiz1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const question = quizData[currentQuestion];
  return (
    <>
      <div>
        <span>{question.question}</span>
        <div>
            {
                question.options.map(option, index) =>{
                    
                }
            }
        </div>
      </div>
    </>
  );
};

export default Quiz1;
