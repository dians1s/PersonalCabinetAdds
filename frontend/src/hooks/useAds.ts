import { useMemo } from "react";
import { Advertisment } from "../types/types";

export const useSortedAds = (ads: Advertisment[], sort: string) => {
    const sortedAds = useMemo(() => {
        if (sort) {
            if      (sort === 'price') return [...ads].sort((a, b) => b.price - a.price);
            else if (sort === 'views') return [...ads].sort((a, b) => b.views - a.views);
            else if (sort === 'likes') return [...ads].sort((a, b) => b.likes - a.likes);
        }
        return ads;
    }, [sort, ads])

    return sortedAds;
}

export const useAds = (ads: Advertisment[], sort: string, query: string) => {
    const sortedAds = useSortedAds(ads, sort);

    const sortedAndSearchAds = useMemo(() => {
        return sortedAds.filter((ad: Advertisment) => ad.name.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedAds])

    return sortedAndSearchAds;
}