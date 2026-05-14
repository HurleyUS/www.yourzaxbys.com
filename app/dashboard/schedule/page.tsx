"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  Users,
  AlertTriangle,
  Download,
  Send,
  Copy,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Sample schedule data
const shifts = [
  {
    id: 1,
    employeeId: "1",
    employeeName: "Sarah Johnson",
    day: 0,
    startTime: "06:00",
    endTime: "14:00",
    position: "Opening",
  },
  {
    id: 2,
    employeeId: "2",
    employeeName: "Mike Williams",
    day: 0,
    startTime: "10:00",
    endTime: "18:00",
    position: "Mid",
  },
  {
    id: 3,
    employeeId: "3",
    employeeName: "Emily Davis",
    day: 0,
    startTime: "14:00",
    endTime: "22:00",
    position: "Closing",
  },
  {
    id: 4,
    employeeId: "1",
    employeeName: "Sarah Johnson",
    day: 1,
    startTime: "06:00",
    endTime: "14:00",
    position: "Opening",
  },
  {
    id: 5,
    employeeId: "4",
    employeeName: "James Brown",
    day: 1,
    startTime: "10:00",
    endTime: "18:00",
    position: "Mid",
  },
  {
    id: 6,
    employeeId: "3",
    employeeName: "Emily Davis",
    day: 1,
    startTime: "14:00",
    endTime: "22:00",
    position: "Closing",
  },
  {
    id: 7,
    employeeId: "2",
    employeeName: "Mike Williams",
    day: 2,
    startTime: "06:00",
    endTime: "14:00",
    position: "Opening",
  },
  {
    id: 8,
    employeeId: "5",
    employeeName: "Lisa Anderson",
    day: 2,
    startTime: "10:00",
    endTime: "18:00",
    position: "Mid",
  },
  {
    id: 9,
    employeeId: "4",
    employeeName: "James Brown",
    day: 2,
    startTime: "14:00",
    endTime: "22:00",
    position: "Closing",
  },
  {
    id: 10,
    employeeId: "1",
    employeeName: "Sarah Johnson",
    day: 3,
    startTime: "06:00",
    endTime: "14:00",
    position: "Opening",
  },
  {
    id: 11,
    employeeId: "2",
    employeeName: "Mike Williams",
    day: 3,
    startTime: "10:00",
    endTime: "18:00",
    position: "Mid",
  },
  {
    id: 12,
    employeeId: "5",
    employeeName: "Lisa Anderson",
    day: 3,
    startTime: "14:00",
    endTime: "22:00",
    position: "Closing",
  },
  {
    id: 13,
    employeeId: "3",
    employeeName: "Emily Davis",
    day: 4,
    startTime: "06:00",
    endTime: "14:00",
    position: "Opening",
  },
  {
    id: 14,
    employeeId: "4",
    employeeName: "James Brown",
    day: 4,
    startTime: "10:00",
    endTime: "18:00",
    position: "Mid",
  },
  {
    id: 15,
    employeeId: "1",
    employeeName: "Sarah Johnson",
    day: 4,
    startTime: "14:00",
    endTime: "22:00",
    position: "Closing",
  },
  {
    id: 16,
    employeeId: "5",
    employeeName: "Lisa Anderson",
    day: 5,
    startTime: "06:00",
    endTime: "14:00",
    position: "Opening",
  },
  {
    id: 17,
    employeeId: "2",
    employeeName: "Mike Williams",
    day: 5,
    startTime: "08:00",
    endTime: "16:00",
    position: "Mid",
  },
  {
    id: 18,
    employeeId: "3",
    employeeName: "Emily Davis",
    day: 5,
    startTime: "10:00",
    endTime: "18:00",
    position: "Mid",
  },
  {
    id: 19,
    employeeId: "4",
    employeeName: "James Brown",
    day: 5,
    startTime: "14:00",
    endTime: "22:00",
    position: "Closing",
  },
  {
    id: 20,
    employeeId: "1",
    employeeName: "Sarah Johnson",
    day: 6,
    startTime: "06:00",
    endTime: "14:00",
    position: "Opening",
  },
  {
    id: 21,
    employeeId: "5",
    employeeName: "Lisa Anderson",
    day: 6,
    startTime: "10:00",
    endTime: "18:00",
    position: "Mid",
  },
  {
    id: 22,
    employeeId: "2",
    employeeName: "Mike Williams",
    day: 6,
    startTime: "14:00",
    endTime: "22:00",
    position: "Closing",
  },
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const shortDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const employees = [
  {
    id: "1",
    name: "Sarah Johnson",
    color: "bg-red-200 text-red-800 border-red-300",
  },
  {
    id: "2",
    name: "Mike Williams",
    color: "bg-blue-200 text-blue-800 border-blue-300",
  },
  {
    id: "3",
    name: "Emily Davis",
    color: "bg-green-200 text-green-800 border-green-300",
  },
  {
    id: "4",
    name: "James Brown",
    color: "bg-yellow-200 text-yellow-800 border-yellow-300",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    color: "bg-purple-200 text-purple-800 border-purple-300",
  },
];

export default function SchedulePage() {
  const stores = useQuery(api.stores.list);
  const [selectedStore, setSelectedStore] = useState<string>("all");
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [view, setView] = useState<"week" | "day">("week");

  const getWeekDates = () => {
    const start = new Date(currentWeek);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    start.setDate(diff);

    return days.map((_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return date;
    });
  };

  const weekDates = getWeekDates();

  const getShiftsForDay = (dayIndex: number) => {
    return shifts.filter((shift) => shift.day === dayIndex);
  };

  const getEmployeeColor = (employeeId: string) => {
    return (
      employees.find((e) => e.id === employeeId)?.color ||
      "bg-gray-200 text-gray-800"
    );
  };

  const calculateHours = (start: string, end: string) => {
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);
    const startMinutes = startH * 60 + startM;
    const endMinutes = endH * 60 + endM;
    return ((endMinutes - startMinutes) / 60).toFixed(1);
  };

  const totalWeeklyHours = shifts.reduce((acc, shift) => {
    return acc + parseFloat(calculateHours(shift.startTime, shift.endTime));
  }, 0);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const prevWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentWeek(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentWeek(newDate);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Employee Scheduling
          </h1>
          <p className="text-gray-500">Create and manage weekly schedules</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Copy className="h-4 w-4 mr-2" />
            Copy Last Week
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-red-600 hover:bg-red-700" size="sm">
            <Send className="h-4 w-4 mr-2" />
            Publish Schedule
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Hours</p>
                <p className="text-2xl font-bold">
                  {totalWeeklyHours.toFixed(0)}
                </p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Scheduled Staff</p>
                <p className="text-2xl font-bold">{employees.length}</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Open Shifts</p>
                <p className="text-2xl font-bold text-orange-600">2</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Est. Labor Cost</p>
                <p className="text-2xl font-bold">
                  ${(totalWeeklyHours * 12.5).toFixed(0)}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Schedule Controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={prevWeek}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="text-center min-w-[200px]">
                <p className="font-semibold">
                  {formatDate(weekDates[0])} - {formatDate(weekDates[6])}
                </p>
                <p className="text-sm text-gray-500">
                  Week of{" "}
                  {weekDates[0].toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <Button variant="outline" size="icon" onClick={nextWeek}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Select value={selectedStore} onValueChange={setSelectedStore}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select store" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stores</SelectItem>
                  {stores?.map((store) => (
                    <SelectItem key={store._id} value={store._id}>
                      {store.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                onClick={() => setCurrentWeek(new Date())}
              >
                Today
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Schedule Grid */}
      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-3 text-left text-sm font-medium text-gray-500 w-[120px]">
                  Time
                </th>
                {shortDays.map((day, index) => (
                  <th
                    key={day}
                    className="p-3 text-center text-sm font-medium text-gray-500"
                  >
                    <div>{day}</div>
                    <div className="text-xs font-normal">
                      {formatDate(weekDates[index])}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Time slots from 6am to 10pm */}
              {Array.from({ length: 17 }, (_, i) => i + 6).map((hour) => (
                <tr key={hour} className="border-b">
                  <td className="p-2 text-sm text-gray-500 align-top">
                    {hour.toString().padStart(2, "0")}:00
                  </td>
                  {days.map((_, dayIndex) => {
                    const dayShifts = getShiftsForDay(dayIndex).filter(
                      (shift) => {
                        const startHour = parseInt(
                          shift.startTime.split(":")[0],
                        );
                        return startHour === hour;
                      },
                    );

                    return (
                      <td key={dayIndex} className="p-1 align-top min-h-[60px]">
                        <div className="space-y-1">
                          {dayShifts.map((shift) => {
                            const hours = calculateHours(
                              shift.startTime,
                              shift.endTime,
                            );
                            return (
                              <div
                                key={shift.id}
                                className={cn(
                                  "p-2 rounded-lg border text-xs cursor-pointer hover:shadow-md transition-shadow",
                                  getEmployeeColor(shift.employeeId),
                                )}
                              >
                                <p className="font-medium truncate">
                                  {shift.employeeName}
                                </p>
                                <p className="opacity-75">
                                  {shift.startTime} - {shift.endTime}
                                </p>
                                <p className="opacity-75">
                                  {hours}h • {shift.position}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Employee Hours Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Hours by Employee</CardTitle>
          <CardDescription>
            Total scheduled hours for each team member
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {employees.map((employee) => {
              const employeeShifts = shifts.filter(
                (s) => s.employeeId === employee.id,
              );
              const totalHours = employeeShifts.reduce((acc, shift) => {
                return (
                  acc +
                  parseFloat(calculateHours(shift.startTime, shift.endTime))
                );
              }, 0);
              const shiftCount = employeeShifts.length;

              return (
                <div key={employee.id} className="p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={cn(
                        "w-3 h-3 rounded-full",
                        employee.color.split(" ")[0],
                      )}
                    />
                    <p className="font-medium text-sm truncate">
                      {employee.name}
                    </p>
                  </div>
                  <p className="text-2xl font-bold">{totalHours.toFixed(0)}h</p>
                  <p className="text-xs text-gray-500">{shiftCount} shifts</p>
                  <div className="mt-2">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className={cn(
                          "h-2 rounded-full",
                          employee.color.split(" ")[0],
                        )}
                        style={{
                          width: `${Math.min((totalHours / 40) * 100, 100)}%`,
                        }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {((totalHours / 40) * 100).toFixed(0)}% of 40h
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card>
        <CardContent className="p-4">
          <p className="text-sm font-medium text-gray-700 mb-3">Team Members</p>
          <div className="flex flex-wrap gap-2">
            {employees.map((employee) => (
              <Badge key={employee.id} className={employee.color}>
                {employee.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
