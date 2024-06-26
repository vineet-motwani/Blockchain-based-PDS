import * as ActionTypes from '../Constants/ActionTypes';

export const contractReducer = (state, action) => {
  switch(action.type){
    case ActionTypes.CONTRACT_STATE_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        mainContract: null,
        stakeholderContract: null,
        productContract: null
      }
    case ActionTypes.CONTRACT_STATE_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        mainContract: null,
        stakeholderContract: null,
        productContract: null
      }
    case ActionTypes.CONTRACT_STATE_MAIN:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        mainContract: action.payload.contract
      }
    case ActionTypes.CONTRACT_STATE_CENTRALGOV:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        centralGovContract: action.payload.contract
      }
    case ActionTypes.CONTRACT_STATE_MANUFACTURER:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        stateGovContract: action.payload.contract
      }
    case ActionTypes.CONTRACT_STATE_STAKEHOLDER:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        stakeholderContract: action.payload.contract
      }
    case ActionTypes.CONTRACT_STATE_PRODUCT:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        productContract: action.payload.contract
      }
    case ActionTypes.CONTRACT_STATE_STATS:
      return {
        ...state,
        stats: action.payload.stats
      }
  }
}