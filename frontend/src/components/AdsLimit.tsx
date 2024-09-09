import React from "react";

interface AdsLimitProps {
    limit: number;
    changeLimit: (limit: number) => void;
}

const AdsLimit: React.FC<AdsLimitProps> = ({limit, changeLimit}) => {

    const LimitsList = [3, 10, 30, 50];

    return(<div className="container__wrapper">
        
        <h2 className="container__wrapper__pages__title">Количество объявлений на странице:</h2>

        <div className="container__wrapper__pages">
            {LimitsList.map(number => 
            <span
            onClick={() => changeLimit(number)}
            key={number}
            className={limit === number ? 'container__wrapper__pages__page current noselect' : 'container__wrapper__pages__page noselect'}>
                {number}
            </span>)
            }
        </div>
      </div>
    )
}

export default AdsLimit;