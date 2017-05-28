import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Row, Column, Grid, Panel, Field } from 'seito';

/**
 * Container Page
 */
const ContainerPage = (props) => {

  const child1 = {
    minWidth: '120px',
    minHeight: '100px',
    border: 'dashed 1px grey',
  }

  const child2 = {
    minWidth: '180px',
    minHeight: '50px',
    border: 'dashed 1px grey',
  }

  return (
    <Page>
      <Toolbar className="pageBar" icon='keyboard_arrow_right' title='Containers' />
      <Row>
        <div style={child1}>1</div>
        <div style={child1}>1</div>
        <div className="expanded" style={child2}>2</div>
        <div style={child1}>3</div>
      </Row>
      <Column>
        <div style={child1}>1</div>
        <div className="expanded" style={child2}>2</div>
        <div style={child1}>3</div>
      </Column>
      <Grid columns="2fr 1fr 1fr">
        <div style={child1}>1</div>
        <div style={child2}>2</div>
        <div style={child1}>1</div>
        <div style={child2}>2</div>
        <div style={child1}>3</div>
        <div style={child1}>3</div>
      </Grid>
    </Page>
  );
}

export default ContainerPage;
