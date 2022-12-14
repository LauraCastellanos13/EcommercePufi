import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xbjbgjdv");
  if (state.succeeded) {
    return <p className='mail-thanks'>Thanks for joining!</p>;
  }
  return (
    <div className='form-newsletter'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
        </label>
        <div className='mail-input'>
          <input className='mail-box'
            placeholder="Ingresa tu email"
            id="email"
            type="email"
            name="email"
            button="&gt;"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="button-newsletter">
            &gt;
          </button>
          </div>
      </form>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
