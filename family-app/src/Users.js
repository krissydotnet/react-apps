import React, { Component } from 'react';
import Profile from './Profile';

class Users extends React.Component {
    constructor(props) {
        super(props) 
        // this.state = {
        //     editing: false
        // }
    
    this.assignChore = this.assignChore.bind(this);

}
    assignChore(id, userId) {
        console.log("assign chore", id, userId)
        this.props.assignChore(id, userId);
    }
    render() {
         const userList = this.props.users.map( user => {
         return (
              
              <Profile 
                key = {user.id.toString()}
                id = {user.id}
                name={user.name} 
                chores={this.props.chores} 
                image={user.image}
                assignChore={this.assignChore}
               />
             )
           }
           );
        return (
            <div>
                <h1>Users</h1>
                <div className="profiles-list">
                {userList} 
                </div>
            </div>
        )
    }
}

export default Users;