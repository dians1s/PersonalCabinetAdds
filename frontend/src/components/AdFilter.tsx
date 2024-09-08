import React from "react";
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

interface AdFilterProps {
    filter: {
        sort: string;
        query: string;
    },
    setFilter: (filter: { sort: string; query: string }) => void;
}

const AdFilter: React.FC<AdFilterProps> = ({filter, setFilter}) => {
    return(
    <div className="content__filter">
        <Input type='text' value={filter.query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})} placeholder='Поиск...' style={{marginBottom: '15px'}}/>

        <label htmlFor="filter" className="content__filter__label">Сортировать по:</label>
        <Select 
            id="filter"
            value={filter.sort}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilter({...filter, sort: e.target.value})}
            style={{marginBottom: '15px'}}>
            <option value="" disabled={true}>-</option>
            <option value="price">Цене</option>
            <option value="views">Просмотрам</option>
            <option value="likes">Лайкам</option>
        </Select>
    </div>)
}

export default AdFilter;