"use client";
import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
function Counter({ end }: { end: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);

        const controls = animate(0, end, {
          duration: 2,
          onUpdate(value) {
            if (ref.current) {
              ref.current.textContent = Math.floor(value).toString();
            }
          },
        });

        return () => controls.stop();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, started]);

  return <span ref={ref}>0</span>;
}
export default function Home() {
  return (
    <main
  style={{
    fontFamily: "Arial, sans-serif",
    margin: 0,
    background: "#0f172a",
    color: "white",
    minHeight: "100vh",
    width: "100%",
    overflowX: "hidden",
  }}
>
      <Navbar />

      <motion.section
        className="hero-bg"
        id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: "bold",
            lineHeight: "1.2",
            maxWidth: "1000px",
            margin: "0 auto 20px",
            padding: "0 20px",
          }}
        >
          PEAKHYKE ENTERPRISES PVT LTD
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 3vw, 24px)",
            color: "#d1d5db",
            marginBottom: "40px",
          }}
        >
          Building the Future Through Innovation, Artificial Intelligence, Digital Transformation & Enterprise Solutions
        </p>
        <p
  style={{
    fontSize: "24px",
    color: "#d1d5db",
    marginBottom: "40px",
  }}
>
</p>

<p
  style={{
    fontSize: "18px",
    color: "#cbd5e1",
    maxWidth: "700px",
    lineHeight: "1.8",
    marginBottom: "40px",
  }}
>
  PEAKHYKE ENTERPRISES PVT LTD delivers innovative software, AI-powered
  solutions, cloud services, enterprise applications and digital products
  that help businesses grow faster and smarter.
</p>

        <button
          style={{
            background: "#22c55e",
            color: "white",
            border: "none",
            padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)",
            borderRadius: "8px",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Explore Our Company
        </button>
        <div
  style={{
    display: "flex",
    gap: "clamp(20px, 5vw, 60px)",
    marginTop: "60px",
    flexWrap: "wrap",
    justifyContent: "center",
  }}
>
  <div>
    <h2 style={{ color: "#22c55e", fontSize: "36px", margin: 0 }}><Counter end={50} />+</h2>
    <p>Projects Delivered</p>
  </div>

  <div>
    <h2 style={{ color: "#22c55e", fontSize: "36px", margin: 0 }}><Counter end={25} />+</h2>
    <p>Enterprise Clients</p>
  </div>

  <div>
    <h2 style={{ color: "#22c55e", fontSize: "36px", margin: 0 }}><Counter end={10} />+</h2>
    <p>Technology Experts</p>
  </div>

  <div>
    <h2 style={{ color: "#22c55e", fontSize: "36px", margin: 0 }}><Counter end={100} />%+</h2>
    <p>Client Satisfaction</p>
  </div>
</div>
      </motion.section>
     <motion.section
  id="about"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "100px 20px",
    background: "#ffffff",
    color: "#222",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      marginBottom: "20px",
      color: "#0f172a",
    }}
  >
    About PEAKHYKE
  </h2>

  <p
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      fontSize: "20px",
      lineHeight: "1.9",
      color: "#555",
    }}
  >
    <strong>PEAKHYKE ENTERPRISES PVT LTD</strong> is a technology-driven
    company delivering innovative software solutions, Artificial Intelligence,
    Cloud Computing, Digital Transformation, Enterprise Applications,
    Cybersecurity, Business Consulting, and Sustainable Technology. Our mission
    is to empower businesses with world-class digital products that are secure,
    scalable, and future-ready.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "30px",
      marginTop: "60px",
    }}
  >
    <div
      style={{
        width: "260px",
        padding: "30px",
        borderRadius: "16px",
        background: "#f8fafc",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ color: "#22c55e" }}>🚀 Innovation</h3>
      <p>Creating next-generation software and AI solutions.</p>
    </div>

    <div
      style={{
        width: "260px",
        padding: "30px",
        borderRadius: "16px",
        background: "#f8fafc",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ color: "#22c55e" }}>🤝 Trust</h3>
      <p>Building long-term partnerships through quality and transparency.</p>
    </div>

    <div
      style={{
        width: "260px",
        padding: "30px",
        borderRadius: "16px",
        background: "#f8fafc",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ color: "#22c55e" }}>🌍 Vision</h3>
      <p>Helping businesses worldwide grow through digital transformation.</p>
    </div>
  </div>
</motion.section>
<motion.section
  id="services"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "80px 20px",
    background: "#f4f6f9",
    textAlign: "center",
  }}
>
  <h2
  style={{
    fontSize: "40px",
    marginBottom: "50px",
    color: "#020815",
  }}
>
  Our Services
</h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "30px",
    }}
  >
   <motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  transition={{ duration: 0.3 }}
  style={{
    background: "white",
    padding: "30px",
    width: "340px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  }}
>
  <h3
    style={{
      color: "#0f172a",
      fontSize: "24px",
      marginBottom: "15px",
    }}
  >
    💻 Software Development
  </h3>

  <p
    style={{
      color: "#555",
      lineHeight: "1.6",
    }}
  >
    Custom software, web applications, mobile apps and enterprise systems tailored to your business.
  </p>
</motion.div>
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  transition={{ duration: 0.3 }}
  style={{
    background: "white",
    padding: "30px",
    width: "340px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  }}
>
  <h3 style={{ color: "#0f172a", fontSize: "24px", marginBottom: "15px" }}>
    ☁️ Cloud Solutions
  </h3>

  <p style={{ color: "#555", lineHeight: "1.6" }}>
    Secure cloud infrastructure, migration, deployment and managed cloud services.
  </p>
</motion.div>
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  transition={{ duration: 0.3 }}
  style={{
    background: "white",
    padding: "30px",
    width: "340px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  }}
>
  <h3 style={{ color: "#0f172a", fontSize: "24px", marginBottom: "15px" }}>
    🤖 AI & Automation
  </h3>

  <p style={{ color: "#555", lineHeight: "1.6" }}>
    Artificial Intelligence, Machine Learning and business process automation solutions.
  </p>
</motion.div>
  </div>
</motion.section>
<motion.section
  id="projects"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "40px",
      color: "#0f172a",
      marginBottom: "50px",
    }}
  >
    Our Projects
  </h2>
<div
   style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  }}>
    <div
      style={{
  background: "#DCFCE7",
  padding: "35px",
  width: "320px",
  border: "1px solid #add",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transform: "translateY(0)",
  transition: "0.3s",
  cursor: "pointer",
}}
    >
      <h3
  style={{
    color: "#0f172a",
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "15px",
  }}
>
  🚌 Travel Booking Platform
</h3>
<p style={{ color: "#555", lineHeight: "1.6", marginTop: "20px" }}>
  Smart online travel booking system for buses, taxis, hotels and tourism management.
</p>

    </div>

    <div
      style={{
  background: "#DCFCE7",
  padding: "35px",
  width: "320px",
  border: "1px solid #add",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transform: "translateY(0)",
  transition: "0.3s",
  cursor: "pointer",
}}
    >
      <h3
  style={{
    color: "#0f172a",
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "15px",
  }}
>
  🏢 Enterprise Software
</h3>
<p style={{ color: "#555", lineHeight: "1.6", marginTop: "20px" }}>
  ERP, CRM, HRMS, inventory management, finance, and custom enterprise software solutions.
</p>

    </div>

    <div
      style={{
  background: "#DCFCE7",
  padding: "35px",
  width: "320px",
  border: "1px solid #add",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transform: "translateY(0)",
  transition: "0.3s",
  cursor: "pointer",
}}
    >
      <h3
  style={{
    color: "#0f172a",
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "15px",
  }}
>
  🤖 AI Solutions
</h3>
<p style={{ color: "#555", lineHeight: "1.6", marginTop: "20px" }}>
  AI chatbots, machine learning, predictive analytics, business intelligence, and intelligent automation solutions.
</p>

    </div>
  </div>
</motion.section>
<motion.section
  id="team"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "48px",
      fontWeight: "700",
      letterSpacing: "-1px",
      color: "#0f172a",
      marginBottom: "50px",
    }}
  >
    Leadership Team
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >

    <div
      style={{
  width: "340px",
  background: "#ffffff",
  padding: "35px",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  cursor: "pointer"
}}
    >
      <div
  style={{
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #22c55e, #0f172a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "42px",
    fontWeight: "bold",
    margin: "0 auto 20px",
  }}
>
  SK
</div>

      <h3
  style={{
    color: "#0f172a",
    fontSize: "28px",
    fontWeight: "700",
    marginTop: "20px",
    marginBottom: "10px",
  }}
>
  Sanjeeb Ku Behera
</h3>

      <p style={{ color: "#22c55e", fontWeight: "bold" }}>
        Founder & CEO
      </p>

      <p
  style={{
    color: "#555",
    lineHeight: "1.7",
    marginTop: "10px",
  }}
>
  Visionary entrepreneur leading PEAKHYKE towards innovation,
  technology, AI and digital transformation.
</p>
    </div>

    <div
      style={{
  width: "380px",
  background: "#ffffff",
  padding: "35px",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transition: "all 0.3s ease",
  cursor: "pointer",
}}
    >
      <div
  style={{
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #22c55e, #0f172a)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "42px",
    fontWeight: "bold",
    margin: "0 auto 20px",
  }}
>
  DK
</div>

      <h3
  style={{
    color: "#0f172a",
    fontSize: "28px",
    fontWeight: "700",
    marginTop: "20px",
    marginBottom: "10px",
  }}
>
  Denim Ku Samal
</h3>

      <p style={{ color: "#22c55e", fontWeight: "bold" }}>
        Co-Founder
      </p>

      <p
  style={{
    color: "#555",
    lineHeight: "1.7",
    marginTop: "10px",
  }}
>
  Driving strategic growth and innovation through collaboration and leadership.
</p>
    </div>

  </div>
</motion.section>
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "80px 20px",
    background: "#f8fafc",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "48px",
      fontWeight: "700",
      letterSpacing: "-1px",
      color: "#0f172a",
      marginBottom: "50px",
    }}
  >
    Why Choose PEAKHYKE?
  </h2>

  <p
    style={{
      color: "#555",
      maxWidth: "700px",
      margin: "0 auto 50px",
      lineHeight: "1.8",
    }}
  >
    We build innovative digital solutions that empower businesses with
    cutting-edge technology, AI, cloud computing, and enterprise software.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "30px",
    }}>
  
    <div
  style={{
    background: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    minWidth: "180px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
  }}
>
  <h1 style={{ color: "#22c55e", fontSize: "48px", margin: 0 }}><Counter end={50} />+</h1>
  <p style={{ marginTop: "10px", color: "#555", fontWeight: "bold" }}>
    Projects Delivered
  </p>
</div>

    <div
  style={{
    background: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    minWidth: "180px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
  }}
>
  <h1 style={{ color: "#22c55e", fontSize: "48px", margin: 0 }}><Counter end={10} />+</h1>
  <p style={{ marginTop: "10px", color: "#555", fontWeight: "bold" }}>
    Happy Clients
  </p>
</div>

    <div
  style={{
    background: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    minWidth: "180px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
  }}
>
  <h1 style={{ color: "#22c55e", fontSize: "48px", margin: 0 }}><Counter end={15} />+</h1>
  <p style={{ marginTop: "10px", color: "#555", fontWeight: "bold" }}>
    Innovative Solutions
  </p>
</div>

    <div
  style={{
    background: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    minWidth: "180px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
  }}
>
  <h1 style={{ color: "#22c55e", fontSize: "48px", margin: 0 }}>24/7</h1>
  <p style={{ marginTop: "10px", color: "#555", fontWeight: "bold" }}>
    Support
  </p>
</div>
</div>
</motion.section>
<motion.section
  id="careers"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "80px 20px",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "20px",
    }}
  >
    Careers
  </h2>

  <p
    style={{
      maxWidth: "700px",
      margin: "0 auto 30px",
      fontSize: "18px",
      lineHeight: "1.8",
    }}
  >
    Join PEAKHYKE ENTERPRISES PVT LTD and work with talented professionals in
    software development, Artificial Intelligence, cloud computing, digital
    transformation, and innovative technologies.
  </p>

  <button
    style={{
      background: "#22c55e",
      color: "white",
      padding: "15px 35px",
      border: "none",
      borderRadius: "10px",
      fontSize: "18px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    View Open Positions
  </button>
</motion.section>
<motion.section
  id="contact"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  style={{
    padding: "80px 20px",
    background: "#f8fafc",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "40px",
      marginBottom: "20px",
      color: "#0f172a",
    }}
  >
    Contact Us
  </h2>

  <p
    style={{
      fontSize: "18px",
      color: "#555",
      marginBottom: "40px",
    }}
  >
    We'd love to hear from you. Let's build something amazing together.
  </p>

  <div
  style={{
    lineHeight: "2",
    fontSize: "18px",
    color: "#333",
  }}
>
    <p><strong>Email:</strong> info@peakhyke.com</p>
    <p><strong>Phone:</strong> +91 7978276962</p>
    <p><strong>Location:</strong> Mayurbhanj, Odisha, India</p>
  </div>

  <button
    style={{
      marginTop: "30px",
      background: "#22c55e",
      color: "white",
      padding: "15px 35px",
      border: "none",
      borderRadius: "10px",
      fontSize: "18px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Get In Touch
  </button>
</motion.section>
<footer
  style={{
    background: "#0f172a",
    color: "white",
    padding: "60px 40px 20px",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "40px",
    }}
  >
    {/* Company */}
    <div style={{ flex: "1", minWidth: "250px" }}>
      <h2 style={{ color: "#22c55e" }}>PEAKHYKE</h2>
      <p style={{ lineHeight: "1.8", color: "#cbd5e1" }}>
        Building the Future Through Innovation. We provide cutting-edge
        technology solutions to help businesses grow globally.
      </p>
    </div>

    {/* Quick Links */}
    <div style={{ flex: "1", minWidth: "180px" }}>
      <h3>Quick Links</h3>
      <p>Home</p>
      <p>About</p>
      <p>Services</p>
      <p>Projects</p>
      <p>Careers</p>
      <p>Contact</p>
    </div>

    {/* Services */}
    <div style={{ flex: "1", minWidth: "220px" }}>
      <h3>Services</h3>
      <p>Software Development</p>
      <p>Cloud Solutions</p>
      <p>AI & Automation</p>
      <p>Business Consulting</p>
    </div>

    {/* Contact */}
    <div style={{ flex: "1", minWidth: "250px" }}>
      <h3>Contact</h3>
      <p>📧 info@peakhyke.com</p>
      <p>📞 +91 7978276962</p>
      <p>📍 Mayurbhanj, Odisha, India</p>
    </div>
  </div>

  <hr
    style={{
      margin: "40px 0 20px",
      border: "1px solid #334155",
    }}
  />

  <p
    style={{
      textAlign: "center",
      color: "#94a3b8",
    }}
  >
    © 2026 PEAKHYKE ENTERPRISES PVT LTD. All Rights Reserved.
  </p>
</footer>
    </main>
  );
}