import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  PaletteMode,
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

interface HeaderProps {
  onToggleTheme: () => void
  mode: PaletteMode
}

export const Header = ({ onToggleTheme, mode }: HeaderProps) => {
  return (
    <AppBar
      position="static"
      component="header"
      sx={{
        mb: 4,
        backgroundColor: 'primary.light',

        color: (theme) =>
          theme.palette.mode === 'light'
            ? 'primary.main'
            : 'primary.contrastText',

        backgroundImage: 'none',
        boxShadow: (theme) =>
          theme.palette.mode === 'dark' ? 'none' : theme.shadows[1],
        borderBottom: (theme) =>
          theme.palette.mode === 'dark' ? '1px solid' : 'none',
        borderColor: 'divider',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: { xs: '1.2rem', sm: '2rem' },
              color: 'text.primary',
            }}
          >
            Galeria de Fotos - Esportes
          </Typography>

          <IconButton
            onClick={onToggleTheme}
            aria-label="Alternar tema claro/escuro"
            sx={{ color: 'text.primary' }}
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
