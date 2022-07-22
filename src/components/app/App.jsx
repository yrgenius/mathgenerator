import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.rightAnswer = "";
        this.state = {
            rightAnswer: this.rightAnswer,
        }
        this.getAnswer = this.getAnswer.bind(this);
    }

    getAnswer(min, max){
        return Math.floor(Math.random() * (max - min) + min );
    }

    generate = () => {        
        this.setState({rightAnswer: this.getAnswer(1, 10)});
    }

    render() {
        
        return (
            <div className = "content" >
                <p>{this.state.rightAnswer}</p>
                <button onClick={this.generate}>Generate</button>
            </div>
            
        );
    }
}

export default App;