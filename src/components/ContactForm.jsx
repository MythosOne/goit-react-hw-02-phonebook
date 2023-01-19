import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        // this.props.onSubmit(this.state);
        this.props.onAddContact({ ...this.state });
        
        this.setState({ name: "", number: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder="Enter name"
                        required
                    />
                </label>
                <label>
                    Number
                    <input
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        placeholder="Enter phone number"
                        required
                    />
                </label>
                <button type='submit'>Add Contact</button>
            </form>
        );
    };
};

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
}

export default ContactForm