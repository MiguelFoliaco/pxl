import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { pixelTheme } from './theme'
import Header from './components/Header'
import ToolsPanel from './components/ToolsPanel'
import CanvasArea from './components/CanvasArea'
import PropertiesPanel from './components/PropertiesPanel'

function App() {
  return (
    <ThemeProvider theme={pixelTheme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            minHeight: 0,
          }}
        >
          <ToolsPanel />
          <CanvasArea />
          <PropertiesPanel />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
