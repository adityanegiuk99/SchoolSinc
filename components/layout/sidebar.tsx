"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    Building2,
    LayoutDashboard,
    BookOpen,
    Users,
    Briefcase,
    ClipboardList,
    BarChart2,
    CreditCard,
    Calendar,
    Megaphone,
    Video,
    FileText,
    LogOut,
    Clock
} from "lucide-react";

interface SidebarProps {
    role: "admin" | "faculty" | "student";
}

export function Sidebar({ role }: SidebarProps) {
    const pathname = usePathname();

    const commonItems = [
        { label: "Dashboard", href: `/${role}/dashboard`, icon: LayoutDashboard },
    ];

    const adminItems = [
        { label: "Academics", href: "/admin/academics", icon: BookOpen },
        { label: "Student Management", href: "/admin/students", icon: Users },
        { label: "Staff Management", href: "/admin/staff", icon: Briefcase },
        { label: "Exam Management", href: "/admin/exams", icon: ClipboardList },
        { label: "Performance & Analytics", href: "/admin/analytics", icon: BarChart2 },
        { label: "Fee and Finance", href: "/admin/finance", icon: CreditCard },
        { label: "Event Management", href: "/admin/events", icon: Calendar },
        { label: "Notice & Communication", href: "/admin/notices", icon: Megaphone },
        { label: "Meeting Management", href: "/admin/meetings", icon: Video },
    ];

    const facultyItems = [
        { label: "Attendance", href: "/faculty/attendance", icon: Calendar },
        { label: "Academics", href: "/faculty/academics", icon: BookOpen },
        { label: "Student Management", href: "/faculty/students", icon: Users },
        { label: "Finance & Payslips", href: "/faculty/finance", icon: CreditCard },
        { label: "Leave Application", href: "/faculty/leaves", icon: FileText },
        { label: "Notices & Meetings", href: "/faculty/notices", icon: Megaphone },
    ];

    const studentItems = [
        { label: "Timetable", href: "/student/timetable", icon: Clock },
        { label: "Exams & Events", href: "/student/exams", icon: ClipboardList },
        { label: "Performance", href: "/student/performance", icon: BarChart2 },
        { label: "Resources", href: "/student/resources", icon: BookOpen },
        { label: "Fees & Finance", href: "/student/finance", icon: CreditCard },
        { label: "Notices & Meetings", href: "/student/notices", icon: Megaphone },
        { label: "Leave Application", href: "/student/leaves", icon: FileText },
    ];

    let items = commonItems;
    if (role === "admin") items = [...items, ...adminItems];
    if (role === "faculty") items = [...items, ...facultyItems];
    if (role === "student") items = [...items, ...studentItems];

    return (
        <div className="h-screen w-64 bg-[#0f172a] text-white flex flex-col shadow-xl">
            <div className="p-6 border-b border-white/10 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-blue-400" />
                <div>
                    <h1 className="text-xl font-bold tracking-tight">SchoolSync</h1>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">High School ERP</p>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {items.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-900/50"
                                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-white/5 transition-colors">
                    <LogOut className="h-5 w-5" />
                    Logout
                </button>
            </div>
        </div>
    );
}
