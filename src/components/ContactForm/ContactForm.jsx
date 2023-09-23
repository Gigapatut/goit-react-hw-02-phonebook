import React from 'react';
import css from './ContactForm.module.css'

class ContactForm extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
  
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  
  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.form} htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="[A-Za-z\s]{1,15}"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.form} htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;