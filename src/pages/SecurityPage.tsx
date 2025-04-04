
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechnologyCard } from "@/components/TechnologyCard";
import { PageHero } from "@/components/PageHero";
import { useEffect } from "react";

const SecurityPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <PageHero 
          title="Cloud & Network Security Specialist"
          subtitle="Securing digital infrastructure with advanced protection strategies"
          description="A Cybersecurity & Cloud Security expert specializing in penetration testing, threat detection, and cloud security hardening. Experienced in securing networks, managing SIEM tools, and deploying security controls."
          backgroundImage="/matrix-background.jpg"
        />

        <section id="skills" className="py-20 bg-secondary/50 dark:bg-secondary/10 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" 
            style={{ backgroundImage: "url('/coding-background.jpg')" }}
          />
          <div className="container relative z-10">
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

        <section id="experience" className="py-20">
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
