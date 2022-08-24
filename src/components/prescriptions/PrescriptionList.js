import { SideNavigation } from "../nav/SideNavigation"
import "./Prescriptions.css"
import { useState, useEffect } from "react"
import { fetchPrescriptions } from "../ApiManager"
import { useNavigate } from "react-router-dom"

export const PrescriptionList = () => {
    
    const [prescriptions, setPrescriptions] = useState([])
    const navigate = useNavigate()
    const localMedicalUser = localStorage.getItem("myMedical_user")
    const medicalUserObject = JSON.parse(localMedicalUser)
       
    useEffect (
    ()=>{
        fetchPrescriptions(`/?_expand=physician`) //fetch call for prescriptions array
        .then((prescriptionFromAPI)=>{
            setPrescriptions(prescriptionFromAPI)
        })
    },
    []
   ) 
    
    return (
    <>
        <h2 className="welcome">Prescriptions</h2>
        <SideNavigation/>
        <button type="button" className="btn btn-primary" onClick={()=> navigate(`/prescriptionForm`)}>Add Prescription</button>
        {
        prescriptions.map(
            (prescription)=> (
            <>
            {prescription.userId === medicalUserObject.id
                ?<section className="prescriptions">
                    <div className="prescriptionCard" >
                        <img src="https://media.istockphoto.com/photos/prescription-form-clipped-to-pad-lying-on-table-picture-id852404096?b=1&k=20&m=852404096&s=170667a&w=0&h=E61Rx1mg5p9HO6vjCR5s84Ek9FIN9c3IDCBRXiqwz8M=" className="card-img-top" alt="..."/>
                        
                        <h5 className="card-title">{prescription.name}</h5>
                            {/* <p className="card-text">{prescription.dosage}</p> */}
                        <ul className="list-group list-group-flush">
                            {/* <li className="list-group-item">An item</li> */}
                            <li className="list-group-item">{prescription.dosage}</li>
                            <li className="list-group-item">Prescribed by: Dr.{prescription?.physician?.name}</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a><br/>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                    <div>
                        <div>

                        </div>


                    </div>
                </section>

                
                :"" 

            }</> 
              
            ))

        }
    </>
    )
}