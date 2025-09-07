import { motion } from "framer-motion";
import { Plus, Globe, ExternalLink, Trash2, Settings, Shield, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Domains = () => {
  const domains = [
    {
      id: 1,
      domain: "myportfolio.com",
      project: "my-portfolio",
      status: "Active",
      ssl: "Valid",
      redirects: "www.myportfolio.com",
      expires: "2025-03-15"
    },
    {
      id: 2,
      domain: "mystore.com",
      project: "e-commerce-store",
      status: "Pending",
      ssl: "Provisioning",
      redirects: "None",
      expires: "2024-12-20"
    },
    {
      id: 3,
      domain: "blog.example.com",
      project: "blog-site",
      status: "Error",
      ssl: "Failed",
      redirects: "None",
      expires: "2025-01-10"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-primary/20 text-primary border-primary/50";
      case "Pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      case "Error": return "bg-red-500/20 text-red-400 border-red-500/50";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getSSLIcon = (ssl: string) => {
    switch (ssl) {
      case "Valid": return <CheckCircle className="w-4 h-4 text-primary" />;
      case "Provisioning": return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case "Failed": return <AlertCircle className="w-4 h-4 text-red-400" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-400" />;
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
                <Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link>
                <Link to="/domains" className="text-white font-medium">Domains</Link>
                <Link to="/analytics" className="text-gray-400 hover:text-white">Analytics</Link>
                <Link to="/settings" className="text-gray-400 hover:text-white">Settings</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="button-gradient">
                <Plus className="w-4 h-4 mr-2" />
                Add Domain
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
          <h1 className="text-3xl font-bold mb-2">Domains</h1>
          <p className="text-gray-400">Manage custom domains for your projects</p>
        </motion.div>

        {/* Add Domain Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Add Custom Domain
              </CardTitle>
              <CardDescription>
                Connect your domain to any project for a professional web presence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Input
                  placeholder="yourdomain.com"
                  className="flex-1 bg-white/5 border-white/10"
                />
                <Input
                  placeholder="Select project"
                  className="flex-1 bg-white/5 border-white/10"
                />
                <Button className="button-gradient">
                  Add Domain
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Domains List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="glass border-white/10 glass-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{domain.domain}</h3>
                        <p className="text-sm text-gray-400">Connected to {domain.project}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            {getSSLIcon(domain.ssl)}
                            <span className="text-xs text-gray-400">SSL {domain.ssl}</span>
                          </div>
                          {domain.redirects !== "None" && (
                            <div className="text-xs text-gray-400">
                              Redirects: {domain.redirects}
                            </div>
                          )}
                          <div className="text-xs text-gray-400">
                            Expires: {domain.expires}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={getStatusColor(domain.status)}>
                        {domain.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-black/90 border-white/10">
                          <DropdownMenuItem>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Domain
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Shield className="w-4 h-4 mr-2" />
                            Configure SSL
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="w-4 h-4 mr-2" />
                            DNS Settings
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-400">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Remove Domain
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* DNS Setup Guide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle>DNS Configuration</CardTitle>
              <CardDescription>
                Follow these steps to connect your domain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Step 1: Add A Record</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Type:</span>
                      <div className="font-mono">A</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Name:</span>
                      <div className="font-mono">@</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Value:</span>
                      <div className="font-mono text-primary">76.76.19.123</div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Step 2: Add CNAME Record (optional)</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Type:</span>
                      <div className="font-mono">CNAME</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Name:</span>
                      <div className="font-mono">www</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Value:</span>
                      <div className="font-mono text-primary">yourdomain.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Domains;