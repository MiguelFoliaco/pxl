import { createTheme } from '@mui/material/styles'

// Paleta tipo "pixel art editor" — fondo oscuro, verde neón como acento
// y grises azulados como neutros. Máximo 5 colores.
const palette = {
  bg: '#15151f',
  surface: '#1e1e2d',
  surfaceAlt: '#262638',
  border: '#3a3a55',
  accent: '#57e389', // verde neón
  accentSoft: '#3aa869',
  text: '#e8e8f0',
  textDim: '#9a9ab0',
}

export const pixelTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: palette.accent,
      contrastText: palette.bg,
    },
    background: {
      default: palette.bg,
      paper: palette.surface,
    },
    divider: palette.border,
    text: {
      primary: palette.text,
      secondary: palette.textDim,
    },
  },
  shape: {
    borderRadius: 0, // bordes rectos = look pixel
  },
  typography: {
    fontFamily: '"VT323", monospace',
    fontSize: 16,
    h1: { fontFamily: '"Press Start 2P", monospace' },
    h2: { fontFamily: '"Press Start 2P", monospace' },
    h3: { fontFamily: '"Press Start 2P", monospace' },
    h4: { fontFamily: '"Press Start 2P", monospace' },
    h5: { fontFamily: '"Press Start 2P", monospace' },
    h6: { fontFamily: '"Press Start 2P", monospace', fontSize: '0.8rem', letterSpacing: 1 },
    button: { fontFamily: '"Press Start 2P", monospace', fontSize: '0.6rem' },
    body1: { fontSize: '1.1rem' },
    body2: { fontSize: '1rem' },
    caption: { fontFamily: '"Press Start 2P", monospace', fontSize: '0.55rem' },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `2px solid ${palette.border}`,
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          border: `2px solid ${palette.border}`,
        },
        contained: {
          boxShadow: `3px 3px 0 ${palette.bg}`,
          '&:hover': {
            boxShadow: `1px 1px 0 ${palette.bg}`,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: `2px solid ${palette.border}`,
          color: palette.textDim,
          '&.Mui-selected': {
            backgroundColor: palette.accentSoft,
            color: palette.bg,
            '&:hover': { backgroundColor: palette.accent },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.surfaceAlt,
          border: `2px solid ${palette.border}`,
          borderRadius: 0,
          fontFamily: '"VT323", monospace',
          fontSize: '0.95rem',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: { color: palette.accent },
        thumb: { borderRadius: 0, width: 14, height: 14 },
        rail: { borderRadius: 0 },
        track: { borderRadius: 0 },
      },
    },
  },
})

export { palette }
