import { motion } from "framer-motion";
import { Plus, Search, Filter, MoreHorizontal, ExternalLink, GitBranch, Clock, Trash2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "my-portfolio",
      url: "my-portfolio.skydeploy.app",
      status: "Ready",
      lastDeployed: "2 hours ago",
      framework: "React",
      git: "github.com/user/my-portfolio",
      deployments: 24,
      visitors: "1.2k"
    },
    {
      id: 2,
      name: "e-commerce-store", 
      url: "store.skydeploy.app",
      status: "Building",
      lastDeployed: "5 minutes ago",
      framework: "Next.js",
      git: "github.com/user/e-commerce",
      deployments: 45,
      visitors: "3.8k"
    },
    {
      id: 3,
      name: "blog-site",
      url: "blog.skydeploy.app", 
      status: "Error",
      lastDeployed: "1 day ago",
      framework: "Vue.js",
      git: "github.com/user/blog",
      deployments: 12,
      visitors: "890"
    },
    {
      id: 4,
      name: "landing-page",
      url: "landing.skydeploy.app",
      status: "Ready", 
      lastDeployed: "3 hours ago",
      framework: "Astro",
      git: "github.com/user/landing",
      deployments: 8,
      visitors: "2.1k"
    },
    {
      id: 5,
      name: "dashboard-app",
      url: "dashboard.skydeploy.app",
      status: "Ready",
      lastDeployed: "1 day ago", 
      framework: "Svelte",
      git: "github.com/user/dashboard",
      deployments: 33,
      visitors: "567"
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
                <Link to="/dashboard" className="text-gray-400 hover:text-white">Overview</Link>
                <Link to="/projects" className="text-white font-medium">Projects</Link>
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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold mb-2">Projects</h1>
            <p className="text-gray-400">Manage and deploy your applications</p>
          </div>
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
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="glass border-white/10 glass-hover group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {project.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-black/90 border-white/10">
                        <DropdownMenuItem>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Site
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="w-4 h-4 mr-2" />
                          Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold text-white mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{project.url}</p>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Framework</span>
                      <span className="text-white">{project.framework}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Deployments</span>
                      <span className="text-white">{project.deployments}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Visitors</span>
                      <span className="text-white">{project.visitors}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center text-xs text-gray-500">
                      <GitBranch className="w-3 h-3 mr-1" />
                      {project.git.split('/').pop()}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {project.lastDeployed}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;