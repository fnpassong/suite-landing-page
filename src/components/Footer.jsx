import logo from '../assets/logo.svg';
import fb from '../assets/icon-facebook.svg';
import twitter from '../assets/icon-twitter.svg';
import instagram from '../assets/icon-instagram.svg';
import './footer.scss';


export const Footer = () => {
  return (
    <section className="footer">
       <div className="footer__wrapper">
            <img src= {logo} alt="" />
            <p className="footer__paragraph">
                Copyright - Suite
            </p>
            <div className="footer__social">
                <img src= {fb} alt="" />
                <img src= {twitter} alt="" />
                <img src= {instagram} alt="" />
            </div>
       </div>
    </section>
  )
}
