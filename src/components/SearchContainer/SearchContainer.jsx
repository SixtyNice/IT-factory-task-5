import React from 'react';
import Filter from '../Filter/Filter.jsx';
import './SearchContainer.sass';

export default function SearchContainer() {
    const years = [];
    for (let i = 1905; i < 2020; i++) {
        years.push(i);
    }
    years.reverse();

    return (
        <section className='search__container'>
            <div className="filters">
                <Filter className="filters__format" options={["Movie", "Series", "Сartoon"]} />
                <Filter className="filters__genre" options={["Horror", "Comedy", "Thriller"]} />
                <Filter className="filters__year    " options={years} />
            </div>
            <div className="search">
                <input type="text" aria-label="Search" placeholder="Search" className="search__field"></input>
                <button className="search__button">Search</button>
            </div>
        </section>
    )
}
