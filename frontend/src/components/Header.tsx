import React, { useState } from "react";
import Button from "./UI/button/Button";
import { Link } from "react-router-dom";
import MyModal from "./UI/MyModal/MyModal";

interface AdsItemProps {
    setModalActive: (modalActive: boolean) => void;
    activePage: string;
}

const Header: React.FC<AdsItemProps> = ({setModalActive, activePage}) => {

    const [mobileMenu, setMobileMenu] = useState(false);

    return(
        <header className="header">
            <Link to="/ads" className="header__logo">
                <svg width="56px" height="56px" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7ZM10 14V15C10 15.5523 10.4477 16 11 16C11.5523 16 12 15.5523 12 15V11C12 9.34315 10.6569 8 9 8C7.34315 8 6 9.34315 6 11V15C6 15.5523 6.44772 16 7 16C7.55228 16 8 15.5523 8 15V14H10ZM18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9V11H15.5C14.7287 11 14.0767 11.2992 13.6276 11.8044C13.1949 12.2912 13 12.9119 13 13.5C13 14.0881 13.1949 14.7088 13.6276 15.1956C14.0766 15.7008 14.7286 16 15.5 16H17C17.5523 16 18 15.5523 18 15V12.0065L18 12L18 11.9935V9Z"/>
                    <path d="M15.5 13H16V14H15.5C15.2714 14 15.1734 13.9242 15.1224 13.8669C15.0551 13.7912 15 13.6619 15 13.5C15 13.3381 15.0551 13.2088 15.1224 13.1331C15.1734 13.0758 15.2714 13 15.5 13Z"/>
                    <path d="M9 10C8.44772 10 8 10.4477 8 11V12H10V11C10 10.4477 9.55228 10 9 10Z"/>
                </svg>
            </Link>
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li className={activePage === 'ads' ? 'header__nav__item is-current' : 'header__nav__item'}>
                        <Link to="/ads">Объявления</Link>
                    </li>
                    <li className={activePage === 'orders' ? 'header__nav__item is-current' : 'header__nav__item'}>
                        <Link to="/orders">Заказы</Link>
                    </li>
                </ul>
            </nav>
            <div className="header__actions">
                <Button onClick={() => setModalActive(true)}>
                    Разместить объявление
                </Button>
            </div>
            <div className="header__menu" onClick={() => setMobileMenu(true)}>
                <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" fill="#1C274C"/>
                    <path d="M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z" fill="#1C274C"/>
                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="#1C274C"/>
                    <path d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z" fill="#1C274C"/>
                </svg>
            </div>
            <MyModal modalActive={mobileMenu} setModalActive={setMobileMenu}>
                <div className="header__mobile">
                    <nav className="header__mobile__nav">
                        <ul className="header__mobile__nav__list">
                            <li className='header__mobile__nav__item'>
                                <Link to="/ads" onClick={() => setMobileMenu(false)}>Объявления</Link>
                            </li>
                            <li className='header__mobile__nav__item'>
                                <Link to="/orders" onClick={() => setMobileMenu(false)}>Заказы</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__mobile__actions">
                        <Button onClick={() => setModalActive(true)}>
                            Разместить объявление
                        </Button>
                    </div>
                </div>
            </MyModal>
        </header>
    )
}

export default Header;