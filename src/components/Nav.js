import React, { useEffect } from 'react'
import "./Nav.css";


function Nav() {
    const [show, setshow] = React.useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setshow(window.scrollY > 100);
      });
    
    //   return () => {
    //     window.removeEventListener("scroll");
    //   };
    }, []);
    

  return( 
  <div className={`nav-container ${show && "nav-container-gray"}`}>
    <div className="nav-logo" alt="Zetfrix"><h2 className="nav-name">ZETFRIX</h2></div>
    <img className="nav-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFLYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU" alt="zetfrix"></img>
  </div>
  )
}

export default Nav