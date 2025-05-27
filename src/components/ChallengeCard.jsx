import {Card, CardContent, CardHeader, Chip, Typography} from '@mui/material/'
import ChallengeActionIcon from './ChallengeActionIcon'

const ChallengeCard = ({ challenge, setAlert }) => { 
    
    return(
        <Card>
            <CardHeader 
                title={<Typography variant='h4'color='text.hint'>{challenge.id}</Typography>}
                subheader={<Typography>{challenge.name}</Typography>}
                action={<ChallengeActionIcon challenge={challenge} setAlert={setAlert} />}
            />
            <CardContent>
                {
                    challenge.book && 
                    <Chip 
                        label={challenge.book}
                        sx={{mr: 2, mt: 2, bgcolor: 'background.default'}}
                    />
                }
                
            </CardContent>
        </Card>
    )
}

export default ChallengeCard
