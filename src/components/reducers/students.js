import {GET_ALL} from '../actions/types'


const initialState = {
    students: []
}


export default function studentReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL:
            return{
                    ...state,
                    students:action.payload
            }
        default:
            return state;
    }
}