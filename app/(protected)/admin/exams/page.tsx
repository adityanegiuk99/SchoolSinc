"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Calendar,
    Plus,
    MoreVertical,
    Users
} from "lucide-react";

export default function AdminExamsPage() {
    const exams = [
        { id: 1, title: "Mid-Term Examination 2024", class: "Class 10", date: "Oct 15 - Oct 25", status: "Upcoming", students: 120 },
        { id: 2, title: "Unit Test II", class: "Class 12", date: "Nov 05 - Nov 10", status: "Draft", students: 95 },
        { id: 3, title: "Half-Yearly Exams", class: "Class 6-9", date: "Sep 20 - Sep 30", status: "Completed", students: 450 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Exam Management</h2>
                    <p className="text-muted-foreground">Schedule and manage school examinations.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" /> Create Exam
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map((exam) => (
                    <Card key={exam.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <Badge variant={exam.status === "Upcoming" ? "default" : "secondary"} className={exam.status === "Upcoming" ? "bg-blue-500" : ""}>
                                    {exam.status}
                                </Badge>
                                <Button variant="ghost" size="icon" className="-mt-2 -mr-2">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </div>
                            <CardTitle className="text-lg mt-2">{exam.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{exam.class}</p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>{exam.date}</span>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Users className="h-4 w-4" />
                                        <span>{exam.students} Students</span>
                                    </div>
                                    <Button variant="link" className="p-0 h-auto font-semibold text-blue-600">
                                        View Schedule
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
