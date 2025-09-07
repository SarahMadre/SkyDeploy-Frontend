import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Shield, GitBranch, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div className="absolute inset-0 -z-10 bg-[#0A0A0A]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
         
          <h1 className="text-xl font-bold flex items-center">
            <Rocket className="w-5 h-5 mr-2 text-primary" />
            SkyDeploy
          </h1>


        </motion.div>

        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Deploy your apps" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="instantly & globally" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            Skydeploy is the platform for developers, providing the speed and reliability innovators need to create at the moment of inspiration.{" "}
            <span className="text-white">Deploy in seconds.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Link to="/dashboard">
              <Button size="lg" className="button-gradient">
                Start Deploying
              </Button>
            </Link>
            <Button size="lg" variant="link" className="text-white">
              Docs <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>


      </motion.section>

     {/* Why Choose SkyDeploy */}
<section id="features" className="container px-4 py-24">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl font-bold text-center mb-12"
  >
    Why Choose SkyDeploy?
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {[
      { icon: Rocket, title: "One-Click Deployments", desc: "Launch instantly from Git or CLI." },
      { icon: Globe, title: "Custom Domains", desc: "Attach domains with automatic SSL." },
      { icon: GitBranch, title: "Live Logs", desc: "Real-time build & edge runtime logs." },
      { icon: Shield, title: "Serverless & Edge", desc: "Scale globally with zero ops." },
    ].map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.1 * i, duration: 0.6 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-8 text-center hover:scale-105 transition-transform"
      >
        <item.icon className="w-12 h-12 text-primary mx-auto mb-6" />
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-400">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* Features Preview */}
      <section className="container px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to <span className="text-gradient">deploy with confidence</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From Git integration to global CDN, we have got you covered with enterprise-grade infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Logo Carousel
      <LogoCarousel /> */}

      {/* Features Section */}
      <section className="container px-4 py-24">
        <div className="max-w-2xl mb-20">
          <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
            Ship faster with
            <br />
            <span className="text-gradient font-medium">zero configuration</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 text-left">
            Focus on your code, not your deployment pipeline. Skydeploy handles the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: GitBranch,
              title: "Git Integration",
              description: "Connect your GitHub, GitLab, or Bitbucket repository and deploy with every push."
            },
            {
              icon: Globe,
              title: "Global Edge Network",
              description: "Deploy to 150+ regions worldwide for instant loading anywhere on Earth."
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "SSL certificates, DDoS protection, and compliance built-in by default."
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="glass rounded-xl p-8 glass-hover"
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
<section id="pricing" className="container px-4 py-24">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl font-bold text-center mb-12"
  >
    Pricing Plans
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        plan: "Free",
        price: "$0",
        features: ["1K Req/Month", "100 MB Storage", "1 GB CDN", "$0 Infra Cost"],
      },
      {
        plan: "Developer",
        price: "$5/month",
        features: ["25K Req/Month", "2 GB Storage", "10 GB CDN", "$1 Infra Cost"],
      },
      {
        plan: "Team",
        price: "$20/month",
        features: ["250K Req/Month", "10 GB Storage", "50 GB CDN", "$9–10 Infra Cost"],
      },
    ].map((tier, i) => (
      <motion.div
        key={tier.plan}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.15 * i, duration: 0.6 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-8 text-center flex flex-col justify-between hover:scale-105 transition-transform"
      >
        <h3 className="text-2xl font-semibold mb-2">{tier.plan}</h3>
        <p className="text-3xl font-bold mb-6">{tier.price}</p>
        <ul className="space-y-2 mb-6">
          {tier.features.map((f) => (
            <li key={f} className="text-gray-400">
              {f}
            </li>
          ))}
        </ul>
        <Button size="lg" className="button-gradient">
          Choose Plan
        </Button>
      </motion.div>
    ))}
  </div>
</section>



      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to ship?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of developers building the future of the web with Skydeploy.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="button-gradient">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;


