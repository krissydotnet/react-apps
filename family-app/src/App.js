import React, { Component } from 'react';
import Users from './Users';
import ChoreList from './ChoreList';
import ChoreBoard from './ChoreBoard';
import logo from './logo.svg';
import './App.css';

const chores = [
  {   "choreId": 1,
      "name": "Clean bedroom",
      "assignedTo": null,
      "maxAssigned": 4,
      "value": 1,
      "completed": false
  },
  {
      "choreId": 2,
      "name": "Clean bathrooms",
      "assignedTo": null,
      "maxAssigned": 4,
      "value": 1,
      "completed": false
  },
  {   "choreId": 3,
      "name": "Clean living room",
      "assignedTo": null,
      "maxAssigned": 2,
      "value": 1,
      "completed": false
  },
  {   
      "choreId": 4,
      "name": "Clean playroom",
      "assignedTo": null,
      "maxAssigned": 2,
      "value": 1,
      "completed": false
  },
  {   
      "choreId": 5,
      "name": "Clean off table",
      "assignedTo": null,
      "maxAssigned": 1,
      "value": 1,
      "completed": false
  },
  {   
      "choreId": 6,
      "name": "Set the table",
      "assignedTo": null,
      "maxAssigned": 1,
      "value": 1,
      "completed": false
  },
  {   
      "choreId": 7,
      "name": "Sweep the floor",
      "assignedTo": null,
      "maxAssigned": 1,
      "value": 1,
      "completed": false
  },
  {   
      "choreId": 8,
      "name": "Wash dishes",
      "assignedTo": null,
      "maxAssigned": 2,
      "value": 1,
      "completed": false
  },
  {   
      "choreId": 9,
      "name": "Wash laundry",
      "assignedTo": null,
      "maxAssigned": 2,
      "value": 1,
      "completed": false
  },
  {   
      "choreId": 10,
      "name": "Fold laundry",
      "assignedTo": null,
      "maxAssigned": 2,
      "value": 1,
      "completed": false
  },
  {   
      "choreId": 11,
      "name": "Take out garbage",
      "assignedTo": null,
      "maxAssigned": 2,
      "value": 1,
      "completed": false
  }

];
const users = [
{
  "id" : 1,
  "name": "Mommy",
  "type": "admin",
  "password": "disney",
  "image" : "krissy.jpg"

},
{
  "id" : 2,
  "name": "Daddy",
  "type": "admin",
  "password": "auburn",
  "image" : "chris.jpg"
},
{ "id" : 3,
  "name": "Emma",
"type": "user",
"points": 0,
"password": "",
"code": "041976",
"image" : "emma.jpg"
},
{ "id" : 4,
  "name": "Jacob",
  "type": "user",
  "points": 0,
  "password": "",
  "code": "9753",
  "image" : "jacob.jpg"
}
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users: [],
        chores: []    
    }
    this.addChore = this.addChore.bind(this);
    this.assignChore = this.assignChore.bind(this);
    this.nextId = this.nextId.bind(this);
}
componentWillMount() {
  var self = this
  this.state.users = users;
  this.state.chores = chores;
}


addChore(text) {
   this.setState(prevState => ( {
     chores: [...prevState.chores, {
       
         "choreId": this.nextId(),
         "name": text,
         "assignedTo": null,
         "maxAssigned": 1,
         "value": 1,
         "completed": false
    
     }]
   }))
}

assignChore(id, userId) {
  this.setState( prevState => ({
        chores : [...prevState.chores.filter((chore) => {
          if (chore.choreId == id) {
            chore.assignedTo = userId;
          }
          return chore;
        }

        )]
  }))
}


nextId() {
  this.uniqueId = this.uniqueID || 0;
  return this.uniqueId++;
}

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Dukes Family Planner</h1>
        </header>
        <div className="main-container">
          <div className="chores-container">
           
            <ChoreBoard chores={this.state.chores} addChore={this.addChore} />
          </div>
          <div className="profiles-container">
          <Users users={this.state.users} chores={this.state.chores} assignChore={this.assignChore} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
