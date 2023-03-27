import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Tooltip } from "@mui/material";
import { SiGmail } from "react-icons/si";
import { HiOutlineLightBulb } from "react-icons/hi";
import whoami from "../assets/whoami.png";
import { FiTerminal } from "react-icons/fi";
import { MdComputer } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import Launch from "../views/Launch";
import Work from "../views/Work";
import About from "../views/About";
import Projects from "../views/Gigs";
import Contact from "../views/Contact";
import React from "react";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: theme.palette.background.default,
    zIndex: "999",
    // backgroundColor: "rgba(59, 130, 246.5, 0.5)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "20px",
    margin: "10px",
    minWidth:0,
    padding:"10px",
  },
  icon:{
     fontSize:'40px',
     marginTop: "-10px",
     padding:"0px",
  },
  imageIcon:{
    marginTop:"-10px",
    width:'55px',
    height:"55px",
    padding:"0px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "999",
    maxHeight: "90%",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: "#fff",
  },
  paper: {
    backgroundColor: "#000",
    boxShadow: theme.shadows[5],
    overflow: "auto",
    outline: "none",
  },
}));

const SimpleDialog = ({ open, onClose, children }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" className={classes.modal}>
<IconButton
  aria-label="close"
  onClick={onClose}
  sx={{
    position: 'absolute',
    right: 8,
    top: 8,
    color: (theme) => theme.palette.grey[500],
    bgcolor: 'transparent',
    '&:hover': {
      bgcolor: (theme) => theme.palette.grey[100],
    },
  }}
>
  <CloseIcon />
</IconButton>
      <div className={classes.paper}>{children}</div>
    </Dialog>
  );
};

const Dock = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderTab = () => {
    switch (value) {
      case 0:
        return <Launch />;
      case 1:
        return <About />;
      case 2:
        return <Work />;
      case 3:
        return <Projects />;
      case 4:
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <>
    <div>
    <SimpleDialog open={open} onClose={handleClose}>
      {renderTab()}
      </SimpleDialog>
      </div>
      <div style={useStyles.root}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setOpen(true);
          setValue(newValue);
        }}
        showLabels={false}
        className={classes.root}
        showSelectedLabels={false}
      >
        <Tooltip title="launch">
          <BottomNavigationAction
            icon={<FiTerminal className={classes.icon} />} disableTouchRipple
            value={0}
          />
        </Tooltip>
        <Tooltip title="whoami">
          <BottomNavigationAction
            icon={<img src={whoami} className={classes.imageIcon} alt="whoami" />} disableTouchRipple
            value={1}
          />
        </Tooltip>
        <Tooltip title="whatido">
          <BottomNavigationAction
            icon={<MdComputer className={classes.icon} />} disableTouchRipple
            value={2}
          />
        </Tooltip>
        <Tooltip title="sidegigs">
          <BottomNavigationAction
            icon={<HiOutlineLightBulb className={classes.icon} />} disableTouchRipple
            value={3}
          />
        </Tooltip>
        <Tooltip title="contactme">
          <BottomNavigationAction
            icon={<SiGmail className={classes.icon} />} disableTouchRipple
            value={4}
          />
        </Tooltip>
      </BottomNavigation>
      </div>
    </>
  );
};

export default Dock;