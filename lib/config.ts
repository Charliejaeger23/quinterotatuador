export const siteConfig = {
  name: "Quinterotatuador",
  artist: "Carlos Quintero",
  url: "https://www.quinterotatuador.com",
  description:
    "Tatuajes personalizados por Carlos Quintero. Explora obras seleccionadas y conversa sobre tu proyecto en Valencia y Puerto Cabello, Venezuela.",
  instagram: "https://www.instagram.com/quinterotatuador/",
  // Confirmed by the owner on 2026-10-28. Does not certify bot delivery.
  whatsapp: "584129583666",
  whatsappMessage:
    "Hola Carlos, vengo de quinterotatuador.com y quiero solicitar un proyecto personalizado.",
  assistInkVerified: false,
};
export const projectHref =
  "https://wa.me/" +
  siteConfig.whatsapp +
  "?text=" +
  encodeURIComponent(siteConfig.whatsappMessage);
