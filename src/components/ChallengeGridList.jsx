import ChallengeCard from './ChallengeCard'
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'

const ChallengeGridList = ({ challenges, books, setBooks }) => {
    return(
        <Box component="section" sx={{mx: 10}}>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {challenges.map(challenge => 
                    <Grid key={challenge.number} size={{xs: 4}}>
                        <ChallengeCard 
                            challenge={challenge} 
                            books={books} 
                            setBooks={setBooks}/>
                    </Grid>)}
            </Grid>
        </Box>
    )
}

export default ChallengeGridList