"use client";

import { AdminHeader } from "@/components/admin/header";
import { FeeManagement } from "@/components/admin/finance/fee-management";

export default function AdminFinancePage() {
    return (
        <div className="space-y-6">
            <AdminHeader />
            <div className="space-y-6">
                <h2 className="text-xl font-bold tracking-tight">Fee Management</h2>
                <FeeManagement />
            </div>
        </div>
    );
}
