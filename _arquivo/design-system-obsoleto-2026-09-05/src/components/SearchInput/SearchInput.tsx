import React from 'react';
import './SearchInput.css';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/** Campo de busca em pílula com ícone de lupa (ex: "O que você procura?" no header institucional). */
export function SearchInput({ value, onChange, placeholder = 'O que você procura?' }: SearchInputProps) {
  return (
    <div className="ds-search-input">
      <input
        type="text"
        className="ds-search-input__field"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="ds-search-input__icon" aria-hidden="true">🔍</span>
    </div>
  );
}
