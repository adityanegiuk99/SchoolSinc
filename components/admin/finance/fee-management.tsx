"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fees = [
    { id: "AD9892434", name: "Sita Janaki", amount: "NRP 12,500", due: "NRP 12,500", status: "Completed", method: "esewa", date: "Today, 2:30 PM", daysOverdue: 7 },
    { id: "AD9892435", name: "Ram Dashrath", amount: "NRP 15,000", due: "NRP 5,000", status: "Pending", method: "cash", date: "Yesterday, 10:00 AM", daysOverdue: 3 },
];

export function FeeManagement() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fees.map((fee) => (
                <Card key={fee.id} className="relative overflow-hidden">
                    <CardContent className="pt-6">
                        <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-rose-100 text-rose-600 hover:bg-rose-100">{fee.daysOverdue} days</Badge>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <Avatar className="h-12 w-12 border">
                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${fee.name}`} />
                                <AvatarFallback>{fee.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="font-semibold text-lg">{fee.name}</h4>
                                <p className="text-xs text-muted-foreground">SID: {fee.id}</p>
                            </div>
                            <div className="ml-auto">
                                <Badge variant={fee.status === "Completed" ? "default" : "secondary"} className={fee.status === "Completed" ? "bg-emerald-100 text-emerald-600 hover:bg-emerald-100" : ""}>
                                    {fee.status}
                                </Badge>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Amount:</span>
                                <span className="font-bold text-emerald-600">{fee.amount}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Method:</span>
                                <span className="font-medium text-slate-900 dark:text-slate-100 capitalize">{fee.method}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Time:</span>
                                <span className="font-medium text-slate-900 dark:text-slate-100">{fee.date}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm pt-2 border-t">
                                <span className="font-semibold text-slate-900 dark:text-slate-100">Dues:</span>
                                <span className="font-bold text-rose-600">{fee.due}</span>
                            </div>
                        </div>

                        <Button className="w-full bg-[#0f172a]">
                            <Mail className="h-4 w-4 mr-2" /> Send Remainder
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
