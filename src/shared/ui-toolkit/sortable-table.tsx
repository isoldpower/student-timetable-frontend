'use client';

import {useMemo, useState} from 'react';
import {ScheduleCourse} from "@/entities/schedule";

type Column = {
    label: string;
    accessor: keyof ScheduleCourse;
};

type SortableTableProps = {
    begin?: number;
    end?: number;
    data: ScheduleCourse[];
    columns: Column[];
};

export function SortableTable({ data, columns, begin, end }: SortableTableProps) {
    const [sortField, setSortField] = useState<keyof ScheduleCourse>('title');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleSort = (field: keyof ScheduleCourse) => {
        const order = field === sortField && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    const sortedData = useMemo(() => [...data].sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    }), [data, sortOrder, sortField]);

    return (
        <table className="min-w-full">
            <thead>
            <tr>
                {columns.map((column) => (
                    <th
                        key={column.accessor}
                        onClick={() => handleSort(column.accessor)}
                        className="relative text-left cursor-pointer px-4 py-2 border-b-2 border-neutral-200"
                    >
                        {column.label}
                        {sortField === column.accessor && (
                            <span className='absolute pl-2'>
                                {sortOrder === 'asc' ? '▲' : '▼'}
                            </span>
                        )}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {sortedData.slice(begin, end).map((item) => (
                <tr key={item.id}>
                    {columns.map((column) => (
                        <td key={column.accessor} className="px-4 py-2 border-b border-neutral-200">
                            {item[column.accessor]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}