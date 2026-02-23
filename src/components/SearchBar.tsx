import React from 'react';
import { SearchIcon } from 'lucide-react';
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}
export function SearchBar({
  value,
  onChange
}: SearchBarProps) {
  return <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-mint" aria-hidden="true" />
      </div>
      <input type="text" className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-full leading-5 bg-card-bg text-white placeholder-gray-400 focus:outline-none focus:bg-navy focus:ring-2 focus:ring-mint focus:border-transparent sm:text-sm transition-all duration-200" placeholder="Buscar jogos..." value={value} onChange={(e) => onChange(e.target.value)} />

    </div>;
}