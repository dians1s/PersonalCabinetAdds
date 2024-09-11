import React from "react";

interface AdsLimitProps {
    limit: number;
    changeLimit: (limit: number) => void;
    name: string;
}

const LimitPagination: React.FC<AdsLimitProps> = ({limit, changeLimit, name}) => {

    const LimitsList = [3, 10, 30, 50];

    return(<div className="container__wrapper">
        
        <h2 className="container__wrapper__title">Количество {name}:</h2>

        <ul className="container__wrapper__list">
            {LimitsList.map(number => 
            <li
            onClick={() => changeLimit(number)}
            key={number}
            className={limit === number ? 'container__wrapper__item current noselect' : 'container__wrapper__item noselect'}>
                {number}
            </li>)
            }
        </ul>
      </div>
    )
}

export default LimitPagination;