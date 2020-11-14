import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ProductItem } from './styles';
import ImgProduto1 from '../../assets/images/produto1.jpg';
import api, { ICustomerSalesData } from '../../services/MockedApi';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    width: '100%',
    margin: '20px 20px',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
    width: 70,
    height: 20,
    borderRadius: '10px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    margin: '4px 0px',
  },
  svg: {
    margin: 0,
    padding: 0,
    marginLeft: -7,
  },
});

export default function SimpleCard({ title, Info, label, chart, link }: any) {
  const classes = useStyles();

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

  // const products = [
  //   {
  //     id: '1',
  //     img: ImgProduto1,
  //     title: 'Sapato prateado salto baixo',
  //     vendas: 0,
  //     receita: 'R$ 0,00',
  //     estoque: 5,
  //     ultimaVenda: '12/10/2020',
  //   },
  //   {
  //     id: '1',
  //     img: ImgProduto1,
  //     title: 'Sapato prateado salto baixo',
  //     vendas: 0,
  //     receita: 'R$ 0,00',
  //     estoque: 5,
  //     ultimaVenda: '12/10/2020',
  //   },
  //   {
  //     id: '1',
  //     img: ImgProduto1,
  //     title: 'Sapato prateado salto baixo',
  //     vendas: 0,
  //     receita: 'R$ 0,00',
  //     estoque: 5,
  //     ultimaVenda: '12/10/2020',
  //   },
  // ];

  const products = [
    {
      id: '1',
      img: CustomerSalesData?.wharehouse[0].product.product_image,
      title: CustomerSalesData?.wharehouse[0].product.product_name,
      vendas: CustomerSalesData?.wharehouse[0].product.average_sell,
      receita: `R$ 310,00`,
      estoque: 2,
      ultimaVenda: '12/10/2020',
    },
    {
      id: '2',
      img: CustomerSalesData?.wharehouse[0].product.product_image,
      title: CustomerSalesData?.wharehouse[2].product.product_name,
      vendas: CustomerSalesData?.wharehouse[2].product.average_sell,
      receita: 'R$ 0,00',
      estoque: 5,
      ultimaVenda: '12/10/2020',
    },
    {
      id: '3',
      img: CustomerSalesData?.wharehouse[0].product.product_image,
      title: CustomerSalesData?.wharehouse[3].product.product_name,
      vendas: CustomerSalesData?.wharehouse[3].product.average_sell,
      receita: 'R$ 0,00',
      estoque: 5,
      ultimaVenda: '12/10/2020',
    },
  ];

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant="h3"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>

        {products.map((product: any) => (
          <ProductItem key={product.id}>
            <div>
              <ChevronRightIcon />
              <img src={product.img} alt={product.title} />
            </div>
            <h4>
              {product.title}
              <br />
              <span>4 variantes</span>
            </h4>
            <h4>
              {product.vendas}
              <br />
              <span>Vendas</span>
            </h4>
            <h4>
              {product.receita}
              <br />
              <span>Receita</span>
            </h4>
            <h4>
              {product.estoque}
              <br />
              <span>Estoque</span>
            </h4>
            <h4>
              {product.ultimaVenda}
              <br />
              <span>Última venda</span>
            </h4>
          </ProductItem>
        ))}
      </CardContent>
      <CardActions
        style={{
          borderTop: '1px solid #eee',
        }}
      >
        <Button style={{ fontSize: '10px', color: '#019EE2' }} size="small">
          ver todos os produtos <ChevronRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
