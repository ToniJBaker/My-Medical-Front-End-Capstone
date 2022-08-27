import { SideNavigation } from "../nav/SideNavigation"
import "./Prescriptions.css"
import { useState, useEffect } from "react"
import { deleteOption, fetchPrescriptions } from "../ApiManager"
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
   
   const deletePrescription = (prescription)=> {
    return <button type="button" onClick={()=>{
        fetchPrescriptions(`/${prescription.id}`, deleteOption()) //fetch call with DELETE option
        .then(()=>{
            fetchPrescriptions(`/?_expand=physician`)//fetch call for prescriptions
                .then((userPrescriptions)=> {
                    setPrescriptions(userPrescriptions)
            })
        })
    }}className="btn btn-primary">Delete</button>
}
    
    return (
    <>
        <h2 className="welcome">Prescriptions</h2>
        <SideNavigation/>
        <button type="button" className="btn btn-primary" onClick={()=> navigate(`/prescriptionForm`)}>Add Prescription</button><br/>
        <img src="https://media.istockphoto.com/photos/prescription-form-clipped-to-pad-lying-on-table-picture-id852404096?b=1&k=20&m=852404096&s=170667a&w=0&h=E61Rx1mg5p9HO6vjCR5s84Ek9FIN9c3IDCBRXiqwz8M=" className="card-img-top" alt="..."/>
        <img src="https://www.prescription-center.com/images/medications-2.jpg" className="card-img-top" alt="..."/>
        {
        prescriptions.map(
            (prescription)=> (
            <>
            {prescription.userId === medicalUserObject.id
                ?<section className="prescriptions">
                    <div className="prescriptionCard" >
                        
                        
                        <h4 className="card-title">Prescription: {prescription.name}</h4>
                            {/* <p className="card-text">{prescription.dosage}</p> */}
                        <ul className="list-group list-group-flush">
                            {/* <li className="list-group-item">An item</li> */}
                            <li className="list-group-item">Dosage: {prescription.dosage}</li>
                            <li className="list-group-item">Prescribed by: Dr.{prescription?.physician?.name}</li>
                        </ul>
                        <div className="card-body">
                            {
                            deletePrescription(prescription)
                            }
                            
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