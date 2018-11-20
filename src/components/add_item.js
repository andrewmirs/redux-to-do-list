import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addToDoItem } from '../actions';
import NavButton from './nav_button';

class AddItem extends Component {
    renderInput(props){
        const { size, input, label, meta: { touched, error} } = props;

        return (
            <div className={`input-field col ${size}`}>
                <input {...input} type="text" autoComplete="off" />
                <label>{label}</label>
                <p className="red-text">{ touched && error }</p>
            </div>
        )
    }
    
    handleAddItem(values){
        console.log('Form values:', values);
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
                <h1 className="center">Add Item</h1>
                <NavButton to="/" text="Back to List" color="purple" />
                <form onSubmit={handleSubmit(this.handleAddItem)}> 
                    <div className="row">
                        <Field size="s12" name="title" label="Title" component={this.renderInput} />
                    </div>
                    <div className="row">
                        <Field size="s12" name="details" label="Details" component={this.renderInput} />   
                    </div>
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn blue">Add Item</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function checkMyForm(formValues){
    const error = {};

    if(!formValues.title){
        error.title = 'Please enter a title for your to-do item.';
    }

    if(formValues.title && formValues.title.length > 10){
        error.title = 'Title is too long.';
    }

    if(!formValues.details){
        error.details = 'Please give your to-do item some details.';
    }

    return error;
}

AddItem = reduxForm({
    form: 'add-item',
    validate: checkMyForm
})(AddItem);

export default connect()(AddItem);