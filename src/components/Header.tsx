import { AppBar, Toolbar, Typography, Container } from '@mui/material'

export const Header = () => {
  return (
    <AppBar
      position="static"
      component="header"
      sx={{ mb: 4, backgroundColor: '#7142bd' }}
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
              letterSpacing: 1,
            }}
          >
            Galeria de Fotos
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
