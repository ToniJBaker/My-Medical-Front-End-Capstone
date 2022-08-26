import { SideNavigation } from "../nav/SideNavigation"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchProcedures, deleteOption } from "../ApiManager"
import { ProcedureForm } from "./ProcedureForm"



export const MedHistory = () => {
    const navigate = useNavigate()
    const [fullHistory, setFullHistory] = useState([])
    const [procedures, setProcedures] = useState([])
    const localMedicalUser = localStorage.getItem("myMedical_user")
    const medicalUserObject = JSON.parse(localMedicalUser)

    //state to handle toggle state
    const [showProcedureForm, setShowProcedureForm] = useState(false) 
   
    //Click toggle the procedure form, see ternary statement between button element
    const toggleProcedureForm = (showProcedureForm) => {
        if (showProcedureForm) {
            setShowProcedureForm(false)
        } else {
            setShowProcedureForm(true)
        }
    }
    
    //function to fetch the local user procedures and sort them by date- most current to oldest
    const fetchUserProcedures =()=> {

        fetchProcedures() //fetch call
            .then((proceduresFromAPI)=>{
                const proceduresForUser = proceduresFromAPI.filter((procedure)=> medicalUserObject.id === procedure.userId ).sort((objA,objB) =>{
                    return new Date(objB.date) - new Date(objA.date)
            })
                setProcedures(proceduresForUser)
            })
    }
    useEffect(// useEffect to observe state fetch user procedures
        ()=> {
           fetchUserProcedures() 
        },[])
    
    //function to delete a procedure
    // const deleteProcedure = (procedure)=> {
    //     return <button type="button" onClick={()=>{
    //         fetchProcedures(`/${procedure.id}`, deleteOption()) //fetch call with DELETE option
    //         .then(()=>{
    //             fetchProcedures()//fetch call
    //                 .then((userProcedures)=> {
    //                     const proceduresForUser = userProcedures.filter((procedure)=> medicalUserObject.id === procedure.userId ).sort((objA, objB)=> {
    //                         return new Date(objB.date) - new Date(objA.date)
    //                     })
    //                     setProcedures(proceduresForUser)
    //             })
    //         })
    //     }}className="deleteProcedures">Delete</button>
    // }  
    
    
    return (
    <>
         <h2 className="welcome">Medical History</h2>
        <SideNavigation/>
        <button type="button" className="btn btn-primary" onClick={()=> navigate(`/medicalHistoryForm`)}>Enter Medical History</button>
        <h5>Please check options to save your medical history</h5>
        <fieldset className="recorded-history">  
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Something Here
                </label>
            </div>
            <section className="historyForm1">
                <div className="historyList">
                    <p>  something 1  </p>
                    <p>  something 2   </p>
                    <p>  something 3   </p>
                </div>
                <div className="historyList">
                    <p>  something 1  </p>
                    <p>  something 2   </p>
                    <p>  something 3   </p>
                </div> 
                <div className="historyList">
                    <p>  something 1  </p>
                    <p>  something 2   </p>
                    <p>  something 3   </p>
                </div>
            </section>
            <h5>My Medical Procedures</h5>
            {
                procedures.map((procedure)=>
                    <section className="historyForm2">
                        <div className="procedureList">
                            <p className="procedure"> Procedure: {procedure.name}</p>
                            <p className="procedure">Date: {procedure.date}</p>
                            {/* <p className="procedureDelete" onClick="">Delete</p> */}
                            {/* {
                                deleteProcedure(procedure)
                            } */}
                        </div>
                    </section>
                )
            }
            
            <div className="newProcedure">
                <button className="btn btn-primary" onClick={() => toggleProcedureForm(showProcedureForm)}>{showProcedureForm 
                ? "Hide Form" 
                : "Add New Procedure"}</button>
                
                {showProcedureForm 
                ? <ProcedureForm localUserId={medicalUserObject.id} getProcedures={fetchUserProcedures} /> 
                : null} 
                
                {/* {tasks.map(task => <TaskCard key={task.id} task={task} getTasks={fetchAllTasks} />)}   */}
            </div>
        </fieldset>
    </>
    )
}