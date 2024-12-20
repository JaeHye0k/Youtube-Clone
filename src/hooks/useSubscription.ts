import { fetchSubInfo } from "@apis/user.api";
import { useQuery } from "@tanstack/react-query";

export const useSubscription = () => {
    return useQuery({
        queryKey: ["subscriptions"],
        queryFn: fetchSubInfo,
    });
};
