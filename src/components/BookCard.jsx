import {Box, Card, CardContent, CardHeader, Chip, Rating, Typography} from '@mui/material/'
import CardFavoriteIcon from './CardFavoriteIcon';
import CardDeleteIcon from './CardDeleteIcon';

const BookCard = ({ book, books, setAlert }) => {
    
    if(book === undefined) {
        return null
    }


    return(
        <Card>
            <CardHeader  
                title={book.name}
                action={
                    <>
                        <CardDeleteIcon book={book} setAlert={setAlert} />
                        <CardFavoriteIcon book={book} books={books} setAlert={setAlert} />
                    </>
                }
                sx={{minHeight: 100}}
            />
            <CardContent>
                <Typography sx={{color: 'text.secondary'}}>{book.author}</Typography>
                <Typography sx={{color: 'text.secondary', fontSize: '0.8rem'}}>{book.publication_year}</Typography>
                <Box sx={{display: 'flex', gap: 1, pt: 2}}>
                    <Rating 
                        value={book.rating} 
                        precision={0.1} 
                        size='small' />
                </Box>
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2, marginTop: 2}}>
                    <Chip 
                        sx={{bgcolor: 'divider'}} 
                        label={<Typography sx={{fontSize: '0.8rem'}}>{book.genre}</Typography>} 
                        size='small'
                    />
                </Box>
            </CardContent>
        </Card>
    )
}

export default BookCard