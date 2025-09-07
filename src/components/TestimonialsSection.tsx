"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Madre",
    role: "Full-Stack Developer",
    image: "https://avatars.githubusercontent.com/u/9912345?v=4",
    content: "SkyDeploy made my deployments effortless. The global edge network ensures my apps are blazing fast for users everywhere."
  },
  {
    name: "Tauqeer Ahmad Shaikh",
    role: "Startup Founder",
    image: "https://avatars.githubusercontent.com/u/11223344?v=4",
    content: "Our team was able to scale seamlessly with SkyDeploy. Zero downtime and reliable performance have been a game-changer for us."
  },
  {
    name: "Prathamesh Patil",
    role: "DevOps Engineer",
    image: "https://avatars.githubusercontent.com/u/55667788?v=4",
    content: "The CI/CD workflow integration is smooth and intuitive. SkyDeploy has simplified our release cycles tremendously."
  },
  {
    name: "Aqdas Ghawte",
    role: "Cloud Architect",
    image: "https://avatars.githubusercontent.com/u/99887766?v=4",
    content: "With SkyDeploy, latency dropped drastically for our global users. The infrastructure just works without headaches."
  },
  {
    name: "Sophia Williams",
    role: "Frontend Engineer",
    image: "https://avatars.githubusercontent.com/u/88776655?v=4",
    content: "SkyDeploy’s simplicity and reliability allow me to focus on building, not managing servers. It’s perfect for modern web apps."
  },
  {
    name: "Omar Khalid",
    role: "Tech Lead",
    image: "https://avatars.githubusercontent.com/u/77665544?v=4",
    content: "The performance and security of SkyDeploy give us confidence. Our users love the speed improvements."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Developers</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of satisfied teams and creators on SkyDeploy
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
