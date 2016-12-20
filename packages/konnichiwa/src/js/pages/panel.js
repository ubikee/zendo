import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Panel } from 'seito';

/**
 * Panel Page
 */
const PanelPage = (props) => {

  return (
    <Page>
      <Toolbar className="pageBar" icon='keyboard_arrow_right' title='Panel' />
      <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Panel title="Demo Panel" collapsable={true} collapsed={false}>
          xxx
        </Panel>
      </div>
    </Page>
  );
}

export default PanelPage;
