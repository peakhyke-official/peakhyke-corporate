"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        zIndex: 1000,
      }}
    >
      <Image
  src="/logo.png"
  alt="PEAKHYKE Logo"
  width={180}
  height={60}
  priority
/>

      <nav style={{ display: "flex", gap: "25px" }}>
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
        <a href="#careers" style={{ color: "white", textDecoration: "none" }}>Careers</a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
      </nav>
    </header>
  );
}