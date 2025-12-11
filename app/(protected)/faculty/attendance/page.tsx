"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MatrixAttendance } from "@/components/faculty/matrix-attendance";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FacultyAttendancePage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Attendance Sheet</h2>
                    <p className="text-muted-foreground">Manage and track student attendance</p>
                </div>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-white dark:bg-slate-900">
                            <span className="text-sm font-medium">Month:</span>
                            <span className="text-sm font-bold">5/1/2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 text-xs"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> Present</span>
                            <span className="flex items-center gap-1 text-xs"><span className="h-2 w-2 rounded-full bg-rose-500"></span> Absent</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="april">
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="april">April, 2025</SelectItem>
                                <SelectItem value="may">May, 2025</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="10a">
                            <SelectTrigger className="w-[80px]">
                                <SelectValue placeholder="Class" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10a">10A</SelectItem>
                                <SelectItem value="10b">10B</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardHeader>
                <CardContent>
                    <MatrixAttendance />
                </CardContent>
            </Card>
        </div>
    );
}
