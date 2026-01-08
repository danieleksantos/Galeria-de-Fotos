import { Grid } from '@mui/material'
import { Photo } from '../types/Photo'
import { PhotoCard } from './PhotoCard'

interface PhotoGridProps {
  photos: Photo[]
}

export const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <Grid container spacing={4}>
      {photos.map((photo) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={photo.id}>
          <PhotoCard photo={photo} />
        </Grid>
      ))}
    </Grid>
  )
}
