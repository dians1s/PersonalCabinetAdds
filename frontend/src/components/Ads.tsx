import React from "react";
import { Advertisment } from '../types/types';
import AdList from "./AdList";
import Loader from "./UI/Loader/Loader";
import FilterAndSearch from "./FilterAndSearch";

interface AdsItemProps {
    ads: Advertisment[];
    isAdsLoading: boolean;
    adsError: string;
    filter: { sort: string, query: string };
    setFilter: (filter: { sort: string, query: string }) => void;
    sortedAndSearchAds: Advertisment[];
}

const Ads: React.FC<AdsItemProps> = ({ ads, isAdsLoading, adsError, filter, setFilter, sortedAndSearchAds }) => {

    return (
        <div className="content">
            <h2 className="visually-hidden">Мои объявления</h2>
            <FilterAndSearch filter={filter} setFilter={setFilter}>
                <option value="id">Без сортировки</option>
                <option value="price">По цене</option>
                <option value="views">Просмотрам</option>
                <option value="likes">Лайкам</option>
            </FilterAndSearch>
            {isAdsLoading
                ? <div style={{ width: '100%', minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div>
                : <AdList ads={sortedAndSearchAds} adsError={adsError} />
            }
            {adsError && <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '36px', textAlign: 'center', width: '100%', color: '#da0d0d' }}>Произошла ошибка при загрузке данных</h3>}

        </div>
    )
}

export default Ads;