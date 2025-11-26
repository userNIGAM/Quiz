import { useState } from "react";
import { motion } from "framer-motion";
import quizData from "./question.json";

const Quiz1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const question = quizData[currentQuestion];
  return (
    <>
      <motion.div
        className="min-h-screen bg-[#0A021A] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="w-full max-w-xl rounded-2xl bg-[#1A0328] border border-purple-700 shadow-[0_0_25px_#a200ff] p-10 space-y-8"
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          {/* Question */}
          <h2 className="text-gray-200 text-xl mb-4 font-semibold border-b border-purple-600 p-3 rounded">
            {question.question}
          </h2>

          {/* Answer selection field */}
          <div className="flex flex-col gap-4">
            {question.options.map((option: string, index: number) => {
              return (
                <button
                  key={index}
                  className="p-3 bg-purple-900 text-gray-200 rounded-lg border border-purple-600 
                 hover:bg-purple-700 transition-all"
                >
                  {option}
                </button>
              );
            })}
          </div>
          <div></div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Quiz1;
