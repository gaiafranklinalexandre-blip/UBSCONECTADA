import React from 'react';
import './Pagination.css';

export interface PaginationProps {
  /** Página atual (1-indexada) */
  page: number;
  /** Total de páginas disponíveis */
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Texto exibido à esquerda (ex: "Exibindo 1 a 5 de 5 resultados") */
  summary?: string;
  /** Itens por página, exibido no seletor à direita */
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageSizeChange?: (size: number) => void;
}

/** Controle de paginação: resumo, botões «‹ page ›» e seletor de itens por página. */
export function Pagination({ page, totalPages, onPageChange, summary, pageSize, pageSizeOptions, onPageSizeChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="ds-pagination">
      {summary && <span className="ds-pagination__summary">{summary}</span>}
      <div className="ds-pagination__controls">
        <button type="button" className="ds-pagination__nav" onClick={() => onPageChange(1)} disabled={page <= 1}>«</button>
        <button type="button" className="ds-pagination__nav" onClick={() => onPageChange(page - 1)} disabled={page <= 1}>‹</button>
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            className={`ds-pagination__page${p === page ? ' ds-pagination__page--active' : ''}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}
        <button type="button" className="ds-pagination__nav" onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>›</button>
        <button type="button" className="ds-pagination__nav" onClick={() => onPageChange(totalPages)} disabled={page >= totalPages}>»</button>
      </div>
      {pageSizeOptions && (
        <select
          className="ds-pagination__size"
          value={pageSize}
          onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
        >
          {pageSizeOptions.map((s) => (
            <option key={s} value={s}>{s} itens</option>
          ))}
        </select>
      )}
    </div>
  );
}
