import iconFB from './assets/icons8-facebook-50.png';
import iconInsta from './assets/icons8-instagram-50.png';
import iconLink from './assets/icons8-link-50.png';
import iconWA from './assets/icons8-whatsapp-50.png';
function Footer () {
    return (
    <div className='footer'>
        <div className='iconsF'>
            <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><img src={iconFB} className='iconF' alt='iconFB'/></a>
            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><img src={iconInsta} className='iconF' alt='iconInsta'/></a>
            <a href='https://www.whatsapp.com/' target='_blank' rel="noreferrer"><img src={iconWA} className='iconF' alt='iconWA'/></a>
            <img src={iconLink} className='iconF' alt='iconLink'/>
        </div>
        <div>
            <h1 className="footerText">Take a step and your dreams will come true!</h1>
        </div>
        <h6>Copyright 2024 US</h6>
    </div>
    )
}
export default Footer;