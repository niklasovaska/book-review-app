import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import getGenreCountMap from '../utils/getGenreCountMap'
import TopGenreChip from './TopGenreChip'
import getHighestObjectValues from '../utils/getHighestObjectValues'

const StatItem = styled(Paper)(({ theme }) => ({
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main
  }));

const Statistics = ({ books }) => {

    const countMap = getGenreCountMap(books)

    const topFiveGenres = getHighestObjectValues(countMap, 5)

    return(
        <Box component="section" sx={{p: 4, my: 10, flexGrow: 1}}>
            <Grid container spacing={2} mx={{xs: 2, sm: 4, md: 12, lg: 20}}>
                <Grid size={8}>
                    <StatItem sx={{color: 'rgb(14, 37, 37)'}}>
                        <Typography variant='h4'>the book review club has reviewed</Typography>
                        <Typography variant='h2'>{books.length}</Typography>
                        <Typography variant='h4'>books</Typography>
                    </StatItem>
                </Grid>
                <Grid size={4}>
                    <StatItem sx={{backgroundColor: 'secondary.main', color: 'rgb(14, 37, 37)'}}>
                        <Typography variant='h5'>Total number of genres</Typography>
                        <Typography variant='h3'>{Object.keys(countMap).length}</Typography>
                    </StatItem>
                </Grid>
                <Grid size={9}>
                    <StatItem sx={{backgroundColor: '#daf1f1', color: 'rgb(14, 37, 37)'}}>
                        <Typography variant='h4'>Most popular genres</Typography>
                        <Box sx={{display: 'flex', gap: 2, mt: 2}}>
                            {topFiveGenres.map(genre => <TopGenreChip key={genre[0]} genre={genre} />)}
                        </Box>
                    </StatItem>
                </Grid>
                <Grid size={3}>
                <StatItem sx={{backgroundColor: 'divider', color: 'rgb(14, 37, 37)'}}>
                <Typography variant='h6'>Participating in Helmet Reading Challenge 2025</Typography>
                </StatItem>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Statistics