import { useState, useMemo } from 'react'
import { CssBaseline, Box, Container, Typography } from '@mui/material'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { PHOTO_MOCK } from './data/photos'
import { PhotoGrid } from './components/PhotoGrid'
import { Footer } from './components/Footer'

export function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPhotos = useMemo(() => {
    return PHOTO_MOCK.filter((photo) =>
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />

      <Container component="main" sx={{ flex: 1, py: 4 }}>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        {filteredPhotos.length === 0 && (
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mt: 4 }}
          >
            Nenhuma foto encontrada para "{searchTerm}"
          </Typography>
        )}
        <PhotoGrid photos={filteredPhotos} />
      </Container>

      <Footer />
    </Box>
  )
}
