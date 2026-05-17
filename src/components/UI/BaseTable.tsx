import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface BaseTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T, any>[];
  pageSize?: number;
}

export function BaseTable<T extends object>({
  data,
  columns,
  pageSize = 10,
}: BaseTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });

  return (
    <div className="space-y-4">
      <div className="portal-card p-0 overflow-hidden shadow-xl shadow-black/[0.02]">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-off/50 border-b border-gray-100">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-8 py-5 text-[10px] font-extrabold uppercase tracking-widest text-muted"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-gray-50">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-off/30 transition-colors">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-8 py-6 text-sm font-medium text-black">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between px-2">
        <div className="text-[10px] font-bold text-muted uppercase tracking-widest">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 disabled:opacity-30 hover:border-gold transition-all"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 disabled:opacity-30 hover:border-gold transition-all"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
