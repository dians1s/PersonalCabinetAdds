import React, { useState } from "react";
import Error404 from "../pages/Error404";
import { Advertisment } from "../types/types";
import { getCreatedDateString } from "./utils/getCreatedDateString";
import Button from "./UI/button/Button";

interface AdCardProps {
    error: string;
    ad: Advertisment;
}

const AdCard: React.FC<AdCardProps> = ({error, ad}) => {
    
    const CreatedDateString = getCreatedDateString(ad.createdAt);
    
    const [buttonActive, setButtonActive] = useState(false);

    const changeButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setButtonActive(!buttonActive);
    }

    return(
    <div className="content__adcard">
        {!error
            ? <div className="content__adcard__main">
                <div className="content__adcard__main__wrapper">
                    <div className="content__adcard__main__title">{ad.name}</div>
                    <div className="content__adcard__main__photo">
                        <img src={
                            ad.imageUrl
                            ? ad.imageUrl
                            : '../icons/without_photo.svg'} 
                            className="content__ads__ad__photo__img"
                            alt={`${ad.name} logo`}
                            width={210}
                            loading="lazy"/>
                    </div>
                </div>
                <div className="content__adcard__main__wrapper">
                    <ul className="content__adcard__main__list">
                        <li className="content__adcard__main__item">Цена: {ad.price} ₽</li>
                        <li className="content__adcard__main__item">
                            Описание: {
                            ad.description
                            ?   buttonActive
                                ? ad.description
                                : ad.description?.slice(0, 128) 
                                    + (ad.description?.length > 128
                                        ? '...'
                                        : ''
                                    ) 
                            : 'Продавец не предоставил описание.'}
                            {ad.description
                            ?   ad.description?.length > 128
                                ? <Button onClick={(event: React.MouseEvent<HTMLButtonElement>) => changeButton(event)}>
                                    {buttonActive 
                                    ? 'Скрыть все описание'
                                    : 'Показать все описание'}
                                    </Button>
                                : ''
                            : ''}
                        </li>
                        <li className="content__adcard__main__item">Лайков: {ad.views.toLocaleString()} <img src="../icons/likes.svg" alt="" /></li>
                        <li className="content__adcard__main__item">Просмотров: {ad.likes.toLocaleString()} <img src="../icons/view.svg" alt="" /></li>
                        <li className="content__adcard__main__item">Артикул: {ad.id}</li>
                        <li className="content__adcard__main__item">Создано: {CreatedDateString}</li>
                    </ul>
                </div>
            </div>
            : <Error404 />}
    </div>
    )
}

export default AdCard;