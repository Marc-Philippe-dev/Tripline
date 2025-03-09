import React, { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

const SignUp = () => {

  return (
    <div className="h-screen bg-cyan-50 overflow-hidden relative">
      <div className="" />
      <div className="login-ui-box bg-cyan-200 -bottom-40 right-1/2" />

      <div className="container h-screen flex items-center justify-center px-20 mx-auto">
        <div className="w-2/4 h-[90vh] flex items-end bg-signup-bg-img bg-cover bg-center rounded-lg p-10 z-50"></div>

        <div className="w-2/4 h-[75vh] bg-white rounded-r-lg relative p-16 shadow-lg shadow-cyan-200/20">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl font-semibold mb-7 text-center">
              CREER UN COMPTE
            </h4>

            <input
              type="text"
              placeholder="Nom complet"
              className="input-box"
         
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box"
         
            />

            <PasswordInput
           
            />


            <button type="submit" className="btn-primary">
              CREER UN COMPTE
            </button>

            <p className="text-xs text-slate-500 text-center my-4">Ou</p>

            <button
              type="submit"
              className="btn-primary btn-light"
              onClick={() => {
                navigate("/login");
              }}
            >
              SE CONNECTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
