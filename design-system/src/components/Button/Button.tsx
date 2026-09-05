import React from 'react';
import './Button.css';

export type ButtonVariant = 'solido' | 'contorno' | 'alerta' | 'texto';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  /** Estilo visual do botão */
  variant?: ButtonVariant;
  children: React.ReactNode;
}

/**
 * Botão em pílula do sistema — `solido` (azul, ação primária, ex: "Aplicar filtro"),
 * `contorno` (borda azul, ex: "Limpar filtros"), `alerta` (vermelho, ex: downloads
 * prioritários) e `texto` (link discreto, sem fundo).
 */
export function Button({ variant = 'solido', children, ...rest }: ButtonProps) {
  return (
    <button type="button" className={`ds-button ds-button--${variant}`} {...rest}>
      {children}
    </button>
  );
}
