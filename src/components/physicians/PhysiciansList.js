import { SideNavigation } from "../nav/SideNavigation"
import "./Physicians.css"
import { useState, useEffect } from "react"
import { deleteOption, fetchPhysicians } from "../ApiManager"
import { useNavigate } from "react-router-dom"




export const PhysiciansList = () => {
    const [physicians, setPhysicians] = useState([])
    const navigate = useNavigate()
    
    
    const localMedicalUser = localStorage.getItem("myMedical_user")
    const medicalUserObject = JSON.parse(localMedicalUser)
    
    useEffect(
        ()=> {
            fetchPhysicians(`?_embed=appointments`)
            .then((physiciansList) =>{
                const physiciansForLocalUser = physiciansList.filter((physician)=> medicalUserObject.id === physician.userId )
                setPhysicians(physiciansForLocalUser)
            })
        },
        []
    )
    const deletePhysician = (physician)=> {
        return <button type="button" onClick={()=>{
            fetchPhysicians(`/${physician.id}`, deleteOption()) //fetch call with DELETE option
            .then(()=>{
                fetchPhysicians()
                    .then((userPhysicians)=> {
                        setPhysicians(userPhysicians)
                })
            })
        }}className="btn btn-primary">Delete</button>
    }

       
    return (
    <>
        <h2 className="welcome">Physicians</h2>
        <SideNavigation/>
        <button type="button" className="btn btn-primary" onClick={()=> navigate(`/physicianForm`)}>Add Physician</button> 
        
        {
            physicians.map(
                (physician)=>
            
                    <div className="card text-center" key={physician.id}>
                        <div className="card-header">
                           {physician.specialty}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Dr. {physician.name}</h5>
                            <p className="card-text">Phone: {physician.phone}</p>
                            <p className="card-text">Address: {physician.address}</p>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-primary">Edit</button>
                                {
                                    deletePhysician(physician)
                                }
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            
                            {
                                physician.appointments.map(
                                    (appointment)=>
                                    `Next Appointment: ${appointment.date}`
                                )
                            }                          
                        </div>
                    </div>)
        }
    </>
    )
}