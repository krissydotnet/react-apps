import React, { Component } from 'react';

class ChoreList extends React.Component {
    render() {
        const choreList = this.props.chores.map( chore => {
            return (
                <li className="chore-item">{chore.name}</li>
            )
        });

        return (
            <div className="chore">
                <h2>Chore List</h2>
                <ul>{choreList}</ul>
            </div>
        )
    }
}

export default ChoreList;