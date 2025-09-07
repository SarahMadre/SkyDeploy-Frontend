import { motion } from "framer-motion";
import { Plus, GitBranch, Clock, ExternalLink, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const projects = [
    {
      id: 1,
      name: "my-portfolio",
      url: "my-portfolio.skydeploy.app",
      status: "Ready",
      lastDeployed: "2 hours ago",
      framework: "React",
      git: "github.com/user/my-portfolio"
    },
    {
      id: 2,
      name: "e-commerce-store",
      url: "store.skydeploy.app",
      status: "Building",
      lastDeployed: "5 minutes ago",
      framework: "Next.js",
      git: "github.com/user/e-commerce"
    },
    {
      id: 3,
      name: "blog-site",
      url: "blog.skydeploy.app",
      status: "Error",
      lastDeployed: "1 day ago",
      framework: "Vue.js",
      git: "github.com/user/blog"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready": return "bg-primary/20 text-primary border-primary/50";
      case "Building": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      case "Error": return "bg-red-500/20 text-red-400 border-red-500/50";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-xl font-bold text-gradient">Skydeploy</Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/dashboard" className="text-white font-medium">Overview</Link>
                <Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link>
                <Link to="/domains" className="text-gray-400 hover:text-white">Domains</Link>
                <Link to="/analytics" className="text-gray-400 hover:text-white">Analytics</Link>
                <Link to="/settings" className="text-gray-400 hover:text-white">Settings</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/new">
                <Button className="button-gradient">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-gray-400">Deploy and manage your projects with ease</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { label: "Total Projects", value: "12", change: "+2 this week" },
            { label: "Successful Deployments", value: "847", change: "+23 today" },
            { label: "Custom Domains", value: "5", change: "+1 this month" },
            { label: "Team Members", value: "3", change: "No change" }
          ].map((stat, index) => (
            <Card key={stat.label} className="glass border-white/10">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Projects</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10 bg-white/5 border-white/10 w-64"
                />
              </div>
              <Button variant="outline" size="sm" className="border-white/10">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id} className="glass border-white/10 glass-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {project.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{project.name}</h3>
                        <p className="text-sm text-gray-400">{project.url}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center text-xs text-gray-500">
                            <GitBranch className="w-3 h-3 mr-1" />
                            {project.git.split('/').pop()}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {project.lastDeployed}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <span className="text-xs text-gray-500">{project.framework}</span>
                      <Button variant="ghost" size="sm" className="text-gray-400">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link to="/projects">
              <Button variant="outline" className="border-white/10">
                View All Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;