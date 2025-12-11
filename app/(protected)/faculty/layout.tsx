import { Sidebar } from "@/components/layout/sidebar";

export default function FacultyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
            <Sidebar role="faculty" />
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}
