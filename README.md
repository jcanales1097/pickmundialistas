# Mundial 2026 Picks — JCANALES

## Archivos del proyecto

```
mundial2026/
├── index.html     ← Página pública (calendario oficial, picks, combinadas, stats)
├── admin.html      ← Panel administrativo (solo carga de archivo JSON)
├── data.js         ← Calendario oficial de los 72 partidos de fase de grupos
└── picks.json      ← Picks y combinadas actuales (lo reemplazas al actualizar)
```

## Cómo funciona

### Calendario
El calendario de partidos viene precargado con el fixture oficial del Mundial 2026
(fase de grupos, 72 partidos, 12 grupos). No necesitas cargarlo a mano.

### Resultados
Los resultados de los partidos se sincronizan **automáticamente** desde una fuente
pública (openfootball/worldcup.json) cada vez que alguien visita el sitio, y se
refrescan cada 5 minutos mientras la página está abierta. No se cargan a mano.

### Picks y combinadas
1. Pide los picks al chat — te entregará un archivo `picks.json` listo para descargar.
2. Abre `admin.html` y sube ese archivo (arrastra o haz clic en el recuadro).
3. Revisa la vista previa de los picks cargados.
4. Descarga el `picks.json` actualizado con el botón correspondiente.
5. Sube ese archivo `picks.json` a la raíz de tu repositorio en GitHub, junto a
   `index.html` (reemplazando el anterior).
6. El sitio público lee automáticamente `picks.json` y muestra los picks actualizados.

## Formato de picks.json

```json
{
  "picks": [
    {
      "id": "p001",
      "partidoId": "m001",
      "fecha": "2026-06-17",
      "tipo": "Resultado",
      "mercado": "Doble Oportunidad",
      "pick": "Portugal o Empate",
      "cuota": 1.25,
      "probabilidad": 82,
      "confianza": "Alta",
      "modelo": "v3",
      "justificacion": "Texto breve del razonamiento",
      "resultado": null
    }
  ],
  "combinadas": [
    {
      "id": "c001",
      "fecha": "2026-06-17",
      "tipo": "Conservadora",
      "riesgo": "Bajo",
      "cuotaCombinada": 2.10,
      "descripcion": "Texto descriptivo",
      "picks": ["p001", "p002"]
    }
  ]
}
```

`partidoId` debe coincidir con un ID del calendario oficial (m001 a m072).

## Desarrollado por JCANALES
