import { configureStore } from "@reduxjs/toolkit"
import SigninSlice from "./SigninSlice"
import ScoreSlice from "./ScoreSlice";
import AuthenticationSlice from "./AuthenticationSlice";

const Store = configureStore ({
    reducer : {
        signinDetails : SigninSlice,
        scoreDetails:ScoreSlice,
        authenticationDetails:AuthenticationSlice
    }
})

export default Store;