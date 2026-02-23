import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, HandshakeIcon, CalendarIcon } from 'lucide-react';
export function AboutSection() {
  const features = [
  {
    icon: <UsersIcon className="h-8 w-8 text-mint" />,
    title: 'Comunidade Unida',
    description:
    'Conecte-se com jogadores locais e forme grupos regulares para suas campanhas favoritas.'
  },
  {
    icon: <HandshakeIcon className="h-8 w-8 text-mint" />,
    title: 'Trocas e Empréstimos',
    description:
    'Facilitamos a troca e o empréstimo de jogos entre membros da comunidade Koinonia.'
  },
  {
    icon: <CalendarIcon className="h-8 w-8 text-mint" />,
    title: 'Eventos Semanais',
    description:
    'Participe de nossos encontros semanais, torneios e noites de jogos temáticas.'
  }];

  return (
    <section className="py-20 bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-outfit mb-4">
            Sobre a Koinonia
          </h2>
          <div className="h-1 w-20 bg-mint mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mais do que apenas jogar, nosso objetivo é criar laços verdadeiros
            através da diversão compartilhada ao redor da mesa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.5
            }}
            className="bg-card-bg p-8 rounded-xl border border-white/5 hover:border-mint/30 transition-colors duration-300">

              <div className="bg-navy w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white font-outfit mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}