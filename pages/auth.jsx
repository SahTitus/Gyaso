import {
  ArrowBack,
  EmailOutlined,
  Person2Outlined,
  Visibility,
  VisibilityOff,
  VpnKeyOutlined,
} from "@mui/icons-material";
import Go from "../assest/Go.png";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/Auth.module.css";
import Image from "next/image";
import { auth } from "../utils/firebase";
import { signInWithPopup, GoogleAuthProvider } from "@firebase/auth";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [userSwitch, setUserSwitch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const router = useRouter();

  const disableBtn = false;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);

    const result = user.user;

    try {
      const loginData = {
        // email: result.email,
        // photoURL: result.photoURL,
        // displayName: result.displayName,
      };
      // dispatch(logWithGoogle(loginData, navigate));
      setLoading(true);
    } catch (error) {
      return error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!user) {
    //   dispatch(signup({ ...formData, image }, navigate));
    // } else {
    //   dispatch(signin(formData, navigate));
    // }

    setFormData({ ...formData, initialState: "" });
  };

  return (
    <div className={styles.auth}>
      <div className={styles.top}>
        <IconButton onClick={() => router.back()}>
          <ArrowBack />
        </IconButton>
      </div>
      <div className={styles.form__container}>
        {userSwitch && (
          <>
            <h2>Welcome back!</h2>
            <p>You`ve been missed!</p>
          </>
        )}

        {<h2>{!userSwitch ? "Sign up" : "Sign in"}</h2>}
        {!userSwitch && <p>We are happy to see you here!</p>}

        <form className={styles.form}>
          <Box
            id={styles.auth_inputBox}
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Person2Outlined sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              onChange={handleChange}
              id="demo-name"
              required
              label="Name"
              variant="standard"
              className={styles.auth_input}
              name="name"
              value={formData.name}
            />
          </Box>
          <Box
            id={styles.auth_inputBox}
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <EmailOutlined sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              onChange={handleChange}
              id={styles.auth_input}
              required
              label="Email"
              name="email"
              variant="standard"
              value={formData.email}
              className={styles.auth_input}
            />
          </Box>
          {!userSwitch && (
            <Box
              id={styles.auth_inputBox}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <VpnKeyOutlined sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                onChange={handleChange}
                id={styles.auth_input}
                required
                label="Password"
                name="password"
                variant="standard"
                value={formData.password}
                className={styles.auth_input}
              />

              <IconButton
                className={`${styles.showPassword} ${
                  // passError && styles.errEye''
                  ""
                }`}
                onClick={toggleShowPassword}
              >
                {!showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </Box>
          )}
        </form>
        {/* {!userSwitch && (
          <p className={styles.terms}>
            By signing up your`re agree to our <span>Terms & Conditions</span>{" "}
            and <span>Privacy Policy</span>
          </p>
        )} */}
        {
          <Button
            className={`${styles.signIn__button} ${
              disableBtn && styles.signIn__buttonDisable
            }`}
            onClick={handleSubmit}
            disabled={disableBtn}
          >
            {userSwitch ? "Sign In" : "Sign Up"}
          </Button>
        }

<div className={styles.divider}>
              <hr />
              <p>or</p>
              <hr />
            </div>
            <Button
              className={styles.signInWithGoogle__button}
              onClick={signInWithGoogle}
            >
              <Image height={20} width={20} className={styles.googleLogo} src={Go} alt="" />
              <p>Continue with Google</p>
            </Button>


        {
          <p className={styles.login__newUserSwitch}>
            {!userSwitch ? "Joined us before?" : "New here?"}
            <span onClick={() => setUserSwitch((prevState) => !prevState)}>
              {!userSwitch ? "Sign In" : "Sign Up"}
            </span>
          </p>
        }
      </div>
    </div>
  );
};

export default Auth;
