import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  ClockIcon,
  UsersIcon,
  TagIcon,
  StarIcon,
  UserIcon,
  BookOpenIcon } from
'lucide-react';
import { Game } from './GameCard';
interface GameDetailModalProps {
  game: Game | null;
  onClose: () => void;
}
export function GameDetailModal({ game, onClose }: GameDetailModalProps) {
  useEffect(() => {
    if (game) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [game]);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);
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
  return (
    <AnimatePresence>
      {game &&
      <>
          {/* Backdrop */}
          <motion.div
          key="backdrop"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.2
          }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          onClick={onClose} />


          {/* Modal */}
          <motion.div
          key="modal"
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20
          }}
          transition={{
            duration: 0.25,
            ease: 'easeOut'
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">

            <div
            className="bg-card-bg rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}>

              {/* Image Header */}
              <div className="relative h-56 w-full bg-gradient-to-br from-navy to-gray-800 overflow-hidden rounded-t-2xl">
                {game.image &&
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }} />

              }
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/40 to-transparent" />

                {/* Close button */}
                <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                aria-label="Fechar">

                  <XIcon className="h-5 w-5" />
                </button>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-mint text-navy">
                    {game.category}
                  </span>
                </div>

                {/* Title over image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-outfit leading-tight">
                    {game.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-navy/60 rounded-xl p-3 flex flex-col items-center gap-1 border border-white/5">
                    <UsersIcon className="h-5 w-5 text-mint" />
                    <span className="text-xs text-gray-400">Jogadores</span>
                    <span className="text-sm font-semibold text-white">
                      {game.players}
                    </span>
                  </div>
                  <div className="bg-navy/60 rounded-xl p-3 flex flex-col items-center gap-1 border border-white/5">
                    <ClockIcon className="h-5 w-5 text-mint" />
                    <span className="text-xs text-gray-400">Duração</span>
                    <span className="text-sm font-semibold text-white text-center">
                      {game.time}
                    </span>
                  </div>
                  <div className="bg-navy/60 rounded-xl p-3 flex flex-col items-center gap-1 border border-white/5">
                    <StarIcon className="h-5 w-5 text-mint" />
                    <span className="text-xs text-gray-400">Dificuldade</span>
                    <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getDifficultyColor(game.difficulty)}`}>

                      {game.difficulty}
                    </span>
                  </div>
                  <div className="bg-navy/60 rounded-xl p-3 flex flex-col items-center gap-1 border border-white/5">
                    <UserIcon className="h-5 w-5 text-mint" />
                    <span className="text-xs text-gray-400">Faixa Etária</span>
                    <span className="text-sm font-semibold text-white">
                      {game.ageRange ?? '10+'}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TagIcon className="h-4 w-4 text-mint" />
                    <h3 className="text-sm font-semibold text-mint uppercase tracking-wider">
                      Descrição
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {game.description ??
                  'Um jogo de tabuleiro que promove interação entre os participantes, incentivando estratégia, raciocínio lógico, comunicação e tomada de decisões. Adequado para encontros do ministério, proporcionando diversão saudável e integração entre os jogadores.'}
                  </p>
                </div>

                {/* Rules */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpenIcon className="h-4 w-4 text-mint" />
                    <h3 className="text-sm font-semibold text-mint uppercase tracking-wider">
                      Regras Resumidas
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {game.rules ??
                  'Os jogadores seguem turnos realizando ações específicas do jogo. Cada jogo possui condições próprias de vitória, normalmente envolvendo pontuação, eliminação, cooperação ou cumprimento de missões.'}
                  </p>
                </div>

                {/* Back button */}
                <div className="pt-2">
                  <button
                  onClick={onClose}
                  className="w-full py-3 rounded-xl border border-mint/40 text-mint hover:bg-mint hover:text-navy font-semibold transition-all duration-200 text-sm">

                    ← Voltar para a Biblioteca
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}