import React from "react";

const Login = () => {
  return (
    <div className="login">
      <h1>Se connecter</h1>
      <form>
        <label>
          Email: <input type="email" />
        </label>
        <label>
          Password: <input type="password" />
        </label>
        <p>
          <button>GO!</button>
        </p>
      </form>
    </div>
  );
};

export default Login;
