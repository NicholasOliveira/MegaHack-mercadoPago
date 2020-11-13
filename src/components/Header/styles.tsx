import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const ImgBrand = styled.img`
  max-height: 40px;
`;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingLeft: 0,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#009ee3',
    display: 'flex',
  },
  barHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 30px',
  },
  h2Text: {
    marginLeft: '10px',
    fontSize: '1.125em',
    fontWeight: 'bold',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
