"use client";

import { StudentDetails } from "@/components/faculty/students/student-details";
import { StudentFeedback } from "@/components/faculty/students/student-feedback";

export default function FacultyStudentsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Student Details</h2>
                <p className="text-muted-foreground">View performance and provide feedback</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <StudentDetails />
                <div className="space-y-6">
                    {/* Placeholder for list or other widget */}
                    <div className="bg-slate-100 rounded-lg p-6 text-center text-slate-500 h-[200px] flex items-center justify-center">
                        Select a student from the list to view details
                    </div>
                    <StudentFeedback />
                </div>
            </div>
        </div>
    );
}
