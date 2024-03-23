import { GET_USER, GET_PLANS, SAVE_SELECTED_TYPE_PLAN, SAVE_PLAN_BY_AGE, SAVE_PLAN, UPDATE_STEP } from '../types';

export default (state, action) => {
    const { payload, type } = action;

    switch(type) {
        case GET_USER:
            return {
                ...state,
                infoUser: payload
            }
        case GET_PLANS:
            return {
                ...state,
                plans: payload
            }
        case SAVE_SELECTED_TYPE_PLAN:
            return {
                ...state,
                selectedTypePlan: payload
            }
        case SAVE_PLAN_BY_AGE:
            return {
                ...state,
                plansByAge: payload
            }
        case SAVE_PLAN:
            return {
                ...state,
                selectedPlan: payload
            }
        case UPDATE_STEP:
            return {
                ...state,
                activeStep: payload
            }
        default:
            return state
    }
}