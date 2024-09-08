import React from "react";
import { Advertisment } from "../types/types";
import AdItem from "./AdItem";

interface AdListProps {
    ads: Advertisment[];
    adsError: string;
}

const AdList: React.FC<AdListProps> = ({ads, adsError}) => {

    if (!ads.length) {
        return(<>
                {!adsError && <h1>Объявлений нет</h1>}
            </>
        )
    }

    return (
        <div className="content__ads">
            {ads.map((ad: Advertisment) => <AdItem key={ad.id} ad={ad}/> )}
        </div>
    )
}

export default AdList;