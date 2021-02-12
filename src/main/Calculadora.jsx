import React, { Component } from 'react'
import './Calculadora.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculadora extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            values: ['0','+'],
            printValue: '0'
        }
        this.insertNumber = this.insertNumber.bind(this)
        this.clearDisplay = this.clearDisplay.bind(this)
        this.getResult = this.getResult.bind(this)
    }

    clearDisplay() {
        this.setState({
            value: '',
            printValue: '0'
        })
    }

    insertNumber(e, className) {

        if(className) {
            if(e === '<') {
                const value = this.state.printValue.slice(0, -1)
                if(value.length === 0) {
                    this.setState({
                        printValue: '0'
                    })
                }
                else {
                    this.setState({
                        printValue: value
                    })
                }
                
            }
            else if(e === '.') {
                this.maxNumberVerify(e)
            }
            else if(e === '=') {
                this.setState({
                    values: [...this.state.values, this.state.printValue]
                }, () => this.getResult())
            }
            else {
                this.setState({
                    values: [...this.state.values, this.state.printValue, e],
                }, () => this.clearDisplay())
            }
        }
        else {
            if(this.state.printValue.length == 1 && this.state.printValue == '0') {
                this.setState({
                    printValue: ''
                }, () => this.maxNumberVerify(e))
            }
            else {
                this.maxNumberVerify(e)
            }
        }
    }

    maxNumberVerify(e) {
        const value = this.state.printValue.concat(e)
        if(this.state.printValue.length > 14) {
            this.setState({
                printValue: this.state.printValue
            })
        }
        else {
            this.setState({
                printValue: value
            })
        }
    }

    getResult() {
        const result = this.state.values.reduce((total, value, indice) => {

            if(isNaN(parseFloat(value))) {
                const num02 = parseFloat(this.state.values[indice += 1])
                if(value === "+") {
                    return total += num02
                }
                else if(value == '-') {
                    return (total - num02)
                }
                else if(value == '*') {
                    return (total * num02)
                }
                else if(value == '/') {
                    return (total / num02)
                }
            }
            else {
                return parseFloat(total)
            }
        })

        this.setState({
            printValue: result.toString(),
            values: ['0', '+']
        })

    }    

    render() {
        return (
            <div className="calculadora">
                <div className="box">
                    <Display className="display" result={this.state.printValue}/>
                    <div className="buttons">
                        <Button operation label="AC" Click={this.clearDisplay}/>
                        <Button operation label="+" Click={this.insertNumber}/>
                        <Button operation label="-" Click={this.insertNumber}/>
                        <Button operation label="<" Click={this.insertNumber}/>
                        <Button label="1" Click={this.insertNumber}/>
                        <Button label="2" Click={this.insertNumber}/>
                        <Button label="3" Click={this.insertNumber}/>
                        <Button operation label="*" Click={this.insertNumber}/>
                        <Button label="4" Click={this.insertNumber}/>
                        <Button label="5" Click={this.insertNumber}/>
                        <Button label="6" Click={this.insertNumber}/>
                        <Button operation label="/" Click={this.insertNumber}/>
                        <Button label="7" Click={this.insertNumber}/>
                        <Button label="8" Click={this.insertNumber}/>
                        <Button label="9" Click={this.insertNumber}/>
                        <Button operation label="." Click={this.insertNumber}/>
                        <Button triple label="0" Click={this.insertNumber}/>
                        <Button operation label="=" Click={this.insertNumber}/>
                    </div>
                </div>
            </div>
        )
    }
}


