import React from "react";
import { Order } from "../types/types";
import OrderItem from "./OrderItem";

interface OrdersListProps {
    orders: Order[];
    ordersError: string;
}

const OrdersList: React.FC<OrdersListProps> = ({orders, ordersError}) => {

    if (!orders.length) {
        return(<>
                {!ordersError && <h1>Заказов нет</h1>}
            </>
        )
    }

    return(
    <div className="content__orders">
        {orders.map((order: Order) => <OrderItem key={order.id} order={order}/> )}
    </div>)
}

export default OrdersList;