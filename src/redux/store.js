// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { NoticesReducer } from "./notices/noticeSlice";
import { FriendsReducer } from "./friends/friendsSlice";

 const store = configureStore({
    reducer: {
         auth: authReducer,
         notices: NoticesReducer,
         friends: FriendsReducer
    } 

})

export default store
