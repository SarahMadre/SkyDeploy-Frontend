import { motion } from "framer-motion";
import { ArrowLeft, Github, GitBranch, Folder, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const NewProject = () => {
  const templates = [
    {
      name: "React",
      description: "A React app created with Vite",
      icon: "⚛️",
      tags: ["Frontend", "SPA"]
    },
    {
      name: "Next.js",
      description: "The React framework for production",
      icon: "▲",
      tags: ["Fullstack", "SSR"]
    },
    {
      name: "Vue.js",
      description: "The progressive JavaScript framework",
      icon: "💚",
      tags: ["Frontend", "SPA"]
    },
    {
      name: "Svelte",
      description: "Cybernetically enhanced web apps",
      icon: "🧡",
      tags: ["Frontend", "Compiled"]
    },
    {
      name: "Astro",
      description: "Build faster websites with less JavaScript",
      icon: "🚀",
      tags: ["Static", "Performance"]
    },
    {
      name: "Nuxt.js",
      description: "The intuitive Vue framework",
      icon: "💚",
      tags: ["Fullstack", "SSR"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-foreground">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="container px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-semibold">Create New Project</h1>
              <p className="text-sm text-gray-400">Deploy your project in seconds</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-4xl">
        {/* Import from Git */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Github className="w-5 h-5 mr-2" />
                Import Git Repository
              </CardTitle>
              <CardDescription>
                Import and deploy your existing repository from GitHub, GitLab, or Bitbucket
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Input
                  placeholder="https://github.com/username/repository"
                  className="flex-1 bg-white/5 border-white/10"
                />
                <Button className="button-gradient">
                  <GitBranch className="w-4 h-4 mr-2" />
                  Import
                </Button>
              </div>
              <div className="mt-4 flex space-x-4">
                <Button variant="outline" className="flex-1 border-white/10">
                  <Github className="w-4 h-4 mr-2" />
                  Connect GitHub
                </Button>
                <Button variant="outline" className="flex-1 border-white/10">
                  <Folder className="w-4 h-4 mr-2" />
                  Connect GitLab
                </Button>
                <Button variant="outline" className="flex-1 border-white/10">
                  <Globe className="w-4 h-4 mr-2" />
                  Connect Bitbucket
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Templates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Start with a Template</h2>
            <p className="text-gray-400">Get started quickly with our pre-built templates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="glass border-white/10 glass-hover cursor-pointer group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{template.icon}</div>
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity button-gradient"
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        Deploy
                      </Button>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{template.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{template.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {template.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-white/10 text-white border-white/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CLI Option */}
        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <Card className="glass border-white/10">
            <CardHeader>
              <CardTitle>Deploy with CLI</CardTitle>
              <CardDescription>
                Use our command line interface for rapid deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400 mb-2"># Install Skydeploy CLI</div>
                <div className="text-primary">npm i -g skydeploy</div>
                <div className="text-gray-400 mb-2 mt-4"># Deploy your project</div>
                <div className="text-primary">skydeploy</div>
              </div>
              <Button className="mt-4" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </motion.section> */}
      </div>
    </div>
  );
};

export default NewProject;