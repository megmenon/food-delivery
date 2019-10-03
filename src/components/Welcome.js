import React, { Component } from 'react';
import { connect } from 'react-redux';
import { select } from '../actions/selectRestaurant';
import fetchRestaurants from '../actions/fetchRestaurants';
import Restaurants from './AllRestaurants';
import { thisExpression } from '@babel/types';

class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: this.props.error,
            restaurants: this.props.restaurants,
            pending: this.props.pending,
            isComplete: false
        }
    }

    componentDidMount() {
        const { fetchRestaurants } = this.props;
        setTimeout(() => {
            fetchRestaurants();
        }, 2000);
    }

    componentWillReceiveProps(nextProps){
        setTimeout(() => {
            this.setState({
                pending: nextProps.pending,
                error: nextProps.error,
                restaurants: nextProps.restaurants,
                isComplete: true
            })
        }, 2000)
    }

    // handleChange = (e) => {
    //     this.setState({
    //         input: e.target.value
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const { input } = this.state;
    //     this.props.select(input)
    //     this.setState({
    //         input: ''
    //     })
    // }

    render(){
        const { restaurants, pending, isComplete } = this.state;
        return(
            <div>
               { !this.state.pending ? <div>List of Restaurants</div> : <div>LOADING...</div> }
               
               <Restaurants listOfRestaurants={restaurants} pending={pending}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
   return {
        error: state.RestaurantReducer.error,
        restaurants: state.RestaurantReducer.restaurants,
        pending: state.RestaurantReducer.pending
    }
}

const mapDispatchToProps = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);