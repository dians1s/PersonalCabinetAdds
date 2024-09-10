import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";

const App = () => {

  const [modalActive, setModalActive] = useState(false);

  return(
    <BrowserRouter>
      <div className='container'>
      <h1 className='visually-hidden'>DanAdds</h1>
      <Header modalActive={modalActive} setModalActive={setModalActive}/>
      <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App;
