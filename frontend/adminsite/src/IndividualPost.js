import { useLocation } from 'react-router-dom'

function IndividualPost() {
    const location = useLocation()
    console.log(location.state)

    return (
        <div id = 'individualPost-page-wrapper'>
            <h1>{location.state}</h1>
        </div>
    )
}


export default IndividualPost;