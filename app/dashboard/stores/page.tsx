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
  Store,
  Plus,
  MapPin,
  Phone,
  Users,
  TrendingUp,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export default function StoresPage() {
  const stores = useQuery(api.stores.list);
  const createStore = useMutation(api.stores.create);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newStore, setNewStore] = useState({
    name: "",
    storeNumber: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const handleCreateStore = async () => {
    try {
      await createStore({
        ...newStore,
        status: "active",
      });
      toast.success("Store created successfully!");
      setIsDialogOpen(false);
      setNewStore({
        name: "",
        storeNumber: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
      });
    } catch (error) {
      toast.error("Failed to create store");
    }
  };

  // Sample KPIs for stores
  const storeMetrics = [
    {
      storeNumber: "#1234",
      weeklySales: 45200,
      laborCost: 22.3,
      auditScore: 94,
    },
    {
      storeNumber: "#1235",
      weeklySales: 38900,
      laborCost: 26.1,
      auditScore: 88,
    },
    {
      storeNumber: "#1236",
      weeklySales: 52100,
      laborCost: 21.8,
      auditScore: 96,
    },
    {
      storeNumber: "#1237",
      weeklySales: 41500,
      laborCost: 24.2,
      auditScore: 91,
    },
  ];

  const getMetrics = (storeNumber: string) => {
    return (
      storeMetrics.find((m) => m.storeNumber === `#${storeNumber}`) || {
        weeklySales: 0,
        laborCost: 0,
        auditScore: 0,
      }
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Store Management</h1>
          <p className="text-gray-500">Manage all your franchise locations</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Store
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Store</DialogTitle>
              <DialogDescription>
                Enter the details for the new store location.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Store Name</Label>
                  <Input
                    id="name"
                    value={newStore.name}
                    onChange={(e) =>
                      setNewStore({ ...newStore, name: e.target.value })
                    }
                    placeholder="Zaxby's Waynesville"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeNumber">Store Number</Label>
                  <Input
                    id="storeNumber"
                    value={newStore.storeNumber}
                    onChange={(e) =>
                      setNewStore({ ...newStore, storeNumber: e.target.value })
                    }
                    placeholder="1234"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  value={newStore.address}
                  onChange={(e) =>
                    setNewStore({ ...newStore, address: e.target.value })
                  }
                  placeholder="123 Main St"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={newStore.city}
                    onChange={(e) =>
                      setNewStore({ ...newStore, city: e.target.value })
                    }
                    placeholder="Waynesville"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={newStore.state}
                    onChange={(e) =>
                      setNewStore({ ...newStore, state: e.target.value })
                    }
                    placeholder="NC"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP</Label>
                  <Input
                    id="zip"
                    value={newStore.zip}
                    onChange={(e) =>
                      setNewStore({ ...newStore, zip: e.target.value })
                    }
                    placeholder="28786"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={newStore.phone}
                  onChange={(e) =>
                    setNewStore({ ...newStore, phone: e.target.value })
                  }
                  placeholder="(828) 555-1234"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleCreateStore}
                className="bg-red-600 hover:bg-red-700"
              >
                Create Store
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Stores
                </p>
                <p className="text-2xl font-bold">{stores?.length || 0}</p>
              </div>
              <Store className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Weekly Revenue
                </p>
                <p className="text-2xl font-bold">$177.7K</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Avg Labor Cost
                </p>
                <p className="text-2xl font-bold">23.6%</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Avg Audit Score
                </p>
                <p className="text-2xl font-bold">92.3</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores?.map((store) => {
          const metrics = getMetrics(store.storeNumber);
          return (
            <Card key={store._id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{store.name}</CardTitle>
                    <CardDescription>
                      Store #{store.storeNumber}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={
                      store.status === "active" ? "default" : "secondary"
                    }
                  >
                    {store.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {store.address}, {store.city}, {store.state} {store.zip}
                  </div>
                  {store.phone && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {store.phone}
                    </div>
                  )}

                  <div className="border-t pt-3 mt-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-xs text-gray-500">Weekly Sales</p>
                        <p className="font-semibold">
                          ${(metrics.weeklySales / 1000).toFixed(1)}K
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Labor %</p>
                        <p
                          className={`font-semibold ${metrics.laborCost > 25 ? "text-red-600" : "text-green-600"}`}
                        >
                          {metrics.laborCost}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Audit</p>
                        <p
                          className={`font-semibold ${metrics.auditScore >= 90 ? "text-green-600" : metrics.auditScore >= 80 ? "text-yellow-600" : "text-red-600"}`}
                        >
                          {metrics.auditScore}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Add Store Card */}
        <Card
          className="border-dashed hover:border-red-300 transition-colors cursor-pointer"
          onClick={() => setIsDialogOpen(true)}
        >
          <CardContent className="flex flex-col items-center justify-center h-full min-h-[250px] text-gray-400 hover:text-red-500">
            <Plus className="h-12 w-12 mb-2" />
            <p className="font-medium">Add New Store</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
