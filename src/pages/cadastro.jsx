import Menu from "./menu"
import Log from "../interpolacao/cadastro"
import Footer from "../interpolacao/footer"
import "../css/style.css"

function Cadastro(){

    const logo = "https://cdn.discordapp.com/attachments/810935222819618857/1113074530685038653/Group_1_3.png"

    return(
        <div>
            <header className="header">
                <Menu/>
            </header>
            <Log/>
        </div>
        
    )

}

export default Cadastro;