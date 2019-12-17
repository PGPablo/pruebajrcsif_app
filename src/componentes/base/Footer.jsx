import React from "react";
import '../../estilos/Footer.css'

const Downbar = () => (
        <div>
          <div className="phantom" >
            <div className="estilo">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.google.com"> JRC SIF México </a>
            </div>
          </div>
        </div>
    )



export default Downbar;
