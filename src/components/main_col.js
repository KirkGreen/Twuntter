import React, {Component} from "react";
import '../styles/styles.css'


class MainColumn extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: ' ',
            messages: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    addElements () {
        return this.state.messages.map((massages,i) => (
            <div className="messages" key={i}>
                Новое сообщение:
                <div className="message" key={i}>{massages}</div>
            </div>

        ));
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