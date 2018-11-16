import React, {Component} from "react";
import '../styles/styles.css'


class MainColumn extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: prompt('Введите имя',' '),
            value: ' ',
            messages: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    addElements () {
        let reversedMessages = this.state.messages;

        return reversedMessages.map((message,i) => (
            <div className="messages" key={i}>
                Новое сообщение от {this.state.name}:
                <div className="message" key={i}>{message}</div>
            </div>

        )).reverse();
    }


    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let newMessage = [...this.state.messages, this.state.value];
        this.setState({
            messages:newMessage
        });

        console.log(this.state.value);
        event.preventDefault();
    }

    render(){

        return (
            <div className="mainColumn">

                <form className="textField" onSubmit={this.handleSubmit}>
                    <textarea
                        value={this.state.value} onChange={this.handleChange}
                        placeholder={"What`s happening?"}
                    />
                    <input
                        type='submit'
                        className="twunt"
                        value="Twunt"
                    />
                </form>

                <div>{this.addElements()}</div>

            </div>
        )
    }
}

export default MainColumn;