// import React, { useState } from 'react';
// import { MenuIcon, XIcon } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <nav className="sticky top-0 z-50 w-full bg-navy/90 backdrop-blur-md border-b border-white/5">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <span className="text-2xl font-bold font-outfit text-white">
//               Koinonia<span className="text-mint">.</span>
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <a
//                 href="#"
//                 className="text-white hover:text-mint px-3 py-2 rounded-md text-sm font-medium transition-colors">

//                 Jogos
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-mint px-3 py-2 rounded-md text-sm font-medium transition-colors">

//                 Sobre
//               </a>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <div className="hidden md:block">
//             <button className="bg-mint text-navy px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors duration-300">
//               Entrar
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none">

//               {isOpen ?
//               <XIcon className="h-6 w-6" /> :

//               <MenuIcon className="h-6 w-6" />
//               }
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen &&
//         <motion.div
//           initial={{
//             opacity: 0,
//             height: 0
//           }}
//           animate={{
//             opacity: 1,
//             height: 'auto'
//           }}
//           exit={{
//             opacity: 0,
//             height: 0
//           }}
//           className="md:hidden bg-navy border-b border-white/5">

//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <a
//               href="#"
//               className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/5 hover:text-mint">

//                 Jogos
//               </a>
//               <a
//               href="#"
//               className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/5 hover:text-mint">

//                 Sobre
//               </a>
//               <button className="w-full mt-4 bg-mint text-navy px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors">
//                 Entrar
//               </button>
//             </div>
//           </motion.div>
//         }
//       </AnimatePresence>
//     </nav>);

// }