import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './img/brokenHouse.jpg';

export default class Contact extends React.Component {
//This will be a future implementation
    constructor(props) {
        super(props);
        this.state = { email: '', title: '', message: '' };
        this.backgroundStyle = {
            backgroundImage: `url(${image})`,
        };
    }

    render() {
        return (
            <div id="wrapper">
                <div class="container8" style={this.backgroundStyle}>
                    <div class="overlay7"></div>
                    <div class="centered4">
                        {/* <h1>Annie Li</h1>
                        <h3><strong>Founder and President</strong></h3> */}
                    </div>
                </div>

                {/* <form className="mailing">
                    <div className="form-group">
                        <label htmlFor="Email">Email:</label>
                        <input id="Email" type="text" className="form-control" value={this.state.email}
                            onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Title">Title:</label>
                        <input id="Title" type="text" className="form-control" value={this.state.title}
                            onChange={this.onTitleChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Message">Message:</label>
                        <input id="Message" type="text" className="form-control" value={this.state.message}
                            onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-danger" onClick={this.handleSubmitChange.bind(this)}>Submit</button>
                </form> */}
            </div>
        )
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    onTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    onMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    handleSubmitChange(e) {
        let message = this.state.message;
        let title = this.state.title;
        if ((message === '' || message === null) && (title === '' || title === null)) {

        }
    }


}

