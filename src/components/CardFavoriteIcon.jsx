import handleFavoriteUpdate from '../hooks/handleFavoriteUpdate'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Tooltip from '@mui/material/Tooltip'


const CardFavoriteIcon = ({ book, books, setBooks }) => {

    return(
        <Tooltip title={book.favorite ? `` : `Add to favorites`}>
            <IconButton onClick={() => handleFavoriteUpdate(book.id, books, setBooks)}>
                {book.favorite ? <FavoriteIcon fontSize='small' sx={{color: '#f66e5f'}}/> : <FavoriteBorderIcon fontSize='small'/>}
            </IconButton>
        </Tooltip>
    )
}

export default CardFavoriteIcon