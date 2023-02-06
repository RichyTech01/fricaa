const Header = () => {

    return ( 
        <header className='header'>
          <nav className='nav-btn'>
          <img src={require('./Img/Union.png')} className='logo' />
          <button className='contact'>Contact Us</button>
          </nav>
        </header>
     );
}
 
export default Header;