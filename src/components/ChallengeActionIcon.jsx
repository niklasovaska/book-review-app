import AddChallengeIcon from './AddChallengeIcon'
import RemoveChallengeIcon from './RemoveChallengeIcon'

const ChallengeActionIcon = ({ challenge, setAlert }) => {

    return(
        <>
            {challenge.book ? <RemoveChallengeIcon challenge={challenge} setAlert={setAlert} /> : <AddChallengeIcon challenge={challenge} setAlert={setAlert} />}
        </>      
    )
}

export default ChallengeActionIcon
