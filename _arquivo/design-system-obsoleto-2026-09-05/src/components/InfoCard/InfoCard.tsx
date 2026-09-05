import React from 'react';
import './InfoCard.css';

export interface InfoCardProps {
  /** Ícone/emoji exibido acima do título */
  icon?: React.ReactNode;
  /** Título do card (ex: "Materiais de Apoio") */
  title: string;
  /** Descrição do card */
  description: string;
  /** Quando presente, o card inteiro vira clicável */
  onClick?: () => void;
}

/**
 * Card informativo com decoração diagonal no canto superior direito — usado para links de
 * apoio/documentação (ex: "Materiais de Apoio", "Relatórios Públicos").
 */
export function InfoCard({ icon, title, description, onClick }: InfoCardProps) {
  return (
    <div
      className="ds-info-card"
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
    >
      <span className="ds-info-card__corner" aria-hidden="true" />
      <span className="ds-info-card__icon" aria-hidden="true">{icon ?? '📄'}</span>
      <span className="ds-info-card__title">{title}</span>
      <span className="ds-info-card__desc">{description}</span>
    </div>
  );
}
