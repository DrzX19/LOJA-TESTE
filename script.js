// CONFIGURE AQUI: informe o WhatsApp com código do país + DDD + número, somente números.
// Exemplo: "5511999999999" (55 = Brasil). Troque pelo número comercial da Ragazzo Nails.
const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber os horários disponíveis para agendar na Ragazzo Nails.";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});
