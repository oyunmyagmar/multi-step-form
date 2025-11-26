// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import {
//   FirstStepBase,
//   SecondStepPass,
//   ThirdStepImg,
//   LastStep,
// } from "../components";

// const [step, setStep] = useState("firstStepBase"); // secondStepPass, thirdStepImg, lastStep

// const HomeForm = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     email: "",
//     telNumber: "",
//     password: "",
//     confirmPass: "",
//     dateOfBirth: "",
//     preview: "",
//   });

//   useEffect(() => {
//     const localMyForm = localStorage.getItem("my-form");
//     if (localMyForm) {
//       setForm(JSON.parse(localMyForm));
//     }
//   }, []);

//   if (step === "firstStepBase") {
//     return (
//       <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
//         <AnimatePresence>
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, right: -100 }}
//             animate={{ opacity: 1, right: 0, transition: { duration: 1 } }}
//             exit={{ opacity: 0, right: 100, transform: { duration: 1 } }}
//           >
//             <FirstStepBase
//               form={form}
//               onChangeForm={setForm}
//               onClickChangeStep={setStep}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     );
//   }
//   if (step === "secondStepPass") {
//     return (
//       <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
//         <AnimatePresence>
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, right: -100 }}
//             animate={{ opacity: 1, right: 0, transition: { duration: 1 } }}
//             exit={{ opacity: 0, right: 100, transform: { duration: 1 } }}
//           >
//             <SecondStepPass
//               form={form}
//               onChangeForm={setForm}
//               onClickChangeStep={setStep}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     );
//   }
//   if (step === "thirdStepImg") {
//     return (
//       <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
//         <AnimatePresence>
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, right: -100 }}
//             animate={{ opacity: 1, right: 0, transition: { duration: 1 } }}
//             exit={{ opacity: 0, right: 100, transform: { duration: 1 } }}
//           >
//             <ThirdStepImg
//               form={form}
//               onChangeForm={setForm}
//               onClickChangeStep={setStep}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     );
//   }
//   if (step === "lastStep") {
//     return (
//       <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
//         <AnimatePresence>
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, right: -100 }}
//             animate={{ opacity: 1, right: 0, transition: { duration: 1 } }}
//             exit={{ opacity: 0, right: 100, transform: { duration: 1 } }}
//           >
//             <LastStep onClickChangeStep={setStep} />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     );
//   }
// };
// export default HomeForm;
