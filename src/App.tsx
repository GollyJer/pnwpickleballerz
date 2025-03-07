import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", gap: "2rem" }}>
        <a
          href="https://vite.dev"
          target="_blank"
          style={{ transition: "transform 0.2s" }}
          className="hover:scale-105"
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          style={{ transition: "transform 0.2s" }}
          className="hover:scale-105"
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ margin: "2rem 0", fontSize: "3rem", fontWeight: "bold" }}>
        Vite + React
      </h1>
      <div
        className="card"
        style={{
          marginBottom: "2rem",
          borderRadius: "0.5rem",
          backgroundColor: "rgba(26, 26, 26, 0.1)",
          padding: "1.5rem",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ marginBottom: "1rem" }}
        >
          count is {count}
        </button>
        <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
          Edit{" "}
          <code
            style={{
              borderRadius: "0.25rem",
              backgroundColor: "rgba(32, 32, 32, 0.1)",
              padding: "0.125rem 0.25rem",
              fontFamily: "monospace",
            }}
          >
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>
      <p
        className="read-the-docs"
        style={{ marginTop: "2rem", fontSize: "0.875rem" }}
      >
        Click on the Vite and React logos to learn more
      </p>

      <h1
        style={{
          marginTop: "3rem",
          fontSize: "1.875rem",
          fontWeight: "bold",
          color: "#646cff",
          textDecoration: "underline",
        }}
      >
        Hello world!
      </h1>
    </div>
  );
}

export default App;
