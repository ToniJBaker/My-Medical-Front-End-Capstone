import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { fetchUsers, putOption } from "../ApiManager"




export const UpdateProfile = () => {
    const navigate = useNavigate()
    
    
    const localMedicalUser = localStorage.getItem("myMedical_user")
    const medicalUserObject = JSON.parse(localMedicalUser)

    
    const [userProfile, updateUserProfile] = useState({
        fullName: "",
        email:"",
        address:"",
        city:"",
        state: "",
        zip: "",
        birthDate:"",
        phoneNumber:"",
        isMale:false,
    })

    useEffect (
        ()=>{
            fetchUsers(`/${medicalUserObject.id}`) //fetch call get user by id
            .then((userFromAPI)=>{
                updateUserProfile(userFromAPI)
            })
        },
        []
    )
    const handleUpdateButtonClick = (event) => { //function to save the modified article
        event.preventDefault()
        fetchUsers(`/${medicalUserObject.id}`, putOption(userProfile))  //fetch call with PUT option
        .then(()=> {
            navigate("/") //return to home
        })
        
    }


    
    
    return (
    <>
    <form class="row g-3" onSubmit={handleUpdateButtonClick}>
        <h2 className="h3 mb-3 font-weight-normal">Update Profile</h2>
            
            <div class="col-md-6">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input  type="text" className="form-control" id="fullName" value={userProfile.fullName}
                onChange={
                    (evt)=>{
                        const copy = {...userProfile}
                        copy.fullName = evt.target.value
                        updateUserProfile(copy)
                    }
                }/>
            </div>
            <div class="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input  type="email" className="form-control" id="email"  value={userProfile.email}
                onChange={
                    (evt)=>{
                        const copy = {...userProfile}
                        copy.email = evt.target.value
                        updateUserProfile(copy)
                    }
                }/>
            </div>
            <div class="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input  type="text" className="form-control" id="address" value={userProfile.address}
                onChange={
                    (evt)=>{
                        const copy = {...userProfile}
                        copy.address = evt.target.value
                        updateUserProfile(copy)
                } 
                }/>
            </div>
            <div class="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="city" value={userProfile.city}
                onChange={
                    (evt)=>{
                        const copy = {...userProfile}
                        copy.city = evt.target.value
                        updateUserProfile(copy)
                } 
                }/>
            </div>
            <div class="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select" value={userProfile.state} 
                onChange={
                    (evt)=>{
                        const copy = {...userProfile}
                        copy.state = evt.target.value
                        updateUserProfile(copy)
                } 
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
            </div>
            <div class="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" value={userProfile.zip}
                onChange={
                    (evt)=>{
                        const copy = {...userProfile}
                        copy.zip = evt.target.value
                        updateUserProfile(copy)
                } 
                }/>
            </div>
            <div class="col-md-6">
                <label htmlFor="birthDate" className="form-label">Birth Date</label>
                <input  type="text" className="form-control" id="birthDate" value={userProfile.birthDate}
                onChange={
                    (evt)=>{
                        const copy = {...userProfile}
                        copy.birthDate = evt.target.value
                        updateUserProfile(copy)
                }
            }/>
            </div>
            <div class="col-md-6">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input  type="text" className="form-control" id="phoneNumber" value={userProfile.phoneNumber}
                onChange={
                    (evt)=>{
                        const copy = {...userProfile}
                        copy.phoneNumber = evt.target.value
                        updateUserProfile(copy)
                }
            }/>
            </div>
            <div onClick={
                (evt)=>{
                    const copy = {...userProfile}
                    copy.isMale = evt.target.value
                    updateUserProfile(copy)
            }
            }>
                <div class="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="male" value={true} checked={userProfile.isMale == "true"} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="female" value={false} checked={userProfile.isMale == "false"}  />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Female
                    </label>
                </div>
                </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Update Profile</button>
            </div>
    </form>
    </>
    )
}