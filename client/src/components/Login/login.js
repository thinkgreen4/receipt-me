
import React from "react";
import './login.css'

const Login = () => (
        
            <div>
                <li><a href="/auth/logout">Log out</a></li>
                <li><a href="/auth/login">Login</a></li>
                {/* <li><a href="/">Homepage</a></li> */}
                <li><a href="/profile">Profile</a></li>
            
                <header>
                    <h1>Login using...</h1>
                </header>
                <main>
                    <a class="google-btn" href="/auth/google">Google+</a>
                </main>
        </div>
);

export default Login;