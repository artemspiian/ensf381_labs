import "./Login.css";
import { useNavigate } from "react-router";
import { useState } from "react";


export default function Login() {
    const navigate = useNavigate()
    const [ errorMessage, setErrorMessage ] = useState("");

    async function submitForm(event) {
        event.preventDefault()
        let username = event.target[0].value
        let password = event.target[1].value
        if (username == "") {
            setErrorMessage("Please enter your usename");
            return
        }
        if (password == "") {
            setErrorMessage("Please enter a password");
            return
        }
        setErrorMessage("");
        try {
            const response = await fetch(
                "http://127.0.0.1:5000/validate_login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({username: username, password: password})
                }
            );
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                if (data.success) {
                    navigate("/predict");
                } else {
                    setErrorMessage("Invalid Username or Password");
                }
            }
        } catch (e) {
            console.log(e);
            setErrorMessage("Network Error, check your connection");
        }
    }

    return (
        <>
            <div id="form-container">
                <h1>Login</h1>
                <form onSubmit={submitForm}>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text"/>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password"/>
                    <button>Login</button>
                </form>
            </div>
            <p id="error-message">{errorMessage}</p>
        </>
    );
}