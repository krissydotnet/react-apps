import React, { Component } from 'react';
import Chore from './Chore';

class Profile extends React.Component {
    constructor(props) {
        super(props) 
        // this.state = {
        //     editing: false
        // }
    
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);

}
    onDragOver(ev) {
        ev.preventDefault();
    }
    onDrop(ev) {
        let id = ev.dataTransfer.getData("id");
        this.props.assignChore(id, this.props.id);
    }
    render() {
        const choresAssigned = this.props.chores
                        .filter(chore => chore.assignedTo === this.props.id)
                        .map(chore => {
                            return (
                            <li>
                                <Chore 
                                name={chore.name} 
                                key={chore.choreId.toString()}
                                 />
                            </li>)
                        });
        
      
        return (
            <div className="profile" 
                 onDragOver={(e) => this.onDragOver(e)}
                 onDrop={(e) => this.onDrop(e)} >
                <img src={"images/" + this.props.image} alt={this.props.name}></img>
                <h2>{this.props.name}</h2>
                <ul>{choresAssigned}</ul>
            </div>
        )
    }
}

export default Profile;