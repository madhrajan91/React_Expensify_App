import React from 'react';
import moment from 'moment';

import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const now = moment();
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseFormComponent extends React.Component {
    // use local state instead of redux store since this is just local to this component


    constructor(props) {
        super(props);
        this.state = {
            description:props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e)=> {
        const description = e.target.value;
        this.setState(()=> {
            return {
                description //same as description:description
            }
        })
    }
    onAmountChange = (e)=> {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(()=> {
                return {
                    amount
                }
            })
        }
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        //e.persist() if you want to use e.target.value directly below
        this.setState( () => {
            return {
                note
            }
        })
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState({createdAt})
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(()=> ({calendarFocused:focused}))
    }

    onSubmit = (e) => {
        if (!this.state.description || !this.state.amount) {
            //set error
            this.setState(() => ({
                error: 'Please enter valid descripton or amount'
            }))
        }
        else {
            this.setState(() => ({
                error: ''
            }))
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount,10) * 100,
                createdAt: (this.state.createdAt).valueOf(),
                note: this.state.note

            })
        }
        e.preventDefault();
    }
    render() {
       return(
            <div>
             ExpenseForm
             {this.state.error !== '' && <p>{this.state.error}</p>}
             <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}         
                />
                <SingleDatePicker
                    date = {this.state.createdAt}
                    onDateChange= {this.onDateChange}
                    focused = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange = {()=>false}
                />
                <textarea
                    placeholder="note" value={this.state.note} onChange={this.onNoteChange}>
                </textarea>
                <button>Add Expense</button>
             </form>
            </div>
       );
    }
}