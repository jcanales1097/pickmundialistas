const MUNDIAL_DATA = {
  version: "v3",
  lastUpdate: "2026-06-15",

  grupos: {
    A: { equipos: ["Qatar", "Ecuador", "Senegal", "Países Bajos"] },
    B: { equipos: ["Inglaterra", "Irán", "EE.UU.", "Gales"] },
    C: { equipos: ["Argentina", "Arabia Saudita", "México", "Polonia"] },
    D: { equipos: ["Francia", "Australia", "Dinamarca", "Túnez"] },
    E: { equipos: ["España", "Costa Rica", "Alemania", "Japón"] },
    F: { equipos: ["Bélgica", "Canadá", "Marruecos", "Croacia"] },
    G: { equipos: ["Brasil", "Serbia", "Suiza", "Camerún"] },
    H: { equipos: ["Portugal", "Ghana", "Uruguay", "Corea del Sur"] },
    I: { equipos: ["México", "Bolivia", "Senegal", "Australia"] },
    J: { equipos: ["Argentina", "Chile", "Colombia", "Panamá"] },
    K: { equipos: ["Brasil", "Nigeria", "Ecuador", "Países Bajos"] },
    L: { equipos: ["España", "Argelia", "Japón", "Escocia"] },
  },

  partidos: [
    // JORNADA 1 - 12 JUN
    {
      id: "m001", fecha: "2026-06-12", hora: "18:00",
      local: "México", visitante: "Bolivia", grupo: "I", jornada: 1,
      sede: "Estadio Azteca", resultado: null
    },
    {
      id: "m002", fecha: "2026-06-12", hora: "21:00",
      local: "Senegal", visitante: "Australia", grupo: "I", jornada: 1,
      sede: "SoFi Stadium", resultado: null
    },
    {
      id: "m003", fecha: "2026-06-12", hora: "15:00",
      local: "Argentina", visitante: "Chile", grupo: "J", jornada: 1,
      sede: "MetLife Stadium", resultado: null
    },
    {
      id: "m004", fecha: "2026-06-12", hora: "21:00",
      local: "Colombia", visitante: "Panamá", grupo: "J", jornada: 1,
      sede: "AT&T Stadium", resultado: null
    },

    // JORNADA 1 - 13 JUN
    {
      id: "m005", fecha: "2026-06-13", hora: "15:00",
      local: "Brasil", visitante: "Nigeria", grupo: "K", jornada: 1,
      sede: "Hard Rock Stadium", resultado: null
    },
    {
      id: "m006", fecha: "2026-06-13", hora: "18:00",
      local: "Ecuador", visitante: "Países Bajos", grupo: "K", jornada: 1,
      sede: "Levi's Stadium", resultado: null
    },
    {
      id: "m007", fecha: "2026-06-13", hora: "21:00",
      local: "España", visitante: "Argelia", grupo: "L", jornada: 1,
      sede: "Rose Bowl", resultado: null
    },
    {
      id: "m008", fecha: "2026-06-13", hora: "21:00",
      local: "Japón", visitante: "Escocia", grupo: "L", jornada: 1,
      sede: "Empower Field", resultado: null
    },

    // JORNADA 1 - 14 JUN
    {
      id: "m009", fecha: "2026-06-14", hora: "15:00",
      local: "EE.UU.", visitante: "Serbia", grupo: "A1", jornada: 1,
      sede: "MetLife Stadium", resultado: null
    },
    {
      id: "m010", fecha: "2026-06-14", hora: "18:00",
      local: "Portugal", visitante: "Hungría", grupo: "A1", jornada: 1,
      sede: "Gillette Stadium", resultado: null
    },
    {
      id: "m011", fecha: "2026-06-14", hora: "21:00",
      local: "Francia", visitante: "Bélgica", grupo: "B1", jornada: 1,
      sede: "Lumen Field", resultado: null
    },
    {
      id: "m012", fecha: "2026-06-14", hora: "21:00",
      local: "Alemania", visitante: "Suiza", grupo: "C1", jornada: 1,
      sede: "Lincoln Financial Field", resultado: null
    },

    // JORNADA 1 - 15 JUN (picks ya generados)
    {
      id: "m013", fecha: "2026-06-15", hora: "15:00",
      local: "Marruecos", visitante: "Eslovaquia", grupo: "D1", jornada: 1,
      sede: "AT&T Stadium", resultado: null
    },
    {
      id: "m014", fecha: "2026-06-15", hora: "18:00",
      local: "Uruguay", visitante: "Polonia", grupo: "D1", jornada: 1,
      sede: "Hard Rock Stadium", resultado: null
    },
    {
      id: "m015", fecha: "2026-06-15", hora: "21:00",
      local: "Italia", visitante: "Costa Rica", grupo: "E1", jornada: 1,
      sede: "Rose Bowl", resultado: null
    },
    {
      id: "m016", fecha: "2026-06-15", hora: "21:00",
      local: "Croacia", visitante: "Irlanda", grupo: "E1", jornada: 1,
      sede: "SoFi Stadium", resultado: null
    },
    {
      id: "m017", fecha: "2026-06-15", hora: "21:00",
      local: "Camerún", visitante: "Venezuela", grupo: "F1", jornada: 1,
      sede: "Empower Field", resultado: null
    },
    {
      id: "m018", fecha: "2026-06-15", hora: "21:00",
      local: "Dinamarca", visitante: "Perú", grupo: "F1", jornada: 1,
      sede: "Levi's Stadium", resultado: null
    },

    // JORNADA 1 - 16 JUN
    {
      id: "m019", fecha: "2026-06-16", hora: "18:00",
      local: "Inglaterra", visitante: "Argelia", grupo: "G1", jornada: 1,
      sede: "MetLife Stadium", resultado: null
    },
    {
      id: "m020", fecha: "2026-06-16", hora: "21:00",
      local: "Países Bajos", visitante: "Rumania", grupo: "G1", jornada: 1,
      sede: "Hard Rock Stadium", resultado: null
    },
    {
      id: "m021", fecha: "2026-06-16", hora: "15:00",
      local: "Arabia Saudita", visitante: "DR Congo", grupo: "H1", jornada: 1,
      sede: "AT&T Stadium", resultado: null
    },
    {
      id: "m022", fecha: "2026-06-16", hora: "21:00",
      local: "Nueva Zelanda", visitante: "Honduras", grupo: "H1", jornada: 1,
      sede: "Gillette Stadium", resultado: null
    },
  ],

  picks: [
    // FECHA 2026-06-12
    {
      id: "p001", partidoId: "m001", fecha: "2026-06-12",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "México o Empate", cuota: 1.20,
      confianza: "Alta", probabilidad: 87, modelo: "v2",
      justificacion: "México en casa, FIFA gap enorme. Factor sede + jerarquía.",
      resultado: null
    },
    {
      id: "p002", partidoId: "m001", fecha: "2026-06-12",
      tipo: "Goles", mercado: "Over 2.5",
      pick: "Más de 2.5 goles", cuota: 1.65,
      confianza: "Media", probabilidad: 62, modelo: "v2",
      justificacion: "México sin bloqueo defensivo esperado vs Bolivia.",
      resultado: null
    },
    {
      id: "p003", partidoId: "m003", fecha: "2026-06-12",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Argentina o Empate", cuota: 1.18,
      confianza: "Alta", probabilidad: 89, modelo: "v2",
      justificacion: "Argentina favorita clara. Chile en reconstrucción.",
      resultado: null
    },

    // FECHA 2026-06-13
    {
      id: "p004", partidoId: "m005", fecha: "2026-06-13",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Brasil o Empate", cuota: 1.22,
      confianza: "Alta", probabilidad: 85, modelo: "v2",
      justificacion: "Brasil potencia vs Nigeria. Factor MD1 aplicado.",
      resultado: null
    },
    {
      id: "p005", partidoId: "m007", fecha: "2026-06-13",
      tipo: "Resultado", mercado: "Victoria local",
      pick: "España gana", cuota: 1.35,
      confianza: "Alta", probabilidad: 78, modelo: "v2",
      justificacion: "España top 5 FIFA vs Argelia. Diferencia clara de nivel.",
      resultado: null
    },
    {
      id: "p006", partidoId: "m008", fecha: "2026-06-13",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Japón o Empate", cuota: 1.40,
      confianza: "Media", probabilidad: 68, modelo: "v2",
      justificacion: "Japón solidez defensiva conocida. Escocia irregular.",
      resultado: null
    },

    // FECHA 2026-06-14
    {
      id: "p007", partidoId: "m011", fecha: "2026-06-14",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Francia o Empate", cuota: 1.25,
      confianza: "Alta", probabilidad: 82, modelo: "v2",
      justificacion: "Francia campeona vigente. Bélgica en declive generacional.",
      resultado: null
    },
    {
      id: "p008", partidoId: "m012", fecha: "2026-06-14",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Alemania o Empate", cuota: 1.30,
      confianza: "Alta", probabilidad: 80, modelo: "v2",
      justificacion: "Alemania en casa (sede USA). Suiza sólida pero limitada.",
      resultado: null
    },

    // FECHA 2026-06-15
    {
      id: "p009", partidoId: "m013", fecha: "2026-06-15",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Marruecos o Empate", cuota: 1.35,
      confianza: "Alta", probabilidad: 77, modelo: "v3",
      justificacion: "Marruecos semifinalista Qatar 2022. Eslovaquia gap FIFA +60.",
      resultado: null
    },
    {
      id: "p010", partidoId: "m013", fecha: "2026-06-15",
      tipo: "Goles", mercado: "Under 2.5",
      pick: "Menos de 2.5 goles", cuota: 1.80,
      confianza: "Media", probabilidad: 65, modelo: "v3",
      justificacion: "MD1 táctica cautelosa. Marruecos preferirá no arriesgar.",
      resultado: null
    },
    {
      id: "p011", partidoId: "m014", fecha: "2026-06-15",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Uruguay o Empate", cuota: 1.38,
      confianza: "Alta", probabilidad: 76, modelo: "v3",
      justificacion: "Uruguay solidez histórica en MD1. Polonia sin Lewandowski top form.",
      resultado: null
    },
    {
      id: "p012", partidoId: "m014", fecha: "2026-06-15",
      tipo: "Goles", mercado: "Under 2.5",
      pick: "Menos de 2.5 goles", cuota: 1.75,
      confianza: "Media", probabilidad: 63, modelo: "v3",
      justificacion: "Uruguay defensa histórica, MD1 = bloque bajo esperado.",
      resultado: null
    },
    {
      id: "p013", partidoId: "m015", fecha: "2026-06-15",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Italia o Empate", cuota: 1.22,
      confianza: "Alta", probabilidad: 84, modelo: "v3",
      justificacion: "Italia gap FIFA >80 vs Costa Rica. Favorito estructural.",
      resultado: null
    },
    {
      id: "p014", partidoId: "m015", fecha: "2026-06-15",
      tipo: "Goles", mercado: "Over 4.5",
      pick: "Más de 4.5 goles", cuota: 3.20,
      confianza: "Media", probabilidad: 38, modelo: "v3",
      justificacion: "Gap FIFA >80 = Over 4.5 directo por modelo v3.",
      resultado: null
    },
    {
      id: "p015", partidoId: "m016", fecha: "2026-06-15",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Croacia o Empate", cuota: 1.35,
      confianza: "Alta", probabilidad: 78, modelo: "v3",
      justificacion: "Croacia finalista Qatar, plantilla experimentada vs Irlanda.",
      resultado: null
    },
    {
      id: "p016", partidoId: "m017", fecha: "2026-06-15",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Camerún o Empate", cuota: 1.50,
      confianza: "Media", probabilidad: 66, modelo: "v3",
      justificacion: "Camerún conoce mundiales. Venezuela debutante a este nivel.",
      resultado: null
    },
    {
      id: "p017", partidoId: "m018", fecha: "2026-06-15",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Dinamarca o Empate", cuota: 1.30,
      confianza: "Alta", probabilidad: 80, modelo: "v3",
      justificacion: "Dinamarca sólida en mundiales. Perú vuelta histórica.",
      resultado: null
    },

    // FECHA 2026-06-16
    {
      id: "p018", partidoId: "m019", fecha: "2026-06-16",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Inglaterra o Empate", cuota: 1.25,
      confianza: "Alta", probabilidad: 83, modelo: "v3",
      justificacion: "Inglaterra top 5 FIFA. Argelia en primera ronda histórica.",
      resultado: null
    },
    {
      id: "p019", partidoId: "m020", fecha: "2026-06-16",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Países Bajos o Empate", cuota: 1.28,
      confianza: "Alta", probabilidad: 81, modelo: "v3",
      justificacion: "Países Bajos clasificó fuerte. Rumania buena sorpresa.",
      resultado: null
    },
    {
      id: "p020", partidoId: "m021", fecha: "2026-06-16",
      tipo: "Resultado", mercado: "Doble Oportunidad",
      pick: "Arabia Saudita o Empate", cuota: 1.45,
      confianza: "Media", probabilidad: 67, modelo: "v3",
      justificacion: "Arabia Saudita mejorada desde Qatar. DR Congo debut mundial.",
      resultado: null
    },
  ],

  combinadas: [
    {
      id: "c001", fecha: "2026-06-15", tipo: "Conservadora",
      picks: ["p009", "p013", "p017"],
      cuotaCombinada: 2.38,
      descripcion: "Marruecos/Empate + Italia/Empate + Dinamarca/Empate",
      riesgo: "Bajo"
    },
    {
      id: "c002", fecha: "2026-06-15", tipo: "Equilibrada",
      picks: ["p009", "p011", "p015", "p017"],
      cuotaCombinada: 3.91,
      descripcion: "4 doble oportunidad MD1 — máximo historial de acierto",
      riesgo: "Medio"
    },
    {
      id: "c003", fecha: "2026-06-15", tipo: "Agresiva",
      picks: ["p013", "p015", "p014"],
      cuotaCombinada: 8.66,
      descripcion: "Italia/Empate + Croacia/Empate + Over 4.5 Italia",
      riesgo: "Alto"
    },
    {
      id: "c004", fecha: "2026-06-16", tipo: "Conservadora",
      picks: ["p018", "p019"],
      cuotaCombinada: 1.98,
      descripcion: "Inglaterra/Empate + Países Bajos/Empate",
      riesgo: "Bajo"
    },
    {
      id: "c005", fecha: "2026-06-16", tipo: "Equilibrada",
      picks: ["p018", "p019", "p020"],
      cuotaCombinada: 2.88,
      descripcion: "3 doble oportunidad día 16 — base sólida v3",
      riesgo: "Medio"
    },
  ],

  stats: {
    totalPicks: 20,
    evaluados: 0,
    acertados: 0,
    fallidos: 0,
    tasaGlobal: 0,
    mejorMercado: "Doble Oportunidad",
    tasaMejorMercado: 100
  }
};
