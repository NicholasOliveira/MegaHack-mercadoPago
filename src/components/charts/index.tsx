import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    width: '100%',
    margin: '20px 20px',
  },
  title: {
    fontSize: 14,
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
        <Typography variant="h5" component="h2">
          {Info}
        </Typography>
        <Typography
          style={{ backgroundColor: '#FFE010' }}
          className={classes.pos}
          color="textSecondary"
        >
          <ArrowDropDownIcon className={classes.svg} />
          {label.valor}
        </Typography>
        <Typography variant="body2" component="p">
          {chart}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          marginTop: '-50px',
          borderTop: '1px solid #eee',
        }}
      >
        <Button style={{ fontSize: '10px', color: '#019EE2' }} size="small">
          ver datalhes <ChevronRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
