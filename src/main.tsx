import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./index.css";
import "animate.css";
import { ThemeProvider } from "./context/theme.context.tsx";
import { NavigationProvider } from "./context/navigation.context.tsx";
import { SidebarProvider } from "./context/sidebar.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <NavigationProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </NavigationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
