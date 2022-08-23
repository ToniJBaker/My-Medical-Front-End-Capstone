import { useState, useEffect } from "react"
import { fetchAppointments, fetchPhysicians, putOption } from "../ApiManager"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Appointments.css"

export const AppointmentUpdate = () => {
    const {appointmentId} = useParams()
    const navigate = useNavigate()
           
    const [appointment, setAppointment] = useState({
        userId: 0, 
        physicianId:0,
        time:"",
        date:""
    })
    
    useEffect(
        ()=>{
          fetchAppointments(`/${appointmentId}`) //fetch call, appointment by id & expand to physicianId ex.http://localhost:8088/appointments/1?_expand=physician `/${appointmentId}`?_expand=physician
          .then((appointmentFromAPI)=>{
                setAppointment(appointmentFromAPI)
          })
        },
        []
    )
    
    const handleUpdatedAppointment = (event) => { //function to save updated appointment time and date
        event.preventDefault()
            fetchAppointments(`/${appointmentId}`, putOption(appointment)) //fetch call to POST new physician to database.json
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
        <form onSubmit={handleUpdatedAppointment}>
            {/* <div className="row mb-3" >
                <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" value={appointment.date} id="date"/>
                </div>
            </div>
  
            <div className="row mb-3">
                <label htmlFor="time" className="col-sm-2 col-form-label">Time</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" value={appointment.time} id="time"/>
                </div>
            </div> */}
             
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
        <button type="submit" className="btn btn-primary">Update</button>
    </form>
    </>
    )
}