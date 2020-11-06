import React, { useReducer } from 'react';
import styles from './form.module.css';

const INITIAL_STATE = {
    name: '',
    email: '',
    subject: '',
    body: ''
};

// { type: "dostuff", name: 'Jason'}
const reducer = (state, action) => {
   switch (action.type) {
       case 'updateFieldValue':
           return {...state, [action.field]:
        action.value };

      default:
          return INITIAL_STATE;  
   }
}


const Form = () => {
   
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

   

    const updateFieldValue = field => event => {
       dispatch({
           type: 'updateFieldValue',
           field,
           value: event.target.value     
       })
    }
    const handleSubmit = event => {
        event.preventDefault();

        // Todo actually send the message
        console.log(state)
    }

  return (
      <form onSubmit={handleSubmit}>
          <label className= {styles.label}>
              Name
              <input className={styles.input}    
              type="text" name="name" value = {state.name} onChange={updateFieldValue('name')} />
          </label>
          <label className={styles.label}> 
          Email
          <input className = {styles.input}
          type = "email" name= "email" onChange={updateFieldValue('email')} /> 
          </label>
          <label className={styles.label}> 
          Subject
          <input className = {styles.input}
          type = "text" name= "subject" onChange={updateFieldValue('subject')} /> 
          </label>
          <label className={styles.label}> 
          Body
          <textarea className = {styles.input} onChange={updateFieldValue('body')}
           name= "subject" />
          </label>
          <button className={styles.button}>
              Send
          </button>
      </form>
  )
}

export default Form;