import { createSlice } from "@reduxjs/toolkit";

const ScoreSlice = createSlice({
    name:'scoreDetails',
    initialState:{
        score:0,
    },

    reducers:{
        increaseScore:(state,action)=>{
            state.score++;
            console.log(state.score);
        }
    }
})

export const {increaseScore} = ScoreSlice.actions
export default ScoreSlice.reducer;