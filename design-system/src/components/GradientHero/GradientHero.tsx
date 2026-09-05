import React from 'react';
import './GradientHero.css';

export interface GradientHeroProps {
  /** Rótulo pequeno acima do título (ex: "Siaps - Sistema de Informação para a Atenção Primária à Saúde") */
  eyebrow?: string;
  /** Título em destaque, exibido em branco sobre o gradiente */
  title: string;
  /** Conteúdo livre abaixo do título — normalmente uma barra de busca/filtro */
  children?: React.ReactNode;
}

/**
 * Hero em gradiente azul com padrão decorativo de montanhas, usado como cabeçalho de
 * destaque de um componente/módulo (visto nas telas do sistema SIAPS). Diferente do
 * BrandBanner (institucional, fundo claro), este é para o topo de uma tela específica.
 */
export function GradientHero({ eyebrow, title, children }: GradientHeroProps) {
  return (
    <div className="ds-gradient-hero">
      <svg className="ds-gradient-hero__pattern" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 90 L60 50 L110 80 L170 30 L230 70 L290 20 L350 60 L400 40 L400 120 L0 120 Z" fill="rgba(255,255,255,0.10)" />
        <path d="M0 100 L80 70 L140 95 L210 55 L270 90 L340 50 L400 85 L400 120 L0 120 Z" fill="rgba(255,255,255,0.14)" />
      </svg>
      <div className="ds-gradient-hero__content">
        {eyebrow && (
          <div className="ds-gradient-hero__eyebrow">
            <span className="ds-gradient-hero__eyebrow-badge" aria-hidden="true">◆</span>
            {eyebrow}
          </div>
        )}
        <h2 className="ds-gradient-hero__title">{title}</h2>
        {children && <div className="ds-gradient-hero__body">{children}</div>}
      </div>
    </div>
  );
}
