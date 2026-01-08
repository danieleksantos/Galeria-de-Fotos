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
        transition: (theme) =>
          theme.transitions.create(['transform', 'box-shadow'], {
            duration: theme.transitions.duration.standard,
          }),
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 10,
        },
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={photo.url}
          alt={photo.alt}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'light' ? 'primary.light' : '#ffffff',
            color: '#000000',
            transition: 'background-color 0.3s ease',
          }}
        >
          <Typography
            variant="subtitle1"
            component="p"
            textAlign="center"
            sx={{
              fontWeight: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {photo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
