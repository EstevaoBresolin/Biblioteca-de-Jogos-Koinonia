import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { SearchBar } from "../components/SearchBar";
import { FilterToggle } from "../components/FilterToggle";
import { GameCard, Game } from "../components/GameCard";
import { AboutSection } from "../components/AboutSection";
import { GameDetailModal } from "../components/GameDetailModal";
const SAMPLE_GAMES: Game[] = [{
  id: 1,
  title: "Agrícola",
  category: "Estratégia",
  difficulty: "Difícil",
  players: "1-5",
  time: "30-150 min",
  image: "https://cf.geekdo-images.com/thumb/pic831744.jpg"
}, {
  id: 2,
  title: "Bang! Dice Game",
  category: "Party",
  difficulty: "Fácil",
  players: "3-6",
  time: "15-30 min",
  image: "https://cf.geekdo-images.com/thumb/pic1383155.jpg"
}, {
  id: 3,
  title: "Bohnanza",
  category: "Familiar",
  difficulty: "Fácil",
  players: "2-7",
  time: "45-60 min",
  image: "https://cf.geekdo-images.com/thumb/pic5765222.jpg"
}, {
  id: 4,
  title: "Carcassonne",
  category: "Estratégia",
  difficulty: "Fácil",
  players: "2-5",
  time: "30-45 min",
  image: "https://cf.geekdo-images.com/thumb/pic2337577.jpg"
}, {
  id: 5,
  title: "Catan",
  category: "Estratégia",
  difficulty: "Médio",
  players: "3-4",
  time: "60-120 min",
  image: "https://cf.geekdo-images.com/thumb/pic2419375.jpg"
}, {
  id: 6,
  title: "Coup",
  category: "Dedução",
  difficulty: "Fácil",
  players: "2-6",
  time: "15 min",
  image: "https://cf.geekdo-images.com/thumb/pic2016054.jpg"
}, {
  id: 7,
  title: "Deception: Murder in Hong Kong",
  category: "Dedução",
  difficulty: "Médio",
  players: "4-12",
  time: "20 min",
  image: "https://cf.geekdo-images.com/thumb/pic2764599.jpg"
}, {
  id: 8,
  title: "Dixit",
  category: "Party",
  difficulty: "Fácil",
  players: "3-6",
  time: "30 min",
  image: "https://cf.geekdo-images.com/thumb/pic3264707.jpg"
}, {
  id: 9,
  title: "Duna: Imperium",
  category: "Estratégia",
  difficulty: "Difícil",
  players: "1-4",
  time: "60-120 min",
  image: "https://cf.geekdo-images.com/thumb/pic5666597.jpg"
}, {
  id: 10,
  title: "Exploding Kittens",
  category: "Party",
  difficulty: "Fácil",
  players: "2-5",
  time: "15 min",
  image: "https://cf.geekdo-images.com/thumb/pic2691976.jpg"
}, {
  id: 11,
  title: "Exploding Kittens: Bem vs. Mal",
  category: "Party",
  difficulty: "Fácil",
  players: "2-4",
  time: "15 min",
  image: "https://cf.geekdo-images.com/thumb/pic7976523.jpg"
}, {
  id: 12,
  title: "Fantasma Blitz",
  category: "Familiar",
  difficulty: "Fácil",
  players: "2-8",
  time: "20 min",
  image: "https://cf.geekdo-images.com/thumb/pic1249093.jpg"
}, {
  id: 13,
  title: "High Society",
  category: "Familiar",
  difficulty: "Fácil",
  players: "3-5",
  time: "15-30 min",
  image: "https://cf.geekdo-images.com/thumb/pic3433543.jpg"
}, {
  id: 14,
  title: "Imagem e Ação 2",
  category: "Party",
  difficulty: "Fácil",
  players: "4-16",
  time: "30-60 min",
  image: "https://cf.geekdo-images.com/thumb/pic1534148.jpg"
}, {
  id: 15,
  title: "Jaipur",
  category: "Estratégia",
  difficulty: "Fácil",
  players: "2",
  time: "30 min",
  image: "https://cf.geekdo-images.com/thumb/pic1488386.jpg"
}, {
  id: 16,
  title: "Jenga",
  category: "Familiar",
  difficulty: "Fácil",
  players: "1-8",
  time: "20 min",
  image: "https://cf.geekdo-images.com/thumb/pic1449790.jpg"
}, {
  id: 17,
  title: "Jungle Speed",
  category: "Party",
  difficulty: "Fácil",
  players: "2-10",
  time: "10-20 min",
  image: "https://cf.geekdo-images.com/thumb/pic1264032.jpg"
}, {
  id: 18,
  title: "Lobisomem por uma noite",
  category: "Dedução",
  difficulty: "Fácil",
  players: "3-10",
  time: "10 min",
  image: "https://cf.geekdo-images.com/thumb/pic2355823.jpg"
}, {
  id: 19,
  title: "Love Letter (2ª Edição)",
  category: "Dedução",
  difficulty: "Fácil",
  players: "2-6",
  time: "20 min",
  image: "https://cf.geekdo-images.com/thumb/pic1401448.jpg"
}, {
  id: 20,
  title: "Munchkin",
  category: "Party",
  difficulty: "Médio",
  players: "3-6",
  time: "60-120 min",
  image: "https://cf.geekdo-images.com/thumb/pic396379.jpg"
}, {
  id: 21,
  title: "Paleo",
  category: "Cooperativo",
  difficulty: "Médio",
  players: "2-4",
  time: "45-60 min",
  image: "https://cf.geekdo-images.com/thumb/pic5674958.jpg"
}, {
  id: 22,
  title: "Poker",
  category: "Estratégia",
  difficulty: "Médio",
  players: "2-10",
  time: "60-120 min",
  image: "https://cf.geekdo-images.com/thumb/pic1534148.jpg"
}, {
  id: 23,
  title: "Qual é o Seu Meme?",
  category: "Party",
  difficulty: "Fácil",
  players: "3-8",
  time: "30-60 min",
  image: "https://cf.geekdo-images.com/thumb/pic3536616.jpg"
}, {
  id: 24,
  title: "Quest",
  category: "Dedução",
  difficulty: "Médio",
  players: "4-10",
  time: "60 min",
  image: "https://cf.geekdo-images.com/thumb/pic1998928.jpg"
}, {
  id: 25,
  title: "Ramen Fury",
  category: "Familiar",
  difficulty: "Fácil",
  players: "2-5",
  time: "20-40 min",
  image: "https://cf.geekdo-images.com/thumb/pic4325143.jpg"
}, {
  id: 26,
  title: "Rummikub Joy",
  category: "Familiar",
  difficulty: "Fácil",
  players: "2-4",
  time: "45-60 min",
  image: "https://cf.geekdo-images.com/thumb/pic188674.jpg"
}, {
  id: 27,
  title: "Saboteur",
  category: "Dedução",
  difficulty: "Fácil",
  players: "3-10",
  time: "30 min",
  image: "https://cf.geekdo-images.com/thumb/pic2263699.jpg"
}, {
  id: 28,
  title: "Sequence",
  category: "Estratégia",
  difficulty: "Fácil",
  players: "2-12",
  time: "30-60 min",
  image: "https://cf.geekdo-images.com/thumb/pic1024525.jpg"
}, {
  id: 29,
  title: "Spicy",
  category: "Party",
  difficulty: "Fácil",
  players: "2-6",
  time: "20 min",
  image: "https://cf.geekdo-images.com/thumb/pic6904055.jpg"
}, {
  id: 30,
  title: "Splendor: Marvel",
  category: "Estratégia",
  difficulty: "Médio",
  players: "2-4",
  time: "30 min",
  image: "https://cf.geekdo-images.com/thumb/pic5765222.jpg"
}, {
  id: 31,
  title: "Taco Gato Cabra Queijo Pizza",
  category: "Party",
  difficulty: "Fácil",
  players: "2-8",
  time: "10-20 min",
  image: "https://cf.geekdo-images.com/thumb/pic4499136.jpg"
}, {
  id: 32,
  title: "Terraforming Mars",
  category: "Estratégia",
  difficulty: "Difícil",
  players: "1-5",
  time: "120-180 min",
  image: "https://cf.geekdo-images.com/thumb/pic3536616.jpg"
}, {
  id: 33,
  title: "The Mind Extreme",
  category: "Cooperativo",
  difficulty: "Médio",
  players: "2-4",
  time: "20 min",
  image: "https://cf.geekdo-images.com/thumb/pic4249584.jpg"
}, {
  id: 34,
  title: "The Resistance",
  category: "Dedução",
  difficulty: "Médio",
  players: "5-10",
  time: "30 min",
  image: "https://cf.geekdo-images.com/thumb/pic1500155.jpg"
}, {
  id: 35,
  title: "The Resistance: Avalon",
  category: "Dedução",
  difficulty: "Médio",
  players: "5-10",
  time: "30 min",
  image: "https://cf.geekdo-images.com/thumb/pic1998928.jpg"
}, {
  id: 36,
  title: "The White Castle",
  category: "Estratégia",
  difficulty: "Médio",
  players: "1-4",
  time: "80 min",
  image: "https://cf.geekdo-images.com/thumb/pic7754663.jpg"
}, {
  id: 37,
  title: "Ticket to Ride: Europa",
  category: "Familiar",
  difficulty: "Fácil",
  players: "2-5",
  time: "45-75 min",
  image: "https://cf.geekdo-images.com/thumb/pic158395.jpg"
}, {
  id: 38,
  title: "Trio",
  category: "Party",
  difficulty: "Fácil",
  players: "3-6",
  time: "15 min",
  image: "https://cf.geekdo-images.com/thumb/pic7534585.jpg"
}, {
  id: 39,
  title: "Uno Minimalista",
  category: "Familiar",
  difficulty: "Fácil",
  players: "2-10",
  time: "30 min",
  image: "https://cf.geekdo-images.com/thumb/pic5765222.jpg"
}, {
  id: 40,
  title: "Uno: All Wild!",
  category: "Familiar",
  difficulty: "Fácil",
  players: "2-10",
  time: "30 min",
  image: "https://cf.geekdo-images.com/thumb/pic6904055.jpg"
}, {
  id: 41,
  title: "Wyrmspan",
  category: "Estratégia",
  difficulty: "Médio",
  players: "1-5",
  time: "90 min",
  image: "https://cf.geekdo-images.com/thumb/pic8147135.jpg"
}, {
  id: 42,
  title: "Zombicide",
  category: "Cooperativo",
  difficulty: "Médio",
  players: "1-6",
  time: "60-180 min",
  image: "https://cf.geekdo-images.com/thumb/pic1468386.jpg"
}, {
  id: 43,
  title: "O Senhor dos Anéis: Duelo pela Terra Média",
  category: "Estratégia",
  difficulty: "Médio",
  players: "2",
  time: "30-60 min",
  image: "https://cf.geekdo-images.com/thumb/pic7534585.jpg"
}, {
  id: 44,
  title: "Survive: The Island",
  category: "Estratégia",
  difficulty: "Médio",
  players: "2-4",
  time: "45 min",
  image: "https://cf.geekdo-images.com/thumb/pic1032841.jpg"
}];
const CATEGORIES = ["Todos", "Estratégia", "Familiar", "Party", "Cooperativo", "Dedução"];
export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const filteredGames = SAMPLE_GAMES.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || game.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="min-h-screen bg-navy text-white font-inter selection:bg-mint selection:text-navy">
      {/* <Navbar /> */}

      <main>
        <Hero />

        {/* Game Collection Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="games">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold font-outfit mb-2">
                Nossa Coleção
              </h2>
              <p className="text-gray-400">
                Explore os jogos disponíveis na comunidade
              </p>
            </div>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>

          <div className="mb-12">
            <FilterToggle categories={CATEGORIES} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredGames.map((game) => <GameCard key={game.id} game={game} onDetailsClick={setSelectedGame} />)}
            </AnimatePresence>
          </motion.div>

          {filteredGames.length === 0 && <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                Nenhum jogo encontrado com esses critérios.
              </p>
              <button onClick={() => {
            setSearchTerm("");
            setActiveCategory("Todos");
          }} className="mt-4 text-mint hover:underline">
                Limpar filtros
              </button>
            </div>}
        </section>

        <AboutSection />
      </main>

      <footer className="bg-navy border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Koinonia Board Games. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>

      <GameDetailModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>;
}