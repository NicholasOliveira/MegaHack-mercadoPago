import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  text-align: center;
  width: 100%;
`;

export const FooterContain = styled.footer`
  text-align: center;
  width: 100%;
`;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));
