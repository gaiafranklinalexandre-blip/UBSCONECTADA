import React, { useEffect, useRef, useState } from 'react';
import './SearchableSelect.css';

export interface SearchableOption {
  value: string;
  label: string;
  /** Rótulo curto opcional exibido à direita da opção (ex: a sigla da UF) */
  sublabel?: string;
}

export interface SearchableSelectProps {
  options: SearchableOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  /** Máximo de opções exibidas na lista antes de pedir para refinar a busca */
  maxVisible?: number;
}

/**
 * Combobox pesquisável: mostra a lista completa ao focar, filtra por texto conforme
 * digita, e fecha ao clicar fora. Baseado no seletor de município do UBS Conectadas.
 */
export function SearchableSelect({ options, value, onChange, placeholder = 'Buscar...', maxVisible = 200 }: SearchableSelectProps) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => setQuery(value), [value]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const normalized = query.trim().toLowerCase();
  const matches = normalized
    ? options.filter((o) => o.label.toLowerCase().includes(normalized))
    : options;
  const visible = matches.slice(0, maxVisible);
  const excedente = matches.length - visible.length;

  function select(opt: SearchableOption) {
    setQuery(opt.label);
    onChange(opt.value);
    setOpen(false);
  }

  return (
    <div className="ds-searchable-select" ref={rootRef}>
      <input
        type="text"
        className="ds-searchable-select__field"
        placeholder={placeholder}
        value={query}
        onFocus={() => setOpen(true)}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
      />
      {open && (
        <div className="ds-searchable-select__list">
          {visible.length === 0 && <div className="ds-searchable-select__empty">Nenhum resultado encontrado</div>}
          {visible.map((opt) => (
            <div key={opt.value} className="ds-searchable-select__option" onClick={() => select(opt)}>
              <span className="ds-searchable-select__option-label">{opt.label}</span>
              {opt.sublabel && <span className="ds-searchable-select__option-sub">{opt.sublabel}</span>}
            </div>
          ))}
          {excedente > 0 && (
            <div className="ds-searchable-select__empty">+{excedente} resultado(s) — digite para refinar a busca</div>
          )}
        </div>
      )}
    </div>
  );
}
