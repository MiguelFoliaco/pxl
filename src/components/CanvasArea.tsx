import {
  Box,
  Stack,
  Typography,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import GridOnIcon from '@mui/icons-material/GridOn'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong'
import { palette } from '../theme'

export default function CanvasArea() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: palette.bg,
        minWidth: 0,
      }}
    >
      {/* Barra de herramientas del lienzo */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          px: 2,
          py: 1,
          borderBottom: `2px solid ${palette.border}`,
          bgcolor: palette.surface,
        }}
      >
        <Typography variant="body2" sx={{ color: palette.textDim }}>
          sprite_untitled.pxl
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Mostrar cuadrícula">
          <IconButton size="small" sx={{ color: palette.accent }}>
            <GridOnIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Centrar">
          <IconButton size="small" sx={{ color: palette.textDim }}>
            <CenterFocusStrongIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: palette.border, mx: 0.5 }}
        />
        <Tooltip title="Alejar">
          <IconButton size="small" sx={{ color: palette.textDim }}>
            <ZoomOutIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Typography variant="body2" sx={{ color: palette.text, minWidth: 48, textAlign: 'center' }}>
          800%
        </Typography>
        <Tooltip title="Acercar">
          <IconButton size="small" sx={{ color: palette.textDim }}>
            <ZoomInIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>

      {/* Zona del lienzo */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'grid',
          placeItems: 'center',
          overflow: 'auto',
          p: 4,
          // patrón de puntos de fondo del area de trabajo
          backgroundImage: `radial-gradient(${palette.border} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            p: 1.5,
            bgcolor: palette.surface,
            border: `2px solid ${palette.border}`,
            boxShadow: `6px 6px 0 rgba(0,0,0,0.4)`,
          }}
        >
          {/* Lienzo de pixeles: damero de transparencia + cuadrícula */}
          <Box
            sx={{
              width: 'min(64vh, 512px)',
              height: 'min(64vh, 512px)',
              imageRendering: 'pixelated',
              // damero de transparencia
              backgroundColor: '#c8c8d0',
              backgroundImage: `linear-gradient(45deg, #9a9ab0 25%, transparent 25%), linear-gradient(-45deg, #9a9ab0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #9a9ab0 75%), linear-gradient(-45deg, transparent 75%, #9a9ab0 75%)`,
              backgroundSize: '32px 32px',
              backgroundPosition: '0 0, 0 16px, 16px -16px, -16px 0',
              position: 'relative',
            }}
          >
            {/* Rejilla de pixel encima */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `linear-gradient(to right, rgba(58,58,85,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(58,58,85,0.5) 1px, transparent 1px)`,
                backgroundSize: '16px 16px',
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Barra de estado */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={3}
        sx={{
          px: 2,
          py: 0.75,
          borderTop: `2px solid ${palette.border}`,
          bgcolor: palette.surface,
        }}
      >
        <Typography variant="body2" sx={{ color: palette.textDim }}>
          32 x 32 px
        </Typography>
        <Typography variant="body2" sx={{ color: palette.textDim }}>
          Pos: 14, 09
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box sx={{ width: 12, height: 12, bgcolor: palette.accent }} />
          <Typography variant="body2" sx={{ color: palette.textDim }}>
            Lápiz
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
