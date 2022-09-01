import './NavBar.css'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { fetchUsers } from '../ApiManager'


export const NavBar = () => {
    const navigate = useNavigate()
    const [time, setTime] = useState(null)
    const [currentUser, setCurrentUser] = useState({})
    
    //for getting current user
    const localMedicalUser = localStorage.getItem("myMedical_user")
    const medicalUserObject = JSON.parse(localMedicalUser)
    //useEffect to observe current time state
    useEffect (
        ()=>{
            let time = getCurrentTime()
            setTime(time)
        },[])
    
    //function to get current time-military time
    const getCurrentTime = ()=>{
        let today = new Date()
        let hours = (today.getHours() < 10? "0" :"") + today.getHours()
        let minutes = (today.getMinutes()< 10? "0" :"") + today.getMinutes()
        let seconds = (today.getSeconds()< 10? "0" :"") + today.getSeconds()
        return hours + ":" + minutes +":" + seconds
    }
    
    useEffect(
        ()=> {
            fetchUsers(`/${medicalUserObject.id}`) //fetch call get user by id
            .then((userFromAPI)=>{
                setCurrentUser(userFromAPI)
            })
        },
    [])
    
    
        
    
    return (
    <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Welcome {currentUser.fullName}: {new Date().toUTCString().slice(0,16)}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Current Time {time}</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="navbar__item active">
                                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link className="navbar__link" to="/">Home</Link>
                            </li>
                            <li className="navbar__item active">
                                <Link className="navbar__link" to="/updateProfile" >Profile</Link>
                            </li>
                            {
                                localStorage.getItem("myMedical_user")
                                    ? <li className="navbar__item navbar__logout">
                                        <Link className="navbar__link" to="" onClick={() => {
                                            localStorage.removeItem("myMedical_user")
                                            navigate("/", {replace: true})
                                        }}>Logout</Link>
                                    </li>
                                    : ""
                            }
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">View Calendar</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                             </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}