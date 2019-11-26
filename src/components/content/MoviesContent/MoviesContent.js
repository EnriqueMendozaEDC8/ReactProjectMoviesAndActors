import React from 'react';
import './MoviesContent.css';
import MoviesActors from'../MoviesActors/MoviesActors';
const urls = require('../../urls.json')

class MoviesContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            id: '',
            data:[],
            loading : false,
		};
	}
    async componentDidMount() {
        const {id} = await this.props.location.state;
        this.setState({id});
        this.get_movie_info();
    }
    async get_movie_info(){
        this.setState({ loading: false });
        const {id} = this.state;
        const response = await fetch(urls.api_url+'getMovies/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})
        });
        const data = await response.json();
        this.setState({ 
            loading: true,
            data:data.data[0],
        });
    }
    show_info(){
        const {data} = this.state;
        return (
            <div className="row">
                <div className="col-sm-10 text-left">
                    <h1>{data.name}</h1>
                    <h3>{data.genre__name}</h3>
                    <h3>{data.premieredate}</h3>
                </div>
                <div className="col-sm-2">
                    <img src={data.poster} border="1" alt=""></img>
                </div>
                <MoviesActors id={data.id}/>
            </div>
        );
    }
	render() {
        const {loading} = this.state;
		return (
		    <div className="Content container moviescontent">
                {loading?
                    this.show_info():
                    (<p></p>)
                }
            </div>
		);
	}
}
export default MoviesContent;