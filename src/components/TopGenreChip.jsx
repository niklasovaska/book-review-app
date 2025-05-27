import Chip from '@mui/material/Chip'
import Badge from '@mui/material/Badge'


const TopGenreChip = ({ genre }) => {
    return(
            <Badge badgeContent={genre[1]} color='primary'>
                <Chip
                    sx={{bgcolor: 'graph.peach'}}
                    label={genre[0]}
                    >
                </Chip>
            </Badge>
    )
        
        
}

export default TopGenreChip