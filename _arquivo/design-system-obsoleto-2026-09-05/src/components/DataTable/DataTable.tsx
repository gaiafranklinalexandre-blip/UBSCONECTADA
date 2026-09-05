import React from 'react';
import './DataTable.css';

export interface DataTableColumn<T> {
  /** Chave única da coluna */
  key: string;
  /** Texto do cabeçalho */
  header: string;
  /** Renderização customizada da célula; por padrão exibe `row[key]` */
  render?: (row: T) => React.ReactNode;
  /** Alinhamento do conteúdo da coluna */
  align?: 'left' | 'center' | 'right';
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  rows: T[];
  /** Extrai uma chave React única de cada linha */
  rowKey: (row: T) => string | number;
  /** Mensagem exibida quando `rows` está vazio */
  emptyMessage?: string;
}

/**
 * Tabela de dados com cabeçalho destacado e colunas configuráveis. Combine com
 * `Pagination` abaixo do componente para paginar os resultados (visto em "Solicitações"
 * e "Relatório de credenciamento" do Gerência APS).
 */
export function DataTable<T>({ columns, rows, rowKey, emptyMessage = 'Nenhum resultado encontrado.' }: DataTableProps<T>) {
  if (rows.length === 0) {
    return <div className="ds-data-table__empty">{emptyMessage}</div>;
  }
  return (
    <table className="ds-data-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} style={{ textAlign: col.align ?? 'left' }}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={rowKey(row)}>
            {columns.map((col) => (
              <td key={col.key} style={{ textAlign: col.align ?? 'left' }}>
                {col.render ? col.render(row) : String((row as Record<string, unknown>)[col.key] ?? '—')}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
