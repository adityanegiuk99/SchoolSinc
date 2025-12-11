"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Download,
    FileText,
    Video,
    Search,
    Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function StudentResourcesPage() {
    const resources = [
        { id: 1, title: "Physics Chapter 5 Notes", subject: "Physics", type: "PDF", size: "2.5 MB", date: "Dec 05" },
        { id: 2, title: "Math Calculus Formulas", subject: "Math", type: "PDF", size: "1.2 MB", date: "Dec 03" },
        { id: 3, title: "Chemical Bonding Lecture", subject: "Chemistry", type: "Video", size: "150 MB", date: "Nov 28" },
        { id: 4, title: "English Grammar Workbook", subject: "English", type: "Worksheet", size: "4.0 MB", date: "Nov 25" },
        { id: 5, title: "Biology Diagram Set", subject: "Biology", type: "Image", size: "5.5 MB", date: "Nov 20" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Study Resources</h2>
                <p className="text-muted-foreground">Access notes, assignments, and learning materials.</p>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <div className="relative w-full md:w-[300px]">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search resources..."
                                    className="pl-8"
                                />
                            </div>
                            <Button variant="outline">
                                <Filter className="h-4 w-4 mr-2" /> Filter
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {resources.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors bg-white dark:bg-slate-900">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600">
                                        {item.type === "Video" ? <Video className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-base">{item.title}</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Badge variant="secondary" className="text-xs font-normal">
                                                {item.subject}
                                            </Badge>
                                            <span className="text-xs text-muted-foreground">• {item.type}</span>
                                            <span className="text-xs text-muted-foreground">• {item.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right flex items-center gap-4">
                                    <span className="text-xs text-muted-foreground hidden md:inline">{item.size}</span>
                                    <Button size="sm" variant="outline" className="h-9">
                                        <Download className="h-4 w-4 mr-2" /> Download
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
