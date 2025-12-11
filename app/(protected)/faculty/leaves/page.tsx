"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar, Send } from "lucide-react";

export default function FacultyLeavePage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Leave Application</h2>
                <p className="text-muted-foreground">Submit and track your leave requests.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Apply for Leave */}
                <Card>
                    <CardHeader>
                        <CardTitle>Apply for Leave</CardTitle>
                        <CardDescription>Fill out the form below to request leave.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="type">Leave Type</Label>
                                    <select id="type" className="w-full flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option>Sick Leave</option>
                                        <option>Casual Leave</option>
                                        <option>Earned Leave</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="days">Total Days</Label>
                                    <Input id="days" type="number" placeholder="1" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="start">Start Date</Label>
                                    <Input id="start" type="date" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="end">End Date</Label>
                                    <Input id="end" type="date" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reason">Reason</Label>
                                <Textarea id="reason" placeholder="Please specify the reason for your leave..." />
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                <Send className="mr-2 h-4 w-4" /> Submit Application
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Leave History */}
                <Card>
                    <CardHeader>
                        <CardTitle>Leave History</CardTitle>
                        <CardDescription>Your recent leave applications.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm">Sick Leave</p>
                                            <p className="text-xs text-muted-foreground">Nov 12 - Nov 14 (3 days)</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant={i === 1 ? "secondary" : "default"} className={i === 1 ? "bg-yellow-500/15 text-yellow-600 hover:bg-yellow-500/25" : "bg-emerald-500 hover:bg-emerald-600"}>
                                            {i === 1 ? "Pending" : "Approved"}
                                        </Badge>
                                        <p className="text-xs text-muted-foreground mt-1">Applied on Nov 10</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
