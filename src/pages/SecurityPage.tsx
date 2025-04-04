
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechnologyCard } from "@/components/TechnologyCard";
import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Cpu, Lock, Database, Server, HardDrive } from "lucide-react";

const SecurityPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // State for controlling background image carousel
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Background images array
  const bgImages = [
    "/lovable-uploads/70ee315a-a1da-4975-9c0d-c3914d001f26.png",
    "/lovable-uploads/65b6c525-c2bc-400d-b1f3-40376e77fb7d.png",
    "/lovable-uploads/fe1954de-2d07-4edc-843f-02f4362552aa.png"
  ];
  
  // Cycle through background images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const cloudSecuritySkills = [
    { name: "AWS Security", level: 85 },
    { name: "Azure Security", level: 80 },
    { name: "IAM & Access Controls", level: 90 },
    { name: "Cloud Threat Detection", level: 85 },
    { name: "Secure Cloud Architecture", level: 75 },
  ];

  const networkSecuritySkills = [
    { name: "Firewalls & IDS/IPS", level: 90 },
    { name: "VPN & Zero Trust", level: 85 },
    { name: "Network Monitoring", level: 80 },
    { name: "Vulnerability Assessment", level: 85 },
    { name: "Traffic Analysis", level: 80 },
  ];

  const siemSkills = [
    { name: "Splunk", level: 80 },
    { name: "Microsoft Sentinel", level: 75 },
    { name: "OSSEC", level: 70 },
    { name: "Log Analysis", level: 85 },
    { name: "Incident Response", level: 80 },
  ];

  const securityCertifications = [
    "CompTIA Security+",
    "AWS Certified Security - Specialty",
    "Certified Ethical Hacker (CEH)",
    "OSCP (In Progress)",
    "Microsoft SC-200"
  ];

  const experiences = [
    {
      title: "Security Analyst Intern",
      company: "Insurance Regulatory Authority",
      period: "Feb 2024 – Jan 2025",
      responsibilities: [
        "Developed a threat detection strategy using Microsoft Sentinel & Splunk",
        "Conducted vulnerability assessments using Nessus & OpenVAS",
        "Monitored AWS CloudTrail logs for suspicious activities",
        "Implemented firewall rules & IDS/IPS policies to block malicious traffic",
        "Conducted phishing simulations to improve employee security awareness",
        "Assisted in SOC operations, analyzing alerts & responding to incidents"
      ]
    },
    {
      title: "Cybersecurity Intern",
      company: "Kenyatta National Hospital",
      period: "Jun 2023 – Aug 2023",
      responsibilities: [
        "Secured network infrastructure by configuring Cisco firewalls & VPNs",
        "Conducted penetration testing on web apps, identifying SQLi & XSS vulnerabilities",
        "Developed a Zero Trust model for internal data access",
        "Hardened Windows & Linux servers by disabling unused ports",
        "Automated log analysis using Python & SIEM correlation rules",
        "Assisted in ISO 27001 compliance audits"
      ]
    },
    {
      title: "CloudGoat AWS Security Simulation",
      company: "Independent Project",
      period: "2024",
      responsibilities: [
        "Performed IAM privilege escalation attacks & mitigated risks",
        "Used AWS GuardDuty & CloudWatch to monitor security events",
        "Implemented secure IAM policies following least privilege principles",
        "Configured AWS Config for compliance monitoring",
        "Created automated remediation for security findings",
        "Documented security best practices for AWS environments"
      ]
    },
    {
      title: "Azure Security Firewall Deployment",
      company: "Independent Project",
      period: "2023",
      responsibilities: [
        "Implemented Azure Firewall with threat intelligence filtering",
        "Configured DDoS Protection Standard for cloud apps",
        "Set up Network Security Groups with least privilege rules",
        "Implemented Azure Sentinel for SIEM capabilities",
        "Created playbooks for automated incident response",
        "Monitored security posture using Azure Security Center"
      ]
    },
    {
      title: "Red Team Engagement",
      company: "Ethical Hacking Bootcamp",
      period: "2023",
      responsibilities: [
        "Conducted password cracking, buffer overflow, & network sniffing exercises",
        "Simulated MITM attacks & created mitigation strategies",
        "Performed web application penetration testing",
        "Used social engineering techniques to test security awareness",
        "Exploited misconfigurations in network devices",
        "Documented findings and provided remediation recommendations"
      ]
    },
    {
      title: "Security Hardening",
      company: "Freelance for Tech Startup",
      period: "2022",
      responsibilities: [
        "Hardened Linux servers, preventing SSH brute-force attacks",
        "Deployed Splunk SIEM for log correlation & anomaly detection",
        "Implemented secure coding practices for development team",
        "Created security policies and procedures documentation",
        "Conducted security awareness training for employees",
        "Performed regular vulnerability scanning and remediation"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="relative">
        {/* Background image with animation */}
        <div className="fixed inset-0 z-[-1] transition-opacity duration-1000">
          {bgImages.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-1000 ${
                index === currentBgIndex ? "opacity-30" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-background/95" />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    <Shield className="h-4 w-4" /> 
                    <span className="text-sm font-medium">Cybersecurity Expert</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="text-green-400">Defending</span> Digital 
                    <span className="block mt-3">Assets in the Modern</span>
                    <span className="bg-gradient-to-r from-green-400 to-primary bg-clip-text text-transparent">Threat Landscape</span>
                  </h1>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-lg">
                  Specialized in penetration testing, cloud security, and threat detection. 
                  I help organizations identify vulnerabilities before attackers can exploit them.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {securityCertifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10 backdrop-blur-sm px-3 py-1">
                      {cert}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href="#skills" 
                    className="px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium flex items-center gap-2 group transition-all duration-300"
                  >
                    View My Skills
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#experience" 
                    className="px-6 py-3 bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-lg font-medium backdrop-blur-sm"
                  >
                    Experience
                  </a>
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent -z-10" />
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-6">
                    <div className="glass bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10">
                      <Cpu className="h-8 w-8 text-green-400 mb-3" />
                      <h3 className="text-lg font-semibold text-white">Network Security</h3>
                      <p className="text-sm text-white/70 mt-2">Protecting infrastructures from unauthorized access and attacks</p>
                    </div>
                    <div className="glass bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10 translate-y-12">
                      <Server className="h-8 w-8 text-green-400 mb-3" />
                      <h3 className="text-lg font-semibold text-white">SIEM Solutions</h3>
                      <p className="text-sm text-white/70 mt-2">Monitoring and responding to security events in real-time</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 translate-y-16">
                    <div className="glass bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10">
                      <Lock className="h-8 w-8 text-green-400 mb-3" />
                      <h3 className="text-lg font-semibold text-white">Cloud Security</h3>
                      <p className="text-sm text-white/70 mt-2">Securing cloud environments on AWS, Azure, and GCP</p>
                    </div>
                    <div className="glass bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10">
                      <Database className="h-8 w-8 text-green-400 mb-3" />
                      <h3 className="text-lg font-semibold text-white">Data Protection</h3>
                      <p className="text-sm text-white/70 mt-2">Implementing encryption and access controls for sensitive data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-10" />
        </section>

        <section id="skills" className="py-20 bg-background relative z-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-primary text-lg font-medium mb-2">Technical Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h3>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <TechnologyCard 
                title="Cloud Security" 
                skills={cloudSecuritySkills}
                delay={0.2}
              />
              <TechnologyCard 
                title="Network Security" 
                skills={networkSecuritySkills}
                delay={0.4}
              />
              <TechnologyCard 
                title="SIEM & Threat Intelligence" 
                skills={siemSkills}
                delay={0.6}
              />
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-black/5 relative z-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-primary text-lg font-medium mb-2">Professional Journey</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h3>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <ExperienceCard 
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  responsibilities={exp.responsibilities}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityPage;
