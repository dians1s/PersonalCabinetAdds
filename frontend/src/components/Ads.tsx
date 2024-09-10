import React from "react";
import { Advertisment } from '../types/types';
import AdFilter from "./AdFilter";
import AdList from "./AdList";
import Loader from "./UI/Loader/Loader";

interface AdsItemProps {
    ads: Advertisment[];
    isAdsLoading: boolean;
    adsError: string;
    filter: {sort: string, query: string};
    setFilter: (filter: {sort: string, query: string}) => void;
    sortedAndSearchAds: Advertisment[];
}

const Ads: React.FC<AdsItemProps> = ({ads, isAdsLoading, adsError, filter, setFilter, sortedAndSearchAds}) => {

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