import { useLocation } from 'react-router-dom'

function IndividualPost() {
    const blog = useLocation()

    return (
        <div id = 'individualPost-page-wrapper'>
            <h1>{blog.state[0]}</h1>
            <h2>{blog.state[1]}</h2> 
            <h3>{blog.state[2]}</h3>
        </div>
    )
}


export default IndividualPost;