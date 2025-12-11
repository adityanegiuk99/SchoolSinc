"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, AlertCircle, Calendar, Megaphone, CheckCircle2, Upload, FilePlus, DollarSign, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function FacultyDashboard() {
    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-[#0f172a] rounded-xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-2">Welcome Back, Teacher Name</h2>
                    <p className="text-slate-300">Have a Good day at work</p>
                    <div className="absolute right-4 top-4 text-xs text-slate-400 text-right">
                        <p>Updated Recently on 15 Jun 2025</p>
                        <p className="font-semibold text-white">June 18, 2025 Today</p>
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
            </div>

            {/* Top Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Today's Classes */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Today&apos;s Classes</CardTitle>
                        <BookOpen className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { time: "9:00 AM", class: "Class 10 B" },
                            { time: "11:00 AM", class: "Class 10 B" },
                            { time: "3:00 PM", class: "Class 10 B" },
                            { time: "4:00 PM", class: "Class 10 B" },
                        ].map((cls, i) => (
                            <div key={i} className="flex justify-between text-sm">
                                <span className="text-slate-500">{cls.time}</span>
                                <span className="font-medium">{cls.class}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Pending Task */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Pending Task</CardTitle>
                        <div className="bg-orange-100 p-1 rounded">
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {[
                            "Quiz 3 on class 10A",
                            "Vacation Homework checking",
                            "Annual Reports Submission"
                        ].map((task, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                                {task}
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                        <div className="bg-emerald-100 p-1 rounded">
                            <Calendar className="h-4 w-4 text-emerald-500" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { title: "Math Olympiad", date: "March 20, 2025" },
                            { title: "Parents teacher Meeting", date: "March 25, 2025" },
                        ].map((evt, i) => (
                            <div key={i} className="text-sm">
                                <p className="font-medium">{evt.title}</p>
                                <p className="text-xs text-slate-500">{evt.date}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Quick Notices */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Quick Notices</CardTitle>
                        <div className="bg-rose-100 p-1 rounded">
                            <Megaphone className="h-4 w-4 text-rose-500" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="bg-blue-50 text-blue-700 text-xs p-2 rounded">
                            Staff meeting tomorrow at 3 PM
                        </div>
                        <div className="bg-orange-50 text-orange-700 text-xs p-2 rounded">
                            New Grade system update
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <div>
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="/faculty/attendance">
                        <div className="bg-blue-500 hover:bg-blue-600 transition-colors rounded-xl p-4 text-white flex items-center gap-4 cursor-pointer">
                            <div className="bg-white/20 p-3 rounded-lg">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold">Mark Attendance</h4>
                                <p className="text-xs text-blue-100">Quick attendance marking</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/faculty/academics">
                        <div className="bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-xl p-4 text-white flex items-center gap-4 cursor-pointer">
                            <div className="bg-white/20 p-3 rounded-lg">
                                <Upload className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold">Upload Marks</h4>
                                <p className="text-xs text-emerald-100">Assignment & exam results</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/faculty/leaves">
                        <div className="bg-purple-500 hover:bg-purple-600 transition-colors rounded-xl p-4 text-white flex items-center gap-4 cursor-pointer">
                            <div className="bg-white/20 p-3 rounded-lg">
                                <FilePlus className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold">Apply Leave</h4>
                                <p className="text-xs text-purple-100">Submit leave request</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Performance & Personal Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base text-slate-500">Performance & Workload</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg flex items-center justify-between">
                            <div>
                                <p className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm">Attendance Marking</p>
                                <p className="text-xs text-slate-500">This month progress</p>
                            </div>
                            <span className="text-xl font-bold text-emerald-600">92%</span>
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg flex items-center justify-between">
                            <div>
                                <p className="text-orange-700 dark:text-orange-400 font-semibold text-sm">Pending Assignment</p>
                                <p className="text-xs text-slate-500">To check and grade</p>
                            </div>
                            <div className="text-right">
                                <span className="text-xl font-bold text-orange-600 block">13</span>
                                <span className="text-[10px] text-slate-400">View All</span>
                            </div>
                        </div>
                        <div className="bg-rose-50 dark:bg-rose-900/10 p-4 rounded-lg flex items-center justify-between">
                            <div>
                                <p className="text-rose-700 dark:text-rose-400 font-semibold text-sm">At-Risk Students</p>
                                <p className="text-xs text-slate-500">Need attention</p>
                            </div>
                            <span className="text-xl font-bold text-rose-600">3</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base text-slate-500">Personal Section</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg flex items-start gap-4">
                            <div className="bg-emerald-100 p-2 rounded-full">
                                <DollarSign className="h-5 w-5 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm">Salary Distribution</p>
                                <p className="text-xs text-slate-500">Monthly pay slip ready for download</p>
                            </div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg flex items-start gap-4">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <CalendarDays className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-blue-700 dark:text-blue-400 font-semibold text-sm">Leave Balance</p>
                                <p className="text-xs text-slate-500">View your all balance</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-500 mb-2">Remainders</p>
                            {/* Remainder content placeholder */}
                            <div className="text-xs text-slate-400 italic">No new remainders options.</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
