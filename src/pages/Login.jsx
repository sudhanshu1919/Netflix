import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-confige";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formVaue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    // it is a just testing data in console
    console.log(formVaue);
    try {
      const { email, password } = formVaue;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <>
      <Container>
        <BackgroundImage />
        <div className="contaent">
          <Header />
          <div className="form-container flex column a-center j-center">
            <div className="form flex column a-center j-center">
              <div className="title">
                <h3 style={{ textAlign: "center", padding: "1rem" }}>Login</h3>
                <div className="container flex column">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    value={formVaue.email}
                    onChange={(e) =>
                      setFormValue({
                        ...formVaue,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />

                  <input
                    type="password"
                    placeholder="Password "
                    name="password"
                    value={formVaue.password}
                    onChange={(e) =>
                      setFormValue({
                        ...formVaue,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />

                  <button onClick={handleLogin}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  .contaent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }

  .form-container {
    gap: 2rem;
    height: 85vh;

    .form {
      padding: 2rem;
      background-color: #000000b0;
      width: 25vw;
      gap: 2rem;
      color: white;

      .container {
        gap: 2rem;

        input {
          padding: 0.5rem 1rem;
          width: 15rem;
        }

        button {
          width: 15rem;
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          border-radius: 0.2rem;
          font-weight: bold;
          font-size: 1.05rem;
        }
      }
    }
  }
`;

export default Login;
