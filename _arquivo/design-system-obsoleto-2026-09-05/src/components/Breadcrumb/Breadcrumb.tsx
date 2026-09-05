import React from 'react';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  /** Itens do trilho, do mais geral ao atual (o último item nunca é um link) */
  items: BreadcrumbItem[];
  /** Mostra o ícone de casa antes do primeiro item */
  showHomeIcon?: boolean;
}

/** Trilho de navegação (🏠 › Perfil de acesso › Gerência APS › ...) usado no topo de toda página do sistema. */
export function Breadcrumb({ items, showHomeIcon = true }: BreadcrumbProps) {
  return (
    <nav className="ds-breadcrumb" aria-label="breadcrumb">
      {showHomeIcon && <span className="ds-breadcrumb__home" aria-hidden="true">🏠</span>}
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="ds-breadcrumb__segment">
            <span className="ds-breadcrumb__sep" aria-hidden="true">›</span>
            {isLast || !item.href ? (
              <span className="ds-breadcrumb__current">{item.label}</span>
            ) : (
              <a className="ds-breadcrumb__link" href={item.href}>{item.label}</a>
            )}
          </span>
        );
      })}
    </nav>
  );
}
