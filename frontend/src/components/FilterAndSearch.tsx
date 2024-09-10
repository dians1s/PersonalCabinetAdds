import React from "react";
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

interface FilterAndSearchProps {
    filter: {sort: string, query: string};
    setFilter: (filter: {sort: string, query: string}) => void;
    [x: string]: any;
}

const FilterAndSearch: React.FC<FilterAndSearchProps> = ({filter, setFilter, children}) => {
    return(
    <div className="content__filter">
        <Input type='text' value={filter.query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})} placeholder='Поиск...' style={{marginBottom: '15px'}}/>

        <label htmlFor="filter" className="content__filter__label">Сортировать по:</label>
        <Select 
            id="filter"
            value={filter.sort}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilter({...filter, sort: e.target.value})}
            style={{marginBottom: '15px'}}>
            {children}
        </Select>
    </div>)
}

export default FilterAndSearch;