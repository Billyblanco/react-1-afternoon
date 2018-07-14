import React, { Component } from 'react';

class FilterString extends Component {

    constructor () {
        super();

        this.state = {
            friends: ['Ian', 'Danie', 'Maddie Valentine', 'Shauna', 'Yuriy', 'Demi', 'Dillon', 'Madi','Erin'],
            userInput: '',
            filteredFriends: []
        };
    }


    handleChange (val) {
        this.setState({
            userInput: val
        });
    }

    filteredFriends(userInput) {
        let friends = this.state.friends;
        let filteredFriends = [];

        for ( let i = 0; i <friends.length; i++) {
            if (friends[i].includes(userInput)) {
                filteredFriends.push(friends[i]);
            }
        }
        this.setState({ filteredFriends: filteredFriends})
    }


    render () {
        return (
    
        <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Friends: {JSON.stringify(this.state.friends)} </span>
            <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value)}}></input>
            <button className="confirmationButton" onClick={ () => this.filteredFriends(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Friends: {JSON.stringify(this.state.filteredFriends)} </span>


            </div>
        )
    }
}

export default FilterString;