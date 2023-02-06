import { useState } from 'react';
const Form = () => {
  const[firstName, setFirstName] = useState('');
  const [lastName, setLastName] =useState('');
    const [tel, setTel] = useState()

    const handleSubmit = (e)=> {
      
    }
    return ( 
      <main>
        <div className='formdiv'>
            <form onSubmit={handleSubmit}>
            <label htmlFor="firstName" className='first'>First name</label>
            <input 
            type="text"
            name='First-name'
            id='first-name'
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="Last name" className='last'>Last name</label>
              <input type="text" name="Last name" id="last-name"
              required
              value={lastName}
              onChange={(e)=> setLastName(e.target.value)}
               />
               <label htmlFor="phone number" className='phone-number'>Phone number</label>
            
                <input
                id="phone"
                required
                value={tel}
                onChange={e => setTel(e.target.value)}
                 />
                 <button id='submit' onClick={handleSubmit}>Join Waiting List</button>
            
            </form>
            </div>
        </main>
     );
}
 
export default Form;