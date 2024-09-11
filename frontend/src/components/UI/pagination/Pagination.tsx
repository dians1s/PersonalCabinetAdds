import React from "react";
import { usePagination } from "../../../hooks/usePagination";

interface PaginationProps {
    totalPages: number;
    page: number;
    changePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages);
    return(<div className="container__wrapper">
      
          <h2 className="container__wrapper__title">Страница:</h2>

          <ul className="container__wrapper__list">
          {pagesArray.map(p => 
            <li 
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'container__wrapper__item current noselect' : 'container__wrapper__item noselect'}>
              {p}
            </li>)
          }
        </ul>
      </div>)
}

export default Pagination;