import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { LayoutContext } from "../context/LayoutContext";
import Accordion from "../components/docs/Accordion";

export default function Docs() {
  const { nightMode, day, night } = useContext(LayoutContext);
  const mode = nightMode ? night : day;
  return (
    <>
      <div style={{ backgroundColor: mode.background, color: mode.color }}>
        <Navbar />
        <main className="container mt-3">
          <h2 className="mt-5 mb-3">Dokumentasi</h2>
          <Accordion mode={mode} day={day} />
        </main>
      </div>
    </>
  );
}
