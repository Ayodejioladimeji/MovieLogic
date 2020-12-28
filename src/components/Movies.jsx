import React, { Component } from 'react'
import {getMovies} from '../services/movieData'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movies: getMovies(),
         };
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter((m)=>m.id !== movie.id)

        this.setState({
            movies: movies
            // The key and values are the same
            // movies
        })
    };

    render() {
        const {length:count} = this.state.movies
        if(count === 0){
            return(
               <>
                    <h2 className="text-center text-primary py-2">A SIMPLE MOVIE LOGIC</h2>
                    <p className="bg-primary text-white py-4 mx-auto text-center">There are no movies in the database</p>
               </>
            )
        }

        return (
            <>
                <h2 className="text-center text-primary py-2">A SIMPLE MOVIE LOGIC</h2>
                <p className="text-center py-4 bg-primary text-white w-100">Showing <span className="bg-warning p-1 rounded-circle">{count}</span> movies in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                        </tr>
                    </thead>

                    <tbody>
                    {this.state.movies.map(movie=>{
                        const {id, title, stock, rentalRate}  = movie
                        return(
                            <tr key={id}>
                                <td>{title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{stock}</td>
                                <td>{rentalRate}</td>
                                <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )
                    })}
                    
                    </tbody>
                </table>
            </>
        );
    }
}
export default Movies