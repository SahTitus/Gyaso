import * as React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import styles from "../styles/AuthAlert.module.css";
import Reward from "../assets/Reward.png";
import { useRouter } from "next/router";
import { useStateContex } from "../store/StateProvider";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AuthAlert() {
  const router = useRouter();

  const { openSignInAlert, setSignInAlert } = useStateContex();

  const handleClose = () => {
    setSignInAlert(false);
  };

  const signin = () => {
    router.push(`/auth`);
    setSignInAlert(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openSignInAlert}
      >
        <DialogContent>
          <Typography gutterBottom>
            <div className={styles.image__wrapper}>
              <Image
                className={styles.image}
                src={Reward}
                alt=" Icon"
                placeholder="blur"
                height={180}
                width={180}
                blurDataURL={Reward}
              />
            </div>
          </Typography>
          <Typography gutterBottom></Typography>
          <Typography gutterBottom>
            Get all your favorites stories listed here by signing in
          </Typography>
          <Typography gutterBottom>
            Click on the sign in button below to get you started.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button className={styles.button} onClick={handleClose}  type="button">
            No, thanks
          </Button>
          <Button
            onClick={signin}
            className={`${styles.button} ${styles.signBtn}`}
            type="button" 
          >
            Sign in
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
