import React from 'react';
import'./Footer.css';
class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <p>Power by:Enrique Mendoza</p>
                </div>
            </div>
        );
      }
}
export default Footer;