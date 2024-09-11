import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";

const App = () => {

  const [modalActive, setModalActive] = useState(false);
  const [activePage, setActivePage] = useState('');

  return(
    <BrowserRouter>
      <div className='container'>
        <h1 className='visually-hidden'>DanAdds</h1>
        <Header setModalActive={setModalActive} activePage={activePage}/>
        <AppRouter modalActive={modalActive} setModalActive={setModalActive} setActivePage={setActivePage}/>
      </div>
    </BrowserRouter>
  )
}

export default App;
