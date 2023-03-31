import React from "react";
// import Resume from "./Resume";
import resume from "../assets/resume.pdf";
import { contactLinks } from "../constants";
import home from "../assets/home.png";
import whoami from "../assets/whoami.png";
// import { Dialog, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import Button from '@mui/material/Button';
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     backgroundColor: "transparent",
//     color: "transparent",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: "999",
//     maxHeight: "90%",
//   },
//   paper: {
//     backgroundColor: "#000",
//     boxShadow: theme.shadows[5],
//     overflow: "auto",
//     outline: "none",
//   },
// }));

// const SimpleDialog = ({ open, onClose, id, children }) => {
//   const classes = useStyles();

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="lg" className={classes.modal}>
//       <IconButton
//         aria-label="close"
//         onClick={onClose}
//         sx={{
//           position: 'absolute',
//           right: 8,
//           top: 8,
//           color: (theme) => theme.palette.grey[500],
//           bgcolor: 'transparent',
//           '&:hover': {
//             bgcolor: (theme) => theme.palette.grey[100],
//           },
//         }}
//       >
//         <CloseIcon />
//       </IconButton>
//       <div className={classes.paper}><Resume /></div>
//     </Dialog>
//   );
// };

const Home = () => {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = (value) => {
  //   setOpen(false);
  // };

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontFamily: "font-light, font-inter, sans-serif",
    color: 'white',
    fontSize: '1rem',
    textAlign: 'center',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    zIndex: -1,
    backgroundImage: `url(${home})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'blur(3px)',
  }
};
  return (
    <>
      <div style={styles.backgroundImage} />
        <div style={styles.container} id="/" >
        <div style={styles.overlay} />
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
          style={styles.text}
        >
          <div class="relative w-[30px] h-[30px] md:w-[60px] md:h-[60px]">
              <img src={whoami} height="120px" alt="whoami" />
              <h2 class="text-2xl md:text-4xl lg:text-6xl text-center font-light font-inter text-gray">
                Hello World, I'm
              </h2>
              <h1 class="text-5xl md:text-7xl lg:text-7xl font-extrabold text-white font-inter mt-7 text-center">Yash Kothari</h1>
          </div>
          <p class="text-xl md:text-3xl lg:text-5xl text-gray font-inter mt-12 text-center">A <span class="text-green font-semibold">software engineer </span>based in <span class="font-semibold">USA </span></p>
          <div className="flex justify-center md:justify-start ">
            {
              contactLinks.map((el) => (
              <a
                href={el.link}
                className="mr-5 cursor-pointer mt-8 hover:scale-125"
              >
                <img alt="" src={el.url} />
              </a>
            ))}<a
                href={resume}
                className="mr-5 cursor-pointer mt-8 hover:scale-125"
                download
              >
                <img alt="" src="https://img.icons8.com/bubbles/50/null/resume.png" />
              </a>
          </div>
          {/* Resume dialog */}
          {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
              <Button variant="outlined" onClick={handleClickOpen}>
                Resume
              </Button>
              <SimpleDialog
                open={open}
                onClose={handleClose}
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
