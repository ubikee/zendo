import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Panel, Field } from 'seito';

/**
 * Panel Page
 */
const FieldPage = (props) => {

  return (
    <Page>
      <Toolbar className="pageBar" icon='keyboard_arrow_right' title='Fields' />
        <Panel title="Fields" collapsable={true} collapsed={false}>
          <br />
          <Field id="person" icon="person" label="Name" value="Alonso Quijano"/>
          <Field id="address" icon="store" label="Address" value="" />
        </Panel>
    </Page>
  );
}

export default FieldPage;
