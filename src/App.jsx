import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { PaginaPadre } from "./Components/PaginaPadre"
import { NuevoVideo } from "./Pages/NuevoVideo"
import { VideosProvider } from "./Contextos/Videos/VideosContext"
import { NoEncontrada } from "./Pages/NoEncontrada"
import { Suceso } from "./Pages/Suceso"


function App() {
  return (
    <>
      <VideosProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaPadre />}>
              <Route index element={<Home />}></Route>
              <Route path="/novoVideo" element={<NuevoVideo />}></Route>
              <Route path="/notFound" element={<NoEncontrada />}></Route>
              <Route path="*" element={<Sucesso />}></Route>
            </Route>            
          </Routes>
        </BrowserRouter>
      </VideosProvider>
    </>
  )
}

export default App
