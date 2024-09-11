import React from "react";
import Error404 from "../pages/Error404";
import { Advertisment } from "../types/types";
import { getCreatedDateString } from "./utils/getCreatedDateString";

interface AdCardProps {
    error: string;
    ad: Advertisment;
}

const AdCard: React.FC<AdCardProps> = ({error, ad}) => {
    
    const CreatedDateString = getCreatedDateString(ad.createdAt);

    return(
    <div className="content__adcard">
        {!error
            ? <div className="content__adcard__content">
                <div className="content__adcard__main">
                    <div className="content__adcard__main__wrapper">
                        <div className="content__adcard__main__title">{ad.name}</div>
                        <div className="content__adcard__main__photo">
                            <img src={
                                ad.imageUrl
                                ? ad.imageUrl
                                : '../icons/without_photo.svg'} 
                                className="content__ads__ad__photo__img"
                                alt={`${ad.name} logo`}
                                width={240}
                                loading="lazy"/>
                        </div>
                    </div>
                    <div className="content__adcard__main__wrapper">
                        <ul className="content__adcard__main__">
                            <li className="content__adcard__item">Просмотров: {ad.likes.toLocaleString()} <img src="../icons/view.svg" alt="" /></li>
                            <li className="content__adcard__item">Лайков: {ad.views.toLocaleString()} <img src="../icons/likes.svg" alt="" /></li>
                            <li className="content__adcard__item">Артикул: {ad.id}</li>
                            <li className="content__adcard__item">Создано: {CreatedDateString}</li>
                            <li className="content__adcard__item">Цена: {ad.price} ₽</li>
                        </ul>
                    </div>
                </div>
                <div className="content__adcard__desc">
                   Описание: {ad.description ? ad.description : "Не было предоставлено продавцом."}
                </div>
            </div>
            : <Error404 />}
    </div>
    )
}

export default AdCard;