import React from "react";
import Loader from "./UI/Loader/Loader";
import OrdersList from "./OrdersList";
import FilterAndSearch from "./FilterAndSearch";
import { Order } from "../types/types";
import Select from "./UI/select/Select";

interface OrdersProps {
    filter: { sort: string, query: string };
    setFilter: (filter: { sort: string, query: string }) => void;
    isOrdersLoading: boolean;
    orders: Order[];
    ordersError: string;
    status: string;
    setStatus: (status: string) => void;
    changeOrderStatus: (orderId: string, newFinishedAt: string) => void;
}

const Orders: React.FC<OrdersProps> = ({ filter, setFilter, isOrdersLoading, orders, ordersError, status, setStatus, changeOrderStatus }) => {
    return (
        <div className="content">
            <h2 className="visually-hidden">Мои заказы</h2>
            <FilterAndSearch
                filter={filter}
                setFilter={setFilter}
                defaultValue={{value: 'id', name: 'Без сортировки'}}
                options={[
                {value: 'total', name: 'По сумме заказа'}
                ]}>
            <label htmlFor="filterStatus" className="content__filter__label">Фильтр по статусу:</label>
            <Select 
            id="filterStatus"
            value={status}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}
            style={{marginBottom: '15px'}}
            defaultValue={{value: '', name: 'Без фильтра'}}
            options={[
                {value: '0', name: 'Создан'},
                {value: '1', name: 'Оплачен'},
                {value: '2', name: 'В доставке'},
                {value: '3', name: 'Доставлен'},
                {value: '4', name: 'Получен'},
                {value: '5', name: 'В архиве'},
                {value: '6', name: 'Возврат'},
                ]}
             />
            </FilterAndSearch>
            {isOrdersLoading
                ? <div style={{ width: '100%', minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div>
                : <OrdersList orders={orders} ordersError={ordersError} changeOrderStatus={changeOrderStatus} />
            }
            {ordersError && <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '36px', textAlign: 'center', width: '100%', color: '#da0d0d' }}>Произошла ошибка при загрузке данных</h3>}
        </div>
    )
}

export default Orders;