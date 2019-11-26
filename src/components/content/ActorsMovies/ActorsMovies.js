import React from 'react';
import { Link } from 'react-router-dom';
import './ActorsMovies.css';
const urls = require('../../urls.json');
class ActorsMovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data:[],
        };
    }
    async componentDidMount() {
        const {id} = await this.props;
        this.setState({id});
        this.get_actor_movies();
    }
    async get_actor_movies(){
        this.setState({ loading: false });
        const {id} = this.state;
        const response = await fetch(urls.api_url+'getActorMovies/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})
        });
        const data = await response.json();
        console.log(data);
        this.setState({ 
            loading: true,
            data:data.data,
        });
    }
    show_info(){
        const{data} = this.state;
        let actormoviessContentForActorInfo = [];
        data.forEach(movie => {
            console.log(movie);
            actormoviessContentForActorInfo.push(
                <div className="col-sm-3 imagenMovieActors">
                    <Link to={{ pathname: '/moviecontent', state: { id: data.movie__id} }}>
                        <h2>{movie.movie__name}</h2>
                        <div>
                            <img src={movie.movie__poster} alt=""/>
                            <h3>{movie.movie__genre__name}</h3>
                            <h3>{movie.movie__premieredate}</h3>
                        </div>
                    </Link>
                </div>
            );
        });
        return actormoviessContentForActorInfo;
    }
    render() {
        const{loading} = this.state;
        return (
            <div className="Actors Content">
                <h2>Peliculas: </h2>
                <div className="container">
                    <div className="row">
                    {loading ? this.show_info():
                        (<div></div>)
                    }
                    </div>
                </div>
            </div>
        );
      }
}
export default ActorsMovies;