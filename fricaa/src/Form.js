import { useState } from 'react';
const Form = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    tel: ''
  });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputs);
  };

  const isDisabled = !inputs.firstName || !inputs.lastName || !inputs.tel;

    return ( 
      <main>
        <div className='formdiv'>
            <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" className='first'>First name</label>
            <input 
            type="text"
            name='firstName'
            id='first-name'
            value={inputs.firstName}
            onChange={handleChange}
              />
              <label htmlFor="Last name" className='last'>Last name</label>
              <input
                type="text" 
                name="lastName" 
                id="last-name"
              value={inputs.lastName}
              onChange={handleChange}
               />
               <label htmlFor="phone number" className='phone-number'>Phone number</label>
                <input
                name='tel'
                id="phone"
                value={inputs.tel}
                onChange={handleChange}
                 />
                 <button type='submit' id='submit' disabled={isDisabled}>Join Waiting List</button>
                 
            
            </form>
            </div>
        </main>
     );
}
 
export default Form;