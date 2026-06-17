# Mundial 2026 Picks — JCANALES

## Archivos del proyecto

```
mundial2026/
├── index.html     ← Página pública (calendario, picks, combinadas, stats)
├── admin.html     ← Panel administrativo (cargar picks, resultados, modelo)
└── data.js        ← Base de datos compartida con todos los picks
```

## Cómo usar

### Vista pública (index.html)
- Muestra picks ordenados por fecha con filtros
- Calendario de partidos con resultados
- Combinadas por tipo de riesgo
- Estadísticas del modelo con tasa de acierto

### Panel admin (admin.html)
1. **Agregar picks**: sección "Gestionar Picks" → tab "+ Nuevo Pick"
2. **Cargar resultados de picks**: tab "Cargar Resultados"
3. **Resultados de partidos**: sección "Resultados"
4. **Exportar**: botón "Exportar JSON" genera un nuevo data.js

## Flujo de trabajo recomendado

1. Abrir `admin.html`
2. Agregar picks del día en "+ Nuevo Pick"
3. Crear combinadas en "Gestionar Combinadas"
4. Al terminar el partido, cargar el resultado en "Resultados"
5. Marcar picks como acertados/fallidos en "Cargar Resultados"
6. Exportar `data.js` actualizado
7. Reemplazar el `data.js` del servidor con el exportado

## Modelo activo: v3 (desde 15 Jun 2026)
- BTTS eliminado de picks principales
- Over 4.5 directo cuando gap FIFA >80
- Factor bloque-contragolpe +8% (MD1, gap >30)
- Under MD1 solo con ≥6 partidos sin conceder
- Doble Oportunidad priorizada (100% tasa)

## Desarrollado por JCANALES
