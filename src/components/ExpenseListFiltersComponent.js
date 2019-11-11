import React from 'react';

import {connect} from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './../actions/filters'

import {DateRangePicker} from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDateChange = ({startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setStartDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({
            calendarFocused
        }))
    }
    render() {
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={(e) => {
                this.props.dispatch(setTextFilter(e.target.value));
                console.log(e.target.value);
            }}/>
            <select onChange={(e) => {
                this.props.dispatch(e.target.value==="date"?sortByDate():sortByAmount());
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>

            <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDateChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths= {1}
                isOutsideRange={()=>false}
                showClearDates={true}
                />


        </div>
        )
    }
}
// const ExpenseListFilters = (props) => (
//     <div>
//         <input type="text" value={props.filters.text} onChange={(e) => {
//             props.dispatch(setTextFilter(e.target.value));
//             console.log(e.target.value);
//         }}/>
//         <select onChange={(e) => {
//             props.dispatch(e.target.value==="date"?sortByDate():sortByAmount());
//         }}>
//             <option value="date">Date</option>
//             <option value="amount">Amount</option>
//         </select>


//     </div>
// );

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);