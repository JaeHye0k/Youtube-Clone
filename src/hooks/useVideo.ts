import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchVideos } from "../apis/videos.api";

export const useVideos = (limit: number = 20) => {
    return useInfiniteQuery({
        queryKey: ["videos"],
        queryFn: ({ pageParam = 1 }) => fetchVideos({ page: pageParam, limit }),
        getNextPageParam: (lastPage) => {
            if (!lastPage.success || !lastPage.meta) return undefined;
            return lastPage.meta.hasNextPage ? lastPage.meta.currentPage + 1 : undefined;
        },
        initialPageParam: 1,
    });
};