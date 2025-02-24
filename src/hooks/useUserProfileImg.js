import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";


export const useUserProfileImg = () => {
    const { user } = useContext(AuthContext);

    const { data: userImg = null, isLoading, refetch } = useQuery({
        queryKey: ["user", user?.email || "guest"], 
        queryFn: async () => {
            if (!user?.email) return null; 

            try {
                const res = await axios.get(`http://localhost:5000/usersImg?email=${user.email}`);
                console.log("userImg:", res.data);
                return res.data;
            } catch (error) {
                console.error("Error fetching user image:", error);
                return null; 
            }
        },
    });

    return [userImg, isLoading, refetch];
};
