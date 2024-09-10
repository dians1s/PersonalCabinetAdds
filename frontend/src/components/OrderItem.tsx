import React from "react";
import { Order } from "../types/types";

interface AdItemProps {
    order: Order;
}

const OrderItem: React.FC<AdItemProps> = ({order}) => {
    return(
    <div className="content__orders__order">
        <h3 className="content__orders__order__title">{ad.name}</h3>
        <ul className="content__orders__order__list">
            <li className="content__orders__order__stat"> </li>
            <li className="content__orders__order__stat"> </li>
            <li className="content__orders__order__stat"> </li>
        </ul>
    </div>)
}

export default OrderItem;