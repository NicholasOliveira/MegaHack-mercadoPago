import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Container } from './styles';
import perfilHeader from '../../assets/icons/Header.svg';

export default function MeuPerfil() {
  return (
    <Container>
      <img src={perfilHeader} alt="" />
      <div>
        <span>Dona lia Calçados</span>
        <div>
          Nível 3 - Mercado pontos
          <ArrowForwardIosIcon style={{ fontSize: 12 }} />
        </div>
      </div>
    </Container>
  );
}
