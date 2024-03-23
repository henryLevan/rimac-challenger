import React, { useRef, useState, useContext, useEffect } from 'react'
import Header from '../../components/header/header';
import ProgressiveBar from '../../components/progresive-bar/progresive-bar';
import SelectedCard from '../../components/selected-card/selected-card';
import DetailCard from '../../components/detail-card/detail-card';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import UserContext from '../../context/User/UserContext';
import{ PLAN_TYPES }from '../../utils/constants'
import {calculateYears} from '../../utils/utils'
import { PLAN_TYPES_FOR_SOMEONE } from '../../utils/constants'

const Plans = () => {

    let sliderRef = useRef(null);
    const [ slideIndex, setSlideIndex ] = useState(0);
    const [ updateCount, setUpdateCount ] = useState(1);
    const [ lengthSlider, setLengthSlider ] = useState(3)
    const { updateStep, plans, savePlan, getPlans, plansByAge, savePlanByAge, selectedTypePlan, saveSelectedTypePlan, infoUser } = useContext(UserContext)

    useEffect(() => {
        updateStep(1)
    }, [])

    useEffect(() => {
        getPlans()
        if(selectedTypePlan){
            findPlanesForAge(selectedTypePlan, plans)
        }
    }, [selectedTypePlan])


    const findPlanesForAge = (typePlan, planList) => {

        const age = calculateYears(infoUser.birthDay)
        let filterPlansByAge = planList.filter(element => element.age >= Number(age))

        if(typePlan === PLAN_TYPES_FOR_SOMEONE) {
           filterPlansByAge.map( item => item.price = item.price - parseFloat(item.price)*0.05 )
        }

        savePlanByAge(filterPlansByAge)
    }

    const handleSavePlan = (selectedPlan) => {
        savePlan(selectedPlan)
        navigate('/resumen')
    }


    const nextSlider = (itemSliderLength, positionSlider) => {
        if(positionSlider <= itemSliderLength) {
            sliderRef.slickGoTo(slideIndex + 1)
        }else{
            setUpdateCount(1)
        }
    }

    const prevSlider = (itemSliderLength, positionSlider) => {
        if(positionSlider >= itemSliderLength) {
            sliderRef.slickGoTo(slideIndex - 1)
        }else{
            setUpdateCount(3)
        }
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        centerMode: false,
        center: false,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next),
        responsive: [
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                center: true
              }
            }
          ]
        
      };
    const navigate = useNavigate(); 

    return(
        <>
        <div className='plansPage'>
        <Header></Header>
        <div className='main-content'>
            <ProgressiveBar></ProgressiveBar>
            <div className='main-content__center'>
                <div onClick={() => navigate('/')} className='back-button'>
                    <img src='images/vectors/Icon-back-button.svg' alt='Volver'></img>
                    <span>Volver</span>
                </div>
                <div className='plansPage__selected-card'>
                    <h3 className='main-title'>
                        {infoUser.name} ¿Para quién deseas cotizar?
                    </h3>
                    <p className='main-description'>
                        Selecciona la opción que se ajuste más a tus necesidades.
                    </p>
                    <div className='plansPage__selected-card--selected-cards'>
                        {
                            PLAN_TYPES.length && PLAN_TYPES.map((type, key) => 
                            <SelectedCard key={key} selectedTypePlan={selectedTypePlan} handleSelected={(selectedPlan) => saveSelectedTypePlan(selectedPlan)} infoType={type}></SelectedCard>
                            ) 
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className='plansPage__detail-cards'>
            { plansByAge.length > 0 && <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings} >
                {
                    plansByAge.map((dataItem, key) => 
                    <div key={key}><DetailCard handleSelectedPlan={(data) => handleSavePlan(data)} dataItem={dataItem}></DetailCard></div>) 
                }
            </Slider>}
            <div className='plansPage__detail-cards--arrows'>
                <div className={ slideIndex > 0 ? 'icon-arrow-left active' : 'icon-arrow-left'} onClick={() => prevSlider(lengthSlider, updateCount )}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_8348_236)">
                    <circle cx="12" cy="12" r="11" stroke="#A9AFD9" stroke-width="2"/>
                    <path className='first' d="M12.9715 15.9037L9.06396 11.9999L12.9715 8.09619L14.029 9.15369L11.1865 11.9999L14.029 14.8462L12.9715 15.9037Z" fill="#A9AFD9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_8348_236">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
                <span>{slideIndex + 1} / {lengthSlider}</span>
                <div className={ slideIndex + 1 < lengthSlider ? 'icon-arrow-right active' : 'icon-arrow-right'} onClick={() => nextSlider(lengthSlider, updateCount )}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_8348_236)">
                    <circle cx="12" cy="12" r="11" stroke="#A9AFD9" stroke-width="2"/>
                    <path d="M12.9715 15.9037L9.06396 11.9999L12.9715 8.09619L14.029 9.15369L11.1865 11.9999L14.029 14.8462L12.9715 15.9037Z" fill="#A9AFD9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_8348_236">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Plans