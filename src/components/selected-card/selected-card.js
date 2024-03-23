import React, { useState } from 'react'

const SelectedCard = ({selectedTypePlan, infoType, handleSelected}) => {

    const isSelected = selectedTypePlan === infoType.type ? true : false; 

    return(
        <>
            <div className={ isSelected ? 'selected-card selected-card-active' : 'selected-card'} onClick={() => handleSelected(infoType.type)}>
                <div className='selected-card__radius'>
                    
                    { isSelected ? <div className='active'>
                        <img src='images/vectors/atoms_radio_button_web.svg' alt='Volver'></img>
                    </div> : <div className='inactive'></div>}
                </div>
                <div className='selected-card__icon-top'>
                <img src={infoType.icon} alt='Volver'></img>
                <span>{infoType.title}</span>
                    
                
                </div>
                <div className='selected-card__icon-down'>
                    <p className='description'>{infoType.description}</p>
                </div>
            </div>
        </>
    )
}

export default SelectedCard