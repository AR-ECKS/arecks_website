import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

import { WhatsAppButton } from "./components/WhatsAppButton"; // ✅ Importa el componente

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* ✅ Botón flotante de WhatsApp visible en toda la app */}
      <WhatsAppButton />
    </>
  );
}

export default App;
