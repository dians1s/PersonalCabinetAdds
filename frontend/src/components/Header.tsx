import React from "react";
import Button from "./UI/button/Button";

interface AdsItemProps {
    modalActive: boolean;
    setModalActive: (active: boolean) => void;
}

const Header: React.FC<AdsItemProps> = ({modalActive, setModalActive}) => {
    return(
        <header className="header">
            <a href="/" className="header__logo">
                <svg width="56px" height="56px" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7ZM10 14V15C10 15.5523 10.4477 16 11 16C11.5523 16 12 15.5523 12 15V11C12 9.34315 10.6569 8 9 8C7.34315 8 6 9.34315 6 11V15C6 15.5523 6.44772 16 7 16C7.55228 16 8 15.5523 8 15V14H10ZM18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9V11H15.5C14.7287 11 14.0767 11.2992 13.6276 11.8044C13.1949 12.2912 13 12.9119 13 13.5C13 14.0881 13.1949 14.7088 13.6276 15.1956C14.0766 15.7008 14.7286 16 15.5 16H17C17.5523 16 18 15.5523 18 15V12.0065L18 12L18 11.9935V9Z"/>
                    <path d="M15.5 13H16V14H15.5C15.2714 14 15.1734 13.9242 15.1224 13.8669C15.0551 13.7912 15 13.6619 15 13.5C15 13.3381 15.0551 13.2088 15.1224 13.1331C15.1734 13.0758 15.2714 13 15.5 13Z"/>
                    <path d="M9 10C8.44772 10 8 10.4477 8 11V12H10V11C10 10.4477 9.55228 10 9 10Z"/>
                </svg>
            </a>
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li className="header__nav__item is-current">
                        <a href="/">Объявления</a>
                    </li>
                    <li className="header__nav__item">
                        <a href="/">Заказы</a>
                    </li>
                </ul>
            </nav>
            <div className="header__actions">
                <Button onClick={() => setModalActive(true)}>
                    Разместить объявление
                </Button>
            </div>
        </header>
    )
}

export default Header;