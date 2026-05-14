"use client";

import { useQuery } from "convex/react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Clock,
  Utensils,
  Download,
  Calendar,
  Filter,
  Store,
  Percent,
} from "lucide-react";
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
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Sample data for reports
const salesTrendData = [
  { month: "Jan", sales: 145000, lastYear: 138000 },
  { month: "Feb", sales: 152000, lastYear: 142000 },
  { month: "Mar", sales: 168000, lastYear: 155000 },
  { month: "Apr", sales: 175000, lastYear: 160000 },
  { month: "May", sales: 182000, lastYear: 168000 },
  { month: "Jun", sales: 195000, lastYear: 175000 },
  { month: "Jul", sales: 210000, lastYear: 188000 },
  { month: "Aug", sales: 205000, lastYear: 192000 },
  { month: "Sep", sales: 188000, lastYear: 178000 },
  { month: "Oct", sales: 198000, lastYear: 185000 },
  { month: "Nov", sales: 215000, lastYear: 195000 },
  { month: "Dec", sales: 235000, lastYear: 210000 },
];

const laborData = [
  { week: "W1", labor: 22.5, target: 24 },
  { week: "W2", labor: 23.8, target: 24 },
  { week: "W3", labor: 21.2, target: 24 },
  { week: "W4", labor: 25.1, target: 24 },
  { week: "W5", labor: 23.4, target: 24 },
  { week: "W6", labor: 22.8, target: 24 },
  { week: "W7", labor: 24.2, target: 24 },
  { week: "W8", labor: 23.1, target: 24 },
];

const wasteData = [
  { category: "Chicken", waste: 2.8, value: 1250 },
  { category: "Produce", waste: 1.5, value: 420 },
  { category: "Bread", waste: 0.8, value: 180 },
  { category: "Sauces", waste: 0.4, value: 95 },
  { category: "Other", waste: 0.5, value: 110 },
];

const storeComparisonData = [
  { store: "#1234", sales: 52100, labor: 22.3, waste: 2.1, audit: 94 },
  { store: "#1235", sales: 45200, labor: 26.1, waste: 3.2, audit: 88 },
  { store: "#1236", sales: 58900, labor: 21.8, waste: 1.8, audit: 96 },
  { store: "#1237", sales: 41500, labor: 24.2, waste: 2.5, audit: 91 },
];

const hourlyPerformance = [
  { hour: "10am", sales: 850, transactions: 42 },
  { hour: "11am", sales: 1450, transactions: 72 },
  { hour: "12pm", sales: 2800, transactions: 140 },
  { hour: "1pm", sales: 2650, transactions: 132 },
  { hour: "2pm", sales: 1200, transactions: 60 },
  { hour: "3pm", sales: 950, transactions: 48 },
  { hour: "4pm", sales: 1100, transactions: 55 },
  { hour: "5pm", sales: 1850, transactions: 92 },
  { hour: "6pm", sales: 2400, transactions: 120 },
  { hour: "7pm", sales: 2200, transactions: 110 },
  { hour: "8pm", sales: 1650, transactions: 82 },
  { hour: "9pm", sales: 980, transactions: 49 },
];

const categoryBreakdown = [
  { name: "Chicken Fingers", value: 35, color: "#ef4444" },
  { name: "Wings", value: 25, color: "#f97316" },
  { name: "Salads", value: 15, color: "#22c55e" },
  { name: "Sandwiches", value: 12, color: "#3b82f6" },
  { name: "Sides", value: 8, color: "#8b5cf6" },
  { name: "Beverages", value: 5, color: "#06b6d4" },
];

export default function ReportsPage() {
  const stores = useQuery(api.stores.list);
  const [selectedStore, setSelectedStore] = useState<string>("all");
  const [dateRange, setDateRange] = useState<string>("30d");

  const kpis = [
    {
      title: "Total Revenue",
      value: "$2.27M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Avg Labor Cost",
      value: "23.4%",
      change: "-1.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Total Transactions",
      value: "45,230",
      change: "+8.3%",
      trend: "up",
      icon: BarChart3,
      color: "text-purple-600",
    },
    {
      title: "Waste Rate",
      value: "2.3%",
      change: "-0.4%",
      trend: "up",
      icon: Utensils,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Reports & Analytics
          </h1>
          <p className="text-gray-500">
            Performance insights across your franchise
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedStore} onValueChange={setSelectedStore}>
            <SelectTrigger className="w-[180px]">
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
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="ytd">Year to date</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {kpi.title}
                  </p>
                  <p className="text-2xl font-bold mt-1">{kpi.value}</p>
                  <div className="flex items-center mt-1">
                    {kpi.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={`text-sm ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`}
                    >
                      {kpi.change} vs last period
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gray-100 ${kpi.color}`}>
                  <kpi.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Tabs */}
      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="labor">Labor</TabsTrigger>
          <TabsTrigger value="waste">Waste</TabsTrigger>
          <TabsTrigger value="comparison">Store Comparison</TabsTrigger>
        </TabsList>

        {/* Sales Tab */}
        <TabsContent value="sales" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales Trend</CardTitle>
                <CardDescription>Monthly sales vs last year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis
                        tickFormatter={(value) =>
                          `$${(value / 1000).toFixed(0)}k`
                        }
                      />
                      <Tooltip
                        formatter={(value) =>
                          value != null
                            ? `$${Number(value).toLocaleString()}`
                            : ""
                        }
                      />
                      <Area
                        type="monotone"
                        dataKey="lastYear"
                        stackId="1"
                        stroke="#94a3b8"
                        fill="#e2e8f0"
                        name="Last Year"
                      />
                      <Area
                        type="monotone"
                        dataKey="sales"
                        stackId="2"
                        stroke="#ef4444"
                        fill="#fecaca"
                        name="This Year"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hourly Performance</CardTitle>
                <CardDescription>
                  Sales and transactions by hour
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={hourlyPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis
                        yAxisId="left"
                        tickFormatter={(value) => `$${value}`}
                      />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Bar
                        yAxisId="left"
                        dataKey="sales"
                        fill="#ef4444"
                        name="Sales ($)"
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="transactions"
                        stroke="#3b82f6"
                        name="Transactions"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Category Breakdown</CardTitle>
              <CardDescription>
                Sales distribution by menu category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {categoryBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) =>
                          value != null ? `${value}%` : ""
                        }
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {categoryBreakdown.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold">{category.value}%</span>
                        <span className="text-gray-500 ml-2">
                          ${((category.value / 100) * 227000).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Labor Tab */}
        <TabsContent value="labor" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Labor Cost Trend</CardTitle>
              <CardDescription>
                Weekly labor percentage vs target
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={laborData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis
                      domain={[18, 28]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      formatter={(value) => (value != null ? `${value}%` : "")}
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#94a3b8"
                      strokeDasharray="5 5"
                      name="Target"
                    />
                    <Line
                      type="monotone"
                      dataKey="labor"
                      stroke="#ef4444"
                      strokeWidth={2}
                      name="Actual"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Total Labor Hours</p>
                    <p className="text-2xl font-bold">1,248</p>
                  </div>
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-sm text-gray-500">
                  This week across all stores
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Avg Hourly Rate</p>
                    <p className="text-2xl font-bold">$12.85</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-500" />
                </div>
                <p className="text-sm text-green-600">+$0.35 vs last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Overtime Hours</p>
                    <p className="text-2xl font-bold text-orange-600">42</p>
                  </div>
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <p className="text-sm text-orange-600">Above threshold</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Waste Tab */}
        <TabsContent value="waste" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Waste by Category</CardTitle>
              <CardDescription>
                Breakdown of waste by product category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={wasteData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      type="number"
                      tickFormatter={(value) => `${value}%`}
                    />
                    <YAxis type="category" dataKey="category" width={80} />
                    <Tooltip
                      formatter={(value, name, props) => [
                        name === "waste" ? `${value}%` : `$${value}`,
                        name === "waste" ? "Waste Rate" : "Value Lost",
                      ]}
                    />
                    <Bar dataKey="waste" fill="#ef4444" name="Waste Rate" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Waste Value</CardTitle>
                <CardDescription>
                  Cost of wasted inventory this period
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-5xl font-bold text-red-600">$2,055</p>
                  <p className="text-gray-500 mt-2">
                    Total waste value this month
                  </p>
                  <div className="mt-4 flex justify-center gap-4">
                    <Badge variant="outline" className="text-green-600">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      -12% vs last month
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Waste Reduction Goals</CardTitle>
                <CardDescription>
                  Progress toward monthly targets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {wasteData.map((item) => (
                    <div key={item.category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.category}</span>
                        <span>{item.waste}% / 2% target</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className={`h-2 rounded-full ${
                            item.waste <= 2 ? "bg-green-500" : "bg-red-500"
                          }`}
                          style={{
                            width: `${Math.min((item.waste / 5) * 100, 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Store Comparison Tab */}
        <TabsContent value="comparison" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Store Performance Comparison</CardTitle>
              <CardDescription>
                Key metrics across all locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Store</th>
                      <th className="text-right py-3 px-4 font-medium">
                        Weekly Sales
                      </th>
                      <th className="text-right py-3 px-4 font-medium">
                        Labor %
                      </th>
                      <th className="text-right py-3 px-4 font-medium">
                        Waste %
                      </th>
                      <th className="text-right py-3 px-4 font-medium">
                        Audit Score
                      </th>
                      <th className="text-center py-3 px-4 font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {storeComparisonData.map((store) => (
                      <tr
                        key={store.store}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Store className="h-4 w-4 text-gray-400" />
                            <span className="font-medium">{store.store}</span>
                          </div>
                        </td>
                        <td className="text-right py-3 px-4 font-medium">
                          ${store.sales.toLocaleString()}
                        </td>
                        <td className="text-right py-3 px-4">
                          <span
                            className={`font-medium ${
                              store.labor <= 24
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {store.labor}%
                          </span>
                        </td>
                        <td className="text-right py-3 px-4">
                          <span
                            className={`font-medium ${
                              store.waste <= 2.5
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {store.waste}%
                          </span>
                        </td>
                        <td className="text-right py-3 px-4">
                          <span
                            className={`font-medium ${
                              store.audit >= 90
                                ? "text-green-600"
                                : store.audit >= 80
                                  ? "text-yellow-600"
                                  : "text-red-600"
                            }`}
                          >
                            {store.audit}
                          </span>
                        </td>
                        <td className="text-center py-3 px-4">
                          {store.labor <= 24 &&
                          store.waste <= 2.5 &&
                          store.audit >= 90 ? (
                            <Badge className="bg-green-100 text-green-800">
                              Excellent
                            </Badge>
                          ) : store.labor > 25 ||
                            store.waste > 3 ||
                            store.audit < 85 ? (
                            <Badge className="bg-red-100 text-red-800">
                              Needs Attention
                            </Badge>
                          ) : (
                            <Badge className="bg-yellow-100 text-yellow-800">
                              Good
                            </Badge>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Store</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={storeComparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="store" />
                      <YAxis
                        tickFormatter={(value) =>
                          `$${(value / 1000).toFixed(0)}k`
                        }
                      />
                      <Tooltip
                        formatter={(value) =>
                          value != null
                            ? `$${Number(value).toLocaleString()}`
                            : ""
                        }
                      />
                      <Bar dataKey="sales" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audit Scores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={storeComparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="store" />
                      <YAxis domain={[70, 100]} />
                      <Tooltip />
                      <Bar
                        dataKey="audit"
                        fill="#22c55e"
                        label={{ position: "top", fill: "#374151" }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
