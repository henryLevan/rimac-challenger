import React, { useEffect, useContext } from 'react'
import Header from '../../components/header/header';
import ProgressiveBar from '../../components/progresive-bar/progresive-bar';
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import UserContext from '../../context/User/UserContext';

const Summary = () => {

    const {selectedPlan, infoUser, updateStep } = useContext(UserContext)
    const navigate = useNavigate(); 

    useEffect(() => {
        updateStep(2)
    }, [])

    return(
        <>
        <div className='summary'>
        <Header></Header>
        <div className='main-content'>
            <ProgressiveBar></ProgressiveBar>
            <div className='main-content__center'>
                <div onClick={() => navigate('/planes')} className='back-button'>
                    <img src='images/vectors/Icon-back-button.svg' alt='Volver'></img>
                    <span>Volver</span>
                </div>
                <h3 className='main-title'>
                Resumen del seguro 
                </h3>
                <div className='summary__card'>
                    <span>PRECIOS CALCULADOS PARA:</span>
                    <ul className='user-detail-list'>
                        <li>
                            <img src='images/vectors/person-group.svg' alt='Volver'></img>
                        </li>
                        <li>
                            <h5>{infoUser.name + ' ' + infoUser.lastName}</h5>
                        </li>
                    </ul>
                    <Divider></Divider>

                    <ul className='selected-plan'>
                        <li className='title-list'>Responsable de pago</li>
                        <li>DNI: {infoUser.documentNumber}</li>
                        <li>Celular: {infoUser.cellPhoneNumber}</li>
                    </ul>
                    <ul className='selected-plan'>
                        <li className='title-list'>Plan elegido</li>
                        <li>{selectedPlan.name}</li>
                        <li>Costo del Plan: ${selectedPlan.price} al mes</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Summary