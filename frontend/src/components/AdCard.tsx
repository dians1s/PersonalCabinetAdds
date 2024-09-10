import React from "react";
import Error404 from "../pages/Error404";
import { Advertisment } from "../types/types";

interface AdCardProps {
    error: string;
    ad: Advertisment;
}

const AdCard: React.FC<AdCardProps> = ({error, ad}) => {
    return(
    <div>
        {!error
            ? <div>Страница объявления {ad.id}</div>
            : <Error404 />}
    </div>
    )
}

export default AdCard;