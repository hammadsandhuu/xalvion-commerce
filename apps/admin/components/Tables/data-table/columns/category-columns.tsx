"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
    Folder,
    FolderTree,
    User,
    Calendar,
    Eye,
    Edit,
    Trash2,
    Copy,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "../data-table-column-header";
import { DataTableRowActions } from "../data-table-row-actions";
import { toast } from "sonner";
import { Category } from "@/api/categories/categories.api";

export const categoryColumns: ColumnDef<Category>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ row }) => {
            const category = row.original;
            const initials = category.name
                ?.split(" ")
                .map((w) => w[0]?.toUpperCase())
                .join("")
                .slice(0, 2);

            return (
                <div className="flex items-center gap-4 py-3">
                    <Avatar className="h-10 w-10 rounded-lg border shadow-sm bg-muted">
                        <AvatarFallback className="bg-muted text-sm font-semibold">
                            {initials || "NA"}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-semibold truncate max-w-[200px]">
                            {category.name}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1">
                            {category.slug}
                        </span>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "type",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Type" />
        ),
        cell: ({ row }) => {
            const type = row.original.type || "N/A";
            return (
                <Badge variant="outline" className="capitalize bg-blue-50 text-blue-700">
                    {type}
                </Badge>
            );
        },
    },
    {
        accessorKey: "children",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Subcategories" />
        ),
        cell: ({ row }) => {
            const children = row.original.children || [];
            return (
                <div className="flex items-center gap-2">
                    <FolderTree className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{children.length}</span>
                </div>
            );
        },
    },
    {
        accessorKey: "createdBy",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created By" />
        ),
        cell: ({ row }) => {
            const createdBy = row.original.createdBy;
            return (
                <div className="flex flex-col text-sm">
                    <div className="flex items-center gap-1">
                        <span>{createdBy?.name || "—"}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                        {createdBy?.email || ""}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ row }) => {
            const createdAt = row.original.createdAt;
            return (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {createdAt ? new Date(createdAt).toLocaleDateString() : "—"}
                </div>
            );
        },
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
        cell: ({ row }) => {
            const category = row.original;
            return (
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
                                onClick: async  () => {
                                    await new Promise((res) => setTimeout(res, 800))
                                    toast.info(`Editing "${category.name}"`)
                                }
                                
                            },
                            {
                                label: "Duplicate",
                                icon: <Copy className="h-4 w-4" />,
                                onClick: async () =>{
                                    await new Promise((res) => setTimeout(res, 800));
                                    toast.success(`Duplicated "${category.name}"`)
                                }
                            },
                            {
                                label: "Delete",
                                icon: <Trash2 className="h-4 w-4 text-destructive" />,
                                destructive: true,
                                confirm: true,
                                successMessage: "Category deleted successfully.",
                                onClick: async () => {
                                    await new Promise((res) => setTimeout(res, 800));
                                    console.log("Deleted category:", category._id);
                                },
                            },
                        ]}
                    />
                </div>
            );
        },
        enableSorting: false,
        enableHiding: false,
    },
    
];

export function getCategoryFilterColumns(categories: Category[]) {
    const types = Array.from(new Set(categories.map((c) => c.type).filter(Boolean)));
    const creators = Array.from(
        new Set(categories.map((c) => c.createdBy?.name).filter(Boolean))
    );

    return [
        {
            column: "type",
            title: "Type",
            multiple: true,
            options: types.map((type) => ({
                label: type,
                value: type,
                icon: Folder,
            })),
        },
        {
            column: "createdBy",
            title: "Created By",
            multiple: true,
            options: creators.map((name) => ({
                label: name,
                value: name,
                icon: User,
            })),
        },
    ];
}
  