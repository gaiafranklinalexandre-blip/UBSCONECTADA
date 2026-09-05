import React from 'react';
import './Footer.css';

export interface FooterProps {
  /** Texto centralizado do rodapé (ex: "Ministério da Saúde | SAPS @2023") */
  text: string;
}

/** Rodapé institucional navy de largura total, usado no fim de toda página do sistema. */
export function Footer({ text }: FooterProps) {
  return (
    <footer className="ds-footer">
      <span className="ds-footer__text">{text}</span>
    </footer>
  );
}
