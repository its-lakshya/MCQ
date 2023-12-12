import { createSlice } from "@reduxjs/toolkit";

const SigninSlice = createSlice({
    name:'signinDetails',
    initialState:{
        details:[],
        currentUser:''
    },

    reducers:{
        storeDetails:(state, action) => {
            state.details.push(action.payload)
        },
        storeCurrentUser:(state, action)=> {
            state.currentUser = action.payload
        }
    }
    
})

export const {storeDetails, storeCurrentUser} = SigninSlice.actions;
export default SigninSlice.reducer;