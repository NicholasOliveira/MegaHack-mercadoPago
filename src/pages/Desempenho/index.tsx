import React, { useEffect, useState } from 'react';

import { Container, Wrapper } from './styles';
import Charts from '../../components/charts';
import ChartView from '../../components/ChartView';
import ListProducts from '../../components/ListProducts';
import api, { ICustomerSalesData } from '../../services/MockedApi';

const Desempenho: React.FC = () => {
  const [CustomerSalesData, setCustomerSalesData] = useState<
    ICustomerSalesData
  >();

  useEffect(() => {
    async function loadDataFromApi(): Promise<void> {
      await api.get('/customer').then(async response => {
        setCustomerSalesData(response.data[0]);
      });
    }

    loadDataFromApi();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Charts
          title={'Quantidade de vendas'}
          Info={`${CustomerSalesData?.sales_amount} vendas`}
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
          Info={`R$ ${CustomerSalesData?.income}`}
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
          Info={`R$ ${CustomerSalesData?.income_average}`}
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
          Info={`R$ ${CustomerSalesData?.wharehouse[0].income}`}
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
