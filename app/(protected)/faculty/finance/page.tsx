"use client";

import { SalaryView } from "@/components/faculty/finance/salary-view";
import { LeaveApplication } from "@/components/faculty/finance/leave-application";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FacultyFinancePage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Finance & Leaves</h2>
                <p className="text-muted-foreground">Check your salary slips and manage leaves</p>
            </div>

            <Tabs defaultValue="salary" className="w-full">
                <TabsList>
                    <TabsTrigger value="salary">Salary & Payments</TabsTrigger>
                    <TabsTrigger value="leaves">Leave Management</TabsTrigger>
                </TabsList>
                <TabsContent value="salary" className="mt-6">
                    <SalaryView />
                </TabsContent>
                <TabsContent value="leaves" className="mt-6">
                    <LeaveApplication />
                </TabsContent>
            </Tabs>
        </div>
    );
}
