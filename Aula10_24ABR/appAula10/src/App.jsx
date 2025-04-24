import { Icon } from "@iconify/react";
import Door from "./Door"
import Fruta from "./Fruta";

function App() {

  return (
    <>
      <div className="flex items-center gap-1">
        <Icon icon="mdi:home" className="text-3xl" />
        <div className="bg-gray-300 m-1 p-2 rounded">
          App template - Vite + React + WindCSS + Iconify
        </div>
      </div>
      <Door />
      <Fruta nome="Laranja" iconName="ep:orange" />
      <Fruta nome="Limão" iconName="lucide-lab:lemon" />
      <Fruta nome="Morango" iconName="lucide-lab:strawberry" />
      <Door />
    </>
  )
}

export default App
