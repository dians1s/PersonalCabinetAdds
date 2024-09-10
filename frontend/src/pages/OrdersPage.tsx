import React, { useEffect, useState } from "react";
import Orders from "../components/Orders";
import Pagination from "../components/UI/pagination/Pagination";
import MyModal from "../components/UI/MyModal/MyModal";
import Input from "../components/UI/input/Input";
import TextArea from "../components/UI/textarea/TextArea";
import Button from "../components/UI/button/Button";
import { getPageCount } from "../components/utils/pages";
import { useFetching } from "../hooks/useFetching";
import { Order } from "../types/types";
import OrderService from "../components/API/OrderService";
import LimitPagination from "../components/LimitPagination";
import AdService from "../components/API/AdService";

interface OrdersPageProps {
    modalActive: boolean;
    setModalActive: (modalActive: boolean) => void;
}

const OrdersPage: React.FC<OrdersPageProps> = ({modalActive, setModalActive}) => {

    const [orders, setOrders] = useState<Order[]>([]);
    const [newAd, setNewAd] = useState({imageUrl: '', name: '', description: '', price: ''});

    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const [filter, setFilter] = useState({sort: 'id', query: ''});

    const [fetchOrders, isOrdersLoading, ordersError] = useFetching(async (page: number, limit: number, filter: {sort: string, query: string}) => {
        const response = await OrderService.getAll(page, limit, filter);
        console.log(response.data);
        
        setOrders(response.data);
        const totalCount = response.items;
        setTotalPages(getPageCount(totalCount, limit));
    });
    
    const sendNewAd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!newAd.name) return 1;
        if (!newAd.price) return 1;
        await AdService.addNewAdAnotherPage(
          newAd.imageUrl, 
          newAd.name, 
          newAd.description, 
          newAd.price
        );
        setNewAd({imageUrl: '', name: '', description: '', price: ''});
        setModalActive(false);
    }

    useEffect(() => {
        fetchOrders(page, limit, filter);
    }, [])

    const changePage = (page: number) => {
        setPage(page);
        fetchOrders(page, limit, filter);
    }

    const changeLimit = (limit: number) => {
        setLimit(limit);
        fetchOrders(page, limit, filter);
    }

    return(
    <>
        <Orders filter={filter} setFilter={setFilter} isOrdersLoading={isOrdersLoading} orders={orders} ordersError={ordersError} />
        <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        <LimitPagination limit={limit} changeLimit={changeLimit} />
        <MyModal modalActive={modalActive} setModalActive={setModalActive}>
            <form>
                <Input
                    value={newAd.imageUrl}
                    type='text'
                    placeholder="URL картинки"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewAd({...newAd, imageUrl: e.target.value})}/>
                <Input
                    value={newAd.name}
                    type='text'
                    placeholder="Название (Обязательно)"
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewAd({...newAd, name: e.target.value})}/>
                <TextArea
                    id='description'
                    children=""
                    labelText='Описание:'
                    placeholder="Расскажите подробнее о товаре..."
                    value={newAd.description}
                    type='text'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewAd({...newAd, description: e.target.value})}/>
                <Input
                    value={newAd.price}
                    placeholder="Стоимость (Обязательно)"
                    type='number'
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewAd({...newAd, price: e.target.value})}/>
                <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => sendNewAd(e)} style={{width: '200px'}}>
                    Добавить объявление
                </Button>
            </form>
        </MyModal>
    </>
    )
}

export default OrdersPage;