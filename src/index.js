import React,{Component} from "react";
import ReactDOM from "react-dom";

//components
import Header from './components/header';
import MainColumn from './components/main_col'

class App extends Component {
    render (){
        return(
            <div>
                <Header/>
                <MainColumn/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));