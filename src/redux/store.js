// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { NoticesReducer } from "./notices/noticeSlice";

 const store = configureStore({
    reducer: {
         auth: authReducer,
         notices: NoticesReducer
    } 

})

export default store
