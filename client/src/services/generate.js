import React, { Component } from "react"
import Constructor from "../components/constructor/Constructor"
import Tasks from "../components/tasks/Tasks"

class Mains extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rightAnswer: this.rightAnswer,
            firstNum: 1,
            secondNum: 1,
        }
        this.getAnswer = this.getAnswer.bind(this)
    }

    getAnswer(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min)
    }

    generate = () => {
        let rightAnswer = this.getAnswer(1, 10)
        console.log('answ ' + rightAnswer)
        let firstNum = this.getAnswer(1, rightAnswer)
        if (rightAnswer === firstNum) rightAnswer++
        console.log('f ' + firstNum)
        const secondNum = rightAnswer - firstNum
        console.log('sec' + secondNum)

        this.setState({
            rightAnswer: this.getAnswer(1, 10),
            firstNum: firstNum,
            secondNum: secondNum
        })
    }

    generateTasks() {
        console.log('generate task')
    }

    render() {

        return (
            <div className="content" >
                <Constructor
                    generateTasks={this.generateTasks}
                />
                <Tasks />
                <p>{this.state.firstNum} + {this.state.secondNum} = </p>
                <button className='content__btn' onClick={this.generate}>Generate</button>
            </div>

        )
    }
}

const Main = {
    generateTasks(operators, length) {
        let outArray = new Array(length).fill(0)
        const countOperator = Object.values(operators).filter(el => el).length || 1
        const lengthSingleArray = Math.floor(length / countOperator)
        const plusArray = Array(length - (lengthSingleArray * countOperator))
        const minusArray = Array(lengthSingleArray)
        const multArray = Array(lengthSingleArray)
        const divisionArray = Array(lengthSingleArray)
        console.log(lengthSingleArray)
        console.log(length - (lengthSingleArray * countOperator))

        return [
            {
                first_number: 2,
                second_number: 2,
                answer: 4,
            }
        ]
    }
}


export default Main