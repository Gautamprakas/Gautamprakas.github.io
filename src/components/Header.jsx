import React from "react";

export default function Header({ theme, setTheme }) {
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header>
      <h1>Prakash Gautam</h1>
      <p>Software Engineer | Full Stack Developer</p>

      <div className="links">
        <a href="mailto:gautamprakash697@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/prakash-gautam-40b1b0222" target="_blank">LinkedIn</a>
        <a href="https://github.com/Gautamprakas" target="_blank">GitHub</a>
        <a href="/resume.pdf" target="_blank">Resume</a>

        <button onClick={toggle} style={{marginLeft:10}}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </header>
  );
}
