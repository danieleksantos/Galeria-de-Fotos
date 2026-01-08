import { Box, Typography, Container } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.light',
        borderTop: '1px solid',
        borderColor: 'divider',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: 'text.primary',
            fontWeight: 500,
          }}
        >
          {'© '}
          {new Date().getFullYear()}
          {' Galeria de Fotos. Todos os direitos reservados.'}
        </Typography>
      </Container>
    </Box>
  )
}
