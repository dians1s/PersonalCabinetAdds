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

          <div className="container__wrapper__pages">
          {pagesArray.map(p => 
            <span 
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'container__wrapper__pages__page current noselect' : 'container__wrapper__pages__page noselect'}>
              {p}
            </span>)
          }
        </div>
      </div>)
}

export default Pagination;