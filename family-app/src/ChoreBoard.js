import React, { Component } from 'react';
import Chore from './Chore';


class ChoreBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.save = this.save.bind(this);
    }

    eachNote(chore, i) {
        return (
            <li >
            <Chore 
            name={chore.name} 
            key={chore.choreId.toString()}
            id={chore.choreId}
            
             /> 
             
             </li>
        )
    }

    save(e) {
        e.preventDefault();
        if (this._newText.value.length > 0) {
            this.props.addChore(this._newText.value)
        }

        this.setState({
            editing: false
        });

    }

    render() {

        return (
            <div className="chalkboard"><h1>Chores</h1>
            <ul>
                {this.props.chores.map(this.eachNote)}
    
             </ul> 
             <form  onSubmit={this.save} >
             <input type="text" ref={input => this._newText = input}  id="add_chore"></input>
             <button id="save">
              <i class="fas fa-plus-circle"></i>
                </button>
                </form>
            </div>
        )
    }
}

export default ChoreBoard;