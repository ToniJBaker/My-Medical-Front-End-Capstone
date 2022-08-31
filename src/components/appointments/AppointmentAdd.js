import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchAppointments, fetchPhysicians, postOption,} from "../ApiManager"
import { useParams } from "react-router-dom"

export const AppointmentAdd = () => {
    const navigate = useNavigate()
    const {physicianId} = useParams()
    const [physician, setPhysician] = useState({})
    const [appointment, setAppointment] = useState({
        userId: 0, 
        physicianId:0,
        time:"",
        date:""
    })
    useEffect(
        ()=>{
        fetchPhysicians(`/${physicianId}`)
        .then((physicianFromAPI)=>{
            setPhysician(physicianFromAPI)
            })
        },
    []
    )
    
    const localMedicalUser = localStorage.getItem("myMedical_user")
    const medicalUserObject = JSON.parse(localMedicalUser)
    
    
    const handleSaveNewAppointment = (event)=>{
        event.preventDefault()
        const appointmentToSendToAPI = {
            userId:medicalUserObject.id,
            physicianId: +physicianId,
            time:appointment.time,
            date:appointment.date
        }
        fetchAppointments("", postOption(appointmentToSendToAPI))
            .then(()=>{
                navigate("/physicians")
        })
    }
    const convertDateFormat = (dateString, outFormat) => {

        if (outFormat === "slash") {
            const splitDate = dateString.split("-")
            if (splitDate.length === 1) return dateString
            return splitDate[1] + "/" + splitDate[2] + "/" + splitDate[0]
        }
        if (outFormat === "dash") {
            const splitDate = dateString.split("/")
            if (splitDate.length === 1) return dateString
            if (parseInt(splitDate[2]) < 100) splitDate[2] = "20" + splitDate[2]
            return splitDate[2] + "-" + splitDate[0] + "-" + splitDate[1]
        }
        return dateString
        
    }
    
    
        
    return (
    <>
    <form onSubmit={(e) => handleSaveNewAppointment(e)}>
        <h4>New Appointment with Dr. {physician.name}  </h4> 
        <div className="form-group">
                <label htmlFor="date">Choose Date:</label>
                <input type="date"
                    value={convertDateFormat(appointment.date, "dash")}
                    onChange={
                        (evt) => {
                            const copy = {...appointment}
                            copy.date = convertDateFormat(evt.target.value, "slash")
                            setAppointment(copy)
                        }
                    } />
            </div>
        <div className="form-group">
                <label htmlFor="time">Choose Time:</label>
                <input type="time"
                    value={appointment.time}
                    onChange={
                        (evt) => {
                            const copy = {...appointment}
                            copy[evt.target.id] = evt.target.value
                            setAppointment(copy)
                        }
                    } id="time"/>
            </div>
        <button type="submit" className="btn btn-primary">Save</button>
    </form>
    
    </>
    )
}