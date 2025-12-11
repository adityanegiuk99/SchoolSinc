"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Phone, Mail, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const students = [
    { id: "AD9892434", name: "Sita Janaki", class: "10A", gender: "Female", joined: "10 Jan 2015", status: "Active" },
    { id: "AD9892435", name: "Ram Dashrath", class: "10A", gender: "Male", joined: "12 Jan 2015", status: "Active" },
    { id: "AD9892436", name: "Lakshman Dashrath", class: "10A", gender: "Male", joined: "12 Jan 2015", status: "Active" },
    { id: "AD9892437", name: "Hanuman Pawan", class: "10A", gender: "Male", joined: "15 Jan 2015", status: "Active" },
    { id: "AD9892438", name: "Radha Brij", class: "9B", gender: "Female", joined: "20 Feb 2016", status: "Inactive" },
];

export function StudentList() {
    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                <div className="space-y-1">
                    <CardTitle>Student and Staffs Details</CardTitle>
                    <CardDescription>Manage student records</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <Input placeholder="Search by ID or Name..." className="pl-10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {students.map((student) => (
                        <Card key={student.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="p-4 border-b flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                                <span className="text-xs font-mono text-slate-500">Id: {student.id}</span>
                                <Badge variant={student.status === "Active" ? "default" : "secondary"} className={student.status === "Active" ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-emerald-200" : ""}>
                                    • {student.status}
                                </Badge>
                            </div>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-4 mb-6">
                                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} />
                                        <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-base">{student.name}</h4>
                                        <p className="text-xs text-muted-foreground">{student.id}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 text-sm mb-6">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Class</p>
                                        <p className="font-medium">{student.class}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Gender</p>
                                        <p className="font-medium">{student.gender}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Joined On</p>
                                        <p className="font-medium">{student.joined}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <Phone className="h-4 w-4 mr-2" /> Call
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <Mail className="h-4 w-4 mr-2" /> Message
                                    </Button>
                                    <Button size="sm" className="bg-[#0f172a] text-white">
                                        View <ChevronRight className="h-4 w-4 ml-1" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
