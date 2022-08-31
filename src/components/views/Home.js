import "./Home.css"
import { useState, useEffect } from "react"
import { fetchAppointments } from "../ApiManager"



export const Home = () => {
  const [appointments, setAppointments] = useState([])

  const localMedicalUser = localStorage.getItem("myMedical_user")
  const medicalUserObject = JSON.parse(localMedicalUser)
  
  useEffect(
    ()=>{
      fetchAppointments(`?_expand=physician`)
      .then((appointmentsForUser)=>{
        const sortedAppointments = appointmentsForUser.filter((appointment)=> medicalUserObject.id === appointment.userId).sort((objA,objB) =>{
          return new Date(objA.date) - new Date(objB.date)})
        setAppointments(sortedAppointments)
      })
    },
    []
  )

  return (
    <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://media.istockphoto.com/photos/empty-doctors-office-picture-id1295782888?b=1&k=20&m=1295782888&s=170667a&w=0&h=KNBCRCRApn-bpmn0LVo2xbmbsq7UMlf1RPs5jT1kpYk=" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>NEXT APPOINTMENT: {appointments[0]?.date}</h5>
        <p className="home-appointment">Time: {appointments[0]?.time}</p>
        <p className="home-appointment"> Appointment with: Dr. {appointments[0]?.physician?.name}</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     </>
    )
}



