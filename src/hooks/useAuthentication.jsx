import { db } from "../firebase/config";

import {
  // Retorna a instância do serviço de autenticação do Firebase.
  getAuth,
  // Cria um novo usuário com email e senha.
  createUserWithEmailAndPassword,
  // Faz login de um novo usuário com email e senha.
  signInWithEmailAndPassword,
  // Atualizar perfil do usuário.
  updateProfile,
  // Fazer logout
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  // Interrompe a execução do componente quando ele for desmontado.
  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });

      setError(null);
      setSuccess("Cadastro realizado com sucesso!");
      setLoading(false);

      return user;
    } catch (error) {
      setSuccess(null);
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else if (error.message.includes("invalid-email")) {
        systemErrorMessage = "Digite um E-mail existente.";
      } else {
        systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde.";
      }

      setLoading(false);

      setError(systemErrorMessage);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { auth, createUser, error, loading, success };
};
