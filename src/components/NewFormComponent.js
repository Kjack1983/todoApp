import React, { useState, useEffect, useContext} from 'react';
import { FormContext } from './FormContext';
import Todos from './TodosComponent';

const NewFormComponent = () => {
    const context = useContext(FormContext);

    let { 
        myName, 
        useFormValue, 
        useWindowWidth, 
        useChangeDocTitle 
    } = context;

    const name = useFormValue('Jeus');
    const surname = useFormValue('Diaz');
    const width = useWindowWidth();

    useChangeDocTitle(`${name.value} ${surname.value}`);

    let styling = {
        marginTop: '20px',
        fontSize: '16px',
        fontWeight: 'Bold'
    }
    
    return (
        <div className="form-group">
            <div style={styling}>
                <label>Name: </label>
                <input name='name' value={ name.value } onChange={ name.onChange }></input>
            </div>

            <div>
                Name: {name.value}
            </div>

            <div style={styling}>
                <label>Surname: </label>
                <input surname='surname' value={ surname.value } onChange={ surname.onChange }></input>
            </div>

            <div>
                Surname: {surname.value}
            </div>

            <div style={styling}>
                <div>
                    Width: {width}
                </div>
            </div>
            <div>
                myName: {myName}
            </div>
            <h1 style={styling}>
                Add Todos
            </h1>
            <Todos />
        </div>
    )
}

export default NewFormComponent;


/**
 * Old way with component...
 */

/* export default class NewFormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Marry',
            surname: 'Beale',
            width: window.innerWidth
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        document.title = `${this.state.name} ${this.state.surname}`;
        window.addEventListener('resize', this.handleResize);

    }

    componentDidUpdate() {
        document.title = `${this.state.name} ${this.state.surname}`;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleResize() {
        this.setState({
            width: window.innerWidth 
        })
    }

    handleSurnameChange(e) {
        this.setState({
            surname: e.target.value
        });
    }

    render() {
        
        let styling = {
            marginTop: '20px',
            fontSize: '16px',
            fontWeight: 'Bold'
        }
        
        return (
            <div className="form-group">
                <div style={styling}>
                    <label>Name: </label>
                    <input name='name' value={this.state.name} onChange={this.handleNameChange}></input>
                </div>

                <div>
                    {this.state.name}
                </div>

                <div style={styling}>
                    <label>Surname: </label>
                    <input surname='surname' value={this.state.surname} onChange={this.handleSurnameChange}></input>
                </div>

                <div>
                    <div>
                        {this.state.surname}
                    </div>
                </div>

                <div style={styling}>
                    <div>
                        {this.state.width}
                    </div>
                </div>
            </div>
        )
    }

} */