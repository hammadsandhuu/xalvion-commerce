"use client";

import React, { useState, useCallback } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/Tables/data-table/data-table";
import { subCategoryColumns, getSubCategoryFilterColumns } from "@/components/Tables/data-table/columns/subcategory-columns";
import { useGetSubCategoriesQuery } from "@/hooks/api/use-subcategories-api";

export default function SubCategoriesPage() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const { data, isLoading, isFetching, error } = useGetSubCategoriesQuery({
        page,
        limit: pageSize,
    });

    const subCategories = data?.data?.subCategories ?? [];
    const filters = getSubCategoryFilterColumns(subCategories);
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
                    <CardTitle>Subcategory Management</CardTitle>
                    <CardDescription>
                        Manage subcategories and their associated parent categories. Each subcategory helps organize products more precisely.
                    </CardDescription>
                </div>
                <Button className="mt-4 sm:mt-0" size="sm">
                    <Plus className="h-4 w-4 mr-2" /> Add Subcategory
                </Button>
            </CardHeader>
            <CardContent>
                <DataTable
                    columns={subCategoryColumns}
                    data={subCategories}
                    searchKey="name"
                    filterColumns={filters}
                    loading={isLoading}
                    fetching={isFetching}
                    error={error ? "Failed to fetch subcategories" : null}
                    pagination={pagination}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                />
            </CardContent>
        </Card>
    );
}
