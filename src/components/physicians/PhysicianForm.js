import { SideNavigation } from "../nav/SideNavigation"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchPhysicians, postOption } from "../ApiManager"
import "./Physicians.css"
import { Link } from "react-router-dom"


    //function with form to POST a new Physician for the user
    export const PhysicianForm = () => {
        
        const navigate = useNavigate()
        
        const localMedicalUser = localStorage.getItem("myMedical_user")
        const medicalUserObject = JSON.parse(localMedicalUser)

        const [newPhysician, setNewPhysician] = useState({  //initial state
            userId: 0,
            name: "",
            phone: "",
            address: "",
            city:"",
            state: "",
            zip:"",
            specialty: ""
        })
            
        const handleSaveNewPhysician = (event) => {
            event.preventDefault()
            const physicianToSentToAPI = {
                userId: medicalUserObject.id,
                name: newPhysician.name,
                phone: newPhysician.phone,
                address: newPhysician.address,
                specialty: newPhysician.specialty 
            }
            return (
                fetchPhysicians("", postOption(physicianToSentToAPI)) //fetch call to POST new physician to database.json
                .then(()=>{
                    navigate("/physicians")
                })
            )
        }
        const savePhysician = (evt) => {
            const copy = {...newPhysician}
            copy[evt.target.id] = evt.target.value
            setNewPhysician(copy)
        }
        
    
    return (
    <>
        <h2 className="welcome">Add New Physician</h2>
        <SideNavigation/>

        <form className="row g-3" onSubmit={handleSaveNewPhysician} >
        <div className="col-md-6">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input onChange={savePhysician} type="text" className="form-control" id="name"/>
        </div>
        <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input onChange={savePhysician} type="text" className="form-control" id="phone"/>
        </div>
        <div className="col-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input onChange={savePhysician} type="text" className="form-control" id="address" placeholder="ex. 1234 Main St"/>
        </div>
        <div class="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className="form-control" id="city" onChange={savePhysician}/>
        </div>
        <div class="col-md-4">
            <label htmlFor="state" className="form-label">State</label>
            <select id="state" className="form-select" onChange={savePhysician}>
                <option selected>Choose...</option>
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
            <label htmlFor="zip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="zip" onChange={savePhysician}/>
        </div>
        <div className="col-md-6">
            <label htmlFor="specialty" className="form-label">Specialty</label>
            <input onChange={savePhysician} type="text" className="form-control" id="specialty"/>
        </div>
            <div className="col-12">
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Save</button>
            <Link className="btn btn-primary" to="/physicians">Back</Link>

        </div>
    </form>
    
    </>
    )
}