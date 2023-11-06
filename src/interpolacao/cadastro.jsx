import "../css/style.css"
import "../pages/cadastro"

function Cadastro() {


return (
  <div className="section-login">
    <div class = "box">
      <div class ="inbox">
        <h2 className="ttlogin">Cadastre produto</h2>
        <form>
          <input type="name" id="name" name="name" placeholder="Nome"></input>
          <input type="name" id="desc" name="desc" placeholder="Descrição"></input> 
          <input type="name" id="forn" name="forn" placeholder="Fornecedor"></input>
          <input type="date" id="date" name="date" placeholder="Data fabricação"></input>
          <input type="number" id="estoque" name="estoque" placeholder="Quantidade estoque"></input>
          <button tittle="solid" type="submit" class="btn-login" >Enviar</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Cadastro;