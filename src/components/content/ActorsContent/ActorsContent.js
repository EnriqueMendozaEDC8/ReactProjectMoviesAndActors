import React from 'react';
import './ActorsContent.css';
import ActorsMovies from '../ActorsMovies/ActorsMovies';
const urls = require('../../urls.json');
class ActorsContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data:[],
        };
    }
    async componentDidMount() {
        const {id} = await this.props.location.state;
        this.setState({id});
        this.get_actors_info();
    }
    async get_actors_info(){
        const {id} = this.state;
        const response = await fetch(urls.api_url+'getActors/', {
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
        const ImagenActor = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} alt=""/>
        return(
            <div className="contentActor text-left">
                <div className="row">
                    <div className="col-sm-9">
                        <h1>{data.name}</h1>
                        <h3>{data.birthdate}</h3>
                    </div>
                    <div className="col-sm-3 imagenActor">
                        <ImagenActor data={data.photo}/>
                    </div>
                </div>
                <ActorsMovies id={data.id}/>
            </div>
        );
    }
    render() {
        const{loading} = this.state;
        return (
            <div className="Actors Content">
                <div className="container">
                    {loading ?
                        this.show_info():
                        (<div></div>)
                    }
                </div>
            </div>
        );
      }
}
export default ActorsContent;