// import store from "../source/store.js";
// import { ensureQueryData } from "@tanstack/react-query";
// import { useQueryClient } from "@tanstack/react-query";

import { redirect } from "@tanstack/react-router";
import { loginUserr } from "../source/slice/authSlice.js";
import { getCurrentUser } from "../api/user.api";

// export const checkAuth = () => {
//     // Persistent nahi hai memory mein jb referesh karenge to kho dega isliye humein perssisten authentication user krna higa

//     // To solve this we have three methods either store this in local storage
//     // or use cookies or use session storage (react ka persistne storage liitle complicated but goog )

//     const auth = store.getState().auth; // Retrieve auth state from Redux store
//     // // Retrieve auth state from localStorage
//     if (!auth || !auth.isAuthenticated) {
//         throw redirect({ to: "/auth" }); // Redirect to login if not authenticated
//         // return false; // User is not authenticated
//     }
//     return true; // User is authenticated
// }

// Context se hua ki humein import krne ki zarurat nahi hai store ko

export const checkAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context; // Destructure context to get queryClient and store
        const user = await queryClient.ensureQueryData({
            queryKey: ["currentUser"],
            queryFn: getCurrentUser,
            retry: false // Dispatch action to get user data
        });

        if (!user) return false; // If user data is not available, return false

        store.dispatch(loginUserr(user));

        const { isAuthenticated } = store.getState().auth; // Get auth state from Redux store
        if (!isAuthenticated) return false;

        return true; // Update Redux store with user data
    } catch (err) {
        throw redirect({ to: "/" }); // Redirect to login if not authenticated
    }
};
