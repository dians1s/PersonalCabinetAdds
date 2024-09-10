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
import AdsLimit from '../components/AdsLimit';

interface addNewAdProps {
  imageUrl: string;
  name: string;
  description: string;
  price: string;
}

const AdsPage = () => {

  const [ads, setAds] = useState<Advertisment[]>([]);
  const [modalActive, setModalActive] = useState(false);
  const [newAd, setNewAd] = useState({imageUrl: '', name: '', description: '', price: ''});

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [filter, setFilter] = useState({sort: '', query: ''});

  const [fetchAds, isAdsLoading, adsError] = useFetching(async (page: number, limit: number, filter: {sort: string, query: string}) => {
    const response = await AdService.getAll(page, limit, filter);
    
    setAds(response.data);
    const totalCount = response.items;
    setTotalPages(getPageCount(totalCount, limit));
  })

  const addNewAd = async ({imageUrl, name, description, price}: addNewAdProps) => {
    await fetch('http://localhost:3001/advertisements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          "name": name,
          "description": description ? description : "",
          "price": price,
          "createdAt": new Date(),
          "views": 0,
          "likes": 0,
          "imageUrl": imageUrl ? imageUrl: ""
        })
    });
    if (ads.length < 10) {
      setAds([...ads, {
        "id": String(ads.length),
        "name": name,
        "description": description ? description : "",
        "price": parseInt(price),
        "createdAt": String(new Date()),
        "views": 0,
        "likes": 0,
        "imageUrl": imageUrl ? imageUrl: ""
      }]);
    } else {
      const response = await AdService.getAll(page, limit);
      const totalCount = response.items;
      setTotalPages(getPageCount(totalCount, limit));
    }
  }

  useEffect(() => {
    fetchAds(page, limit, filter);
  }, [])

  const sendNewAd = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!newAd.name) return 1;
      if (!newAd.price) return 1;
      addNewAd(newAd);
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
      <Ads ads={ads} isAdsLoading={isAdsLoading} adsError={adsError} filter={filter} setFilter={changeFilter} sortedAndSearchAds={ads}/>
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
      <AdsLimit limit={limit} changeLimit={changeLimit}/>
      {adsError && <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Произошла ошибка</h1>}
      <MyModal addNewAd={addNewAd} modalActive={modalActive} setModalActive={setModalActive}>
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
