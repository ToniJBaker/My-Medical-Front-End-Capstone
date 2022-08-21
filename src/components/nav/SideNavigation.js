import './SideNavigation.css'
import { Link, useNavigate } from 'react-router-dom'

export const SideNavigation = () => {
    const navigate = useNavigate()
    
    return (
    <>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
            Navigate My Storage
        </button>

        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="staticBackdropLabel">My Folders</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <p className="navbar__item active">
                <Link className="navbar__link" to="/physicians">Physicians</Link>
            </p>
            <p className="navbar__item active">
                <Link className="navbar__link" to="/prescriptions">Prescriptions</Link>
            </p>
            <div>
            I will not close if you click outside of me.
            </div>
        </div>
        </div>
    
    </>
    )
}