import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createUser} from '../actions/index'

class UserCreate extends Component {

    render(){
        return(
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!this.refs.name.value.trim()) {
                        return
                    }
                    if (!this.refs.surname.value.trim()) {
                        return
                    }
                    if (!this.refs.age.value.trim()) {
                        return
                    }
                    if (!this.refs.description.value.trim()) {
                        return
                    }
                    var user = {};
                    user.id = this.props.users.length+1;
                    user.first = this.refs.name.value;
                    user.last = this.refs.surname.value;
                    user.age = this.refs.age.value;
                    user.description = this.refs.description.value;
                    user.thumbnail = "http://i.imgur.com/7yUvePI.jpg";
                    user.active = 1;
                    this.props.createUser(user)
                    this.refs.name.value = ''
                    this.refs.surname.value = ''
                    this.refs.age.value = ''
                    this.refs.description.value = ''
                }}>
                    name: <input ref="name" /><br />
                    surname: <input ref="surname" /><br />
                    age: <input ref="age" /><br />
                    description: <input ref="description" /><br />
                    <button type="submit">
                    Create User
                    </button>
                </form>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({createUser: createUser}, dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserCreate);