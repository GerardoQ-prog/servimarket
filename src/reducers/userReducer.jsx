import { IS_LOGGED } from '../types';

const initialState = {
    name: '',
    lastname: '',
    token: '',
    isLogged: false
}



const userReducer = ( state = initialState, action ) => {

    switch (action?.type) {

        case IS_LOGGED:
            return  { 
                        ...state, 
                        token : action?.payload.token,
                        isLogged: true
                    }
    
        default:
            return state;
    }
}

export default userReducer;