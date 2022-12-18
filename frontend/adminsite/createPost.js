


function createPost(){


return (
    <div>
        <form action="/newPost" method="POST">
            <input type='text' name="blogTitle" placeholder="Article title"></input>
            <input type='text' name="blogSubTitle" placeholder="Sub-title"></input>
            <input type='text' name="blogBody" placeholder="content"></input>
            <input type='submit'></input>
        </form>
    </div>
)

}

export default createPost;