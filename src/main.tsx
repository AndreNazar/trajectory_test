import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./app/styles/index.scss"
import App from "./app/App.tsx"
import { HashRouter } from "react-router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
