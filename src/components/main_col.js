import React, {Component} from "react";
import '../styles/styles.css'


class MainColumn extends Component{

    constructor(props) {

        let returnObj = JSON.parse(localStorage.getItem("myKey"));

        super(props);

        this.state ={
            value: '',
            messages: []
        };

        // if (localStorage.getItem("myKey") === null) {
        //     this.state = {
        //         value: '',
        //         messages: []
        //     };
        //
        // } else {
        //     this.state = {
        //         value: returnObj.state.value,
        //         messages: returnObj.state.message
        //     };
        // }

        console.log(returnObj);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    addElements () {
        let reversedMessages = this.state.messages;

        return reversedMessages.map((message,i) => (
            <div className="messages" key={i}>
                Новое сообщение от Kirill:
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
            messages:newMessage,
            value: ''
        });

        let serialObj = JSON.stringify(this.state);
        localStorage.setItem("myKey", serialObj);

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