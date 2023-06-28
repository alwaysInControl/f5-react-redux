const initialState = {
    name: '',
    age: 0,
    gender: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_DATA':
            return {...state, name: action.payload.name, age: action.payload.age, gender: action.payload.gender}
        default:
            return state
    }
}

export const submitData = (name, age, gender) => ({type: 'SUBMIT_DATA', payload: {name, age, gender}})
