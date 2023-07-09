import React from "react";
import Router from "@/router/index";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);
root.render(<Router type="pc" />);
