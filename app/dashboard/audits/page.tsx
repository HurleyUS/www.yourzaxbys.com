"use client";

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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ClipboardCheck,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Eye,
  FileText,
  Calendar,
  Store,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Sample audit data
const recentAudits = [
  {
    id: 1,
    store: "#1234",
    type: "steritech",
    score: 94,
    maxScore: 100,
    date: "2024-02-01",
    inspector: "John Smith",
    status: "passed",
    criticalFindings: 0,
    majorFindings: 1,
    minorFindings: 3,
  },
  {
    id: 2,
    store: "#1235",
    type: "health_department",
    score: 88,
    maxScore: 100,
    date: "2024-01-28",
    inspector: "Sarah Johnson",
    status: "passed",
    criticalFindings: 0,
    majorFindings: 2,
    minorFindings: 4,
  },
  {
    id: 3,
    store: "#1236",
    type: "steritech",
    score: 96,
    maxScore: 100,
    date: "2024-01-25",
    inspector: "Mike Williams",
    status: "passed",
    criticalFindings: 0,
    majorFindings: 0,
    minorFindings: 2,
  },
  {
    id: 4,
    store: "#1237",
    type: "internal",
    score: 78,
    maxScore: 100,
    date: "2024-01-22",
    inspector: "Emily Davis",
    status: "needs_improvement",
    criticalFindings: 1,
    majorFindings: 3,
    minorFindings: 5,
  },
  {
    id: 5,
    store: "#1234",
    type: "rer",
    score: 91,
    maxScore: 100,
    date: "2024-01-20",
    inspector: "James Brown",
    status: "passed",
    criticalFindings: 0,
    majorFindings: 1,
    minorFindings: 4,
  },
];

const auditTrends = [
  { month: "Aug", steritech: 88, health: 85, internal: 82 },
  { month: "Sep", steritech: 90, health: 87, internal: 85 },
  { month: "Oct", steritech: 89, health: 88, internal: 84 },
  { month: "Nov", steritech: 92, health: 90, internal: 87 },
  { month: "Dec", steritech: 91, health: 89, internal: 88 },
  { month: "Jan", steritech: 94, health: 91, internal: 90 },
];

const storeScores = [
  { store: "#1234", score: 94 },
  { store: "#1235", score: 88 },
  { store: "#1236", score: 96 },
  { store: "#1237", score: 78 },
];

const caps = [
  {
    id: 1,
    store: "#1237",
    auditType: "internal",
    finding: "Temperature logs not maintained properly",
    severity: "critical",
    dueDate: "2024-02-15",
    status: "in_progress",
    assignedTo: "Store Manager",
  },
  {
    id: 2,
    store: "#1235",
    auditType: "health_department",
    finding: "Handwashing station supplies low",
    severity: "major",
    dueDate: "2024-02-10",
    status: "pending",
    assignedTo: "Shift Leader",
  },
  {
    id: 3,
    store: "#1234",
    auditType: "steritech",
    finding: "Floor grout needs deep cleaning",
    severity: "minor",
    dueDate: "2024-02-20",
    status: "completed",
    assignedTo: "Team Member",
  },
];

export default function AuditsPage() {
  const [selectedStore, setSelectedStore] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "passed":
        return <Badge className="bg-green-100 text-green-800">Passed</Badge>;
      case "needs_improvement":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            Needs Improvement
          </Badge>
        );
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "steritech":
        return (
          <Badge variant="outline" className="border-blue-300 text-blue-700">
            Steritech
          </Badge>
        );
      case "health_department":
        return (
          <Badge variant="outline" className="border-green-300 text-green-700">
            Health Dept
          </Badge>
        );
      case "internal":
        return (
          <Badge
            variant="outline"
            className="border-purple-300 text-purple-700"
          >
            Internal
          </Badge>
        );
      case "rer":
        return (
          <Badge
            variant="outline"
            className="border-orange-300 text-orange-700"
          >
            RER
          </Badge>
        );
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge className="bg-red-100 text-red-800">Critical</Badge>;
      case "major":
        return <Badge className="bg-orange-100 text-orange-800">Major</Badge>;
      case "minor":
        return <Badge className="bg-yellow-100 text-yellow-800">Minor</Badge>;
      default:
        return <Badge variant="secondary">{severity}</Badge>;
    }
  };

  const getCapStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "overdue":
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Audits & Corrective Action Plans
          </h1>
          <p className="text-gray-500">
            Track audit scores and manage corrective actions
          </p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Plus className="h-4 w-4 mr-2" />
          Record Audit
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Avg Steritech
                </p>
                <p className="text-2xl font-bold text-green-600">94</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xs text-green-600 mt-2">+3 vs last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Avg Health Dept
                </p>
                <p className="text-2xl font-bold">91</p>
              </div>
              <ClipboardCheck className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-xs text-green-600 mt-2">+2 vs last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Open CAPs</p>
                <p className="text-2xl font-bold text-orange-600">5</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
            <p className="text-xs text-orange-600 mt-2">2 due this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Next Audit</p>
                <p className="text-2xl font-bold">Feb 15</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Store #1235 - Steritech
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="audits" className="space-y-4">
        <TabsList>
          <TabsTrigger value="audits">Recent Audits</TabsTrigger>
          <TabsTrigger value="caps">Corrective Actions</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        {/* Audits Tab */}
        <TabsContent value="audits" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Select value={selectedStore} onValueChange={setSelectedStore}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select store" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Stores</SelectItem>
                    <SelectItem value="1234">Store #1234</SelectItem>
                    <SelectItem value="1235">Store #1235</SelectItem>
                    <SelectItem value="1236">Store #1236</SelectItem>
                    <SelectItem value="1237">Store #1237</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Audit type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="steritech">Steritech</SelectItem>
                    <SelectItem value="health_department">
                      Health Department
                    </SelectItem>
                    <SelectItem value="internal">Internal</SelectItem>
                    <SelectItem value="rer">RER</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Store</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Inspector</TableHead>
                    <TableHead>Findings</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAudits.map((audit) => (
                    <TableRow key={audit.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Store className="h-4 w-4 text-gray-400" />
                          <span className="font-medium">{audit.store}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getTypeBadge(audit.type)}</TableCell>
                      <TableCell>
                        <span
                          className={`font-bold ${
                            audit.score >= 90
                              ? "text-green-600"
                              : audit.score >= 80
                                ? "text-yellow-600"
                                : "text-red-600"
                          }`}
                        >
                          {audit.score}/{audit.maxScore}
                        </span>
                      </TableCell>
                      <TableCell>
                        {new Date(audit.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{audit.inspector}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {audit.criticalFindings > 0 && (
                            <Badge className="bg-red-100 text-red-800 text-xs">
                              {audit.criticalFindings}C
                            </Badge>
                          )}
                          {audit.majorFindings > 0 && (
                            <Badge className="bg-orange-100 text-orange-800 text-xs">
                              {audit.majorFindings}M
                            </Badge>
                          )}
                          {audit.minorFindings > 0 && (
                            <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                              {audit.minorFindings}m
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(audit.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CAPs Tab */}
        <TabsContent value="caps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Open Corrective Action Plans</CardTitle>
              <CardDescription>
                Track and manage required corrections from audits
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Store</TableHead>
                    <TableHead>Finding</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {caps.map((cap) => (
                    <TableRow key={cap.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Store className="h-4 w-4 text-gray-400" />
                          <span className="font-medium">{cap.store}</span>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[300px]">
                        <p className="truncate">{cap.finding}</p>
                      </TableCell>
                      <TableCell>{getSeverityBadge(cap.severity)}</TableCell>
                      <TableCell>
                        {new Date(cap.dueDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{cap.assignedTo}</TableCell>
                      <TableCell>{getCapStatusBadge(cap.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Audit Score Trends</CardTitle>
                <CardDescription>
                  6-month rolling average by audit type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={auditTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[70, 100]} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="steritech"
                        stroke="#3b82f6"
                        name="Steritech"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="health"
                        stroke="#22c55e"
                        name="Health Dept"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="internal"
                        stroke="#8b5cf6"
                        name="Internal"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Score by Store</CardTitle>
                <CardDescription>
                  Latest audit scores comparison
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={storeScores}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="store" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Bar
                        dataKey="score"
                        fill="#ef4444"
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
