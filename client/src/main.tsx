import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./github-markdown.css";
import "animate.css";
import { ThemeProvider } from "./context/theme.context.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
