import { makeStyles,createMuiTheme, ThemeProvider, Button } from '@material-ui/core';
import React,{useState} from 'react';
import SideMenu from '../Components/SideMenu';
import Header from '../Components/Header';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import MenuIcon from '@material-ui/icons/Menu';

//pages
import PageOne from '../Components/pages/Page_1'

const styles = makeStyles((theme) => ({
  container: {
    maxWidth: '1300px',
    margin: 'auto',
    
    width:"100%",
    marginTop: theme.spacing(2),
    transition:"0.3s"
  }
}));

const useStyles = makeStyles({
  appMain: {
   
    width: '100%'
  }
});


const myTheme=createMuiTheme({
  palette:{
    primary: {
        main:"#2280ff"
    },
    background:{
      paper:"#fff",
      default:"#ccc",
    }
  },
  overrides:{
    MuiAppBar:{
      root:{
        boxShadow:"0px 8px 10px rgba(0,0,0,0.80)",
        zIndex:"10000000000000000000",
        transform: 'translateZ(54545666666666666666666)',
        
      }
    },
    MuiIconButton:{
      root:{
        color:"#fff"
      }
    }, 
    MuiPaper:{
     root:{
      backgroundColor:"#1976d220"
     }
    },
    MuiButton:{
      root:{
        backgroundColor:"#ff2055"
      }
    },
    MuiTypography:{
      root:{
        color:"white"
      }
    }
  },
  props:{
    MuiIconButton:{
      
    }
  }
 
})

function App() {
  let [sideBar,SetSidebar]=useState({left:"0px"})
  let [header,setHeader]=useState({ paddingLeft: '400px'})
  let [pageOne,setPageOne]=useState({marginLeft:"450px"})
  let [icon,setIcon]=useState(<NavigateBeforeIcon style={{ color: 'white' }} />)
  let [open,SetOpen]=useState(true)
  const classes = useStyles();

  function closeSidebar(){
    if(open===true){
      SetSidebar({left:"-400px"})
       setHeader({paddingLeft: '0px'})
       setIcon(<MenuIcon style={{ color: 'white' }} />)
      

       setPageOne({})
       SetOpen(false)
    }else{
      SetSidebar({left:"0px"})
      setHeader({paddingLeft: '400px'})
      setPageOne({marginLeft:"450px"})
      setIcon(<NavigateBeforeIcon style={{ color: 'white' }} />)

      SetOpen(true)
    }
    
  }
  return (
    <ThemeProvider  theme={myTheme}>
      <SideMenu left={sideBar} />
      <div style={header}  className={classes.appMain}>
    <Header closeSidebar={closeSidebar} menuIcon={icon}/>
      </div>
      <PageOne marginStyle={pageOne} styles={styles}/>
      
    </ThemeProvider>
  );
}

export default App;
