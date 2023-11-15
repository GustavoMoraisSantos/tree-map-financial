"use client";
import MainDrawer from "@/components/Drawer";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="app">
      <div className="container">
        <div
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MenuOutlined onClick={() => setIsOpen(!isOpen)} />
          <p style={{ color: "grey" }}>
            Created by{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Gustavo Morais
            </a>
          </p>
        </div>
        <div style={{ width: "100%", height: "100vh", background: "red" }}>
        </div>
        <MainDrawer isOpen={isOpen} onCloseDrawer={onClose} />
      </div>
    </div>
  );
}
