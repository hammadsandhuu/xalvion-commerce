"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Boxes, Copy, Edit, Eye, Trash2 } from "lucide-react";
import { DataTableRowActions } from "../data-table-row-actions";
import { toast } from "sonner";

// ✅ Subcategory columns definition
export const subCategoryColumns: ColumnDef<any>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Subcategory Name" />
        ),
        cell: ({ row }) => (
            <div className="font-medium truncate max-w-[220px]">
                {row.original.name}
            </div>
        ),
    },
    {
        accessorKey: "parentCategory",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Parent Category" />
        ),
        cell: ({ row }) => (
            <Badge variant="outline" className="capitalize">
                {row.original.parentCategory?.name || "—"}
            </Badge>
        ),
    },
    {
        accessorKey: "description",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Description" />
        ),
        cell: ({ row }) => (
            <p className="text-sm text-muted-foreground line-clamp-2 max-w-[300px]">
                {row.original.description || "No description available"}
            </p>
        ),
    },
    {
        accessorKey: "is_active",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) =>
            row.original.is_active ? (
                <Badge
                    variant="outline"
                    className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                >
                    Active
                </Badge>
            ) : (
                <Badge
                    variant="outline"
                    className="bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                    Inactive
                </Badge>
            ),
    },
    {
        id: "actions",
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title="Actions"
                className="justify-end"
            />
        ),
        cell: ({ row }) => (
            <div className="flex justify-end">
                <DataTableRowActions
                    row={row}
                    actions={[
                        {
                            label: "View Details",
                            icon: <Eye className="h-4 w-4" />,
                            openModal: true,
                        },
                        {
                            label: "Edit",
                            icon: <Edit className="h-4 w-4" />,
                            onClick: (product) => {
                                toast.info(`Editing "${product.name}"`);
                            },
                        },
                        {
                            label: "Duplicate",
                            icon: <Copy className="h-4 w-4" />,
                            onClick: (product) => {
                                toast.success(`Duplicated "${product.name}"`);
                            },
                        },
                        {
                            label: "Delete",
                            icon: <Trash2 className="h-4 w-4 text-destructive" />,
                            destructive: true,
                            confirm: true,
                            successMessage: "Product deleted successfully.",
                            onClick: async (product) => {
                                await new Promise((res) => setTimeout(res, 800));
                                console.log("Deleted product:", product.id);
                            },
                        },
                    ]}
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
];

// ✅ Subcategory filter columns
export function getSubCategoryFilterColumns(subCategories: any[]) {
    const parentCats = Array.from(
        new Set(subCategories.map((s) => s.parentCategory?.name).filter(Boolean))
    );

    return [
        {
            column: "parentCategory",
            title: "Parent Category",
            multiple: true,
            options: parentCats.map((name) => ({
                label: name,
                value: name,
                icon: Boxes,
            })),
        },
        {
            column: "is_active",
            title: "Status",
            multiple: false,
            options: [
                { label: "Active", value: "true" },
                { label: "Inactive", value: "false" },
            ],
        },
    ];
}
