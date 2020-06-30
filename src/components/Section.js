import React, { useState } from "react";

const Section = (props) => {
  const [username, setUsername] = useState(props.infos.username);
  const [email, setEmail] = useState(props.infos.email);
  const [password, setPassword] = useState(props.infos.password);
  const [confirmpassword, setconfirmpassword] = useState(
    props.infos.confirmpassword
  );
  // const [errormessage, setErrorMessage] = useState("");

  return (
    <>
      <div className="container">
        {/* <p style={{ color: "red" }}>{errormessage}</p> */}
        <form
          onSubmit={(event) => {
            event.preventDefault();

            if (password !== confirmpassword) {
              alert("Le Mot de passe est different");
            } else if (
              username === "" ||
              email === "" ||
              password === "" ||
              confirmpassword === ""
            ) {
              alert("veuillez remplir les champs vides");
            } else {
              const infos = {
                username: username,
                email: email,
                password: password,
                confirmpassword: confirmpassword,
              };
              props.onSuccess(infos);
            }
          }}
        >
          <span className="textform">NAME</span>
          <input
            className="saisieform "
            type="input"
            value={username}
            onChange={(event) => {
              // console.log(event.target.value);
              setUsername(event.target.value);
            }}
          />
          <span className="textform">Email</span>
          <input
            className="saisieform "
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <span className="textform">Password</span>
          <input
            className="saisieform "
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <span className="textform">Confirm Password</span>
          <input
            className="saisieform "
            type="password"
            value={confirmpassword}
            onChange={(event) => {
              setconfirmpassword(event.target.value);
            }}
          />
          <button className="submit " type="submit">
            Valider
          </button>
          {/* ou
          <input type="submit" value = "Valider"
/>         */}
        </form>
      </div>
    </>
  );
};

export default Section;
