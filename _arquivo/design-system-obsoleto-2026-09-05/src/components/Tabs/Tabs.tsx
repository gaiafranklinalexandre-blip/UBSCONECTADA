import React from 'react';
import './Tabs.css';

export interface TabItem {
  key: string;
  label: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

/** Tabs segmentadas em bloco (pílula preenchida = ativa) — usadas para alternar visões de conteúdo (Credenciamento / Adesão / Financiamento / Calendário CNES). */
export function Tabs({ tabs, activeKey, onChange }: TabsProps) {
  return (
    <div className="ds-tabs" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          aria-selected={tab.key === activeKey}
          className={`ds-tabs__item${tab.key === activeKey ? ' ds-tabs__item--active' : ''}`}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
