import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdService from "../components/API/AdService";
import { useFetchingById } from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import { Advertisment } from "../types/types";
import AdCard from "../components/AdCard";
import MyModal from "../components/UI/MyModal/MyModal";
import Input from "../components/UI/input/Input";
import TextArea from "../components/UI/textarea/TextArea";
import Button from "../components/UI/button/Button";

interface AdPageProps {
    modalActive: boolean;
    setModalActive: (modalActive: boolean) => void;
    setActivePage: (activePage: string) => void;
}

const AdPage: React.FC<AdPageProps> = ({modalActive, setModalActive, setActivePage}) => {

    const params = useParams();
    const [ad, setAd] = useState<Advertisment>({
        id: '', 
        name: '',
        description: '',
        price: 0,
        createdAt: '',
        views: 0,
        likes: 0,
        imageUrl: '',
    });

    const [fetchAdById, isLoading, error] = useFetchingById(async (id: string) => {
        const response = await AdService.getById(id);
        setAd(response);
    })

    const [newAd, setNewAd] = useState({imageUrl: '', name: '', description: '', price: ''});

    const sendNewAd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!newAd.name) return 1;
        if (!newAd.price) return 1;
        await AdService.addNewAdAnotherPage(
          newAd.imageUrl, 
          newAd.name, 
          newAd.description, 
          parseInt(newAd.price)
        );
        setNewAd({imageUrl: '', name: '', description: '', price: ''});
        setModalActive(false);
    }

    const editActiveAd = (name: string, description: string, price: number, imageUrl: string) => {
        setAd({...ad, name, description, price, imageUrl});
    }

    useEffect(() => {
        if (params.id) {
            fetchAdById(params.id);
        }
        document.title = ad.name;
        setActivePage('ads');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(<div className="content">
            <h2 className="visually-hidden">Объявления {ad.name}</h2>
            {isLoading
            ? <div style={{ width: '100%', minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div>
            : <AdCard error={error} ad={ad} editActiveAd={editActiveAd} />}
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
        </div>
    )
}

export default AdPage;