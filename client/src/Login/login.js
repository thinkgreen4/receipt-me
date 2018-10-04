
import React from "react";

const login = () => (
        
            <ul>
                <% if (user) { %>
                <li><a href="/auth/logout">Log out</a></li>
                <% } else { %>
                <li><a href="/auth/login">Login</a></li>
                <% } %>
                <li><a href="/">Homepage</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>

        <header>
            <h1>Login using...</h1>
        </header>
        <main>
            <a class="google-btn" href="/auth/google">Google+</a>
        </main>
)