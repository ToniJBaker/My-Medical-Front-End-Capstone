import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
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
            fetchUsers(user)//fetch call
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

    return (<>
        {/* <main style={{ textAlign: "center" }}>
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
        </main> */}




<form class="row g-3" onSubmit={handleRegister}>
    <h2 className="h3 mb-3 font-weight-normal">Please Register for My Medical Storage</h2>
        
        <div class="col-md-6">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input onChange={updateCustomer} type="text" class="form-control" id="fullName"/>
        </div>
        <div class="col-md-6">
            <label htmlFor="email" class="form-label">Email</label>
            <input onChange={updateCustomer} type="email" className="form-control" id="email"/>
        </div>
        <div class="col-12">
            <label htmlFor="address" class="form-label">Address</label>
            <input onChange={updateCustomer} type="text" className="form-control" id="address" placeholder="ex. 1234 Main St"/>
        </div>
        {/* <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" placeholder=""/>
        </div>
        <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip"/>
        </div> */}
        <div class="col-md-6">
            <label htmlFor="birthDate" className="form-label">Birth Date</label>
            <input onChange={updateCustomer} type="text" className="form-control" id="birthDate" placeholder="MM/DD/YYYY"/>
        </div>
        <div class="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input onChange={updateCustomer} type="text" className="form-control" id="phoneNumber" placeholder="ex. 801-111-2222"/>
        </div>
        <div className="col-12">
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Register</button>
            <Link to="/login" className="btn btn-primary">Back</Link>

        </div>
    </form>
</> )
}