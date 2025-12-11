"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const performanceData = [
    { term: 'First', marks: 80 },
    { term: 'Second', marks: 84 },
    { term: 'Third', marks: 86 },
    { term: 'Fourth', marks: 85 },
];

export default function StudentPerformance() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">“Performance Overview”</h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <span className="text-3xl font-bold text-slate-800">87%</span>
                        <span className="text-xs text-slate-400 mt-1">Overall Average</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <span className="text-3xl font-bold text-slate-800">A+</span>
                        <span className="text-xs text-slate-400 mt-1">Current Grade</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <span className="text-3xl font-bold text-slate-800">15/17</span>
                        <span className="text-xs text-slate-400 mt-1">Test Taken</span>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <span className="text-3xl font-bold text-slate-800">3rd</span>
                        <span className="text-xs text-slate-400 mt-1">Class Rank</span>
                    </CardContent>
                </Card>
            </div>

            {/* Graph */}
            <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-slate-700">Performance Overview</h3>
                    <Button variant="outline" size="sm" className="h-7 text-xs bg-[#0f172a] text-white hover:bg-slate-800 hover:text-white border-0">2024 <ChevronDown className="h-3 w-3 ml-1" /></Button>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={performanceData}>
                            <CartesianGrid vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="term" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} domain={[0, 100]} ticks={[0, 70, 80, 90, 100]} />
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            <Line type="monotone" dataKey="marks" stroke="#334155" strokeWidth={3} dot={{ r: 5, fill: "#334155" }} activeDot={{ r: 7 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Card>
        </div>
    );
}
