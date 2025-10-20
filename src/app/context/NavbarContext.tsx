"use client";

import { useState, createContext, useContext, ReactNode } from "react";

// 1️⃣ Tipe data context
interface NavbarConfig {
  title: string;
  showSearch: boolean;
  showAdd: boolean;
  onAdd?: () => void;
}

interface NavbarContextType {
  config: NavbarConfig;
  setConfig: React.Dispatch<React.SetStateAction<NavbarConfig>>;
}

// 2️⃣ Buat context dengan nilai awal null
const NavbarContext = createContext<NavbarContextType | null>(null);

// 3️⃣ Provider
export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<NavbarConfig>({
    title: "",
    showSearch: false,
    showAdd: false,
    onAdd : undefined
  });

  return (
    <NavbarContext.Provider value={{ config, setConfig }}>
      {children}
    </NavbarContext.Provider>
  );
};

// 4️⃣ Custom hook buat konsumsi context
export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) throw new Error("useNavbar harus dipakai di dalam NavbarProvider");
  return context;
};
