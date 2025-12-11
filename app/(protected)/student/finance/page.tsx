"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, QrCode } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function StudentFinance() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">“Online Payment Options”</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Fee Remainder Card */}
                <Card className="h-fit">
                    <CardContent className="p-8 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-xl">
                                <CreditCard className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Fee Remainder</h3>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500 mb-1">Amount Due</p>
                            <p className="text-4xl font-bold text-rose-600">$1200</p>
                            <p className="text-xs text-rose-500 mt-2 font-medium">Due by October 10, 2025</p>
                        </div>

                        <Button className="w-full bg-[#0f172a] text-white hover:bg-slate-800 h-12 rounded-xl">Pay Online Now</Button>
                    </CardContent>
                </Card>

                {/* Payment Options / Mock Gateway */}
                <Card>
                    <CardContent className="p-8">
                        <h3 className="font-semibold mb-6">Payment Options</h3>

                        <div className="flex flex-col items-center justify-center py-8 space-y-6">
                            <p className="text-xs text-slate-500">Scan to proceed with payment confirmation.</p>

                            <div className="flex items-center gap-4 mb-4">
                                {/* Mock Payment Logs */}
                                <span className="text-[10px] font-bold text-rose-600">eSewa</span>
                                <span className="text-[10px] font-bold text-purple-600">Khalti</span>
                                <span className="text-[10px] font-bold text-green-600">FonePay</span>
                            </div>

                            {/* Mock QR */}
                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 shadow-sm relative">
                                <QrCode className="h-24 w-24 text-slate-800" />
                                {/* Scan line animation overlay could go here */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 w-20 bg-rose-500 animate-pulse" />
                            </div>
                        </div>

                        <div className="border-t pt-6 mt-6">
                            <RadioGroup defaultValue="card">
                                <div className="flex items-center justify-between space-x-2 border rounded-lg p-4">
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem value="card" id="card" />
                                        <Label htmlFor="card" className="text-sm text-slate-600">Credit card</Label>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-4 w-6 bg-slate-200 rounded" />
                                        <div className="h-4 w-6 bg-slate-200 rounded" />
                                    </div>
                                </div>
                            </RadioGroup>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
