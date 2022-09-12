import { useState, useEffect } from "react"
import { fetchUserImmunizations, postOption } from "../ApiManager"
import { SideNavigation } from "../nav/SideNavigation"


export const ImmunizationForm = () => {
    
    const [userImmunizations, setUserImmunizations] = useState([]) 
    const [singleUserImmunization, setSingleUserImmunization]= useState({
        userId:0,
        immunizationId:0,
        date1:"",
        date2:"",
        date3:"",
        date4:""
    })

    const localMedicalUser = localStorage.getItem("myMedical_user")
    const medicalUserObject = JSON.parse(localMedicalUser) 

    useEffect(
        ()=>{
            fetchUserImmunizations(`?_expand=immunization`)
            .then((immunizationsList)=>{
                const userImmunizationList = immunizationsList.filter((userImmunization)=> medicalUserObject.id === userImmunization.userId)
                setUserImmunizations(userImmunizationList)
            })
        },
        []
    )
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    //Create "blank" procedure template object to set to state
        const addImmunizationDates = {
            userId:medicalUserObject.id,
            immunizationId: singleUserImmunization.immunizationId,
            date1:singleUserImmunization.date1,
            date2:singleUserImmunization.date2,
            date3:singleUserImmunization.date3,
            date4:singleUserImmunization.date4 
        }
        fetchUserImmunizations("",postOption(addImmunizationDates))
            .then()
        }
    
    return (
    <form className>
        <h2 className="welcome">Immunizations</h2>
        <SideNavigation/>
        <section className="immunization-section" >
            {
                userImmunizations.map((userImmunization)=>
                <div className="immunization-card">
                    <h className="immunization-title">{userImmunization?.immunization?.name}</h>
                    <hr style={{background:'black', height:'5px'}}/>
                    <p>
                        <div className="form-immunizations">
                            <input type="text"
                            placeholder="Enter Date"
                            onChange={
                                (evt) => {
                                    const copy = {...userImmunization}
                                    copy.date1 = evt.target.value
                                    setUserImmunizations(copy)
                                    }
                                } />
                        </div>
                    </p>
                    
                    <p></p>
                </div>
            )}
                        
        </section>
    </form>
    )
}