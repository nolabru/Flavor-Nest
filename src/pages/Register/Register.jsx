import styles from "./Register.module.css";

import registerLeft from "../../assets/register-left.png";
import registerRight from "../../assets/register-right.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { icons } from "../../data/icons";

const Register = () => {
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
        <form className={styles.register_form}>
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
              />
            </div>
          </label>
          <button className={styles.register_button}>
            Register
            <FontAwesomeIcon
              icon={icons.faArrowRight}
              className={styles.arrow_icon}
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
