import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import routes from "./router.config";

export default function Router({ type }: { type: string }) {
  const renderRoutes: any = routes;
  return (
    <HashRouter>
      <Routes>
        {renderRoutes[type].map((route: any) => {
          if (route.children) {
            return (
              <Route key={route.path} path={route.path} element={<route.component type={type} />}>
                {route.children.map((child: any) => {
                  return (
                    <Route key={child.path} path={child.path} element={<child.component />}></Route>
                  );
                })}
              </Route>
            );
          } else {
            return <Route key={route.path} path={route.path} element={<route.component />}></Route>;
          }
        })}
      </Routes>
    </HashRouter>
  );
}
