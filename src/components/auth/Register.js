import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUsers, postOption } from "../ApiManager.js"
// import { fetchUsers, postOption } from "../ApiManger.js"
import { Authorized } from "../views/Authorized"
import "./Register.css"



export const Register = () => { //Need prop? Register.js in Honey Rae's was passed a prop, but seemingly never used
    const [user, setUser] = useState({
        
        fullName: "",
        email: "",
        address: "",
        birthDate: "",
        // male: ,
        // female: ,
        phoneNumber: ""
    })
    
    let navigate = useNavigate()

    const registerNewUser = () => {
        return (
        fetchUsers("", postOption(user))//fetch call
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("myMedical_user", JSON.stringify({
                        id: createdUser.id,
                    }))

                    navigate("/")
                }
            }))
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return ( 
            fetchUsers()//fetch call
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            }))
    }

    const updateCustomer = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h2 className="h3 mb-3 font-weight-normal">Please Register for My Medical Storage</h2>
                <fieldset>
                    <label htmlFor="userName"> Full Name </label>
                    <input onChange={updateCustomer}
                           type="text" id="userName" className="form-control"
                           placeholder="Enter your Full Name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateCustomer}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="street"> Street Address </label>
                    <input onChange={updateCustomer}
                        type="street" id="street" className="form-control"
                        placeholder="Street address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="birth"> Birth Date </label>
                    <input onChange={updateCustomer}
                        type="birth" id="birth" className="form-control"
                        placeholder="Birth Date MM/DD/YY" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="phone"> Phone Number </label>
                    <input onChange={updateCustomer}
                        type="phone" id="phone" className="form-control"
                        placeholder="Phone Number ex. 888-111-2323" required />
                </fieldset>
                
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}