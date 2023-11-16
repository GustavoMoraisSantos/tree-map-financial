"use client";
import MainDrawer from "@/components/Drawer";
import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import {  DataProvider } from "@/provider/DataProvider";
import { TreeMap } from "@/components/TreeMap";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <DataProvider>
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
          <TreeMap/>
        
          <MainDrawer isOpen={isOpen} onCloseDrawer={onClose} />
        </div>
      </div>
    </DataProvider>
  );
}
