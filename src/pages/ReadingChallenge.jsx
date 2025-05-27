import ChallengeGridList from '../components/ChallengeGridList'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useQuery } from '@tanstack/react-query'
import { getAll } from '../services/books'

const ReadingChallenge = ({ setAlert }) => {

    const { data: challenges, error, isLoading } = useQuery({
        queryKey: ['challenges'],
        queryFn: () => getAll('/challenges')
    })

    if(isLoading) {
    return <span>Loading...</span>
    }

    if(error) {
    return(<span>Error when fetching challenges...</span>)
    }

    return(
        <>
            <Box component="section" sx={{p: 6, mx: 10}}>
                <Typography variant='h3'>Reading Challenge 2025</Typography>
                <Typography variant='h6'>Complete all 50 reading challenges!</Typography>
            </Box>
            <ChallengeGridList challenges={challenges} setAlert={setAlert} />
        </>
    )
}

export default ReadingChallenge