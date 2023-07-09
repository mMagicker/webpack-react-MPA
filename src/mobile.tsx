import React from "react"
import ReactDOM from "react-dom"
import Router from "@/router"
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container as HTMLDivElement)
root.render(<Router type="wechat" />)
