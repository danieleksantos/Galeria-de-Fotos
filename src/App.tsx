import { useState, useMemo, ChangeEvent } from 'react'
import {
  CssBaseline,
  Box,
  Container,
  Typography,
  Pagination,
  Stack,
  ThemeProvider,
  PaletteMode,
} from '@mui/material'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { PhotoGrid } from './components/PhotoGrid'
import { Footer } from './components/Footer'
import { PHOTO_MOCK } from './data/photos'
import { createAppTheme } from './styles/theme'

export function App() {
  const [mode, setMode] = useState<PaletteMode>('light')
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const photosPerPage = 8

  const theme = useMemo(() => createAppTheme(mode), [mode])

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const filteredPhotos = useMemo(() => {
    return PHOTO_MOCK.filter((photo) =>
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage)

  const currentPhotos = useMemo(() => {
    const lastIndex = page * photosPerPage
    const firstIndex = lastIndex - photosPerPage
    return filteredPhotos.slice(firstIndex, lastIndex)
  }, [page, filteredPhotos])

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setPage(1)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          bgcolor: 'background.default',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Header onToggleTheme={toggleColorMode} mode={mode} />

        <Container component="main" sx={{ flex: 1, py: 4 }}>
          <SearchBar value={searchTerm} onChange={handleSearchChange} />

          {currentPhotos.length > 0 ? (
            <>
              <PhotoGrid photos={currentPhotos} />

              {totalPages > 1 && (
                <Stack sx={{ mt: 6, alignItems: 'center' }}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    shape="rounded"
                    size="large"
                  />
                </Stack>
              )}
            </>
          ) : (
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ mt: 8 }}
            >
              Nenhuma imagem encontrada para "{searchTerm}"
            </Typography>
          )}
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  )
}
