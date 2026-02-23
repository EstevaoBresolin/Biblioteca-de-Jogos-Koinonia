import React, { useState, Component } from 'react';
import { ClockIcon, UsersIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export interface Game {
  id: number;
  title: string;
  category: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  players: string;
  time: string;
  image: string | null;
  description?: string;
  rules?: string;
  ageRange?: string;
}
interface GameCardProps {
  game: Game;
  onDetailsClick: (game: Game) => void;
}
// Proxy BGG images through weserv.nl to bypass CORS
function proxyImage(url: string | null): string | null {
  if (!url) return null;
  const stripped = url.replace(/^https?:\/\//, '');
  return `https://images.weserv.nl/?url=${encodeURIComponent(stripped)}&w=400&h=300&fit=cover&output=webp&we`;
}
const CATEGORY_GRADIENTS: Record<string, string> = {
  Estratégia: 'from-purple-900 via-indigo-900 to-navy',
  Party: 'from-pink-900 via-rose-900 to-navy',
  Familiar: 'from-teal-900 via-emerald-900 to-navy',
  Cooperativo: 'from-blue-900 via-cyan-900 to-navy',
  Dedução: 'from-amber-900 via-orange-900 to-navy'
};
const CATEGORY_ICONS: Record<string, string> = {
  Estratégia: '♟️',
  Party: '🎉',
  Familiar: '🏠',
  Cooperativo: '🤝',
  Dedução: '🔍'
};
export function GameCard({
  game,
  onDetailsClick
}: GameCardProps) {
  const [imgError, setImgError] = useState(false);
  const proxiedImage = proxyImage(game.image);
  const gradient = CATEGORY_GRADIENTS[game.category] ?? 'from-gray-900 to-navy';
  const icon = CATEGORY_ICONS[game.category] ?? '🎲';
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Fácil':
        return 'bg-teal-500/20 text-teal-300 border border-teal-500/30';
      case 'Médio':
        return 'bg-orange-500/20 text-orange-300 border border-orange-500/30';
      case 'Difícil':
        return 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30';
      default:
        return 'bg-gray-700 text-gray-300';
    }
  };
  return <motion.div layout initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: 20
  }} whileHover={{
    y: -8,
    boxShadow: '0 20px 40px rgba(62, 213, 152, 0.15)',
    transition: {
      duration: 0.2
    }
  }} className="group relative bg-card-bg rounded-xl overflow-hidden border-b-4 border-mint h-full flex flex-col cursor-pointer" onClick={() => onDetailsClick(game)}>

      {/* Image Area */}
      <div className={`h-48 w-full bg-gradient-to-br ${gradient} relative overflow-hidden`}>

        {proxiedImage && !imgError ? <img src={proxiedImage} alt={game.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" onError={() => setImgError(true)} /> : <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="text-5xl drop-shadow-lg">{icon}</span>
            <span className="text-xs text-white/40 font-medium px-6 text-center leading-tight line-clamp-2">
              {game.title}
            </span>
          </div>}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent opacity-60" />

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-mint text-navy">
            {game.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white font-outfit group-hover:text-mint transition-colors duration-200 mb-4">
          {game.title}
        </h3>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center">
              <UsersIcon className="h-4 w-4 mr-1.5 text-mint" />
              <span>{game.players}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1.5 text-mint" />
              <span>{game.time}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex justify-between items-center">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>

              {game.difficulty}
            </span>
            <button className="text-sm font-medium text-mint hover:text-white transition-colors" onClick={(e) => {
            e.stopPropagation();
            onDetailsClick(game);
          }}>

              Detalhes →
            </button>
          </div>
        </div>
      </div>
    </motion.div>;
}