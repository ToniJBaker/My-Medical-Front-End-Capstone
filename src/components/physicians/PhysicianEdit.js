import { SideNavigation } from "../nav/SideNavigation"
import { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { fetchPhysicians, putOption } from "../ApiManager"

export const PhysicianEdit = () => {
    const navigate = useNavigate()
    const {physicianId} = useParams()
    const [physician, setPhysician] = useState({ //initial state of single physician
        userId:0,
        name:"",
        phone:"",
        address:"",
        city:"",
        state:"",
        zip:"",
        specialty: ""
    })
       
    const localMedicalUser = localStorage.getItem("myMedical_user")
    const medicalUserObject = JSON.parse(localMedicalUser)
    
    useEffect(
        ()=> {
            fetchPhysicians(`/${physicianId}`) //fetch call to observe state of single physician
            .then((physicianToEdit) =>{
                setPhysician(physicianToEdit)
            })
        },
        []
    )
    const handlePhysicianUpdate = (event)=>{
        event.preventDefault()
        fetchPhysicians(`/${physicianId}`, putOption(physician))  //fetch call with PUT option to modify single physician
        .then(()=> {
            navigate("/physicians") //return to physicians page
        })  
    }

    const updatePhysician = (evt) => {
        const copy = {...physician}
        copy[evt.target.id] = evt.target.value
        setPhysician(copy)
    }
    
    return (
    <>
        <h2 className="welcome">Physicians</h2>
        <SideNavigation/>
        <Link to="/physicians" className="btn btn-primary">Back</Link>
        <form className="editPhysician" onSubmit={handlePhysicianUpdate}>
            <h4>Edit Details for: Dr. {physician.name}</h4>
            <div>
                <p className="editPhysician-text">Name: </p>
                    <input value={physician.name} type="text" className="form-control" id="name" onChange={updatePhysician}/>
                <hr style={{background:'black', height:'5px'}}/>
                
                <p className="editPhysician-text">Phone: </p>
                    <input value={physician.phone} type="text" className="form-control" id="phone" onChange={updatePhysician}/>
                <hr style={{background:'black', height:'5px'}}/>
                
                <p className="editPhysician-text">Address: </p>
                    <input value={physician.address} type="text" className="form-control" id="address" onChange={updatePhysician}/>
                <hr style={{background:'black', height:'5px'}}/>
                
                <p className="editPhysician-text">City: </p>
                    <input value={physician.city} type="text" className="form-control" id="city" onChange={updatePhysician}/>
                <hr style={{background:'black', height:'5px'}}/>
                
                <p className="editPhysician-text">State: </p>
                    <select id="state" className="form-select" value={physician.state} 
                onChange={
                    updatePhysician
                }>
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
                <hr style={{background:'black', height:'5px'}}/>
                
                <p className="editPhysician-text">Zip: </p>
                    <input value={physician.zip} type="text" className="form-control" id="zip" onChange={updatePhysician}/>
                <hr style={{background:'black', height:'5px'}}/>
                
                <p className="editPhysician-text">Specialty: </p>
                    <input value={physician.specialty} type="text" className="form-control" id="specialty" onChange={updatePhysician}/>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </div>


        </form>
    </>
    )
}