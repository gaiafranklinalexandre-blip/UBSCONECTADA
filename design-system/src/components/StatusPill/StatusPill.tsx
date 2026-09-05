import React from 'react';
import './StatusPill.css';

export type StatusTone = 'verde' | 'amarelo' | 'vermelho' | 'azul' | 'neutro';

export interface StatusPillProps {
  /** Tom de cor do farol — verde=disponível/ok, amarelo=atenção/em andamento, vermelho=indisponível/erro */
  tone: StatusTone;
  /** Texto exibido dentro da pílula (ex: "Disponível", "Sem saldo", "Em preenchimento") */
  children: React.ReactNode;
}

/** Pílula de status (farol) usada em tabelas, cards de estratégia e linhas de acordeão. */
export function StatusPill({ tone, children }: StatusPillProps) {
  return <span className={`ds-status-pill ds-status-pill--${tone}`}>{children}</span>;
}
