// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { Box, Header, Link, StatusIndicator, Table } from '@cloudscape-design/components';

export default function DocList() {
  const docsDefinition = [
    {
      id: 'name',
      header: 'Name',
      cell: item => item.name,
      minWidth: 135,
      width: 240,
    },
    {
      id: 'type',
      header: 'Type',
      cell: item => item.type,
      minWidth: 80,
      width: 80,
    },
    {
      id: 'status',
      header: 'Event status',
      cell: ({ statusText, status }) => <StatusIndicator type={status}>{statusText}</StatusIndicator>,
      minWidth: 120,
      width: 130,
    },
    {
      id: 'id',
      header: 'Doc ID',
      cell: item => <Link href="#">{item.id}</Link>,
      minWidth: 165,
      width: 300,
    },
    {
      id: 'uploadedTime',
      header: 'Uploaded Time',
      cell: item => item.uploadedTime,
      minWidth: 130,
      width: 200,
    },
    {
      id: 'fileSize',
      header: 'File Size',
      cell: item => item.fileSize,
      minWidth: 130,
      width: 135,
    },
  ];
  const docItems = [
    {
      name: '2022-q3-gl-payments',
      id: 'aa01aa79-3b66-4d84-a6e1-aed32fa84536',
      type: 'xls',
      statusText: 'Scheduled',
      status: 'pending',
      fileSize: '782 MB',
      uploadedTime: 'December 24, 2019 04:00 PM CST'
    },
    {
      name: '2022-q3-gl-invoices',
      id: 'bb486870-fa00-4869-80c2-1769b6f3bfaf',
      type: 'xls',
      statusText: 'Scheduled',
      status: 'pending',
      fileSize: '641 MB',
      uploadedTime: 'December 24, 2019 02:18 PM CST'
    },
    {
      name: '2022-q3-gl-payments',
      id: '58fe1309-321f-433d-891f-d3a425d96110',
      type: 'xls',
      statusText: 'Scheduled',
      status: 'pending',
      fileSize: '614 MB',
      uploadedTime: 'December 21, 2019 03:40 PM CST'
    },
  ];
  return (
    <Table
      className="custom-dashboard-container"
      resizableColumns={true}
      header={<Header counter={"(" + docItems.length + ")"}>Doc List</Header>}
      items={docItems}
      columnDefinitions={docsDefinition}
      disableContentPaddings={true}
      footer={
        <Box textAlign="center">
          <Link href="#">Show all</Link>
        </Box>
      }
    />
  );
}
