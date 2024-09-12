import React, { useState } from "react";
import Error404 from "../pages/Error404";
import { Advertisment } from "../types/types";
import { getCreatedDateString } from "./utils/getCreatedDateString";
import Button from "./UI/button/Button";
import MyModal from "./UI/MyModal/MyModal";
import Input from "./UI/input/Input";
import TextArea from "./UI/textarea/TextArea";

interface AdCardProps {
    error: string;
    ad: Advertisment;
    editActiveAd: (name: string, description: string, price: number, imageUrl: string) => void;
}

const AdCard: React.FC<AdCardProps> = ({error, ad, editActiveAd}) => {
    
    const CreatedDateString = getCreatedDateString(ad.createdAt);
    
    const [buttonActive, setButtonActive] = useState(false);

    const [editModalAd, setEditModalAd] = useState(false);
    const [editAd, setEditAd] = useState({imageUrl: ad.imageUrl ? ad.imageUrl : "", name: ad.name, description: ad.description ? ad.description : "", price: ad.price});

    const changeButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setButtonActive(!buttonActive);
    }

    const editButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setEditModalAd(true);
    }

    console.log(editAd.description);
    console.log(editAd.imageUrl);

    const changeAd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await fetch(`http://localhost:3001/advertisements/${ad.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "imageUrl": ad.imageUrl,
                "name": ad.name,
                "description": ad.description,
                "price": ad.price,
                })
        });
        
        editActiveAd(editAd.name, editAd.description!, editAd.price, editAd.imageUrl!);
        setEditModalAd(false);
        return 0;
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
                        <li className="content__adcard__main__item">Цена: {ad.price.toLocaleString()} ₽</li>
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
                        <li className="content__adcard__main__item"><Button onClick={(event: React.MouseEvent<HTMLButtonElement>) => editButton(event)}>Изменить объявление</Button></li>
                    </ul>
                </div>
                <MyModal modalActive={editModalAd} setModalActive={setEditModalAd}>
                <form>
                    <Input
                        value={editAd.imageUrl}
                        type='text'
                        placeholder="URL картинки"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditAd({...editAd, imageUrl: e.target.value})}/>
                    <Input
                        value={editAd.name}
                        type='text'
                        placeholder="Название (Обязательно)"
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditAd({...editAd, name: e.target.value})}/>
                    <TextArea
                        id='description'
                        children=""
                        labelText='Описание:'
                        placeholder="Расскажите подробнее о товаре..."
                        value={editAd.description}
                        type='text'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditAd({...editAd, description: e.target.value})}/>
                    <Input
                        value={editAd.price}
                        placeholder="Стоимость (Обязательно)"
                        type='number'
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditAd({...editAd, price: Number(e.target.value)})}/>
                    <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeAd(e)} style={{width: '200px'}}>
                        Добавить объявление
                    </Button>
                </form>
            </MyModal>
            </div>
            : <Error404 />}
    </div>
    )
}

export default AdCard;