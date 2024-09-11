import React from "react";
import { Advertisment } from '../types/types';
import { useNavigate } from "react-router-dom";

interface AdItemProps {
    ad: Advertisment;
}

const AdItem: React.FC<AdItemProps> = ({ ad }) => {

    const navigate = useNavigate();

    const getPath = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        navigate(`${ad.id}`, {replace: false});
        return true;
    }

    return(
        <div onClick={(event) => getPath(event)} className="content__ads__ad">
            <div className="content__ads__ad__photo">
                <img src={
                    ad.imageUrl
                    ? ad.imageUrl
                    : './icons/without_photo.svg'} 
                    className="content__ads__ad__photo__img"
                    alt={`${ad.name} logo`}
                    width={210}
                    loading="lazy"/>
            </div>
            <h3 className="content__ads__ad__title">{ad.name}</h3>
            <table className="content__ads__ad__stats">
                <tbody>
                    <tr>
                        <th>Цена:</th>
                        <td>{ad.price.toLocaleString()}&nbsp;<div className="content__ads__ad__stats__container">₽</div></td>
                    </tr>
                    <tr>
                        <th>Просмотры:</th>
                        <td>{ad.views.toLocaleString()}&nbsp;
                            <div className="content__ads__ad__stats__container">
                                <img src="./icons/view.svg" alt="" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Лайки:</th>
                        <td>{ad.likes.toLocaleString()}&nbsp;
                            <div className="content__ads__ad__stats__container">
                                <img src="./icons/likes.svg" alt="" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ul className="content__ads__ad__list">
                <li className="content__ads__ad__stat"> </li>
                <li className="content__ads__ad__stat"> </li>
                <li className="content__ads__ad__stat"> </li>
            </ul>
        </div>
    )
}

export default AdItem;