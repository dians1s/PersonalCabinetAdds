import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Ads from './components/Ads';
import { Advertisment } from './types/types';
import Button from './components/UI/button/Button';
import MyModal from './components/UI/MyModal/MyModal';
import Input from './components/UI/input/Input';
import TextArea from './components/UI/textarea/TextArea';
import AdService from './components/API/AdService';
import { useFetching } from './hooks/useFetching';

interface addNewAdProps {
  imageUrl: string;
  name: string;
  description: string;
  price: string;
}

const App = () => {

  const [ads, setAds] = useState<Advertisment[]>([]);
  const [modalActive, setModalActive] = useState(false);
  const [newAd, setNewAd] = useState({imageUrl: '', name: '', description: '', price: ''});
  const [fetchAds, isAdsLoading, adsError] = useFetching(async () => {
    const ads = await AdService.getAll();
    setAds(ads);
  })

  const addNewAd = ({imageUrl, name, description, price}: addNewAdProps) => {
    fetch('http://localhost:3000/advertisements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          "name": name,
          "description": description ? description : "",
          "price": price,
          "createdAt": new Date(), //"2024-08-12T12:16:55.351Z"
          "views": 0,
          "likes": 0,
          "imageUrl": imageUrl ? imageUrl: ""
        })
    });
  }

  useEffect(() => {
    fetchAds();
  }, [])

  const sendNewAd = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!newAd.name) return 1;
      if (!newAd.price) return 1;
      addNewAd(newAd);
      setNewAd({imageUrl: '', name: '', description: '', price: ''});
      setModalActive(false);
  }

  return (
    <div className='container'>
      <Header modalActive={modalActive} setModalActive={setModalActive}/>
      <Ads ads={ads} isAdsLoading={isAdsLoading} adsError={adsError}/>
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
    </div>
  );
}

export default App;
