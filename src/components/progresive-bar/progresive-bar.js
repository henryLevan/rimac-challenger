import React, {useContext} from 'react'
import Divider from '@mui/material/Divider';
import UserContext from '../../context/User/UserContext';
import { useNavigate } from "react-router-dom";

const ProgressiveBar = () => {

    const { activeStep } = useContext(UserContext)
    const navigate = useNavigate()
    const goTo = (url) => {
        navigate(url)
    }
    
    return(
        <>
            <div className='main-content progresive-bar'>
                <div className='main-content__center progresive-bar__content'>
                    <div className='version-mobile'>
                        <img onClick={() => goTo(activeStep === 1 ? '/' : '/planes')} src='images/vectors/atoms-button-circle-icons-web.svg' alt='regresar'></img>
                        <span>PASO { activeStep } DE 2</span>
                        <div className='version-mobile__progress-bar'>
                            <div className={activeStep === 1 ? 'dowloaded' : 'dowloaded active_dowloaded' }></div>
                        </div>
                    </div>
                    <ul>
                        <li className={ activeStep === 1 ? 'active' : ''}>
                            <span>1</span>
                            <label>Planes y coberturas</label>
                        </li>
                        <li className={ activeStep === 2 ? 'active' : ''}>
                            <span>2</span>
                            <label>Resumen</label>
                        </li>
                    </ul>
                </div>
                <Divider className='progressive-bar-mobile' variant="middle" flexItem />
            </div>
        </>
    )
}

export default ProgressiveBar