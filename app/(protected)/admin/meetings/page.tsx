"use client";

import { AdminHeader } from "@/components/admin/header";
import { MeetingManager } from "@/components/admin/notices/meeting-manager";

export default function AdminMeetingsPage() {
    return (
        <div className="space-y-6">
            <AdminHeader />
            <div className="h-[calc(100vh-140px)]">
                <MeetingManager />
            </div>
        </div>
    );
}
