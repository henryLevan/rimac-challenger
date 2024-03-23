import React, {useContext} from 'react'
import Divider from '@mui/material/Divider';
import UserContext from '../../context/User/UserContext';

const ProgressiveBar = () => {

    const { activeStep } = useContext(UserContext)
    
    return(
        <>
            <div className='main-content progresive-bar'>
                <div className='main-content__center progresive-bar__content'>
                    <div className='version-mobile'>
                        <img src='images/vectors/atoms-button-circle-icons-web.svg' alt='regresar'></img>
                        <span>PASO 1 DE 2</span>
                        <div className='version-mobile__progress-bar'>
                            <div className='dowloaded'></div>
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