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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  Plus,
  Search,
  Mail,
  Phone,
  Building,
  MoreHorizontal,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  Filter,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const roles = [
  { value: "franchise_owner", label: "Franchise Owner" },
  { value: "above_store_team", label: "Above Store Team" },
  { value: "store_manager", label: "Store Manager" },
  { value: "assistant_manager", label: "Assistant Manager" },
  { value: "shift_leader", label: "Shift Leader" },
  { value: "team_member", label: "Team Member" },
];

const positions = [
  { value: "cashier", label: "Cashier" },
  { value: "cook", label: "Cook" },
  { value: "trainer", label: "Trainer" },
  { value: "shift leader", label: "Shift Leader" },
  { value: "gm", label: "General Manager" },
  { value: "above store", label: "Above Store" },
];

export default function EmployeesPage() {
  const employees = useQuery(api.employees.list);
  const stores = useQuery(api.stores.list);
  const createEmployee = useMutation(api.employees.create);
  const updateEmployeeStatus = useMutation(api.employees.updateStatus);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [roleFilter, setRoleFilter] = useState<string>("all");

  type RoleType =
    | "franchise_owner"
    | "above_store_team"
    | "store_manager"
    | "assistant_manager"
    | "shift_leader"
    | "team_member";
  type PositionType =
    | "cashier"
    | "cook"
    | "trainer"
    | "shift leader"
    | "gm"
    | "above store";

  const [newEmployee, setNewEmployee] = useState<{
    first: string;
    last: string;
    email: string;
    phone: string;
    role: RoleType | "";
    position: PositionType | "";
    storeId: string;
  }>({
    first: "",
    last: "",
    email: "",
    phone: "",
    role: "",
    position: "",
    storeId: "",
  });

  const handleCreateEmployee = async () => {
    if (!newEmployee.first || !newEmployee.last || !newEmployee.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      await createEmployee({
        first: newEmployee.first,
        last: newEmployee.last,
        email: newEmployee.email,
        phone: newEmployee.phone || undefined,
        role: newEmployee.role || (undefined as RoleType | undefined),
        position:
          newEmployee.position || (undefined as PositionType | undefined),
        storeId: newEmployee.storeId || undefined,
        status: "pending",
      });
      toast.success("Employee created successfully!");
      setIsDialogOpen(false);
      setNewEmployee({
        first: "",
        last: "",
        email: "",
        phone: "",
        role: "",
        position: "",
        storeId: "",
      });
    } catch (error) {
      toast.error("Failed to create employee");
    }
  };

  const handleStatusChange = async (
    employeeId: string,
    newStatus: "active" | "inactive" | "terminated",
  ) => {
    try {
      await updateEmployeeStatus({ id: employeeId as any, status: newStatus });
      toast.success(`Employee status updated to ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const filteredEmployees = employees?.filter((emp) => {
    const matchesSearch =
      searchQuery === "" ||
      `${emp.first} ${emp.last}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.eid.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || emp.status === statusFilter;
    const matchesRole = roleFilter === "all" || emp.role === roleFilter;

    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "inactive":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Inactive</Badge>
        );
      case "pending":
        return <Badge className="bg-blue-100 text-blue-800">Pending</Badge>;
      case "terminated":
        return <Badge className="bg-red-100 text-red-800">Terminated</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getRoleBadge = (role: string | undefined) => {
    if (!role) return null;
    const roleLabel = roles.find((r) => r.value === role)?.label || role;
    return <Badge variant="outline">{roleLabel}</Badge>;
  };

  const stats = {
    total: employees?.length || 0,
    active: employees?.filter((e) => e.status === "active").length || 0,
    pending: employees?.filter((e) => e.status === "pending").length || 0,
    inactive: employees?.filter((e) => e.status === "inactive").length || 0,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Employee Management
          </h1>
          <p className="text-gray-500">
            Manage your team members across all locations
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Employee
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
              <DialogDescription>
                Enter the employee details to add them to the system.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first">First Name *</Label>
                  <Input
                    id="first"
                    value={newEmployee.first}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, first: e.target.value })
                    }
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last">Last Name *</Label>
                  <Input
                    id="last"
                    value={newEmployee.last}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, last: e.target.value })
                    }
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={newEmployee.email}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, email: e.target.value })
                  }
                  placeholder="john.smith@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={newEmployee.phone}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, phone: e.target.value })
                  }
                  placeholder="(828) 555-1234"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Select
                    value={newEmployee.role}
                    onValueChange={(value) =>
                      setNewEmployee({
                        ...newEmployee,
                        role: value as RoleType,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Position</Label>
                  <Select
                    value={newEmployee.position}
                    onValueChange={(value) =>
                      setNewEmployee({
                        ...newEmployee,
                        position: value as PositionType,
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      {positions.map((pos) => (
                        <SelectItem key={pos.value} value={pos.value}>
                          {pos.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Store Assignment</Label>
                <Select
                  value={newEmployee.storeId}
                  onValueChange={(value) =>
                    setNewEmployee({ ...newEmployee, storeId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select store" />
                  </SelectTrigger>
                  <SelectContent>
                    {stores?.map((store) => (
                      <SelectItem key={store._id} value={store._id}>
                        {store.name} (#{store.storeNumber})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleCreateEmployee}
                className="bg-red-600 hover:bg-red-700"
              >
                Add Employee
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Employees
                </p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.active}
                </p>
              </div>
              <UserCheck className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <p className="text-2xl font-bold text-blue-600">
                  {stats.pending}
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Inactive</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {stats.inactive}
                </p>
              </div>
              <UserX className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, or employee ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="terminated">Terminated</SelectItem>
              </SelectContent>
            </Select>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                {roles.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Employee Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Store</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees?.map((employee) => (
                <TableRow key={employee._id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 font-medium">
                          {employee.first[0]}
                          {employee.last[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">
                          {employee.first} {employee.last}
                        </p>
                        <p className="text-sm text-gray-500">{employee.eid}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-3 w-3 mr-2 text-gray-400" />
                        {employee.email}
                      </div>
                      {employee.phone && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Phone className="h-3 w-3 mr-2 text-gray-400" />
                          {employee.phone}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {getRoleBadge(employee.role)}
                      {employee.position && (
                        <p className="text-sm text-gray-500 capitalize">
                          {employee.position}
                        </p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {employee.storeId ? (
                      <div className="flex items-center text-sm">
                        <Building className="h-3 w-3 mr-2 text-gray-400" />
                        {stores?.find((s) => s._id === employee.storeId)
                          ?.name || "Unknown"}
                      </div>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </TableCell>
                  <TableCell>{getStatusBadge(employee.status)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {employee.status !== "active" && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleStatusChange(employee._id, "active")
                            }
                          >
                            <UserCheck className="h-4 w-4 mr-2" />
                            Set Active
                          </DropdownMenuItem>
                        )}
                        {employee.status !== "inactive" && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleStatusChange(employee._id, "inactive")
                            }
                          >
                            <UserX className="h-4 w-4 mr-2" />
                            Set Inactive
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() =>
                            handleStatusChange(employee._id, "terminated")
                          }
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Terminate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredEmployees?.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-8 text-gray-500"
                  >
                    No employees found matching your criteria
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
