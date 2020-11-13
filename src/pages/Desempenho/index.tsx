import React from 'react';

import { Container, Wrapper } from './styles';
import Charts from '../../components/charts';
import ChartView from '../../components/ChartView';
import ListProducts from '../../components/ListProducts';

const Desempenho = () => {
  return (
    <Wrapper>
      <Container>
        <Charts
          title={'Quantidade de vendas'}
          Info={'0 vendas'}
          label={{
            valor: '-100%',
            cor: 'yellow',
            icon: 'down',
          }}
          chart={<ChartView />}
          link={'/'}
        />
        <Charts
          title={'Receita'}
          Info={'R$ 0,00'}
          label={{
            valor: '-100%',
            cor: 'yellow',
            icon: 'down',
          }}
          chart={<ChartView />}
          link={'/'}
        />
        <Charts
          title={'Média por venda'}
          Info={'R$ 0,00'}
          label={{
            valor: '-100%',
            cor: 'yellow',
            icon: 'down',
          }}
          chart={<ChartView />}
          link={'/'}
        />
      </Container>

      <Container>
        <ListProducts
          title={'Resultado por produto'}
          Info={'R$ 0,00'}
          label={{
            valor: '-100%',
            cor: 'yellow',
            icon: 'down',
          }}
          chart={<ChartView />}
          link={'/'}
        />
      </Container>
    </Wrapper>
  );
};

export default Desempenho;
