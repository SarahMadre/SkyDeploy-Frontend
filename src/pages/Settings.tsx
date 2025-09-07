import { motion } from "framer-motion";
import { User, Shield, Bell, Users, Trash2, Save, Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Settings = () => {
  const teamMembers = [
    { name: "John Doe", email: "john@example.com", role: "Owner", avatar: "JD" },
    { name: "Jane Smith", email: "jane@example.com", role: "Developer", avatar: "JS" },
    { name: "Mike Johnson", email: "mike@example.com", role: "Viewer", avatar: "MJ" }
  ];

  const projectSettings = {
    name: "Skydeploy",
    description: "Deployment platform for modern apps",
    buildCommand: "npm run build",
    outputDirectory: "dist"
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
                <Link to="/domains" className="text-gray-400 hover:text-white">Domains</Link>
                <Link to="/analytics" className="text-gray-400 hover:text-white">Analytics</Link>
                <Link to="/settings" className="text-white font-medium">Settings</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-4xl space-y-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account and project preferences</p>
        </motion.div>

        {/* Account Information */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" /> Account Information
              </CardTitle>
              <CardDescription>Update your personal information and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" className="bg-white/5 border-white/10" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" className="bg-white/5 border-white/10" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john@example.com" className="bg-white/5 border-white/10" />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." className="bg-white/5 border-white/10" />
              </div>
              <Button className="button-gradient">
                <Save className="w-4 h-4 mr-2" /> Save Changes
              </Button>
            </CardContent>
          </Card>
        </motion.section>

        {/* Security */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" /> Security & Authentication
              </CardTitle>
              <CardDescription>Manage your password and security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-400">Secure your account with 2FA</p>
                </div>
                <Switch />
              </div>
              <Separator className="bg-white/10" />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Login Notifications</h4>
                  <p className="text-sm text-gray-400">Get notified of new logins</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator className="bg-white/10" />
              <div>
                <Label>Change Password</Label>
                <div className="space-y-4 mt-2">
                  <Input type="password" placeholder="Current password" className="bg-white/5 border-white/10" />
                  <Input type="password" placeholder="New password" className="bg-white/5 border-white/10" />
                  <Input type="password" placeholder="Confirm new password" className="bg-white/5 border-white/10" />
                </div>
                <Button variant="outline" className="mt-3 border-white/10">Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Team Members */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" /> Team Members
              </CardTitle>
              <CardDescription>Invite and manage team access to your projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {teamMembers.map((member) => (
                <div key={member.email} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{member.avatar}</span>
                    </div>
                    <div>
                      <div className="font-medium text-white">{member.name}</div>
                      <div className="text-sm text-gray-400">{member.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-white/10 text-white border-white/20">{member.role}</Badge>
                    {member.role !== "Owner" && (
                      <Button variant="ghost" size="sm" className="text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex space-x-4">
                <Input placeholder="email@example.com" className="bg-white/5 border-white/10" />
                <Button className="button-gradient">Invite Member</Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Notifications */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" /> Notifications
              </CardTitle>
              <CardDescription>Configure when and how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Deployment Notifications</h4>
                  <p className="text-sm text-gray-400">Get notified when deployments complete</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator className="bg-white/10" />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Error Alerts</h4>
                  <p className="text-sm text-gray-400">Get alerted when deployments fail</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator className="bg-white/10" />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Marketing Emails</h4>
                  <p className="text-sm text-gray-400">Receive product updates and tips</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Project Settings */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <SettingsIcon className="w-5 h-5 mr-2 text-primary" /> Project Settings
              </CardTitle>
              <CardDescription>Configure your project details and build settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="mb-2">Project Name</Label>
                  <Input defaultValue={projectSettings.name} className="bg-white/5 border-white/10" />
                </div>
                <div>
                  <Label className="mb-2">Framework</Label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary">
                    <option>React + TypeScript</option>
                    <option>Next.js</option>
                    <option>Vue.js</option>
                    <option>Angular</option>
                    <option>Svelte</option>
                  </select>
                </div>
              </div>
              <div>
                <Label className="mb-2">Description</Label>
                <Textarea defaultValue={projectSettings.description} rows={3} className="bg-white/5 border-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label className="mb-2">Node Version</Label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary">
                    <option>18.x (Recommended)</option>
                    <option>16.x</option>
                    <option>20.x</option>
                  </select>
                </div>
                <div>
                  <Label className="mb-2">Build Command</Label>
                  <Input defaultValue={projectSettings.buildCommand} className="bg-white/5 border-white/10" />
                </div>
                <div>
                  <Label className="mb-2">Output Directory</Label>
                  <Input defaultValue={projectSettings.outputDirectory} className="bg-white/5 border-white/10" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Danger Zone */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Card className="border-destructive/20 glass">
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <Trash2 className="w-5 h-5 mr-2" /> Danger Zone
              </CardTitle>
              <CardDescription>Irreversible and destructive actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                <div>
                  <h4 className="font-semibold text-destructive">Delete Project</h4>
                  <p className="text-sm text-gray-400">Permanently delete this project and all its data</p>
                </div>
                <Button
                  variant="outline"
                  className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  Delete Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Settings;
