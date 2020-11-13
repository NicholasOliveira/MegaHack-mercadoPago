import React, { useState } from 'react';

import {
  ListItemText,
  Collapse,
  Divider,
  Drawer,
  ListItem,
  List,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useStyles, LinkStyle } from './styles';

const MenuBar = ({
  menuItems,
  mobileOpen,
}: {
  menuItems: any;
  mobileOpen: any;
}) => {
  const classes = useStyles();
  const [handleValue, sethandleValue] = useState<any>({});

  const handleClick = (item: any) => {
    sethandleValue({ [item]: !handleValue[item] });
  };

  const handler = (children: any) => {
    return children.map((subOption: any) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem
              className={subOption.class ? classes.active : ''}
              button
              key={subOption.name}
            >
              <LinkStyle to={subOption.url}>
                <img src={subOption.icon} style={{ width: '1.5em' }} />
                <ListItemText
                  className={classes.ListItemText}
                  inset
                  primary={subOption.name}
                />
              </LinkStyle>
            </ListItem>
          </div>
        );
      }

      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => handleClick(subOption.name)}>
            <ListItemText inset primary={subOption.name} />
            {handleValue[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={handleValue[subOption.name]}
            timeout="auto"
            unmountOnExit
          >
            {handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  };

  return (
    <div>
      <Drawer
        variant="persistent"
        anchor="left"
        open={mobileOpen}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <List>
            <ListItem key="menuHeading" divider disableGutters>
              <ListItemText inset primary="Nested Menu" />
            </ListItem>
            {handler(menuItems.inicio)}
            <Divider />
            {handler(menuItems.data)}
            <Divider />
            {handler(menuItems.system)}
            <Divider />
            {handler(menuItems.system2)}
            <Divider />
            {handler(menuItems.system3)}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
export default MenuBar;
