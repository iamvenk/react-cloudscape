// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { Box, Container, Header, ColumnLayout } from '@cloudscape-design/components';
import { CounterLink } from '../../commons/common-components';

export default function ServiceOverview() {
  return (
    <Container
      className="custom-dashboard-container"
      header={
        <Header variant="h2" description="">
          Process overview
        </Header>
      }
    >
      <ColumnLayout columns="4" variant="text-grid">
        <div>
          <Box variant="awsui-key-label">Processed</Box>
          <CounterLink>140</CounterLink>
        </div>
        <div>
          <Box variant="awsui-key-label">Failed</Box>
          <CounterLink>12</CounterLink>
        </div>
        <div>
          <Box variant="awsui-key-label">On Hold</Box>
          <CounterLink>6</CounterLink>
        </div>
        <div>
          <Box variant="awsui-key-label">Total</Box>
          <CounterLink>186</CounterLink>
        </div>
      </ColumnLayout>
    </Container>
  );
}
