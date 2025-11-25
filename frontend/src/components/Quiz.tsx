// import { useState } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, Zap, Trophy, RotateCcw } from "lucide-react";
// import questionsData from "./question.json";

// interface Question {
//   question: string;
//   options: string[];
//   correct: number;
// }

// const Quiz: React.FC = () => {
//   const questions: Question[] = questionsData;
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
//   const [userAnswers, setUserAnswers] = useState<number[]>([]);
//   const [showResults, setShowResults] = useState<boolean>(false);

//   const handleAnswerSelect = (index: number) => {
//     setSelectedAnswer(index);
//   };

//   const handleNext = () => {
//     if (selectedAnswer !== null) {
//       // Save the user's answer
//       const newUserAnswers = [...userAnswers];
//       newUserAnswers[currentQuestion] = selectedAnswer;
//       setUserAnswers(newUserAnswers);

//       // Move to next question or show results
//       if (currentQuestion < questions.length - 1) {
//         setCurrentQuestion((prev) => prev + 1);
//         setSelectedAnswer(null);
//       } else {
//         setShowResults(true);
//       }
//     } else {
//       alert("Please select an answer before proceeding!");
//     }
//   };

//   const handleRestart = () => {
//     setCurrentQuestion(0);
//     setSelectedAnswer(null);
//     setUserAnswers([]);
//     setShowResults(false);
//   };

//   // Calculate score
//   const calculateScore = () => {
//     let correct = 0;
//     userAnswers.forEach((answer, index) => {
//       if (answer === questions[index].correct) {
//         correct++;
//       }
//     });
//     return correct;
//   };

//   const score = calculateScore();
//   const totalQuestions = questions.length;
//   const percentage = Math.round((score / totalQuestions) * 100);

//   if (showResults) {
//     return (
//       <motion.div
//         className="min-h-screen bg-[#0A021A] flex items-center justify-center p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <motion.div
//           className="w-full max-w-xl rounded-2xl bg-[#1A0328] border border-purple-700 shadow-[0_0_25px_#a200ff] p-10 space-y-8"
//           initial={{ scale: 0.9, opacity: 0, y: 30 }}
//           animate={{ scale: 1, opacity: 1, y: 0 }}
//           transition={{ type: "spring", stiffness: 80 }}
//         >
//           {/* Results Header */}
//           <div className="flex items-center gap-3 justify-center mb-2">
//             <Trophy size={36} className="text-yellow-400" />
//             <h1 className="text-3xl font-bold text-purple-300 tracking-wide">
//               Quiz Results
//             </h1>
//           </div>

//           {/* Score Display */}
//           <div className="text-center space-y-4">
//             <div className="text-6xl font-bold text-white mb-2">
//               {score}
//               <span className="text-2xl text-gray-400">/{totalQuestions}</span>
//             </div>
//             <div className="text-2xl font-semibold text-purple-300">
//               {percentage}%
//             </div>
//             <div className="text-lg text-gray-400">
//               {percentage >= 80
//                 ? "Excellent! 🎉"
//                 : percentage >= 60
//                 ? "Good job! 👍"
//                 : "Keep practicing! 💪"}
//             </div>
//           </div>

//           {/* Detailed Results */}
//           <div className="space-y-4 max-h-64 overflow-y-auto">
//             {questions.map((question, index) => (
//               <div
//                 key={index}
//                 className="p-4 rounded-lg bg-[#150226] border border-purple-600"
//               >
//                 <div className="font-semibold text-purple-200 mb-2">
//                   Q{index + 1}: {question.question}
//                 </div>
//                 <div className="text-sm space-y-1">
//                   <div
//                     className={`${
//                       userAnswers[index] === question.correct
//                         ? "text-green-400"
//                         : "text-red-400"
//                     }`}
//                   >
//                     Your answer: {question.options[userAnswers[index]]}
//                   </div>
//                   {userAnswers[index] !== question.correct && (
//                     <div className="text-green-400">
//                       Correct answer: {question.options[question.correct]}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Restart Button */}
//           <motion.button
//             type="button"
//             className="w-full py-3 text-lg font-bold rounded-xl bg-purple-700 text-white hover:bg-purple-800 transition active:scale-95 shadow-[0_0_12px_#a200ff] flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleRestart}
//           >
//             <RotateCcw size={20} />
//             Restart Quiz
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     );
//   }

//   const question: Question = questions[currentQuestion];

//   return (
//     <motion.div
//       className="min-h-screen bg-[#0A021A] flex items-center justify-center p-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <motion.div
//         className="w-full max-w-xl rounded-2xl bg-[#1A0328] border border-purple-700 shadow-[0_0_25px_#a200ff] p-10 space-y-8"
//         initial={{ scale: 0.9, opacity: 0, y: 30 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         transition={{ type: "spring", stiffness: 80 }}
//       >
//         {/* Header */}
//         <div className="flex items-center gap-3 justify-center mb-2">
//           <Zap size={36} className="text-purple-400 animate-pulse" />
//           <h1 className="text-3xl font-bold text-purple-300 tracking-wide">
//             Cyber Quiz
//           </h1>
//         </div>

//         {/* Progress */}
//         <div className="flex justify-between items-center text-sm text-gray-400">
//           <span>Level 1</span>
//           <span>
//             Question {currentQuestion + 1} of {questions.length}
//           </span>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full bg-[#150226] rounded-full h-2">
//           <motion.div
//             className="bg-purple-600 h-2 rounded-full"
//             initial={{ width: 0 }}
//             animate={{
//               width: `${((currentQuestion + 1) / questions.length) * 100}%`,
//             }}
//             transition={{ duration: 0.5 }}
//           />
//         </div>

//         {/* Question Field */}
//         <h2 className="text-gray-200 text-xl mb-4 font-semibold border-b border-purple-600 p-3 rounded">
//           {question.question}
//         </h2>

//         {/* Options */}
//         <div className="flex flex-col gap-4">
//           {question.options.map((option: string, index: number) => (
//             <motion.label
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className={`
//                 flex items-center gap-4 p-4 border rounded-xl cursor-pointer font-medium
//                 transition-all duration-200
//                 ${
//                   selectedAnswer === index
//                     ? "bg-purple-600 text-white shadow-[0_0_20px_#a200ff] border-purple-400"
//                     : "border-purple-600 text-purple-100 bg-[#150226] shadow-[0_0_10px_#48007a66]"
//                 }
//               `}
//             >
//               <input
//                 type="radio"
//                 name="answer"
//                 value={index}
//                 className="hidden"
//                 checked={selectedAnswer === index}
//                 onChange={() => handleAnswerSelect(index)}
//               />
//               <CheckCircle
//                 className={
//                   selectedAnswer === index ? "opacity-100" : "opacity-0"
//                 }
//               />
//               {option}
//             </motion.label>
//           ))}
//         </div>

//         {/* Next Button */}
//         <motion.button
//           type="button"
//           className="w-full py-3 text-lg font-bold rounded-xl bg-purple-700 text-white hover:bg-purple-800 transition active:scale-95 shadow-[0_0_12px_#a200ff] disabled:opacity-50 disabled:cursor-not-allowed"
//           whileHover={selectedAnswer !== null ? { scale: 1.05 } : {}}
//           whileTap={selectedAnswer !== null ? { scale: 0.95 } : {}}
//           onClick={handleNext}
//           disabled={selectedAnswer === null}
//         >
//           {currentQuestion < questions.length - 1
//             ? "Next Question"
//             : "Finish Quiz"}
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Quiz;
