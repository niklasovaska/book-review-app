import {Box, Card, CardContent, CardHeader, Chip, IconButton, Rating, Typography} from '@mui/material/'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BookCard = ({ book }) => {

    const averageRating = (ratingArray) => {
        let sum = 0

        ratingArray.forEach(element => {
            sum += element
        });

        return sum / ratingArray.length
    }

    return(
        <Card>
            <CardHeader  
                title={book.name}
                action={
                    <IconButton>
                        <FavoriteBorderIcon fontSize='small'/>
                    </IconButton>
                }
                sx={{minHeight: 100}}
            />
            <CardContent>
                <Typography sx={{color: 'text.secondary'}}>{book.author}</Typography>
                <Typography sx={{color: 'text.secondary', fontSize: '0.8rem'}}>{book.publicationYear}</Typography>
                <Box sx={{display: 'flex', gap: 1, pt: 2}}>
                    <Rating value={averageRating(book.ratings)} precision={0.1} size='small' />
                    <Typography sx={{color: 'text.secondary', fontSize: '0.8rem'}}>({book.ratings.length})</Typography>
                </Box>
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 2}}>
                    {book.genres.map(genre => <Chip key={genre} sx={{backgroundColor: '#018786'}}label={<Typography sx={{fontSize: '0.8rem'}}>{genre}</Typography>} size='small'/>)}
                </Box>
            </CardContent>
        </Card>
    )
}

export default BookCard