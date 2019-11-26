import React from 'react';
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show:true,
        };
    }
    async componentDidMount() {
        const { ms } = this.props;
        await this.hide(ms);
        this.setState({show:false});
    }
    hide(ms){
        return new Promise(resolve => setTimeout(resolve, ms));;
    }
    render() {
        const { show } = this.state;
        return (
          <div id="my-header">
                {show ? 
                    <p>This Project was running in react</p>:
                    <div></div>
                }
          </div>
        );
      }
}
export default Header;