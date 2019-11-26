import React from 'react';
import { Link } from 'react-router-dom';
import './Actors.css';
const urls = require('../../urls.json');
class Actors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data:[],
        };
    }
    async componentDidMount() {
        await this.get_actors();
    }
    async get_actors(){
        this.setState({ loading: false });
        const response = await fetch(urls.api_url+'getActors/', {
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
    insert_actors(){
        const {data} = this.state;
        let actorsMenu = [];
        const ImagenActor = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} alt=""/>
        data.forEach(actor => {
            actorsMenu.push(
                <div className="col-sm-6">
                    <div className="actorInfoContainer">
                        <Link to={{ pathname: '/actorscontent', state: { id: actor.id} }}>
                            <h2>{actor.name}</h2>
                            <h4>{actor.birthdate}</h4>
                            <ImagenActor data={actor.photo}/>
                        </Link>
                    </div>
                </div>
            );
        });
        return(actorsMenu);
    }
    render() {
        const{loading} = this.state;
        return (
            <div className="Actors Content">
                <div className="container">
                    <div className="row">
                        {loading ?
                            this.insert_actors():
                            (<div></div>)
                        }
                    </div>
                </div>
            </div>
        );
      }
}
export default Actors;