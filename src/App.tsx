import { useState, useMemo, ChangeEvent } from 'react'
import {
  CssBaseline,
  Box,
  Container,
  Typography,
  Pagination,
  Stack,
} from '@mui/material'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { PhotoGrid } from './components/PhotoGrid'
import { Footer } from './components/Footer'
import { PHOTO_MOCK } from './data/photos'

export function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const photosPerPage = 8

  // 1. Primeiro filtramos (Requisito de busca)
  const filteredPhotos = useMemo(() => {
    // Resetar para a página 1 sempre que o usuário começar uma nova busca
    return PHOTO_MOCK.filter((photo) =>
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  // 2. Depois calculamos a paginação sobre o resultado do filtro
  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage)

  const currentPhotos = useMemo(() => {
    const lastIndex = page * photosPerPage
    const firstIndex = lastIndex - photosPerPage
    return filteredPhotos.slice(firstIndex, lastIndex)
  }, [page, filteredPhotos])

  // Handler para mudança de página
  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' }) // UX: Volta ao topo ao mudar de página
  }

  // Handler para busca (precisa resetar a página)
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setPage(1) // Volta para a página 1 ao filtrar
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header />

      <Container component="main" sx={{ flex: 1, py: 4 }}>
        <SearchBar value={searchTerm} onChange={handleSearchChange} />

        {currentPhotos.length > 0 ? (
          <>
            <PhotoGrid photos={currentPhotos} />

            {/* Paginação centralizada */}
            {totalPages > 1 && (
              <Stack spacing={2} sx={{ mt: 6, alignItems: 'center' }}>
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
            Nenhuma atleta encontrada para "{searchTerm}"
          </Typography>
        )}
      </Container>

      <Footer />
    </Box>
  )
}
