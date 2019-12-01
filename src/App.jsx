import React from 'react';
import './main.sass';
import Header from './components/Header/Header.jsx';
import SearchContainer from './components/SearchContainer/SearchContainer.jsx';
import Table from './components/Table/Table.jsx';

export default function App() {

    return (
        <div className="App">
            <Header />
            <div className="container">
                <main className="main-container">
                    <SearchContainer />
                    <Table/>
                </main>
            </div>
        </div>
    );
}
