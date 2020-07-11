import React from "react"
import AppRouter from "./router/routers/AppRouter"
import SessionContextProvider from "./state/context/SessionContext"

export default function App() {
  return (
    <SessionContextProvider>
      <AppRouter />
    </SessionContextProvider>
  )
}
