import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'react-router-dom/Link';
import ReceiptIcon from '@material-ui/icons/Receipt';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from "@material-ui/icons/Home";
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavDropdown } from "react-bootstrap";
import logo from '../assets/image/logo.png';
import {Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    // marginTop:-21
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logoutBtn : {
    marginLeft:3000,
  }
}));

function AdminNavigation(props) {
  const { window } = props;
  // const {admin_id} = useParams();
  const admin_id = sessionStorage.getItem('admin_id');
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history= useHistory();
  
//  const Logout = () =>{
//    props.history.push('/AdminLogin');
//  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}/>
      <img src={logo} alt="" style={{height:50,width:50,marginTop:-80,marginLeft:20}}/>
      <Typography style={{marginLeft:70,marginTop:-45,fontFamily:"Carter One",color:"#41649c"}}>
          Digital Immunity
      </Typography>
      
      <Divider />
      <List>
      <Link to="/AdminDashboard" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText  primary={"Dashboard"} />
              </ListItem>
            </Link>
            
            <Link  to= {{pathname : `/AdminProfile/${parseInt(admin_id)}` }} className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AssignmentIndIcon />
                </ListItemIcon>
                <ListItemText primary={"Admin Profile"} />
              </ListItem>
            </Link>
        <ListItemIcon style={{marginLeft:15,marginTop:5}}>
        <ReceiptIcon/>
        <NavDropdown style={{marginLeft:15 }}  title="Registration" id="basic-nav-dropdown">
        <NavDropdown.Item href="/VCRegistration"  >Vaccination Center</NavDropdown.Item>
        <NavDropdown.Item href="/VFCRegistration" >Verification Center</NavDropdown.Item>
      </NavDropdown>
      </ListItemIcon>
      </List>
      <Divider />
   
      <List>
      
        
      <ListItemIcon style={{marginLeft:15,marginTop:5}}>
      <AssignmentIcon  />
      <NavDropdown style={{marginLeft:15}}  title="Records" id="basic-nav-dropdown">
        <NavDropdown.Item href="/VCRecordAD">Vaccination Center Record</NavDropdown.Item>
        <NavDropdown.Item href="/VFCRecordAD" >Verification Center Record</NavDropdown.Item>
        <NavDropdown.Item href="VerifierRecordAD" >Verifier Record</NavDropdown.Item>
        <NavDropdown.Item href="DoctorRecordAD" >Doctor Record</NavDropdown.Item>
        <NavDropdown.Item href="PatientRecordAD" >Patient Record</NavDropdown.Item>
        <NavDropdown.Item href="VaccineRecordAD" >Vaccine Record</NavDropdown.Item>
        <NavDropdown.Item href="VaccinationRecordAD" >Vaccination Record</NavDropdown.Item>
        <NavDropdown.Item href="VerificationRecordAD" >Verification Record</NavDropdown.Item>
       
      </NavDropdown>
      </ListItemIcon>
      
      </List>
      <Button variant="primary" style={{marginTop:280, marginLeft:20}} onClick={() => history.push('/AdminLogin')}> Logout</Button>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography  noWrap style={{fontFamily:"Carter One", fontSize:40}}>
            Admin Panel
          </Typography>
         
        </Toolbar>
        
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

      </main>
     
      
    
    </div>
   
  );
}

AdminNavigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminNavigation;
