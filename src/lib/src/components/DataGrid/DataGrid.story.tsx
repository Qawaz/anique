import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DataGrid } from '.';
import { Button, Stack } from '../../';
import { views, columns, rows, actions } from './data.mock';
import {H2} from "../Heading";

export default {
  title: 'Components/DataGrid',
  component: DataGrid
} as ComponentMeta<typeof DataGrid>;

const Template: ComponentStory<typeof DataGrid> = (args) => {
  const handleRowSelect = (selectedRows: unknown) => console.log(selectedRows);

  return (
    <div className="main-container col-span-6 overflow-x-auto overscroll-x-contain">
      <Stack>
        <Stack.Item fill>
          <H2>Orders</H2>
        </Stack.Item>
        <Stack.Item>
          <Button>Sync Orders</Button>
          <Button primary>Import Orders</Button>
        </Stack.Item>
      </Stack>

      <DataGrid
        className="Orders"
        views={views}
        rows={rows}
        columns={columns}
        rowsPerPage={10}
        actionButtons={{
          actions,
          truncateAfter: 2,
          truncateLabel: 'More Actions'
        }}
        onSelectChange={handleRowSelect}
      />
    </div>
  );
};

export const BasicDataGrid = Template.bind({});
BasicDataGrid.args = {};
