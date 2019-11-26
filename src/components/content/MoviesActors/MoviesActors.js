import React from 'react';
import './MoviesActors.css';
import { Link } from 'react-router-dom';
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
        const {id} = await this.props;
        this.setState({id});
        this.get_movie_actors();
    }

    async get_movie_actors(){
        this.setState({ loading: false });
        const {id} = this.state;
        const response = await fetch(urls.api_url+'getMovieActors/', {
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
            data:data.data,
        });
    }

    show_info(){
        const { data } =this.state;
        const ImagenActor = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} alt=""/>
        var actorsContentForMovieInfo = [];
        let actorsCount =data.length;
        for (let i = 0; i < actorsCount; i++) {
            actorsContentForMovieInfo.push(
                <div className="col-md-3 actorContainer">
                    <Link to={{ pathname: '/actorscontent', state: { id: data[i].actor__id} }}>
                    <h3>{data[i].actor__name}</h3>
                    <h5>Birthdate: {data[i].actor__birthdate}</h5>
                    <div className="actorPhoto"><ImagenActor data={data[i].actor__photo}/></div>
                    </Link>
                </div>
            );
        }
        return(actorsContentForMovieInfo);
    }

	render() {
        const {loading} = this.state;
		return (
		    <div className="Content container moviescontent">
                <h1>Actores:</h1>
                <div className="row">
                    {loading?
                    this.show_info():
                    (<p>cargando</p>)
                }</div>
            </div>
		);
	}
}
export default MoviesContent;