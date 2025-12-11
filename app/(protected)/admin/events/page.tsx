"use client";

import { AdminHeader } from "@/components/admin/header";
import { EventManager } from "@/components/admin/events/event-manager";

export default function AdminEventsPage() {
    return (
        <div className="space-y-6">
            <AdminHeader />
            <EventManager />
        </div>
    );
}
