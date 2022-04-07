import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import routes from "./router.config"

export default function Router({ type }) {
  return (
    <HashRouter>
      <Routes>
        {routes[type].map((route) => {
          if (route.children) {
            return (
              <Route key={route.path} path={route.path} element={<route.component type={type} />}>
                {route.children.map((child) => {
                  return (
                    <Route key={child.path} path={child.path} element={<child.component />}></Route>
                  )
                })}
              </Route>
            )
          } else {
            return <Route key={route.path} path={route.path} element={<route.component />}></Route>
          }
        })}
      </Routes>
    </HashRouter>
  )
}
