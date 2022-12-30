

function Login() {

    return ( 
        <>
        <form action="http://localhost:3001/loginInfo" method="POST">
            <input type='textbox'  className = 'comment-textbox' name = 'username'></input>
            <input type='password' className = 'comment-textbox' name = 'password'></input>
            <input type = 'submit'></input>
        </form>
        <a href="/logout">
        <button>Logout</button>
        </a>
        </>
    )
}


export default Login;