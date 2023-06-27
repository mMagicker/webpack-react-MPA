import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function Layout({ type }) {
  console.log(type)
  return (
    <div
      style={{
        border: type == "government" ? "1px solid red" : "1px solid green",
        padding: "20px",
      }}
    >
      {type == "government" ? (
        <div>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/user">user</Link>
            </li>
          </ul>
        </div>
      )}
      <main>
        <Outlet />
      </main>
    </div>
  )
}
