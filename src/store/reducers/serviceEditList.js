import * as actions from '../actionTypes'

const initial_state = {
    fields: {
        title: '',
        price: '',
    },
    edit: {
        id: '',
        isEdit: false
    }
}

export default function serviceEditListReducer(state=initial_state, action) {
    switch (action.type) {
        case actions.HANDLE_TASK:
            return {
                ...state, fields: { ...state, title: action.payload.title, price: action.payload.price }, edit:{...state, id: action.payload.id, isEdit: true}
          }

        case actions.CHANGE_TASK:
            const {name, value } = action.payload
            return { ...state, fields: { ...state.fields, [name]: value } }   
        
        case action.RESET_EDIT:
            return initial_state
        
        // case action.CHANGE_EDITEBLE:
        //     return {
        //         ...state, 
        //         edit: {
        //             isEdit: true, id: action.payload.id
        //         }
        //     }
        // case action.HANDLE_TASK:
        //     return {
        //         ...state,
        //        fields: { ...state.fields, [action.payload.name]: action.payload.value }     
        //     }
        default:
            return initial_state
    }
}