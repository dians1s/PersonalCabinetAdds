import React from "react";
import { Advertisment } from '../types/types';

interface AdItemProps {
    ad: Advertisment;
}

const AdItem: React.FC<AdItemProps> = ({ ad }) => {
    return(
        <div className="content__ads__ad">
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
                        <td>{ad.price}&nbsp;<div className="content__ads__ad__stats__container">₽</div></td>
                    </tr>
                    <tr>
                        <th>Просмотры:</th>
                        <td>{ad.views}&nbsp;
                            <div className="content__ads__ad__stats__container">
                                <img src="./icons/view.svg" alt="" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>Лайки:</th>
                        <td>{ad.likes}&nbsp;
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