import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from '@mui/material'
import { Photo } from '../types/Photo'

interface PhotoCardProps {
  photo: Photo
}

export const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={photo.url}
          alt={photo.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            component="p"
            textAlign="center"
            sx={{ fontWeight: 500 }}
          >
            {photo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
