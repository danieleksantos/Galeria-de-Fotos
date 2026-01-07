import { TextField, InputAdornment, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface SearchBarProps {
  value: string
  onChange: (newValue: string) => void
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Pesquisar fotos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{ maxWidth: 600 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          },
        }}
        inputProps={{
          'aria-label': 'Campo de busca para buscar fotos pelo nome',
        }}
      />
    </Box>
  )
}
