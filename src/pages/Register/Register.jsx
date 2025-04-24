import styles from "./Register.module.css";

import registerLeft from "../../assets/register-left.png";
import registerRight from "../../assets/register-right.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { icons } from "../../data/icons";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const {
    createUser,
    error: authError,
    loading,
    success,
  } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);

    console.log(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    } else if (success) {
      setError("");
    }
  }, [authError, success]);

  return (
    <section className={styles.register}>
      <img
        src={registerLeft}
        className={`${styles.register_default_image} ${styles.register_left}`}
        alt="alimentos"
      />
      <img
        src={registerRight}
        className={`${styles.register_default_image} ${styles.register_right}`}
        alt="alimentos"
      />

      <div className={styles.register_container}>
        <div className={styles.register_header}>
          <h1 className={styles.register_title}>Create an account</h1>
          <p className={styles.register_description}>
            Create an account to discover new recipes, publish your recipes and
            enjoy the flavor nest
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.register_form}>
          <label className={styles.register_default_label}>
            <span className={styles.register_default_label_span}>Nome:</span>
            <div className={styles.input_container}>
              <FontAwesomeIcon
                icon={icons.faCircleUser}
                className={styles.input_icon}
              />
              <input
                className={styles.register_default_input}
                type="text"
                name="displayName"
                placeholder="Your name"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
          </label>
          <label className={styles.register_default_label}>
            <span className={styles.register_default_label_span}>Email:</span>
            <div className={styles.input_container}>
              <FontAwesomeIcon
                icon={icons.faEnvelope}
                className={styles.input_icon}
              />
              <input
                className={styles.register_default_input}
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </label>
          <label className={styles.register_default_label}>
            <span className={styles.register_default_label_span}>
              Password:
            </span>
            <div className={styles.input_container}>
              <FontAwesomeIcon
                icon={icons.faLock}
                className={styles.input_icon}
              />
              <input
                className={styles.register_default_input}
                type="password"
                name="password "
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </label>
          <label className={styles.register_default_label}>
            <span className={styles.register_default_label_span}>
              Confirm password:
            </span>
            <div className={styles.input_container}>
              <FontAwesomeIcon
                icon={icons.faLockOpen}
                className={styles.input_icon}
              />
              <input
                className={styles.register_default_input}
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </label>
          {!loading && (
            <button className={styles.register_button}>
              Register
              <FontAwesomeIcon
                icon={icons.faArrowRight}
                className={styles.arrow_icon}
              />
            </button>
          )}
          {loading && (
            <button className={styles.register_button} disable>
              Aguarde
              <FontAwesomeIcon
                icon={icons.faArrowRight}
                className={styles.arrow_icon}
              />
            </button>
          )}
          {success && <p className="alert success"> {success} </p>}
          {error && <p className="alert error"> {error} </p>}
        </form>
      </div>
    </section>
  );
};

export default Register;
