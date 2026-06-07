import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Divider,
  Stack,
} from '@mui/material'
import GridOnIcon from '@mui/icons-material/GridOn'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'
import SaveIcon from '@mui/icons-material/Save'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import SettingsIcon from '@mui/icons-material/Settings'
import { palette } from '../theme'

const menuItems = ['Archivo', 'Editar', 'Ver', 'Capa', 'Ayuda']

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: palette.surface,
        borderBottom: `2px solid ${palette.border}`,
        borderRadius: 0,
      }}
    >
      <Toolbar variant="dense" sx={{ minHeight: 56, gap: 2, px: 2 }}>
        {/* Logo */}
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            sx={{
              width: 28,
              height: 28,
              bgcolor: palette.accent,
              display: 'grid',
              placeItems: 'center',
              boxShadow: `2px 2px 0 ${palette.bg}`,
            }}
          >
            <GridOnIcon sx={{ fontSize: 18, color: palette.bg }} />
          </Box>
          <Typography variant="h6" sx={{ color: palette.accent, letterSpacing: 2 }}>
            PXL
          </Typography>
        </Stack>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: palette.border, mx: 1 }}
        />

        {/* Menú superior */}
        <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {menuItems.map((item) => (
            <Button
              key={item}
              size="small"
              sx={{
                border: 'none',
                color: palette.textDim,
                fontFamily: '"VT323", monospace',
                fontSize: '1rem',
                '&:hover': { color: palette.text, bgcolor: palette.surfaceAlt },
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>

        <Box sx={{ flexGrow: 1 }} />

        {/* Acciones de historial */}
        <Stack direction="row" spacing={0.5}>
          <Tooltip title="Deshacer">
            <IconButton size="small" sx={{ color: palette.textDim }}>
              <UndoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Rehacer">
            <IconButton size="small" sx={{ color: palette.textDim }}>
              <RedoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: palette.border, mx: 1 }}
        />

        {/* Acciones de archivo */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip title="Abrir">
            <IconButton size="small" sx={{ color: palette.textDim }}>
              <FolderOpenIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Guardar">
            <IconButton size="small" sx={{ color: palette.textDim }}>
              <SaveIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Button
            variant="contained"
            size="small"
            startIcon={<FileDownloadIcon />}
            sx={{ color: palette.bg }}
          >
            Exportar
          </Button>
          <Tooltip title="Ajustes">
            <IconButton size="small" sx={{ color: palette.textDim }}>
              <SettingsIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
