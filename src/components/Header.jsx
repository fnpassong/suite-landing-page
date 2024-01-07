import logo from '../assets/logo.svg';
import { Boton } from './common/Boton';


import './header.scss';

export const Header = () => {
  return (
    <header className="header">
        
          <img src= {logo} alt="" />
          <Boton/>
        
    </header>
  )
}
