import { useState, useEffect } from "react"
import { fetchImmunizations, fetchUserImmunizations } from "../ApiManager"


export const Immunizations = () => {
    const localMedicalUser = localStorage.getItem("myMedical_user")
    const medicalUserObject = JSON.parse(localMedicalUser)

    const [userImmunizations, setUserImmunizations] = useState([])
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
    return (
        <form>
            <section className="immunization-section">
                {
                    userImmunizations.map(
                        (userImmunization)=>
                    
                        <div className="immunization-card">
                            <h className="immunization-title">{userImmunization?.immunization?.name}</h>
                            <hr style={{background:'black', height:'5px'}}/>
                            <p>{userImmunization.date1}</p>
                            <p>{userImmunization.date2}</p>
                            <p>{userImmunization.date3}</p>
                            <p>{userImmunization.date4}</p>
                            <p>{userImmunization.date5}</p>

                        </div>)
                }
                <hr></hr>
            </section>
        </form>
    )
}