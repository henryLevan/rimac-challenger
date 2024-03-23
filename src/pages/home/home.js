import React, { useContext, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Form from '../../components/form/form';
import UserContext from '../../context/User/UserContext';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const { getInfoUser, getPlans } = useContext(UserContext)
    const navigate = useNavigate(); 
    const handleSendData = async (data) => {
       await getInfoUser(data)
       await getPlans()
       navigate('/planes')
    }

    return(
        <>
            <div className='home'>
            <div className='main-content home__background'>
            <Header></Header>
                <div className='main-content__center content'>
                    <div className='home__content'>
                        <div className='home__content--left'>
                            <img src='images/home-images/family.png' alt='Rimac'></img>
                        </div>
                        <div className='home__content--right'>
                            <Form handleReadyForm={(data) => handleSendData(data)}></Form>
                        </div>
                    </div>
                </div>
                <img className='home__img home__img--first-child' src='images/vectors/blur-asset-left.svg' alt='Imagen de fondo'></img>
                <img className='home__img home__img--last-child' src='images/vectors/blur-asset-right.svg' alt='Imagen de fondo'></img>
            </div>
            <Footer></Footer>
            </div>
        </>
    )
}

export default Home