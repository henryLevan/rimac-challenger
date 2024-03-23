import React from 'react'

const Header = () => {
    return(
        <>
            <div className='main-content header'>
                <div className='main-content__center header__content'>
                    <img src='images/vectors/logo-rimac-red.svg' alt='Rimac'></img>
                    <div className='header__content--information'>
                        <p>¡Compra por este medio!</p>
                        <img src='images/vectors/GlTelephoneSolid.svg'></img>
                        <a href="tel:+014116001">(01) 411 6001</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header