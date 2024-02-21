import React from 'react'
import "./scrollup.css";

const ScrollUp = () => {
    window.addEventListener("scroll", function(){
        const scrollUp = this.document.querySelector(".scrollup");
        // Cuando el scroll es ta mas alto que 560 agrega la class show-scroll 
        if (this.scrollY >= 560) scrollUp.classList.add
        ("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp