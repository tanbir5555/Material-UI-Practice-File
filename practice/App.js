import React, { useState,useEffect } from 'react';
import AppBarC from './components/AppBar';
import Page from './components/Page';
import SideBar from './components/SideBar';
import Services from './components/page/Services';
import Contacts from './components/page/Contacts';
import About from './components/page/About';
import Theme from './components/page/Theme';
import Error404 from './components/page/Error404';
import {createMuiTheme,ThemeProvider } from '@material-ui/core'


const mytheme=createMuiTheme({
  palette:{
      primary: {
        main:"#00cc20"
      }
  }
})
function App() {
  let [sideBarOpen, setSidebar] = useState({ left: '-300px' });
  let [open, setOpen] = useState(false);
  let [page, setPage] = useState(<Page />);
  let [search,setSearch]=useState('')
  // let open=false


  let [valueOFColor, setValue] =useState(60);
 

  let handleChange =(event,changeVal)=>{
    console.log(changeVal);
    setValue(changeVal);
  };


  function openSidebar() {
    if (open === false) {
      setSidebar({ left: '0px' });
      setOpen(true);
    } else {
      setSidebar({ left: '-300px' });
      setOpen(false);
    }
  }
  
  
  useEffect(() => {
    function SearchWork(){
      if(search==="home" || search==="main" || search==="Home" || search==="Main" || search==="main"){
        setPage(<Page />);
      }else if(search==="service"){
        setPage(<Services />);
      }else if (search === 'contact') {
        setPage(<Contacts />);
      }else if (search === 'about') {
        setPage(<About />);
      }else if (search === 'theme') {
        setPage(<Theme value={valueOFColor} handleChange={handleChange}/>);
      }else{} 
    }
    SearchWork();
  }, [search])

  const changeSearch=(e)=>{
    setSearch(e.target.value)
    
    
  }
  // function ForceSearch(e){
  //   if(e.key==="Enter"){
  //     setPage(<Error404 
  //     massage={`${search} - Was Not found !!!`}
  //     />)
  //   }else{

  //   }
  // }
  function PageSelection(pageName) {
    if (pageName === 'page0') {
      setPage(<Page />);
    } else if (pageName === 'services') {
      setPage(<Services />);
    } else if (pageName === 'contacts') {
      setPage(<Contacts />);
    } else if (pageName === 'about') {
      setPage(<About />);
    } else if (pageName === 'theme') {
      setPage(<Theme value={valueOFColor} handleChange={handleChange}/>);
    }else{}
  }

  return (
    <ThemeProvider theme={mytheme}>
      <AppBarC search={search} changeSearch={changeSearch} sideBarActive={openSidebar} />

      <SideBar  page={PageSelection} open={sideBarOpen} />
      {page}
      <Theme value={valueOFColor} handleChange={handleChange}/>
    </ThemeProvider>
  );
}

export default App;
