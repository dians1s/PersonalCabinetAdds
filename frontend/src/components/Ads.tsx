import React, { useState } from "react";
import { Advertisment } from '../types/types';
import AdFilter from "./AdFilter";
import AdList from "./AdList";
import { useAds } from "../hooks/useAds";
import Loader from "./UI/Loader/Loader";

interface AdsItemProps {
    ads: Advertisment[];
    isAdsLoading: boolean;
    adsError: string;
}

const Ads: React.FC<AdsItemProps> = ({ads, isAdsLoading, adsError}) => {

    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchAds = useAds(ads, filter.sort, filter.query);

    return(
        <div className="content">
            <h2 className="visually-hidden">Мои объявления</h2>
            <AdFilter filter={filter} setFilter={setFilter}/>
            {isAdsLoading
                ? <div style={{width: '100%', minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Loader /></div>
                : <AdList ads={sortedAndSearchAds} adsError={adsError}/>
            }
            
        </div>
    )
}

export default Ads;