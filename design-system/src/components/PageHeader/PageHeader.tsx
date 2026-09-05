import React from 'react';
import { Breadcrumb, type BreadcrumbItem } from '../Breadcrumb/Breadcrumb';
import './PageHeader.css';

export interface PageHeaderProps {
  /** Título principal da página (ex: "Gerencia APS - Gestão Municipal") */
  title: string;
  /** Subtítulo opcional abaixo do título (ex: "Município - UF") */
  subtitle?: string;
  /** Itens do trilho de navegação exibido abaixo do título */
  breadcrumb?: BreadcrumbItem[];
  /** Exibe o ícone de menu (☰) antes do título */
  showMenuIcon?: boolean;
  onMenuClick?: () => void;
}

/** Cabeçalho de página: ícone de menu + título + subtítulo + breadcrumb. */
export function PageHeader({ title, subtitle, breadcrumb, showMenuIcon = true, onMenuClick }: PageHeaderProps) {
  return (
    <div className="ds-page-header">
      <div className="ds-page-header__title-row">
        {showMenuIcon && (
          <button type="button" className="ds-page-header__menu" onClick={onMenuClick} aria-label="Abrir menu">☰</button>
        )}
        <div>
          <h1 className="ds-page-header__title">{title}</h1>
          {subtitle && <div className="ds-page-header__subtitle">{subtitle}</div>}
        </div>
      </div>
      {breadcrumb && breadcrumb.length > 0 && (
        <div className="ds-page-header__breadcrumb">
          <Breadcrumb items={breadcrumb} />
        </div>
      )}
    </div>
  );
}
