export default function Login() {
  return (
    <div className="container">
      <h2>Iniciar sesión</h2>
      <form className="login-form">
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
