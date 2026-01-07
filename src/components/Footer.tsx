import { Box, Typography, Container } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#a69bb6',
        borderTop: '1px solid #7142bd',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' Galeria de Fotos. Todos os direitos reservados.'}
        </Typography>
      </Container>
    </Box>
  )
}
