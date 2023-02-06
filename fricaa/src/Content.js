import FormHeader from './FormHeader';
const Content = () => {
    return ( 
        <main className='all-cont'>
            <div className='content-why'>
            <div className='coinbg'>
                <img 
                src={require('./Img/coinbg.png')}
                id='coin-2'
                alt='coin-2'
                  />

            </div> 
            <div className='coin1'>
            <img 
                src={require('./Img/coinbg.png')}
                id='coin-1'
                alt='coin-2'
                  />
                  </div>
        <div className='content'>
            <h2>
            Earn Fricaa coins by joining our <span className='waiting'>waiting list</span>
            </h2>
           
          
        </div>
        <div className='why-container'>
        <p className='why'>Why not 
join our other members on our 
waiting list and earn fricaa 
coins as you wait</p>
        </div>
        </div>
        
        <FormHeader/>
        

        </main>
        
     );
}
 
export default Content;