import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "@/assets/img/LOGO.png";

export const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="59174020906"
      accountName="Arecks Consultoría"
      avatar={logo}
      notification
      notificationSound
      allowEsc
      allowClickAway
      chatMessage="Hola 👋 ¿En qué podemos ayudarte hoy?"
      styles={{
        backgroundColor: "#25D366",
        color: "white"
      }}
    />
  );
};
