import { SideNavigation } from "../nav/SideNavigation"
import { useNavigate } from "react-router-dom"



export const MedHistory = () => {
    const navigate = useNavigate()
    
    
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
        </fieldset>
    
    </>
    )
}