import challengeList from '../data/listOfChallenges'
import ChallengeGridList from '../components/ChallengeGridList'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ReadingChallenge = ({ books, setBooks }) => {
    return(
        <>
            <Box component="section" sx={{p: 6, mx: 10}}>
                <Typography variant='h3'>Reading Challenge 2025</Typography>
            </Box>
            <ChallengeGridList 
                challenges={challengeList} 
                books={books} 
                setBooks={setBooks}
            />
        </>
    )
}

export default ReadingChallenge