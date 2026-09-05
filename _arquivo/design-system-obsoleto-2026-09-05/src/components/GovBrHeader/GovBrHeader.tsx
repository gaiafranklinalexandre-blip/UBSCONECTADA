import React from 'react';
import './GovBrHeader.css';

export interface UtilityLink {
  label: string;
  href?: string;
}

export interface GovBrHeaderProps {
  /** Nome do órgão exibido ao lado do logo (ex: "Ministério da Saúde") */
  orgName: string;
  /** Links utilitários no canto superior direito (ex: "Link de acesso 1") */
  utilityLinks?: UtilityLink[];
  /** Rótulo do botão de acesso quando o usuário não está logado */
  loginLabel?: string;
  /** Nome do usuário logado — quando presente, substitui o botão de login por um menu de usuário */
  userName?: string;
  onLoginClick?: () => void;
}

/**
 * Cabeçalho institucional padrão gov.br: logo + nome do órgão, links utilitários,
 * ícones de acessibilidade/suporte e acesso do usuário. Baseado nas capturas de
 * referência do sistema "Gerência APS" (Ministério da Saúde / SAPS).
 *
 * A marca "gov.br" é reproduzida tipograficamente (sem o arquivo oficial do brasão) —
 * troque o conteúdo de `.ds-govbr-header__logo` pelo SVG oficial quando disponível.
 */
export function GovBrHeader({ orgName, utilityLinks = [], loginLabel = 'Entrar', userName, onLoginClick }: GovBrHeaderProps) {
  return (
    <header className="ds-govbr-header">
      <div className="ds-govbr-header__brand">
        <span className="ds-govbr-header__logo" aria-hidden="true">
          <span className="ds-govbr-header__logo-gov">gov</span>
          <span className="ds-govbr-header__logo-dot">.</span>
          <span className="ds-govbr-header__logo-br">br</span>
        </span>
        <span className="ds-govbr-header__divider" aria-hidden="true" />
        <span className="ds-govbr-header__org">{orgName}</span>
      </div>
      <div className="ds-govbr-header__actions">
        {utilityLinks.length > 0 && (
          <nav className="ds-govbr-header__links" aria-label="Links de acesso">
            {utilityLinks.map((l) => (
              <a key={l.label} href={l.href ?? '#'} className="ds-govbr-header__link">{l.label}</a>
            ))}
          </nav>
        )}
        <div className="ds-govbr-header__icons" aria-hidden="true">
          <span className="ds-govbr-header__icon">📊</span>
          <span className="ds-govbr-header__icon">🎧</span>
          <span className="ds-govbr-header__icon">💬</span>
          <span className="ds-govbr-header__icon">◐</span>
        </div>
        {userName ? (
          <button type="button" className="ds-govbr-header__user">👤 {userName} ⌄</button>
        ) : (
          <button type="button" className="ds-govbr-header__login" onClick={onLoginClick}>👤 {loginLabel}</button>
        )}
      </div>
    </header>
  );
}
