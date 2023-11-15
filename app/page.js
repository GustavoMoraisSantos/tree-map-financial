"use client";
import MainDrawer from "@/components/Drawer";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <div className="app">
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Trigger Drawer
        </button>
        <MainDrawer isOpen={isOpen} onCloseDrawer={onClose}/>
      </div>
    </div>
  );
}
