import React from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';
const urls = require('../../urls.json');
class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu:[] ,
            data:{} ,
            loading : false,
        };
    }
    componentDidMount() {
        this.get_movies();
    }
    async get_movies(){
        this.setState({ loading: false });
        const response = await fetch(urls.api_url+'getMovies/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        });
        const data = await response.json();
        this.setState({ 
            loading: true,
            data:data.data
        });
    }
    insert_movies(){
        const {data} = this.state;
        let menu = [];
        for (let i = 0; i < data.length; i++) {
            menu.push(
                <div className="row">
                    <Link className="button-movies" to={{ pathname: '/moviecontent', state: { id: data[i].id} }}>
                        <div className="row movies-container">
                            <div className="col-md-9 col-lg-10 text-left">
                                <h1>{data[i].name}</h1>
                                <h3>{data[i].genre__name} </h3>
                                <h3>{data[i].premieredate} </h3>
                            </div>
                            <div className="col-md-3 col-lg-2 text-left poster-movie">
                                <img src={data[i].poster} border="1" alt=""></img>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        }
        return(menu);
    } 
    render() {
        const { loading } = this.state;
        return (
            <div className="Movies Content">
                <div className="container">
                    {loading ?
                        this.insert_movies():
                        (<div></div>)
                    }
                </div>
            </div>
        );
    }
}
export default Movies;