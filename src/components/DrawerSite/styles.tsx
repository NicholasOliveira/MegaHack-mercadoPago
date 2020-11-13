import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const drawerWidth = 256;

export const ImgBrand = styled.img`
  max-height: 40px;
`;

export const LinkStyle = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  ListItemText: {
    paddingLeft: '20px',
    fontSize: '14px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    lineHeight: '1em',
    color: '#333',
  },
  active: {
    borderLeft: '5px solid #019ee2',
    color: '#019ee2',
  },
  desactive: {},
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      marginTop: '60px',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#eee',
    paddingTop: '20px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));
