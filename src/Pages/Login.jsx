
import "./Login.css";

function Login() {
    return (
        <div className="Login_page">
            <div className="login_box">
                <h1>Welcom to our website create a new account</h1>
                <form>
                    <div>
                        <label htmlFor="username">Username </label>
                        <input type="text" id="username" placeholder=" Enter Username" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder=" Enter Email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="password" />
                    </div>

                    <button className="login-button" typ="submit">Login</button>

                    <div>
                        
                    </div>

                </form>
            </div>


        </div>
    )
}

export default Login;