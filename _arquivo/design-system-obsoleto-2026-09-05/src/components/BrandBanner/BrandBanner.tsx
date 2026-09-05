import React from 'react';
import './BrandBanner.css';

export interface BrandBannerProps {
  /** Nome do sistema exibido em destaque (ex: "Gerencia APS") */
  title: string;
  /** Texto institucional exibido ao lado do título */
  description: React.ReactNode;
}

/**
 * Banner de marca institucional: gráfico decorativo (textura diagonal + arco verde +
 * pontilhado) ao lado do nome do sistema e um texto descritivo, separados por uma barra
 * vertical verde. Reproduz o cabeçalho visto no topo das páginas do "Gerência APS".
 */
export function BrandBanner({ title, description }: BrandBannerProps) {
  return (
    <div className="ds-brand-banner">
      <div className="ds-brand-banner__graphic" aria-hidden="true">
        <div className="ds-brand-banner__lines" />
        <svg className="ds-brand-banner__swoosh" viewBox="0 0 100 60" width="72" height="44">
          <path d="M8 8 Q8 50 60 50" fill="none" stroke="var(--ds-brand-green)" strokeWidth="9" strokeLinecap="round" />
        </svg>
        <div className="ds-brand-banner__dots">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>
      <h2 className="ds-brand-banner__title">{title}</h2>
      <span className="ds-brand-banner__divider" aria-hidden="true" />
      <p className="ds-brand-banner__desc">{description}</p>
    </div>
  );
}
