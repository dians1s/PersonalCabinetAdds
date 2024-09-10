import React from "react";
import Loader from "./UI/Loader/Loader";
import OrdersList from "./OrdersList";
import FilterAndSearch from "./FilterAndSearch";
import { Order } from "../types/types";

interface OrdersProps {
    filter: {sort: string, query: string};
    setFilter: (filter: {sort: string, query: string}) => void;
    isOrdersLoading: boolean;
    orders: Order[];
    ordersError: string;
}

const Orders: React.FC<OrdersProps> = ({filter, setFilter, isOrdersLoading, orders, ordersError}) => {
    return(
        <div className="content">
            <h2 className="visually-hidden">Мои заказы</h2>
            <FilterAndSearch filter={filter} setFilter={setFilter}>

            </FilterAndSearch>
            {isOrdersLoading
                ? <div style={{width: '100%', minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Loader /></div>
                : <OrdersList orders={orders} ordersError={ordersError}/>
            }
            {ordersError && <h3 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '36px', textAlign: 'center', width: '100%', color: '#da0d0d'}}>Произошла ошибка при загрузке данных</h3>}
            
        </div>
    )
}

export default Orders;