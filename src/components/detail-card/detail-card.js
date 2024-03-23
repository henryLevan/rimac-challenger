import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const DetailCard = ({dataItem, handleSelectedPlan}) => {
    return(
        <>
            <div className='detail-card'>
                <div>
                    <div  className='detail-card__title'>
                        <div className='is-recommend'>
                            <span>Plan recomendado</span>
                        </div>
                        <span>{dataItem.name}</span>
                        <img src='images/steps-images/IcHomeLight.svg' alt='Volver'></img>
                    </div>
                    <div  className='detail-card__description'>
                        <span>COSTO DEL PLAN</span>
                        <h4>${dataItem.price} al mes</h4>
                    </div>
                    <Divider className='detail-card__divider'></Divider>
                    <ul className='detail-card__list'>
                    {
                        dataItem.description.length && dataItem.description.map((label, key) => 
                        <li key={key}>
                            <div className='detail-card__list--item'>
                                {/* <span className='circle'></span> */}
                                <img className='only-mobile' src='images/steps-images/mobile-icons-lists/person.svg' alt='icono persona'></img>
                                <p className='description'>{label}</p>
                            </div>
                        </li>) 
                    }
                    </ul>
                </div>
                <Button onClick={ () => handleSelectedPlan(dataItem) } type='submit' size="medium" variant="contained">
                    Seleccionar Plan
                </Button>
            </div>
        </>
    )
}

export default DetailCard