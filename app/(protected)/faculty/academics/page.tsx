"use client";

import { AssignmentManager } from "@/components/faculty/academics/assignment-manager";
import { MarksEntry } from "@/components/faculty/academics/marks-entry";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileSpreadsheet } from "lucide-react";

export default function FacultyAcademicsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Academics & Assignments</h2>
                <p className="text-muted-foreground">Create assignments and update student marks</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <AssignmentManager />
                </div>

                <div className="lg:col-span-1">
                    <MarksEntry />
                </div>

                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upload Assignment Grades</CardTitle>
                            <CardDescription>Upload grades via Excel or PDF file</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer hover:bg-slate-50 transition-colors">
                                <UploadCloud className="h-10 w-10 text-slate-300" />
                                <p className="text-sm font-medium">Upload Grade File</p>
                                <p className="text-xs text-muted-foreground">Drag and drop files here or click to browse</p>
                                <Button variant="secondary" size="sm" className="mt-2">Choose Files</Button>
                            </div>

                            <div className="bg-rose-50 border border-rose-100 rounded-lg p-4 space-y-2">
                                <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm">
                                    <AlertTriangleIcon className="h-4 w-4" /> Template Format
                                </div>
                                <p className="text-xs text-rose-600/80">Download the template to ensure proper formatting</p>
                                <Button variant="link" className="text-xs text-rose-600 h-auto p-0 underline">Download Template</Button>
                            </div>

                            <Button className="w-full bg-[#0f172a]">
                                <FileSpreadsheet className="h-4 w-4 mr-2" /> Update Grades
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AlertTriangleIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    )
}
