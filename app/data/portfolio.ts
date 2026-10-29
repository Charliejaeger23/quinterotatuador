// Owner confirmed authorship and publication permission on 2026-10-28.
// Descriptions reflect visible subjects only, without invented stories or timings.
export const portfolioData = [
  {
    id: "reina-aves-peonias",
    title: "Retrato, aves y flores",
    category: "Composición figurativa",
    alt: "Perfil de mujer con corona vegetal, aves y flores en la parte superior del brazo.",
    width: 961,
    height: 1280,
  },
  {
    id: "lobo-guardian",
    title: "Lobo",
    category: "Realismo en grises",
    alt: "Primer plano de un lobo mostrando los dientes, tatuado en el brazo.",
    width: 960,
    height: 1280,
  },
  {
    id: "oso-girasol-loto",
    title: "Oso y flores",
    category: "Realismo en grises",
    alt: "Oso con la boca abierta, acompañado de flores y hojas en un brazo.",
    width: 961,
    height: 1280,
  },
  {
    id: "mes-amis-emblema",
    title: "Emblema Mes Amis",
    category: "Blackwork",
    alt: "Emblema circular con sombrero, gafas y bigote sobre el texto Mes Amis en el brazo.",
    width: 960,
    height: 1280,
  },
  {
    id: "zorro-sakura-neotrad",
    title: "Zorro y sakura",
    category: "Neotradicional",
    alt: "Zorro naranja dentro de un marco negro ornamental con flores rosadas en el antebrazo.",
    width: 854,
    height: 1280,
  },
  {
    id: "leon-rosa-valor",
    title: "León y rosa",
    category: "Realismo en grises",
    alt: "León rugiendo sobre una rosa, tatuado en el brazo con sombras en negro y gris.",
    width: 961,
    height: 1280,
  },
] as const;
export const photoPath = (id: string) => "/images/portfolio/" + id + ".jpg";
