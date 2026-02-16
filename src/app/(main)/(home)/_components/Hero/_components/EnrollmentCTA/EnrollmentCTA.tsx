// 'use client';

// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// const EnrollmentButton = () => {
//   return (
//     <div className="flex flex-col items-center gap-6 md:flex-row">
//       <motion.button
//         initial="initial"
//         whileHover="hover"
//         className="relative flex h-[56px] min-w-[260px] items-center justify-center overflow-hidden rounded-xl bg-[#ff7a00] px-2 font-bold text-white shadow-[0_10px_30px_rgba(255,122,0,0.3)]"
//       >
//         <div className="relative flex h-full w-full items-center justify-center">
//           {/* Text Section */}
//           <motion.span
//             variants={{
//               initial: { x: -20 }, // শুরুতে একটু বামে
//               hover: { x: 25 }, // হভার করলে ডানে সরে যাবে
//             }}
//             transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//             className="z-10 text-[17px]"
//           >
//             Enroll now for $499
//           </motion.span>

//           {/* Icon Section (White Box) */}
//           <motion.div
//             variants={{
//               initial: { x: 95 }, // শুরুতে ডানে
//               hover: { x: -110 }, // হভার করলে বামে চলে আসবে
//             }}
//             transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
//             className="absolute flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#ff7a00]"
//           >
//             <ArrowRight size={20} strokeWidth={3} />
//           </motion.div>
//         </div>
//       </motion.button>

//       {/* Social Proof (Avatar + Text) */}
//       <div className="flex items-center gap-4">
//         <div className="flex -space-x-3">
//           {[1, 2, 3, 4].map((i) => (
//             <div
//               key={i}
//               className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#0c0c0c]"
//             >
//               <img
//                 src={`https://i.pravatar.cc/100?u=${i}`}
//                 alt="user"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="relative">
//           <p className="text-[11px] leading-tight font-bold tracking-tighter text-zinc-400 uppercase italic">
//             2K+ Professionals are <br /> already ahead of you.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnrollmentButton;

function EnrollmentCTA() {
  return <div>EnrollmentCTA</div>;
}

export default EnrollmentCTA;
