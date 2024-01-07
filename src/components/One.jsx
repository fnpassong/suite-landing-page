import { Numbers } from "./Numbers";
import { Boton } from "./common/Boton"

import './one.scss';


export const One = () => {
  return (
    <section className="one">
        <div className="one__wrapper">
            <div className="one__text">
                <h1 className="one__title">
                    <div className="one__ceja"></div>
                    A <span>super solution </span>
                    for your <span>business.</span>
                </h1>
                <p className="one__paragraph">
                    Our marketing and sales automations help you scale your outreach to get more leads for your company.
                </p>
                <Boton/>
            </div>
            <div className="one__img"></div>    
        </div>
        <Numbers/>
    </section>
  )
}
