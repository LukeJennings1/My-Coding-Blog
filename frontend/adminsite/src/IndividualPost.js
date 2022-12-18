

function individualPost(props) {



    return (
        <div id = 'individualPost-page-wrapper'>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <h3>{props.body}</h3>
        </div>
    )
}


export default individualPost;