import React, { Component } from 'react';
import styles from './Main.module.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightAnswer: this.rightAnswer,
            firstNum: 1,
            secondNum: 1,
        }
        this.getAnswer = this.getAnswer.bind(this);
    }

    getAnswer(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    generate = () => {
        let rightAnswer = this.getAnswer(1, 10);
        console.log('answ ' + rightAnswer);
        let firstNum = this.getAnswer(1, rightAnswer);
        if (rightAnswer === firstNum) rightAnswer++;
        console.log('f ' + firstNum);
        const secondNum = rightAnswer - firstNum;
        console.log('sec' + secondNum);

        this.setState({
            rightAnswer: this.getAnswer(1, 10),
            firstNum: firstNum,
            secondNum: secondNum
        });
    }

    render() {

        return (
            <div className="content" >
                <p>{this.state.firstNum} + {this.state.secondNum} = </p>
                <button className='content__btn' onClick={this.generate}>Generate</button>
            </div>

        );
    }
}

export default Main;