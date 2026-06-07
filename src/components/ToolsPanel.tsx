import { useState } from 'react'
import {
  Box,
  Paper,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Slider,
  Divider,
} from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'
import ColorizeIcon from '@mui/icons-material/Colorize'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import TimelineIcon from '@mui/icons-material/Timeline'
import HighlightAltIcon from '@mui/icons-material/HighlightAlt'
import PanToolIcon from '@mui/icons-material/PanTool'
import { palette } from '../theme'

const tools = [
  { id: 'pencil', label: 'Lápiz', icon: <CreateIcon /> },
  { id: 'eraser', label: 'Borrador', icon: <AutoFixNormalIcon /> },
  { id: 'fill', label: 'Relleno', icon: <FormatColorFillIcon /> },
  { id: 'picker', label: 'Cuentagotas', icon: <ColorizeIcon /> },
  { id: 'rect', label: 'Rectángulo', icon: <CropSquareIcon /> },
  { id: 'circle', label: 'Círculo', icon: <RadioButtonUncheckedIcon /> },
  { id: 'line', label: 'Línea', icon: <TimelineIcon /> },
  { id: 'select', label: 'Selección', icon: <HighlightAltIcon /> },
  { id: 'pan', label: 'Mover', icon: <PanToolIcon /> },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="caption"
      sx={{ color: palette.textDim, display: 'block', mb: 1, letterSpacing: 1 }}
    >
      {children}
    </Typography>
  )
}

export default function ToolsPanel() {
  const [tool, setTool] = useState('pencil')

  return (
    <Paper
      square
      sx={{
        width: 84,
        height: '100%',
        bgcolor: palette.surface,
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        overflowY: 'auto',
        p: 1.5,
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Box sx={{ width: '100%' }}>
          <SectionTitle>Tools</SectionTitle>
          <ToggleButtonGroup
            orientation="vertical"
            value={tool}
            exclusive
            onChange={(_, v) => v && setTool(v)}
            sx={{ width: '100%', gap: 1 }}
          >
            {tools.map((t) => (
              <Tooltip key={t.id} title={t.label} placement="right">
                <ToggleButton value={t.id} sx={{ width: '100%', py: 1 }}>
                  {t.icon}
                </ToggleButton>
              </Tooltip>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Divider sx={{ borderColor: palette.border, width: '100%' }} />

        {/* Tamaño de pincel */}
        <Box sx={{ width: '100%' }}>
          <SectionTitle>Size</SectionTitle>
          <Box
            sx={{
              display: 'grid',
              placeItems: 'center',
              height: 40,
              border: `2px solid ${palette.border}`,
              bgcolor: palette.bg,
              mb: 1,
            }}
          >
            <Box sx={{ width: 12, height: 12, bgcolor: palette.accent }} />
          </Box>
          <Slider defaultValue={1} min={1} max={8} step={1} size="small" />
        </Box>
      </Stack>
    </Paper>
  )
}
