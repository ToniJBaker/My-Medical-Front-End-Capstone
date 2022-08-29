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
        city:"",
        state: "",
        zip: "",
        birthDate: "",
        phoneNumber: "",
        male:false ,
        female: false
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
<form class="row g-3" onSubmit={handleRegister}>
    <h2 className="h3 mb-3 font-weight-normal">Please Register for My Medical Storage</h2>
        
        <div class="col-md-6">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input onChange={updateCustomer} type="text" className="form-control" id="fullName"/>
        </div>
        <div class="col-md-6">
            <label htmlFor="email" class="form-label">Email</label>
            <input onChange={updateCustomer} type="email" className="form-control" id="email"/>
        </div>
        <div class="col-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input onChange={updateCustomer} type="text" className="form-control" id="address" placeholder="ex. 1234 Main St"/>
        </div>
        <div class="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input onChange={updateCustomer} type="text" className="form-control" id="city" placeholder=""/>
        </div>
        <div class="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="state" className="form-select" onChange={updateCustomer}>
                <option selected>Choose...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
        </div>
        <div class="col-md-2">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input onChange={updateCustomer} type="text" className="form-control" id="zip"/>
        </div>
        <div class="col-md-6">
            <label htmlFor="birthDate" className="form-label">Birth Date</label>
            <input onChange={updateCustomer} type="text" className="form-control" id="birthDate" placeholder="MM/DD/YYYY"/>
        </div>
        <div class="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input onChange={updateCustomer} type="text" className="form-control" id="phoneNumber" placeholder="ex. 801-111-2222"/>
        </div>
        <div class="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="male"/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
            </label>
        </div>
        <div class="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="female" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
            </label>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Register</button>
            <Link to="/login" className="btn btn-primary">Back</Link>

        </div>
    </form>
</> )
}