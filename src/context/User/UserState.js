import React, { useReducer, useState } from "react";
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios'
import { GET_USER, GET_PLANS, SAVE_SELECTED_TYPE_PLAN, SAVE_PLAN_BY_AGE, SAVE_PLAN, UPDATE_STEP } from '../types';

const UserState = (props) => {

    const initialState = {
        selectedPlan: null,
        activeStep: null,
        plans: [],
        plansByAge: [],
        infoUser: null,
        selectedTypePlan: null,
    }

    const [ state, dispatch ] = useReducer(UserReducer, initialState)

    const getPlans = async () => {
        const respond = await axios.get('https://rimac-front-end-challenge.netlify.app/api/plans.json');
        dispatch({
            type: GET_PLANS,
            payload: respond.data.list
        })
    }
    const getInfoUser = async (infoUser) => {
        const respond = await axios.get('https://rimac-front-end-challenge.netlify.app/api/user.json');
        const dataObject = {
            ...respond.data,
            ...infoUser
        }
        dispatch({
            type: GET_USER,
            payload: dataObject
        })
    }

    const saveSelectedTypePlan = (selectedTypePlan) => {
        dispatch({
            type: SAVE_SELECTED_TYPE_PLAN,
            payload: selectedTypePlan
        })
    }

    const savePlanByAge = (list) => {
        dispatch({
            type: SAVE_PLAN_BY_AGE,
            payload: list
        })
    }

    const savePlan = (plan) => {
        dispatch({
            type: SAVE_PLAN,
            payload: plan
        })
    }

    const updateStep = (step) => {
        dispatch({
            type: UPDATE_STEP,
            payload: step
        })
    }

    return (
        <UserContext.Provider value={
            {
                selectedPlan: state.selectedPlan,
                plans: state.plans,
                infoUser: state.infoUser,
                selectedTypePlan: state.selectedTypePlan,
                plansByAge: state.plansByAge,
                activeStep: state.activeStep,
                getPlans,
                getInfoUser,
                saveSelectedTypePlan,
                savePlanByAge,
                savePlan,
                updateStep
            }
        }>
            { props.children }
        </UserContext.Provider>
    )

}

export default UserState;