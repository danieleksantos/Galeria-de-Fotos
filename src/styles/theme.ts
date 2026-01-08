import { createTheme, PaletteMode } from '@mui/material'

export const lightPalette = {
  primary: '#6a1b9a',
  secondary: '#9c27b0',
  background: '#fbfaff',
  footer: '#ccbace',
  text: '#1a1a1a',
}

export const darkPalette = {
  primary: '#d199ff',
  secondary: '#ba68c8',
  background: '#121212',
  footer: '#2e1042',
  text: '#ffffff',
}

export const createAppTheme = (mode: PaletteMode) => {
  const colors = mode === 'light' ? lightPalette : darkPalette

  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary,
        light: colors.footer,
        dark: mode === 'light' ? '#4a148c' : '#e1b9ff',
      },
      background: {
        default: colors.background,
        paper: mode === 'light' ? '#ffffff' : colors.footer,
      },
      text: {
        primary: colors.text,
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  })
}
