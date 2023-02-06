import Form from './Form';
const FormHeader = () => {
    return ( 
        
        <div className='form' >
            
    <div className='get'>
        <p className='fricaa-coin'>
        Join thousands of users on Fricaa!
        </p>
        <p className='entering'>
        Start be entering your name and email to be added to waiting list.
      </p>
     
        </div>
        <>
      <Form/>
      </>
        <div id='coins'>
        <img 
                src={require('./Img/coins.png')}
                alt='coins'
                  />
                  </div>
                  
      </div>
     );
}
 
export default FormHeader;