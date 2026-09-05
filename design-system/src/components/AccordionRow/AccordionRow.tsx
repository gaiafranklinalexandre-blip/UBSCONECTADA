import React, { useState } from 'react';
import './AccordionRow.css';

export interface AccordionRowProps {
  /** Cor da barra vertical à esquerda (farol da linha) */
  tone: 'verde' | 'amarelo' | 'vermelho';
  /** Rótulo principal da linha (ex: "eSF") */
  label: string;
  /** Elemento de status exibido à direita do rótulo (normalmente um StatusPill) */
  status?: React.ReactNode;
  /** Conteúdo revelado ao expandir a linha */
  children?: React.ReactNode;
  /** Estado inicial (controlado externamente se `expanded`/`onToggle` forem passados) */
  defaultExpanded?: boolean;
  expanded?: boolean;
  onToggle?: (expanded: boolean) => void;
}

/**
 * Linha expansível com barra de cor à esquerda — usada para listar estratégias/itens com
 * um status (pílula) e um chevron que revela detalhes ao clicar (padrão "Estratégias para
 * Credenciamento" do Gerência APS).
 */
export function AccordionRow({ tone, label, status, children, defaultExpanded = false, expanded, onToggle }: AccordionRowProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isControlled = expanded !== undefined;
  const isExpanded = isControlled ? expanded : internalExpanded;

  function toggle() {
    const next = !isExpanded;
    if (!isControlled) setInternalExpanded(next);
    onToggle?.(next);
  }

  return (
    <div className={`ds-accordion-row ds-accordion-row--${tone}`}>
      <button type="button" className="ds-accordion-row__header" onClick={toggle} aria-expanded={isExpanded}>
        <span className="ds-accordion-row__bar" aria-hidden="true" />
        <span className="ds-accordion-row__label">{label}</span>
        <span className="ds-accordion-row__right">
          {status}
          <span className={`ds-accordion-row__chevron${isExpanded ? ' ds-accordion-row__chevron--open' : ''}`} aria-hidden="true">⌄</span>
        </span>
      </button>
      {isExpanded && children && <div className="ds-accordion-row__panel">{children}</div>}
    </div>
  );
}
