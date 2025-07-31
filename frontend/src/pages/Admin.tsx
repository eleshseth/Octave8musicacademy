
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Guitar, Users, Music, BookOpen, TrendingUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Admin = () => {
  const { isAdmin, user } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/signin" replace />;
  }

  const stats = [
    { title: "Total Users", value: "12,543", icon: Users, change: "+12%" },
    { title: "Guitar Tabs", value: "10,234", icon: Music, change: "+5%" },
    { title: "Tutorials", value: "567", icon: BookOpen, change: "+8%" },
    { title: "Monthly Active", value: "8,921", icon: TrendingUp, change: "+15%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Guitar className="h-8 w-8 text-primary" />
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">Welcome back, {user?.name}</p>
            </div>
            <Button className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Content
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                  <p className="text-sm text-green-500 mt-1">{stat.change} from last month</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Activity */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: "New tab uploaded", item: "Stairway to Heaven", time: "2 hours ago" },
                { action: "User registered", item: "john.doe@email.com", time: "4 hours ago" },
                { action: "Tutorial published", item: "Beginner Chords", time: "6 hours ago" },
                { action: "Tab updated", item: "Hotel California", time: "1 day ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.item}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Music className="h-6 w-6" />
                <span className="text-sm">Add Tab</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <BookOpen className="h-6 w-6" />
                <span className="text-sm">New Tutorial</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Users className="h-6 w-6" />
                <span className="text-sm">Manage Users</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                <span className="text-sm">Analytics</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Management */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Content Management</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2">Title</th>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Views</th>
                  <th className="text-left py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { title: "Wonderwall - Oasis", type: "Tab", status: "Published", views: "1,234" },
                  { title: "Basic Strumming", type: "Tutorial", status: "Draft", views: "0" },
                  { title: "Sweet Child O' Mine", type: "Tab", status: "Published", views: "2,567" },
                  { title: "Chord Progressions", type: "Tutorial", status: "Published", views: "890" },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="py-3 font-medium">{item.title}</td>
                    <td className="py-3 text-muted-foreground">{item.type}</td>
                    <td className="py-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        item.status === 'Published' 
                          ? 'bg-green-500/10 text-green-500' 
                          : 'bg-orange-500/10 text-orange-500'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 text-muted-foreground">{item.views}</td>
                    <td className="py-3">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
