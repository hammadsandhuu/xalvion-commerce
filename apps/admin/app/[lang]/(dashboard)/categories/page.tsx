"use client";

import React, { useState, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/Tables/data-table/data-table";
import { useGetCategoriesQuery } from "@/hooks/api/use-categories-api";
import {
    categoryColumns,
    getCategoryFilterColumns,
} from "@/components/Tables/data-table/columns/category-columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
  

export default function CategoriesPage() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const { data, isLoading, isFetching, error } = useGetCategoriesQuery({
        page,
        limit: pageSize,
    });

    const categories = data?.data?.categories ?? [];
    const filters = getCategoryFilterColumns(categories);
    const pagination = data?.data?.pagination;

    const handlePageChange = useCallback((p: number) => setPage(p), []);
    const handlePageSizeChange = useCallback((s: number) => {
        setPageSize(s);
        setPage(1);
    }, []);

    return (
        <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <CardTitle>Product Categories</CardTitle>
                    <CardDescription>
                        Manage all main product categories. Each category helps organize
                        products for improved navigation and filtering.
                    </CardDescription>
                </div>
                <Button className="mt-4 sm:mt-0" size="sm">
                    <Plus className="h-4 w-4 mr-2" /> Add Category
                </Button>
            </CardHeader>
            <CardContent>
                <DataTable
                    columns={categoryColumns}
                    data={categories}
                    searchKey="name"
                    filterColumns={filters}
                    loading={isLoading}
                    fetching={isFetching}
                    error={error ? "Failed to fetch categories" : null}
                    pagination={pagination}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                />
            </CardContent>
        </Card>
    );
}
