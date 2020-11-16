/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Wrapper } from './styles';
import Charts from '../../components/charts';
import ChartView from '../../components/ChartView';
import ListProducts from '../../components/ListProducts';
import FormatedMoney from '../../utils';

const Desempenho = () => {
  const [data, setData] = useState([
    {
      sales_amount: 0,
      income: 0,
      income_average: 0,
      incomeFormated: 0,
      income_averageFormated: 0,
    },
  ]);
  const dados = useSelector((state: any) => state.fulldataAddSucess);
  useEffect(() => {
    if (typeof dados[0] !== 'undefined') {
      const newData = dados.map((item: any) => {
        return {
          ...item,
          incomeFormated: FormatedMoney(item.income),
          income_averageFormated: FormatedMoney(item.income_average),
        };
      });
      setData(newData);
    }
  }, [dados]);
  return (
    <Wrapper>
      <Container>
        <Charts
          title={'Quantidade de vendas'}
          Info={`${data[0].sales_amount} vendas`}
          label={{
            valor: '-30%',
            cor: '#bbb824',
            icon: 'down',
          }}
          chart={<ChartView numberSerie={60} />}
          link={'/'}
        />
        <Charts
          title={'Receita'}
          Info={data[0].incomeFormated}
          label={{
            valor: '-60%',
            cor: 'orange',
            icon: 'down',
          }}
          chart={<ChartView numberSerie={150} />}
          link={'/'}
        />
        <Charts
          title={'Média por venda'}
          Info={data[0].income_averageFormated}
          label={{
            valor: '-100%',
            cor: 'red',
            icon: 'down',
          }}
          chart={<ChartView numberSerie={280} />}
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
