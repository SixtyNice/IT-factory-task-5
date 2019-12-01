import React, { Component } from 'react'
import './Table.sass';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    image: '',
                    title: "Some",
                    format: "Movies",
                    genre: "Horror",
                    year: 2019,
                    rating: 5
                },
                {
                    image: '',
                    title: "Some",
                    format: "Movies",
                    genre: "Horror",
                    year: 2019,
                    rating: 5
                },
                {
                    image: '',
                    title: "Some",
                    format: "Movies",
                    genre: "Horror",
                    year: 2019,
                    rating: 5
                }
            ]
        }
    }


    render() {
        return (
            <section className="list-movies">
                <table className="table-movies">
                    <thead>
                        <th className="picture-movie"></th>
                        <th className="title-movie">Title</th>
                        <th className="format-movie">Format</th>
                        <th className="genre-movie">Genre</th>
                        <th className="year-movie">Year</th>
                        <th className="rating-movie">Rating</th>
                    </thead>
                    {
                        this.state.movies.map((item) => {
                            return (
                                <tr>
                                    <td>{item.image}</td>
                                    <td>{item.title}</td>
                                    <td>{item.format}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.year}</td>
                                    <td>{item.rating}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </section>
        )
    }
}
