import { fetchProcedures, postOption } from "../ApiManager"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"



export const ProcedureForm = ({localUserId, getProcedures}) => {
    const navigate = useNavigate()
    
    //State to hold newProcedure to be added to API
    const [newProcedure, setNewProcedure] = useState({
        userId: 0,
        name: "",
        date: "",
    })
    
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    //Create "blank" procedure template object to set to state
        const blankProcedureState = {
            userId:localUserId,
            name: newProcedure.name,
            date: newProcedure.date,
        }
        fetchProcedures("",postOption(blankProcedureState))
            .then(getProcedures)
        }
   
    return (
    <>
        <form onSubmit={handleSaveButtonClick}> 
            <fieldset>
                        <div className="procedure-form">
                            <label htmlFor="name">Procedure: </label>
                            <input
                                required autoFocus
                                type="text"
                                className="form-control"
                                value={newProcedure.name}
                                onChange={
                                    (e) => {
                                        const editedProcedure = { ...newProcedure }
                                        editedProcedure.name = e.target.value
                                        setNewProcedure(editedProcedure)
                                    }
                                } />
                        </div>
            </fieldset>
            <fieldset>
                <div className="procedure-form">
                    <label htmlFor="date"> Date: </label>
                    <input type="text"
                        className="form-control"
                        placeholder="MM/DD/YYYY"
                        value={newProcedure.date}
                        onChange={
                            (e) => {
                                const editedProcedure = { ...newProcedure }
                                editedProcedure.date = e.target.value
                                setNewProcedure(editedProcedure)
                            }
                        } />
                </div>
            </fieldset>
            <div className="procedure-form">
                <button className="btn btn-primary" type="submit" > Save </button>
            </div>
        </form>
    </>
    )
}