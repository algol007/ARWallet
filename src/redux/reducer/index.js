import { combineReducers } from "redux";

const initialState = {
    name: "Ady Rahmansyah",
};

const initialStateRegister = {
    form: {
        fullName: '',
        email: '',
        password: ''
    },
    title: 'Register Page',
    description: 'Ini adalah description untuk Register Page'
};

const RegisterReducer = (state = initialStateRegister, action) => {
    if(action.type === 'SET_TITLE') {
        return {
            ...state,
            title: 'Ganti Title Register'
        }
    }
    if(action.type === 'SET_FORM') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue
            }
        }
    }
    return state;
}

const initialStateLogin = {
    form: {
        email: '',
        password: ''
    },
    info: 'Silahkan masukkan password anda!',
    isLogin: true
};

const LoginReducer = (state = initialStateLogin, action) => {
    if(action.type === 'SET_FORM') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue
            }
        }
    }
    return state;
}


const reducer = combineReducers({
    RegisterReducer,
    LoginReducer
})
export default reducer;