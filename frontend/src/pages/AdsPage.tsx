import React, { useEffect, useState } from 'react';
import Ads from '../components/Ads';
import { Advertisment } from '../types/types';
import Button from '../components/UI/button/Button';
import MyModal from '../components/UI/MyModal/MyModal';
import Input from '../components/UI/input/Input';
import TextArea from '../components/UI/textarea/TextArea';
import AdService from '../components/API/AdService';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../components/utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import LimitPagination from '../components/LimitPagination';

interface AdsPageProps {
  modalActive: boolean;
  setModalActive: (modalActive: boolean) => void;
}

const AdsPage: React.FC<AdsPageProps> = ({modalActive, setModalActive}) => {

  const [ads, setAds] = useState<Advertisment[]>([]);
  const [newAd, setNewAd] = useState({imageUrl: '', name: '', description: '', price: ''});

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [filter, setFilter] = useState({sort: 'id', query: ''});

  const [fetchAds, isAdsLoading, adsError] = useFetching(async (page: number, limit: number, filter: {sort: string, query: string}) => {
    const response = await AdService.getAll(page, limit, filter);
    
    setAds(response.data);
    const totalCount = response.items;
    setTotalPages(getPageCount(totalCount, limit));
  })

  

  useEffect(() => {
    fetchAds(page, limit, filter);
  }, [])

  const sendNewAd = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!newAd.name) return 1;
      if (!newAd.price) return 1;
      await AdService.addNewAd(
        newAd.imageUrl, 
        newAd.name, 
        newAd.description, 
        newAd.price, 
        ads, 
        setAds, 
        page, 
        setTotalPages, 
        limit
      );
      setNewAd({imageUrl: '', name: '', description: '', price: ''});
      setModalActive(false);
  }

  const changePage = (page: number) => {
    setPage(page);
    fetchAds(page, limit, filter);
  }

  const changeLimit = (limit: number) => {
    setLimit(limit);
    fetchAds(page, limit, filter);
  }

  const changeFilter = (filter: {sort: string, query: string}) => {
    setFilter(filter);
    fetchAds(page, limit, filter);
  }

  return (
    <>
      <Ads ads={ads} isAdsLoading={isAdsLoading} adsError={adsError} filter={filter} setFilter={changeFilter} sortedAndSearchAds={ads.filter((ad) => ad.name.toLowerCase().includes(filter.query.toLowerCase()))}/>
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
      <LimitPagination limit={limit} changeLimit={changeLimit}/>
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
                placeholder="Название"
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
                placeholder="Стоимость"
                type='number'
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewAd({...newAd, price: e.target.value})}/>
            <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => sendNewAd(e)} style={{width: '200px'}}>
                Добавить объявление
            </Button>
        </form>
      </MyModal>
    </>
  );
}

export default AdsPage;
