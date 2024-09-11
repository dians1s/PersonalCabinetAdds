import React from "react";
import { Order } from "../types/types";
import OrderItem from "./OrderItem";

interface OrdersListProps {
    orders: Order[];
    ordersError: string;
    changeOrderStatus: (orderId: string, newFinishedAt: string) => void;
}

const OrdersList: React.FC<OrdersListProps> = ({orders, ordersError, changeOrderStatus}) => {

    if (!orders.length) {
        return(<>
                {!ordersError && <h1>Заказов нет</h1>}
            </>
        )
    }

    return(
    <div className="content__orders">
        {orders.map((order: Order) => <OrderItem key={order.id} order={order} changeOrderStatus={changeOrderStatus}/> )}
    </div>)
}

export default OrdersList;