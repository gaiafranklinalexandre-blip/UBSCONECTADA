import React from 'react';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  /** Rótulo exibido acima do campo (opcional) */
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/** Select estilizado em pílula, usado nos painéis de filtro do sistema (UF, Estratégia, etc.). */
export function Select({ label, options, value, onChange, placeholder }: SelectProps) {
  return (
    <label className="ds-select">
      {label && <span className="ds-select__label">{label}</span>}
      <select className="ds-select__input" value={value} onChange={(e) => onChange(e.target.value)}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </label>
  );
}
