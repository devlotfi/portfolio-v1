import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./index.css";
import "./github-markdown.css";
import "animate.css";
import { ThemeProvider } from "./context/theme.context.tsx";
import { NavigationProvider } from "./context/navigation.context.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
