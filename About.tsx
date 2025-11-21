import { Card } from "@/components/ui/card";
import { Brain, Code, Database, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep Learning, CNN, RNN, Auto Encoders"
    },
    {
      icon: Code,
      title: "Full Stack Dev",
      description: "Python, JavaScript, React, TensorFlow"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Data Analysis, Preprocessing, Optimization"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Generative AI, NLP, Computer Vision"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">B.Tech student</span> specializing in 
              Artificial Intelligence and Machine Learning at NRI Institute of Technology. 
              With a strong foundation in Python, TensorFlow, and deep learning frameworks, 
              I'm passionate about solving real-world problems through innovative AI solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in AI/ML has led me through <span className="text-primary font-semibold">6+ internships</span> and 
              numerous projects ranging from NLP-based systems to computer vision applications. 
              I believe in continuous learning and staying at the forefront of AI technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="glass p-6 hover:border-primary transition-all duration-300 group"
              >
                <item.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="glass p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
          <div className="space-y-2">
            <p className="font-semibold text-lg">B.Tech in Artificial Intelligence and Machine Learning</p>
            <p className="text-muted-foreground">NRI Institute of Technology, Agiripalli, AP</p>
            <p className="text-sm text-muted-foreground">2022 - 2026 • CGPA: 7.74/10</p>
          </div>
        </div>
      </div>
    </section>
  );
};
