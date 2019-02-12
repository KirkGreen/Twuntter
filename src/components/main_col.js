import React, {Component} from "react";
import '../styles/styles.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import User from './user_info'

class MainColumn extends Component{

    constructor(props) {

        let returnObj = JSON.parse(localStorage.getItem("messages"));

        super(props);

        if (localStorage.getItem("messages") === null) {
            this.state = {
                value: '',
                messages: []
            };
            console.log(0)

        } else {
            this.state = {
                value: '',
                messages: returnObj
            };
            console.log(1)
        }

        console.log(returnObj);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }


    addElements () {
        let reversedMessages = this.state.messages;

        console.log(reversedMessages);

        return reversedMessages.map((message,i) => (
            <CSSTransition
                classNames="messages"
                timeout={300}
                key={i}
                onEntered={ (node) =>{
                    node.classList.add("active")
                }}
            >

                <div className="messages" key={i}>

                    <div className="users_content">
                        <User/>
                        <div className="message_cover ">
                            New message:
                            <div className="message" key={i}>{message}</div>
                        </div>
                    </div>

                </div>

            </CSSTransition>

        )).reverse();
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let newMessage = [...this.state.messages, this.state.value];
        this.setState({
            messages:newMessage,
            value: ''
        });

        let serialObj = JSON.stringify(newMessage);
        localStorage.setItem("messages", serialObj);

        event.preventDefault();
    }

    keyPress(event) {
        if (event.keyCode === 13) {
            let newMessage = [...this.state.messages, this.state.value];
            this.setState({
                messages:newMessage,
                value: ''
            });

            let serialObj = JSON.stringify(newMessage);
            localStorage.setItem("messages", serialObj);

            event.preventDefault();
        }
    }

    render(){

        return (
            <div className="mainColumn">

                <form className="textField" onSubmit={this.handleSubmit}>
                    <textarea
                        value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}
                        placeholder={"What`s happening?"}
                    />
                    <input
                        type='submit'
                        className="twunt"
                        value="Twunt"
                    />
                </form>

                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.addElements()}
                </TransitionGroup>


            </div>
        )
    }
}

export default MainColumn;