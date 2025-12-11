"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

// Mock Data
const students = [
    { id: "S01", name: "Aarav Sharma" },
    { id: "S02", name: "Vihaan Singh" },
    { id: "S03", name: "Aditya Gupta" },
    { id: "S04", name: "Sai Patel" },
    { id: "S05", name: "Reyansh Kumar" },
    { id: "S06", name: "Arjun Reddy" },
    { id: "S07", name: "Ishaan Verma" },
    { id: "S08", name: "Vivaan Malhotra" },
    { id: "S09", name: "Dhruv Kapoor" },
    { id: "S10", name: "Kabir Joshi" },
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);

export function MatrixAttendance() {
    const [attendance, setAttendance] = useState<Record<string, string>>({});

    const currentDay = new Date().getDate();

    const toggleStatus = (studentId: string, day: number) => {
        if (day !== currentDay) return;

        const key = `${studentId}-${day}`;
        // Toggle: Empty -> Present (Green) -> Absent (Red) -> Empty
        setAttendance((prev) => {
            const current = prev[key];
            if (!current) return { ...prev, [key]: "present" };
            if (current === "present") return { ...prev, [key]: "absent" };
            const next = { ...prev };
            delete next[key];
            return next;
        });
    };

    return (
        <div className="rounded-md border bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
            <div className="p-4 border-b flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <div>
                    <h3 className="font-semibold text-lg">Class 10-A Attendance</h3>
                    <p className="text-sm text-muted-foreground">October 2025 • Today is Day {currentDay}</p>
                </div>
                <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-emerald-500"></span> Present</div>
                    <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-rose-500"></span> Absent</div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <Table className="border-collapse w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px] sticky left-0 bg-white dark:bg-slate-900 border-r z-10 font-bold text-slate-900 dark:text-slate-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Student Name</TableHead>
                            {days.map((d) => (
                                <TableHead
                                    key={d}
                                    className={cn(
                                        "text-center min-w-[36px] px-0 text-xs",
                                        d === currentDay ? "text-blue-600 font-bold bg-blue-50 dark:bg-blue-900/20" : "text-slate-500"
                                    )}
                                >
                                    {d}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <TableCell className="sticky left-0 bg-white dark:bg-slate-900 border-r z-10 font-medium text-slate-700 dark:text-slate-300 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                    {student.name}
                                </TableCell>
                                {days.map((day) => {
                                    const key = `${student.id}-${day}`;
                                    const status = attendance[key];
                                    const isToday = day === currentDay;

                                    return (
                                        <TableCell
                                            key={day}
                                            className={cn(
                                                "text-center px-0 py-1 transition-colors",
                                                isToday ? "cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800" : "cursor-not-allowed opacity-50 bg-slate-50/50 dark:bg-slate-900/50"
                                            )}
                                            onClick={() => toggleStatus(student.id, day)}
                                        >
                                            <div className="flex justify-center items-center h-full w-full">
                                                {status === "present" && (
                                                    <div className="h-4 w-4 rounded-full bg-emerald-500 shadow-sm animate-in zoom-in-50 duration-200" />
                                                )}
                                                {status === "absent" && (
                                                    <div className="h-4 w-4 rounded-full bg-rose-500 shadow-sm animate-in zoom-in-50 duration-200" />
                                                )}
                                                {!status && (
                                                    <div
                                                        className={cn(
                                                            "h-1.5 w-1.5 rounded-full",
                                                            isToday ? "bg-slate-300 dark:bg-slate-600" : "bg-slate-200 dark:bg-slate-800"
                                                        )} />
                                                )}
                                            </div>
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
