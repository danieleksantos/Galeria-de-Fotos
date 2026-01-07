import { CssBaseline, Box } from '@mui/material'
import { Header } from './components/Header'

export function App() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />

      <Header />

      <main style={{ flex: 1 }}></main>
    </Box>
  )
}
