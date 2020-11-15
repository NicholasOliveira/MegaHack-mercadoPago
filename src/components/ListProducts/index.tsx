/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useSelector } from 'react-redux';
import { ProductItem } from './styles';

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

export default function SimpleCard({ title }: any) {
  const classes = useStyles();
  const [productsData, setProductsData] = useState([]);
  const fetchData = useSelector((state: any) => state.fulldataAddSucess);

  useEffect(() => {
    if (fetchData.length > 0) {
      setProductsData(fetchData[0].wharehouse);
    }
  }, [fetchData]);
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

        {productsData.map((product: any) => (
          <ProductItem key={product.product.id}>
            <div>
              <ChevronRightIcon />
              <img
                src={product.product.product_image}
                alt={product.product.product_name}
              />
            </div>
            <h4 style={{ width: '200px', textAlign: 'left' }}>
              {product.product.product_name}
              <br />
              <span>4 variantes</span>
            </h4>
            <h4>
              {product.sell_quantity}
              <br />
              <span>Vendas</span>
            </h4>
            <h4>
              {product.FormatedMoney}
              <br />
              <span>Receita</span>
            </h4>
            <h4>
              {product.available}
              <br />
              <span>Estoque</span>
            </h4>
            <h4>
              {product.ultimavendaFormatada}
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
