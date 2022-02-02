import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contactez-moi!</h1>
      <form>
        <label>
          Titre: <input type="text" />
        </label>
        <label>
          Message: <textarea />
        </label>
        <p>
          <button>Envoyer</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
