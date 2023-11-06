import "../css/style.css"

function Log() {


return (
  <div className="section-login">
    <div class = "box">
      <div class ="inbox">
        <h2 className="ttlogin">Faça seu Login</h2>
        <form>
          <input type="email" id="email" name="email" placeholder="E-mail"></input>
          <input type="password" id="senha" name="senha" placeholder="Senha"></input>
          <button tittle="solid" type="submit" class="btn-login" >Enviar</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Log;