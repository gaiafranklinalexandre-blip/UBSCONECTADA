import React from 'react';
import './ModuleCard.css';

export interface ModuleCardProps {
  /** Ícone/emoji exibido dentro do círculo à esquerda */
  icon?: React.ReactNode;
  /** Título do módulo (ex: "Credenciamento") */
  title: string;
  /** Descrição curta do módulo */
  description: string;
  /** Quando true, exibe o card em estado "em breve" (esmaecido, não clicável) */
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Card de módulo em grid: barra colorida à esquerda, ícone circular, título + descrição
 * e um chevron indicando navegação. Usado nas telas de seleção de módulo do sistema.
 */
export function ModuleCard({ icon, title, description, disabled, onClick }: ModuleCardProps) {
  return (
    <button
      type="button"
      className={`ds-module-card${disabled ? ' ds-module-card--disabled' : ''}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span className="ds-module-card__bar" aria-hidden="true" />
      <span className="ds-module-card__icon" aria-hidden="true">{icon ?? '▦'}</span>
      <span className="ds-module-card__body">
        <span className="ds-module-card__title">{title}</span>
        <span className="ds-module-card__desc">{description}</span>
      </span>
      <span className="ds-module-card__chevron" aria-hidden="true">›</span>
    </button>
  );
}
