import React from "react";
import { useNavigate } from "react-router-dom";

interface OrderItemListProps {
    item: {
        count: number;
        createdAt: string;
        description?: string;
        id: string;
        imageUrl?: string;
        likes: number;
        name: string;
        price: number;
        views: number;
    };
}

const OrderItemList: React.FC<OrderItemListProps> = ({item}) => {

    const navigate = useNavigate();

    const getPath = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        navigate(`/ads/${item.id}`, {replace: true});
        return true;
    }
    
    return(
    <li key={item.id} onClick={(event) => getPath(event)} className="content__orders__order__item">
        <div className="content__orders__order__item__photo">
            <img src={
                item.imageUrl
                ? item.imageUrl
                : './icons/without_photo.svg'} 
                className="content__ads__ad__photo__img"
                alt={`${item.name} logo`}
                width={120}
                loading="lazy"/>
        </div>
        <ul className="content__orders__order__item__list">
            <li className="content__orders__order__item__item">{item.name}</li>
            <li className="content__orders__order__item__item">Кол-во: {item.count}</li>
            <li className="content__orders__order__item__item">Общая цена: {(item.count * item.price).toLocaleString()} ₽</li>
        </ul>
   </li>)
}

export default OrderItemList;