"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BookOpen,
    Calendar,
    Clock,
    FileText,
    GraduationCap,
    Upload,
    User,
    Shield,
    Search,
    ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Mock Data for Charts
const attendanceData = [
    { name: 'Present', value: 73, color: '#f97316' }, // Orange-500
    { name: 'Absent', value: 27, color: '#e5e7eb' }, // Gray-200
];

const performanceData = [
    { term: 'First', marks: 40 },
    { term: 'Second', marks: 65 },
    { term: 'Third', marks: 55 },
    { term: 'Fourth', marks: 80 },
];

const timetableData = [
    { time: "09:00 AM - 10:00 AM", subject: "Mathematics", room: "202", topic: "Quadratic Equations" },
    { time: "10:00 AM - 11:00 AM", subject: "Science", room: "202", topic: "Organic Chemistry" },
    { time: "11:00 AM - 12:00 PM", subject: "Social", room: "202", topic: "Genz protest, 2025" },
];

const quickActions = [
    { label: "Grade Report", icon: FileText, color: "bg-emerald-100 text-emerald-600", href: "/student/performance" },
    { label: "Leave Apply", icon: Calendar, color: "bg-rose-100 text-rose-600", href: "/student/leave" },
    { label: "Attendance", icon: User, color: "bg-orange-100 text-orange-600", href: "/student/dashboard" }, // Scroll to chart
    { label: "Study Materials", icon: BookOpen, color: "bg-blue-100 text-blue-600", href: "/student/resources" },
    { label: "Submit Assignment", icon: Upload, color: "bg-orange-100 text-orange-600", href: "/student/assignments" },
    { label: "Exam Schedule", icon: Clock, color: "bg-purple-100 text-purple-600", href: "/student/exams" },
];

export default function StudentDashboard() {
    return (
        <div className="space-y-6">
            {/* Header / Search Mock (Since sidebar doesn't cover top query) */}
            <div className="flex items-center justify-between mb-6">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer">
                        <User className="h-4 w-4 text-slate-600" />
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-semibold">Person Name</p>
                        <p className="text-xs text-slate-500">Student</p>
                    </div>
                </div>
            </div>

            {/* Welcome Banner */}
            <div className="bg-[#0f172a] rounded-xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-2">Welcome Back, Student Name</h2>
                    <p className="text-slate-300">Have a Good day at work</p>
                    <div className="absolute right-4 top-4 text-xs text-slate-400 text-right">
                        <p>Updated Recently on 15 Jun 2025</p>
                        <p className="font-semibold text-white">June 18, 2025 Today</p>
                    </div>
                </div>
                {/* Decorative element resembling the image */}
                <div className="absolute top-0 right-0 w-64 h-full pointer-events-none opacity-20">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,90.9,-6.1C91.7,8.2,90.6,22.5,84.1,35.2C77.6,47.9,65.7,59,52.2,65.9C38.7,72.8,23.6,75.5,9.2,74C-5.2,72.5,-19,66.8,-31.6,59.3C-44.2,51.8,-55.6,42.5,-64.5,30.8C-73.4,19.1,-79.8,5,-78.3,-8.3C-76.8,-21.6,-67.4,-34.1,-56.3,-43.3C-45.2,-52.5,-32.4,-58.4,-19.4,-64.4C-6.4,-70.4,6.8,-76.5,20.8,-76.5C34.8,-76.5,52,-70.4,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Attendance Chart */}
                <Card className="flex flex-col items-center justify-center p-6">
                    <h3 className="text-sm font-semibold text-slate-500 self-start mb-4">Attendance</h3>
                    <div className="relative h-48 w-48">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={attendanceData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    startAngle={90}
                                    endAngle={-270}
                                    dataKey="value"
                                >
                                    {attendanceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold text-orange-500">73%</span>
                        </div>
                    </div>
                    <p className="text-xs text-orange-500 mt-2">↑ 2% from last month</p>
                </Card>

                {/* Middle Stats - using CSS Grid inside this col to match layout if needed, or just stacking */}
                <div className="space-y-6">
                    <Card className="p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-sm text-slate-500 mb-1">Pending Assignment</h3>
                            <p className="text-2xl font-bold">03</p>
                        </div>
                        <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Shield className="h-5 w-5 text-purple-500" />
                        </div>
                    </Card>
                    <Card className="p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-sm text-slate-500 mb-1">Recent Score</h3>
                            <p className="text-2xl font-bold">80%</p>
                        </div>
                        <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-emerald-500" />
                        </div>
                    </Card>
                </div>

                {/* Performance Graph */}
                <Card className="col-span-1 lg:col-span-1 p-6"> {/* Actually in image it takes more space, let's adjust grid */}
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-slate-500">Student Performance</h3>
                        <Button variant="outline" size="sm" className="h-6 text-xs bg-slate-800 text-white hover:bg-slate-700 hover:text-white border-none">2024 <ChevronDown className="h-3 w-3 ml-1" /></Button>
                    </div>
                    <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="term" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Line type="monotone" dataKey="marks" stroke="#334155" strokeWidth={2} dot={{ r: 4, fill: "#334155" }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Timetable */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-semibold text-slate-500">Class Timetable</h3>
                        <Button size="sm" className="h-7 text-xs bg-[#0f172a]">Monday <ChevronDown className="h-3 w-3 ml-1" /></Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-xs text-slate-400 border-b border-slate-100">
                                    <th className="pb-3 font-medium">Time</th>
                                    <th className="pb-3 font-medium">Subject</th>
                                    <th className="pb-3 font-medium">Room</th>
                                    <th className="pb-3 font-medium">Topic/Lesson Plan</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-600">
                                {timetableData.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                                        <td className="py-4 text-xs font-medium">{row.time}</td>
                                        <td className="py-4 font-medium">{row.subject}</td>
                                        <td className="py-4 text-xs text-slate-400">{row.room}</td>
                                        <td className="py-4 text-xs text-slate-500">{row.topic}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <div className="space-y-6">
                    {/* Quick Actions */}
                    <Card className="p-6">
                        <h3 className="text-sm font-semibold text-slate-500 mb-6">Quick Action</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {quickActions.map((action, i) => (
                                <Link key={i} href={action.href}>
                                    <div className={`aspect-square rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 ${action.color.split(' ')[0]}`}>
                                        <div className={`p-2 rounded-full bg-white/50 backdrop-blur-sm ${action.color.split(' ')[1]}`}>
                                            <action.icon className="h-5 w-5" />
                                        </div>
                                        <span className="text-[10px] font-semibold text-center leading-tight">{action.label}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Card>

                    {/* Latest Notices */}
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-slate-500">Latest Notices</h3>
                            <Link href="/student/notices" className="text-xs text-slate-400 hover:text-blue-500">View All</Link>
                        </div>
                        {/* Placeholder for notice list - design shows empty space or list */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50">
                                <div className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
                                <div>
                                    <p className="text-xs font-semibold">Holiday Notice</p>
                                    <p className="text-[10px] text-slate-400">Tomorrow is a holiday</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
