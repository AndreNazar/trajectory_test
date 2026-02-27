import { CarInfo, EmptyInfo } from "@/widgets/CarInfo"
import { Sidebar } from "@/widgets/Sidebar"
import { Route, Routes } from "react-router"

function App() {
  return (
    <main>
      <Sidebar />
      <Routes>
        <Route path="/:id" element={<CarInfo />} />
        <Route path="*" element={<EmptyInfo />} />
      </Routes>
    </main>
  )
}

export default App
