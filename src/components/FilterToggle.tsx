import React from 'react';
import { motion } from 'framer-motion';
interface FilterToggleProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}
export function FilterToggle({
  categories,
  activeCategory,
  onSelectCategory
}: FilterToggleProps) {
  return <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => {
      const isActive = activeCategory === category;
      return <button key={category} onClick={() => onSelectCategory(category)} className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none ${isActive ? 'text-navy' : 'text-gray-400 hover:text-white bg-card-bg border border-white/5'}`}>

            {isActive && <motion.div layoutId="activeFilter" className="absolute inset-0 bg-mint rounded-full" transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6
        }} />}
            <span className="relative z-10">{category}</span>
          </button>;
    })}
    </div>;
}