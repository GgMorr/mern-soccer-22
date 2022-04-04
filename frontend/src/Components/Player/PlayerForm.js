import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
    submitPlayer(ever) {
        Event.preventDefault();

        axios.post('http://localhost:4000/players', {
            firstName: this.any.firstName.value,
            lastName: this.any.lastName.value,
            phone: this.any.phone.value,
            email: this.any.email.value
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="row">
                <h1 className='center'>Add New Player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref="firstName" type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref="lastName" type="text" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>

                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone" ref="phone" type="text" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" ref="email" type="text" />
                            <label htmlFor="email">Email</label>
                        </div>

                    </div>
                    <button className='btn waves-effect waves-light' type='submit'
                    name='action'>Add Player</button>
                </form>
            </div>
        );
    }
}

export default PlayerForm;