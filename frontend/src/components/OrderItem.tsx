import React from "react";
import { Order } from "../types/types";
import Button from "./UI/button/Button";
import OrderItemList from "./OrderItemList";
import { getCreatedDateString } from "./utils/getCreatedDateString";

interface AdItemProps {
    order: Order;
    changeOrderStatus: (orderId: string, newFinishedAt: string) => void;
}

const OrderItem: React.FC<AdItemProps> = ({order, changeOrderStatus}) => {

    const CreatedDateString = getCreatedDateString(order.createdAt);

    let orderStatus = {color: '', status: ''};
    switch(order.status) {
        case 0: orderStatus.color = '#0c8ee4';
                orderStatus.status = 'Создан';
                break;
        case 1: orderStatus.color = '#009900';
                orderStatus.status = 'Оплачен';
                break;
        case 2: orderStatus.color = '#f6b26b';
                orderStatus.status = 'В доставке';
                break;
        case 3: orderStatus.color = '#eedc82';
                orderStatus.status = 'Доставлен в пункт выдачи';
                break;
        case 4: orderStatus.color = '#6aa84f';
                orderStatus.status = 'Получен';
                break;
        case 5: orderStatus.color = '#ffd966';
                orderStatus.status = 'В архиве';
                break;
        case 6: orderStatus.color = '#e06666';
                orderStatus.status = 'Произведен возврат';
                break;
    };

    const finishOrder = async (orderId: string) => {
        const newFinishedAt = new Date();
        await fetch(`http://localhost:3001/orders/${orderId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "finishedAt": newFinishedAt,
                "status": 4,
                })
        });
        changeOrderStatus(order.id, String(newFinishedAt));
        return 0;
    }

    return(
    <div className="content__orders__order" >
        <h3 className="content__orders__order__title">Заказ от {CreatedDateString}</h3>
        <ul className="content__orders__order__details__list">
            <li className="content__orders__order__details__item">Статус заказа: <span style={{color: orderStatus.color}}>{orderStatus.status}</span></li>
            {order.finishedAt 
            ? <li className="content__orders__order__details__item">
                Доставлен: {new Date(order.finishedAt)
                            .toLocaleDateString("ru", 
                            { year: 'numeric',
                                month: 'numeric',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric'
                            })}</li>
            : ""}
            <li className="content__orders__order__details__item">Номер заказа: {order.id}</li>
            <li className="content__orders__order__details__item">Способ доставки: {order.deliveryWay.toLocaleUpperCase()}</li>
            <li className="content__orders__order__details__item">Сумма заказа: {order.total.toLocaleString()} ₽</li>
        </ul>
        <h3 className="content__orders__order__list__title">Товары:</h3>
        <ul className="content__orders__order__list">
            {order.items.map((item) => 
            <OrderItemList key={item.id} item={item} />)}
        </ul>
        {!order.finishedAt ? <Button onClick={() => finishOrder(order.id)}>Завершить заказ</Button>
        : ''}
    </div>)
}

export default OrderItem;