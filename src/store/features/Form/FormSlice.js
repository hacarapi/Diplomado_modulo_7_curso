import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    module: 'React Mod 7',
    username: '',
    email: '',
    password: 'mod7USIP-HUBER',
};

const formSlice = createSlice({
    name: 'form', // El name debe se el mismo del form
    initialState,
    reducers: {
        setModule: (state, action) => {
            state.module = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        resetForm: (state, action) => {
            console.log(" payload para resetform", action.payload); 
            if (action.payload === "logout") {
                const resetState = {
                    module: '',
                    username: '',
                    email: '',
                    password: '',
                };
                return resetState;
            }
            return { ...initialState };
        },
    },
});

export const { setModule, setUsername, setEmail, setPassword, resetForm  } = formSlice.actions;
export { initialState };
export default formSlice.reducer;