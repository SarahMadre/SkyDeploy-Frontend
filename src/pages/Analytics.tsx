import { motion } from "framer-motion";
import { TrendingUp, Users, Globe, Eye, Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Analytics = () => {
  const projects = [
    { name: "my-portfolio", visitors: "12.4k", change: "+23%" },
    { name: "e-commerce-store", visitors: "8.7k", change: "+15%" },
    { name: "blog-site", visitors: "3.2k", change: "-5%" },
    { name: "landing-page", visitors: "2.1k", change: "+8%" }
  ];

  const topPages = [
    { page: "/", views: "4.2k", bounce: "32%" },
    { page: "/products", views: "2.8k", bounce: "28%" },
    { page: "/about", views: "1.9k", bounce: "45%" },
    { page: "/contact", views: "1.1k", bounce: "52%" },
    { page: "/blog", views: "0.9k", bounce: "38%" }
  ];

  const countries = [
    { country: "United States", flag: "🇺🇸", visitors: "5.2k", percentage: "42%" },
    { country: "United Kingdom", flag: "🇬🇧", visitors: "2.1k", percentage: "17%" },
    { country: "Germany", flag: "🇩🇪", visitors: "1.8k", percentage: "15%" },
    { country: "France", flag: "🇫🇷", visitors: "1.2k", percentage: "10%" },
    { country: "Canada", flag: "🇨🇦", visitors: "0.9k", percentage: "7%" }
  ];

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
                <Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link>
                <Link to="/domains" className="text-gray-400 hover:text-white">Domains</Link>
                <Link to="/analytics" className="text-white font-medium">Analytics</Link>
                <Link to="/settings" className="text-gray-400 hover:text-white">Settings</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="30d">
                <SelectTrigger className="w-32 bg-white/5 border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/10">
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-white/10">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-gray-400">Track your projects' performance and visitor insights</p>
        </motion.div>

        {/* Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { 
              label: "Total Visitors", 
              value: "27.3k", 
              change: "+12.3%", 
              icon: Users,
              trend: "up" 
            },
            { 
              label: "Page Views", 
              value: "84.2k", 
              change: "+8.7%", 
              icon: Eye,
              trend: "up" 
            },
            { 
              label: "Bounce Rate", 
              value: "34.2%", 
              change: "-2.1%", 
              icon: TrendingUp,
              trend: "down" 
            },
            { 
              label: "Avg. Session", 
              value: "2m 45s", 
              change: "+15.2%", 
              icon: Calendar,
              trend: "up" 
            }
          ].map((stat, index) => (
            <Card key={stat.label} className="glass border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <Badge 
                    className={
                      stat.trend === "up" 
                        ? "bg-primary/20 text-primary border-primary/50" 
                        : "bg-red-500/20 text-red-400 border-red-500/50"
                    }
                  >
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8"
        >
          {/* Visitors Chart */}
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle>Visitors Over Time</CardTitle>
              <CardDescription>Daily unique visitors for the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-1">
                {Array.from({ length: 30 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-primary to-primary/50 rounded-t"
                    style={{ 
                      height: `${Math.random() * 80 + 20}%`,
                      width: '100%'
                    }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Countries */}
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle>Top Countries</CardTitle>
              <CardDescription>Visitors by geographic location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {countries.map((country, index) => (
                  <div key={country.country} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{country.flag}</span>
                      <div>
                        <div className="font-medium text-white">{country.country}</div>
                        <div className="text-sm text-gray-400">{country.percentage} of traffic</div>
                      </div>
                    </div>
                    <div className="text-white font-medium">{country.visitors}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Detailed Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
        >
          {/* Project Performance */}
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle>Project Performance</CardTitle>
              <CardDescription>Visitor statistics by project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={project.name} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {project.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-white">{project.name}</div>
                        <div className="text-sm text-gray-400">{project.visitors} visitors</div>
                      </div>
                    </div>
                    <Badge 
                      className={
                        project.change.startsWith('+') 
                          ? "bg-primary/20 text-primary border-primary/50" 
                          : "bg-red-500/20 text-red-400 border-red-500/50"
                      }
                    >
                      {project.change}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Pages */}
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages across all projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={page.page} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-medium text-white font-mono text-sm">{page.page}</div>
                        <div className="text-xs text-gray-400">Bounce rate: {page.bounce}</div>
                      </div>
                    </div>
                    <div className="text-white font-medium">{page.views}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;