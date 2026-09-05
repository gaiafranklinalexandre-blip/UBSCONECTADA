import React from 'react';
import './NotificationList.css';

export type NotificationTone = 'alerta' | 'sucesso' | 'info';

export interface NotificationItem {
  tone: NotificationTone;
  /** Texto da notificação — pode incluir markup simples, ex: "<b>Credenciamento suspenso:</b> Equipe X" */
  text: React.ReactNode;
  /** Colunas de período extras exibidas à direita (ex: ["12/02/25 - 30/06/25"]) */
  periods?: string[];
}

export interface NotificationListProps {
  title?: string;
  items: NotificationItem[];
}

const ICONS: Record<NotificationTone, string> = { alerta: '⚠', sucesso: '✓', info: 'ℹ' };

/** Lista de notificações com ícone de status colorido e colunas de período — usada no painel de avisos do sistema. */
export function NotificationList({ title = 'Notificações', items }: NotificationListProps) {
  return (
    <div className="ds-notification-list">
      {title && <div className="ds-notification-list__title">{title}</div>}
      {items.map((item, i) => (
        <div key={i} className="ds-notification-list__row">
          <span className={`ds-notification-list__icon ds-notification-list__icon--${item.tone}`} aria-hidden="true">
            {ICONS[item.tone]}
          </span>
          <span className="ds-notification-list__text">{item.text}</span>
          {item.periods?.map((p, j) => (
            <span key={j} className="ds-notification-list__period">{p}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
