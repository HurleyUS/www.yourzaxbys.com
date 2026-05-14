"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Users,
  Store,
  TrendingUp,
  TrendingDown,
  Clock,
  AlertTriangle,
  CheckCircle,
  Calendar,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sample data - in production, this would come from Convex
const salesData = [
  { day: "Mon", sales: 12400, labor: 2800 },
  { day: "Tue", sales: 13200, labor: 3100 },
  { day: "Wed", sales: 11800, labor: 2600 },
  { day: "Thu", sales: 14500, labor: 3300 },
  { day: "Fri", sales: 18200, labor: 4100 },
  { day: "Sat", sales: 21000, labor: 4800 },
  { day: "Sun", sales: 16800, labor: 3900 },
];

const storePerformance = [
  { store: "#1234", sales: 245000, target: 230000 },
  { store: "#1235", sales: 198000, target: 210000 },
  { store: "#1236", sales: 312000, target: 280000 },
  { store: "#1237", sales: 167000, target: 175000 },
];

const employeeDistribution = [
  { name: "Team Members", value: 45, color: "#ef4444" },
  { name: "Shift Leaders", value: 12, color: "#f97316" },
  { name: "Managers", value: 6, color: "#eab308" },
  { name: "AST", value: 3, color: "#22c55e" },
];

export default function DashboardPage() {
  const { user } = useUser();
  const employees = useQuery(api.employees.list);
  const stores = useQuery(api.stores.list);

  const employeeCount = employees?.length || 0;
  const activeEmployees =
    employees?.filter((e) => e.status === "active").length || 0;
  const storeCount = stores?.length || 0;

  const stats = [
    {
      name: "Weekly Sales",
      value: "$108,000",
      change: "+12.3%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      name: "Active Stores",
      value: storeCount || 4,
      change: "+1",
      trend: "up",
      icon: Store,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      name: "Total Employees",
      value: employeeCount || 66,
      change: `${activeEmployees} active`,
      trend: "neutral",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      name: "Labor Cost %",
      value: "23.4%",
      change: "-2.1%",
      trend: "up",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const recentActivity = [
    {
      type: "audit",
      title: "Steritech Audit Completed",
      store: "#1234",
      score: 94,
      time: "2 hours ago",
    },
    {
      type: "employee",
      title: "New Employee Onboarded",
      name: "Sarah Johnson",
      time: "4 hours ago",
    },
    {
      type: "alert",
      title: "Labor Threshold Alert",
      store: "#1235",
      message: "26.2% labor cost",
      time: "5 hours ago",
    },
    {
      type: "schedule",
      title: "Schedule Published",
      store: "#1236",
      week: "Feb 10-16",
      time: "Yesterday",
    },
  ];

  const upcomingTasks = [
    {
      title: "Health Department Inspection",
      store: "#1234",
      date: "Feb 8",
      priority: "high",
    },
    {
      title: "Quarterly Training Review",
      store: "All Stores",
      date: "Feb 15",
      priority: "medium",
    },
    {
      title: "Equipment Maintenance",
      store: "#1237",
      date: "Feb 12",
      priority: "low",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold">
          Welcome back, {user?.firstName || "Franchise Owner"}!
        </h1>
        <p className="text-red-100 mt-1">
          Here's what's happening across your franchise today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.trend === "up" && (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    )}
                    {stat.trend === "down" && (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={`text-sm ${stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-gray-500"}`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Sales & Labor</CardTitle>
            <CardDescription>
              Sales performance vs labor costs this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) =>
                      value != null ? `$${Number(value).toLocaleString()}` : ""
                    }
                  />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stackId="1"
                    stroke="#ef4444"
                    fill="#fecaca"
                    name="Sales"
                  />
                  <Area
                    type="monotone"
                    dataKey="labor"
                    stackId="2"
                    stroke="#f97316"
                    fill="#fed7aa"
                    name="Labor"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Store Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Store Performance</CardTitle>
            <CardDescription>Monthly sales vs targets by store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={storePerformance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    type="number"
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <YAxis type="category" dataKey="store" />
                  <Tooltip
                    formatter={(value) =>
                      value != null ? `$${Number(value).toLocaleString()}` : ""
                    }
                  />
                  <Bar dataKey="target" fill="#e5e7eb" name="Target" />
                  <Bar dataKey="sales" fill="#ef4444" name="Sales" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity and Tasks Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest updates across your franchise
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`p-2 rounded-lg ${
                      activity.type === "audit"
                        ? "bg-green-100"
                        : activity.type === "employee"
                          ? "bg-blue-100"
                          : activity.type === "alert"
                            ? "bg-red-100"
                            : "bg-purple-100"
                    }`}
                  >
                    {activity.type === "audit" && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                    {activity.type === "employee" && (
                      <Users className="h-5 w-5 text-blue-600" />
                    )}
                    {activity.type === "alert" && (
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    )}
                    {activity.type === "schedule" && (
                      <Calendar className="h-5 w-5 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {activity.store && `Store ${activity.store}`}
                      {activity.name && activity.name}
                      {activity.score && ` • Score: ${activity.score}`}
                      {activity.message && ` • ${activity.message}`}
                      {activity.week && ` • ${activity.week}`}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Items requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg border"
                >
                  <div
                    className={`w-2 h-2 mt-2 rounded-full ${
                      task.priority === "high"
                        ? "bg-red-500"
                        : task.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{task.title}</p>
                    <p className="text-xs text-gray-500">{task.store}</p>
                    <p className="text-xs text-gray-400 mt-1">{task.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Tasks
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Employee Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Employee Distribution</CardTitle>
            <CardDescription>Team breakdown by role</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={employeeDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {employeeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {employeeDistribution.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs text-gray-600">
                    {item.name}: {item.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/dashboard/employees">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-center">
                  <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                  <p className="text-sm font-medium">Add Employee</p>
                </div>
              </Link>
              <Link href="/dashboard/schedule">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-center">
                  <Calendar className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                  <p className="text-sm font-medium">Create Schedule</p>
                </div>
              </Link>
              <Link href="/dashboard/reports">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-center">
                  <BarChart3 className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <p className="text-sm font-medium">View Reports</p>
                </div>
              </Link>
              <Link href="/dashboard/stores">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-center">
                  <Store className="h-8 w-8 mx-auto text-orange-600 mb-2" />
                  <p className="text-sm font-medium">Manage Stores</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
