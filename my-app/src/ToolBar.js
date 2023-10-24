import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 150,
  [theme.breakpoints.up('sm')]: {
    height: 150,  
    
  },
}));

export default Toolbar;