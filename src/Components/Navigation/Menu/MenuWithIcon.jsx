import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import DashboardTwoToneIcon from '@mui/icons-material/Dashboard';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { AccessTime, AccountBalanceWallet, AccountCircle, AddCard, AddTask, CreditCard, InsertInvitation, LibraryBooks, ManageHistory } from '@mui/icons-material';
import Apon from '../../Layout/Apon';
import { Link } from 'react-router-dom';


const MenuWithIcon = () => {
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton

       component={Link}
       to="/"
      
      >
        <ListItemIcon>
          <DashboardTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton

       component={Link}
       to="/employees"
      
      >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Employees" />
      </ListItemButton>

      <ListItemButton 
      component={Link}
       to="/attendence"
      >
        <ListItemIcon>
          <InsertInvitation />
        </ListItemIcon>
        <ListItemText primary="Attendence" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccessTime />
        </ListItemIcon>
        <ListItemText primary="Time Clock" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
      component={Link}
       to="/payruns"
      >
        <ListItemIcon>
          <AddCard />
        </ListItemIcon>
        <ListItemText primary="Pay Runs" />
      </ListItemButton>
      <ListItemButton  
       component={Link}
       to="/approvals"
       >
        <ListItemIcon>
          <AddTask />
        </ListItemIcon>
        <ListItemText primary="Approvals" />
      </ListItemButton>
      <ListItemButton
       component={Link}
       to="/salarydetails"
      >
        <ListItemIcon>
          <ManageHistory />
        </ListItemIcon>
        <ListItemText primary="Salary Details" />
      </ListItemButton>
      <ListItemButton
      component={Link}
       to="/investments"
      >
        <ListItemIcon>
          <AccountBalanceWallet />
        </ListItemIcon>
        <ListItemText primary="Investments" />
      </ListItemButton>
      <ListItemButton 
      component={Link}
       to="/reports"
      >
        <ListItemIcon>
          <LibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
    </List>

  );
};

export default MenuWithIcon;