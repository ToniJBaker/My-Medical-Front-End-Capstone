import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { fetchUsers } from "../ApiManager"
import "./Login.css"


export const Login = () => {
    const [email, set] = useState("brakus@mail.com")//need a user email address or username
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        fetchUsers(`?email=${email}`)  //fetch call to get users email addresses
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("myMedical_user", JSON.stringify({
                        id: user.id,
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }
    
    return (
    <>
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>My Medical Storage</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Register New Guest</Link>
            </section>
        </main>
    
    </>
    )
}