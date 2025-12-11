"use client";

import { AdminHeader } from "@/components/admin/header";
import { StudentList } from "@/components/admin/students/student-list";

export default function AdminStudentsPage() {
    return (
        <div className="space-y-6">
            <AdminHeader />
            <StudentList />
        </div>
    );
}
