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
        sx={{
          maxWidth: 600,
          '& .MuiOutlinedInput-root': {
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? '#fff' : 'background.paper',
            borderRadius: 2,
            transition: 'background-color 0.3s ease',
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          },
          htmlInput: {
            'aria-label': 'Campo de busca para buscar fotos pelo nome',
          },
        }}
      />
    </Box>
  )
}
