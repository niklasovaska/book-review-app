import {Box, Card, CardContent, CardHeader, Chip, Rating, Typography} from '@mui/material/'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const ChallengeCard = ({ challenge, books, setBooks }) => {

    let booksToShow = []

    if(books.length > 0) {
        booksToShow = books.filter((book) => book.challengeNumber === challenge.number)
    }
    
    return(
        <Card>
            <CardHeader 
                title={<Typography variant='h4'color='text.hint'>{challenge.number}</Typography>}
                subheader={<Typography>{challenge.challenge}</Typography>}
                action={<CheckCircleIcon fontSize='small' sx={{color: 'graph.blue'}} />} 
            />
            <CardContent>
                {booksToShow.length > 0 ? 
                    booksToShow.map(book => 
                        <Chip 
                            key={book.id} 
                            label={book.name}
                            
                            sx={{mr: 2, mt: 2, bgcolor: 'background.default'}}
                            />) : null}
            </CardContent>
        </Card>
    )
}

export default ChallengeCard
