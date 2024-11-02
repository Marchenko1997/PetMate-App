import { useSelector } from "react-redux";
import {
    selectUser,
    selectIsLoggedIn,
    selectIsLoading,
    selectIsRefreshing
} from "../redux/auth/selectors.js"

export const useAuth = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
   const isRefreshing = useSelector(selectIsRefreshing);
   const isLoading = useSelector(selectIsLoading);
   const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isLoading,
        isRefreshing,
        user
    }
}