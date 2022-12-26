// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import AppLayout from '@cloudscape-design/components/app-layout';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Grid from '@cloudscape-design/components/grid';

import '@cloudscape-design/global-styles/dark-mode-utils.css';
import '../../styles/dashboard.scss';
import '../../styles/density-switch-images.scss';

import { appLayoutLabels } from '../../common/labels';
import { densityStorage, densityLocalStorageKey, updateDensity } from '../../common/apply-mode';
import * as localStorage from '../../common/localStorage';

import { DashboardHeader } from './components/header';
import { FeaturesSpotlight, AccountAttributes } from './components/related-resources';
import ServiceOverview from './components/overview';
import ServiceHealth from './components/service-health';
import ZoneStatus from './components/zone-status';
import Alarms from './components/alarms';
import InstancesLimits from './components/instance-limits';
import Events from './components/events';
import DocList from './components/doclist';
import BookList from './components/booklist';
import comfortableVisualRefreshImage from './density-switch-images/comfortable-visual-refresh';
import compactVisualRefreshImage from './density-switch-images/compact-visual-refresh';
import { navHeader, Notifications } from '../commons/common-components';

function Breadcrumbs() {
  const breadcrumbItems = [];
  return <BreadcrumbGroup items={breadcrumbItems} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />;
}

function Content(props) {
  return (
    <Grid
      gridDefinition={[
        { colspan: { l: 8, m: 8, default: 12 } },
        { colspan: { l: 4, m: 4, default: 12 } },
        { colspan: { l: 12, m: 12, default: 12 } },
        { colspan: { l: 12, m: 12, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 8, m: 8, default: 12 } },
        { colspan: { l: 4, m: 4, default: 12 } },
      ]}
    >
      <ServiceOverview />
      <ServiceHealth />
      <DocList />
      <BookList />
    </Grid>
  );
}

function App() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const appLayout = useRef();

  return (
    <AppLayout
      ref={appLayout}
      content={
        <ContentLayout header={<DashboardHeader />}>
          <Content />
        </ContentLayout>
      }
      headerSelector="#header"
      breadcrumbs={<Breadcrumbs />}
      onToolsChange={({ detail }) => setToolsOpen(detail.open)}
      ariaLabels={appLayoutLabels}
      notifications={<Notifications successNotification={false} disclaimerItem={false} />}
      navigationHide={true}
      toolsHide={true}
    />
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
