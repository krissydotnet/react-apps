import React, { Component } from 'react';

class Chore extends React.Component {
    constructor(props) {
            super(props) 
            this.state = {
                editing: false
            }
        
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.onDragStart = this.onDragStart.bind(this);

    }
    
    onDragStart(ev, id) {
        console.log('dragstart', id);
        ev.dataTransfer.setData("id", id);
    }

    renderForm() {
        return (
        <div className="chore-item">

        </div>
        )
    }
    renderDisplay(){
        return (
            <div 
                className="chore-item" 
                id={this.props.id} 
                key={this.props.id}
                onDragStart = {(e) => this.onDragStart(e, this.props.id)}
                draggable>
            {this.props.name}
            </div>
        )
    }
    
    render() {
        return this.state.editing ? this.renderForm(): this.renderDisplay(); 

    }
}

export default Chore;