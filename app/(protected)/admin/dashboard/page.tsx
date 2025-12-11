"use client";

import React from "react";
import { AdminHeader } from "@/components/admin/header";
import { StudentGenderChart } from "@/components/admin/student-gender-chart";
import { EarningsChart } from "@/components/admin/earnings-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Users, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AdminDashboard() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="space-y-6">
            <AdminHeader />

            {/* Welcome Banner */}
            <div className="bg-[#0f172a] rounded-xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-2">Welcome Back, Mr. Admin Name</h2>
                    <p className="text-slate-300">Have a Good day at work</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

                {/* Left Column (Main Content) - Spans 3 cols */}
                <div className="xl:col-span-3 space-y-6">

                    {/* Stats Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="h-full">
                            <StudentGenderChart />
                        </div>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Teaching Staff</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold mb-1">185</div>
                                <p className="text-xs text-muted-foreground"><span className="text-emerald-500 font-medium">+12%</span> from last month</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Non-Teaching Staff</CardTitle>
                                <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold mb-1">65</div>
                                <p className="text-xs text-muted-foreground"><span className="text-rose-500 font-medium">-2%</span> from last month</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Financial Overview */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Financial Overview</h3>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">2023-2024</Button>
                                <Button size="sm" className="bg-[#0f172a]">Annual</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Total Income</p>
                                            <h4 className="text-2xl font-bold">₹29,545,000</h4>
                                        </div>
                                        <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded-full flex items-center">
                                            <ArrowUpRight className="h-3 w-3 mr-1" /> +12%
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Total Expenses</p>
                                            <h4 className="text-2xl font-bold">₹19,291,266</h4>
                                        </div>
                                        <span className="bg-rose-100 text-rose-600 text-xs px-2 py-1 rounded-full flex items-center">
                                            <ArrowDownRight className="h-3 w-3 mr-1" /> +5%
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Total Profit</p>
                                            <h4 className="text-2xl font-bold text-emerald-600">₹19,253,734</h4>
                                        </div>
                                        <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded-full flex items-center">
                                            <ArrowUpRight className="h-3 w-3 mr-1" /> +15%
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <EarningsChart />
                    </div>
                </div>

                {/* Right Column (Sidebar Widgets) */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-base">Schedules</CardTitle>
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-blue-600">+ Add New</Button>
                        </CardHeader>
                        <CardContent>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border shadow-sm w-full flex justify-center"
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-base">Upcoming Events</CardTitle>
                            <Button variant="link" size="sm" className="text-xs text-muted-foreground">View All</Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                { title: "Parents, Teacher Meet", date: "15 July 2025", time: "09:10 AM - 10:50 PM", color: "bg-blue-100 text-blue-600" },
                                { title: "Staff Meeting", date: "10 July 2025", time: "09:10 AM - 10:50 PM", color: "bg-emerald-100 text-emerald-600" },
                                { title: "Vacation Meeting", date: "15 July 2025", time: "09:10 AM - 10:50 PM", color: "bg-rose-100 text-rose-600" },
                            ].map((event, i) => (
                                <div key={i} className="flex gap-4 items-start border-b last:border-0 pb-4 last:pb-0">
                                    <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${event.color}`}>
                                        <Users className="h-5 w-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-semibold">{event.title}</h4>
                                        <div className="flex items-center text-xs text-muted-foreground gap-2">
                                            <CalendarIcon className="h-3 w-3" /> {event.date}
                                        </div>
                                        <div className="flex items-center text-xs text-muted-foreground gap-2">
                                            <Clock className="h-3 w-3" /> {event.time}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}
