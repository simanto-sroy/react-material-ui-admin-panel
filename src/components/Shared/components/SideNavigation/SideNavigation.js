import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore, Dashboard, PriceCheck, Pending, CheckBox, Cancel, ClearAll, Group, GroupAdd, SupervisedUserCircle, Block, Settings, Update, Payments } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


  const ListStyle = {
      width: '100%',
      backgroundImage: 'linear-gradient(to right, #141e30, #243b55)',
      height: '100%',
      overflowX: 'hidden',
      maxWidth: '360',
  }

  const ListITextStyle = {
      fontWeight: '600',
      fontSize: '15px',
      fontSpacing: '1px',
      color: 'white',
      textTransform: 'capitalize',
  }

  const ListChildTextStyle = {
      fontWeight: '500',
      fontSize: '14px',
      fontSpacing: '1px',
      color: 'white',
      textTransform: 'capitalize',
  }

  const ListIconStyle = {
      color: 'white',
  }
  
  const CollapseStyle = {
      backgroundColor: '#141E31',
  }

  const SideNavigation = () => {

    const [widrwOpen, setWidrawOpen] = React.useState(false);
    const [userOpen, setUserOpen] = React.useState(false);

    const handleClick = () => {
        setWidrawOpen(!widrwOpen);
    };

    const handleClick2 = () => {
        setUserOpen(!userOpen);
    }

    
  return ( 
        <List
            style={ListStyle}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
      <Link to='/dashboard' style={{textDecoration:'none'}}>
        <ListItemButton>
              <ListItemIcon>
                  <Dashboard style={ListIconStyle}/>
              </ListItemIcon>
            <ListItemText> 
                  <Typography style={ListITextStyle}>dashboard</Typography>
              </ListItemText>
          </ListItemButton>
        </Link>
        <Divider />
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <PriceCheck style={ListIconStyle}/>
          </ListItemIcon>
          <ListItemText> 
              <Typography style={ListITextStyle}>withdraw</Typography>
            </ListItemText>
          {widrwOpen ? <ExpandLess style={ListIconStyle}/> : <ExpandMore style={ListIconStyle}/>}
            </ListItemButton>
        <Divider />
        <Collapse in={widrwOpen} timeout="auto" unmountOnExit style={CollapseStyle}>
          <List component="div" disablePadding>
            <Link to='/dashboard/withdraw/panding-list' style={{textDecoration:'none'}}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Pending style={ListIconStyle}/>
                </ListItemIcon>
                <ListItemText >
                    <Typography style={ListChildTextStyle}>pending</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
           </List>
          <Divider />
          <List component="div" disablePadding>
            <Link to='/dashboard/withdraw/approved-list' style={{textDecoration:'none'}}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SupervisedUserCircle style={ListIconStyle}/>
                </ListItemIcon>
                <ListItemText >
                    <Typography style={ListChildTextStyle}>approved list</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
           </List>
          <Divider />
          <List component="div" disablePadding>
            <Link to='/dashboard/withdraw/reject-list' style={{textDecoration:'none'}}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Cancel style={ListIconStyle}/>
                </ListItemIcon>
                <ListItemText >
                    <Typography style={ListChildTextStyle}>reject list</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
           </List>
          <Divider />
          <List component="div" disablePadding>
            <Link to='/dashboard/withdraw/all-list' style={{textDecoration:'none'}}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ClearAll style={ListIconStyle}/>
                </ListItemIcon>
                <ListItemText >
                    <Typography style={ListChildTextStyle}>all list</Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
           </List>
          <Divider />
          </Collapse>
          <Divider />
        <ListItemButton onClick={handleClick2}>
          <ListItemIcon>
            <Group style={ListIconStyle}/>
          </ListItemIcon>
          <ListItemText > 
              <Typography style={ListITextStyle}>users</Typography>
            </ListItemText>
          {userOpen ? <ExpandLess style={ListIconStyle}/> : <ExpandMore style={ListIconStyle}/>}
        </ListItemButton>
        <Divider />
        <Collapse in={userOpen} timeout="auto" unmountOnExit style={CollapseStyle}>
          <List component="div" disablePadding>
           <Link to='/dashboard/users/all-users' style={{textDecoration:'none'}}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <GroupAdd style={ListIconStyle}/>
              </ListItemIcon>
              <ListItemText >
                  <Typography style={ListChildTextStyle}>all users</Typography>
              </ListItemText>
            </ListItemButton>
            </Link>
          </List>
          <Divider />
          <List component="div" disablePadding>
           <Link to='/dashboard/users/active-users' style={{textDecoration:'none'}}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CheckBox style={ListIconStyle}/>
              </ListItemIcon>
              <ListItemText >
                <Typography style={ListChildTextStyle}>active users</Typography>
              </ListItemText>
            </ListItemButton>
            </Link>
          </List>
          <Divider />
          <List component="div" disablePadding>
           <Link to='/dashboard/users/block-users' style={{textDecoration:'none'}}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Block style={ListIconStyle}/>
              </ListItemIcon>
              <ListItemText >
                <Typography style={ListChildTextStyle}>block users</Typography>
              </ListItemText>
            </ListItemButton>
            </Link>
          </List>
          <Divider />
        </Collapse>
        <Link to='/dashboard/settings' style={{textDecoration:'none'}}>
          <ListItemButton>
              <ListItemIcon>
                  <Settings style={ListIconStyle}/>
              </ListItemIcon>
              <ListItemText > 
                <Typography style={ListITextStyle}>settings</Typography>
              </ListItemText>
          </ListItemButton> 
        </Link>
        <Divider />
        <Link to='/dashboard/app-updated' style={{textDecoration:'none'}}>
          <ListItemButton>
              <ListItemIcon>
                  <Update style={ListIconStyle}/>
              </ListItemIcon>
              <ListItemText > 
                  <Typography style={ListITextStyle}>app updated</Typography>
              </ListItemText>
          </ListItemButton> 
        </Link>
        <Divider />
        <Link to='/dashboard/payment-method' style={{textDecoration:'none'}}>
          <ListItemButton>
              <ListItemIcon>
                  <Payments style={ListIconStyle}/>
              </ListItemIcon>
              <ListItemText > 
                <Typography style={ListITextStyle}>payment method</Typography>
              </ListItemText>
          </ListItemButton>
        </Link>
        <Divider />
      </List>
    );
}

export default SideNavigation;