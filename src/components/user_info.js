import React, {Component} from 'react'
import '../styles/styles.css'

class User extends Component{

    state = {
        name: 'User01'
    };

    render(){
        return(
            <div className="user">
                <img src={require('../img-twuntter/user_6.png')} alt="" width={50} height={50}/>
                <div className="user_name">{this.state.name}</div>
            </div>
        )
    }
}

export default User;

