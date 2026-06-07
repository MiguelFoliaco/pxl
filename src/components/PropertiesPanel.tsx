import { useState } from 'react'
import {
  Paper,
  Box,
  Stack,
  Typography,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { palette } from '../theme'

const swatches = [
  '#000000', '#ffffff', '#e84a5f', '#ff847c', '#feceab', '#fecea8',
  '#57e389', '#3aa869', '#2ec4b6', '#4895ef', '#3a0ca3', '#7209b7',
  '#f72585', '#ffd166', '#ef476f', '#06d6a0', '#118ab2', '#073b4c',
]

const layers = [
  { id: 3, name: 'Detalles', visible: true },
  { id: 2, name: 'Personaje', visible: true },
  { id: 1, name: 'Fondo', visible: true },
]

function SectionHeader({
  title,
  action,
}: {
  title: string
  action?: React.ReactNode
}) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 1.5 }}
    >
      <Typography variant="caption" sx={{ color: palette.textDim, letterSpacing: 1 }}>
        {title}
      </Typography>
      {action}
    </Stack>
  )
}

export default function PropertiesPanel() {
  const [active, setActive] = useState('#57e389')
  const [activeLayer, setActiveLayer] = useState(2)

  return (
    <Paper
      square
      sx={{
        width: 256,
        height: '100%',
        bgcolor: palette.surface,
        borderTop: 'none',
        borderBottom: 'none',
        borderRight: 'none',
        overflowY: 'auto',
        p: 2,
      }}
    >
      <Stack spacing={3}>
        {/* Color actual */}
        <Box>
          <SectionHeader title="Color" />
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 48,
                height: 48,
                bgcolor: active,
                border: `2px solid ${palette.border}`,
                boxShadow: `3px 3px 0 ${palette.bg}`,
              }}
            />
            <Box>
              <Typography variant="body2" sx={{ color: palette.text }}>
                {active.toUpperCase()}
              </Typography>
              <Typography variant="body2" sx={{ color: palette.textDim }}>
                RGB / 255
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Paleta */}
        <Box>
          <SectionHeader
            title="Palette"
            action={
              <Tooltip title="Añadir color">
                <IconButton size="small" sx={{ color: palette.textDim }}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            }
          />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 0.75,
            }}
          >
            {swatches.map((c) => (
              <Box
                key={c}
                onClick={() => setActive(c)}
                sx={{
                  pt: '100%',
                  position: 'relative',
                  bgcolor: c,
                  cursor: 'pointer',
                  border:
                    active === c
                      ? `2px solid ${palette.accent}`
                      : `2px solid ${palette.border}`,
                  outline: active === c ? `2px solid ${palette.bg}` : 'none',
                }}
              />
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: palette.border }} />

        {/* Capas */}
        <Box>
          <SectionHeader
            title="Layers"
            action={
              <Stack direction="row" spacing={0.5}>
                <Tooltip title="Duplicar capa">
                  <IconButton size="small" sx={{ color: palette.textDim }}>
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Nueva capa">
                  <IconButton size="small" sx={{ color: palette.textDim }}>
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Eliminar capa">
                  <IconButton size="small" sx={{ color: palette.textDim }}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Stack>
            }
          />
          <Stack spacing={1}>
            {layers.map((layer) => (
              <Stack
                key={layer.id}
                direction="row"
                alignItems="center"
                spacing={1}
                onClick={() => setActiveLayer(layer.id)}
                sx={{
                  p: 1,
                  cursor: 'pointer',
                  bgcolor:
                    activeLayer === layer.id ? palette.surfaceAlt : 'transparent',
                  border: `2px solid ${
                    activeLayer === layer.id ? palette.accent : palette.border
                  }`,
                }}
              >
                <IconButton size="small" sx={{ color: palette.textDim, p: 0.25 }}>
                  {layer.visible ? (
                    <VisibilityIcon fontSize="small" />
                  ) : (
                    <VisibilityOffIcon fontSize="small" />
                  )}
                </IconButton>
                {/* Miniatura */}
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    flexShrink: 0,
                    border: `2px solid ${palette.border}`,
                    backgroundColor: palette.bg,
                    backgroundImage: `linear-gradient(45deg, ${palette.surfaceAlt} 25%, transparent 25%), linear-gradient(-45deg, ${palette.surfaceAlt} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${palette.surfaceAlt} 75%), linear-gradient(-45deg, transparent 75%, ${palette.surfaceAlt} 75%)`,
                    backgroundSize: '8px 8px',
                    backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0',
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: palette.text, flexGrow: 1 }}
                >
                  {layer.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  )
}
