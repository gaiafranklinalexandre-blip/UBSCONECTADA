import React from 'react';
import './SectionTitle.css';

export interface SectionTitleProps {
  /** Texto do título, centralizado com uma linha horizontal de cada lado (ex: "Módulos") */
  children: React.ReactNode;
}

/** Cabeçalho de seção centralizado, flanqueado por uma linha horizontal — usado para separar
 * blocos de conteúdo dentro de uma página (ex: "Módulos", "Panorama geral do Brasil"). */
export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="ds-section-title">
      <span className="ds-section-title__line" aria-hidden="true" />
      <h2 className="ds-section-title__text">{children}</h2>
      <span className="ds-section-title__line" aria-hidden="true" />
    </div>
  );
}
