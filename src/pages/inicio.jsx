import "../css/style.css"
import Menu from "./menu"
import UncontrolledExample from "../interpolacao/Slide"
import Produtos from "../interpolacao/produtos-inicio"
import Footer from "../interpolacao/footer"
import logo from "../assets/logo.svg"


function Inicio(){

    return(
        <div className="menu1">
            <img src={logo}/>
            <header className="header">
                
                <Menu/>
            </header>
            <UncontrolledExample/>
            <Footer/>
        </div>
    )

}

export default Inicio;