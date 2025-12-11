"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const upcomingExams = [
    { subject: "Mathematics", date: "Oct 5", time: "10:00 AM", syllabus: "Complete syllabus", venue: "3A", instruction: "Must Bring your identity card", status: "upcoming" },
    { subject: "English", date: "Oct 8", time: "10:00 AM", syllabus: "Complete syllabus", venue: "4A", instruction: "Must Bring your identity card", status: "upcoming" },
    { subject: "Nepali", date: "Oct 9", time: "10:00 AM", syllabus: "Complete syllabus", venue: "7A", instruction: "Must Bring your identity card", status: "upcoming" },
    { subject: "Science", date: "Oct 10", time: "10:00 AM", syllabus: "Complete syllabus", venue: "6A", instruction: "Must Bring your identity card", status: "upcoming" },
];

const notices = [
    { type: "holiday", title: "Holiday Notice", desc: "Oct 2, Dashain Vacation", time: "Today", color: "bg-rose-50 text-rose-600", iconColor: "bg-rose-100 text-rose-500" },
    { type: "event", title: "Annual Sports Day", desc: "On Oct 15. Registration open till Oct 10.", time: "2 days ago", color: "bg-emerald-50 text-emerald-600", iconColor: "bg-emerald-100 text-emerald-500" },
    { type: "library", title: "Library Notice", desc: "New books arrived. Check the catalog.", time: "3 days ago", color: "bg-blue-50 text-blue-600", iconColor: "bg-blue-100 text-blue-500" },
];

export default function StudentExams() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Exams */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        “Upcoming Exams”
                    </h2>
                    <Button variant="outline" size="sm" className="h-8 text-xs">End Term <ChevronDown className="h-3 w-3 ml-1" /></Button>
                </div>

                <div className="space-y-4">
                    {upcomingExams.map((exam, i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-lg">{exam.subject}</h3>
                                        <div className="text-sm text-slate-500 flex items-center gap-2">
                                            <span>{exam.syllabus}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 text-sm text-slate-600">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="h-4 w-4 text-slate-400" />
                                            <span>Venue: {exam.venue}</span>
                                        </div>
                                        <div className="text-rose-500 text-xs font-medium">
                                            {exam.instruction}
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="font-bold text-slate-900">{exam.date}</p>
                                        <p className="text-xs text-slate-500">{exam.time}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Right Column: Notices & Events */}
            <div className="space-y-6">
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-bold opacity-80">“Currently ongoing or Upcoming Events”</h2>
                    </div>

                    <Card>
                        <CardContent className="p-0">
                            <div className="p-4 border-b flex items-center justify-between">
                                <h3 className="font-semibold text-sm">Latest Notices</h3>
                                <span className="text-xs text-slate-400 cursor-pointer hover:text-blue-500">View All</span>
                            </div>
                            <div className="p-4 space-y-4">
                                {notices.map((notice, i) => (
                                    <div key={i} className={`p-4 rounded-xl border ${notice.color.replace('text', 'border')} bg-white flex gap-4`}>
                                        <div className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center ${notice.iconColor}`}>
                                            <AlertCircle className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm text-slate-900">{notice.title}</h4>
                                            <p className="text-xs text-slate-500 mt-0.5">{notice.desc}</p>
                                            <p className="text-[10px] text-rose-500 mt-2 font-medium">{notice.time}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="text-center text-xs text-slate-400 py-2">
                                    No more Activity
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
