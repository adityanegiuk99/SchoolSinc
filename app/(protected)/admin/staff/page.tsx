"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Search,
    Plus,
    MoreVertical,
    Phone,
    Filter
} from "lucide-react";

export default function StaffManagementPage() {
    const staff = [
        { id: 1, name: "Dr. Sarah Wilson", role: "Principal", department: "Administration", contact: "+91 98765 43210", status: "Active" },
        { id: 2, name: "Rahul Sharma", role: "Senior Teacher", department: "Science", contact: "+91 98765 43211", status: "Active" },
        { id: 3, name: "Priya Patel", role: "Teacher", department: "Mathematics", contact: "+91 98765 43212", status: "On Leave" },
        { id: 4, name: "Amit Kumar", role: "Accountant", department: "Finance", contact: "+91 98765 43213", status: "Active" },
        { id: 5, name: "Deepak Singh", role: "Lab Assistant", department: "Science", contact: "+91 98765 43214", status: "Active" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Staff Management</h2>
                    <p className="text-muted-foreground">Manage teaching and non-teaching staff records.</p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" /> Add New Staff
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Staff Directory</CardTitle>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search staff..."
                                    className="pl-8 w-[250px]"
                                />
                            </div>
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800 text-muted-foreground font-medium border-b">
                                <tr>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Role</th>
                                    <th className="px-4 py-3">Department</th>
                                    <th className="px-4 py-3">Contact</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {staff.map((employee) => (
                                    <tr key={employee.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-4 py-3 font-medium">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold">
                                                    {employee.name.charAt(0)}
                                                </div>
                                                {employee.name}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">{employee.role}</td>
                                        <td className="px-4 py-3">{employee.department}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex flex-col text-xs text-muted-foreground gap-1">
                                                <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {employee.contact}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <Badge variant={employee.status === "Active" ? "default" : "secondary"} className={employee.status === "Active" ? "bg-emerald-500 hover:bg-emerald-600" : ""}>
                                                {employee.status}
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <Button variant="ghost" size="icon">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
