// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Header, Link, Table } from '@cloudscape-design/components';

export default function BookList() {
  // here you set a state to tell the component it need to wait
  //  until the result is fetched from the api
  const [loadingData, setLoadingData] = useState(true);

  const colDefintion = [
    {
      id: 'title',
      header: 'Title',
      cell: item => item.title,
      minWidth: 135,
      width: 500,
    },
    {
      id: 'authors',
      header: 'Authors',
      cell: item => getAuthors(item.authors),
      minWidth: 135,
      width: 240,
    },
  ];

  const [data, setData] = useState([]);

  const getAuthors = value => {
    return value.map(function (a) {
      return a.name;
    });
  };

  useEffect(() => {
    async function getData() {
      await axios.get('https://gutendex.com/books/?author_year_start=1800&author_year_end=1801').then(response => {
        setData(response.data.results);
        setLoadingData(false);
      });
    }
    if (loadingData) {
      getData();
    }
  }, []);

  return (
    <Table
      className="custom-dashboard-container"
      resizableColumns={true}
      header={<Header counter={'(' + data.length + ')'}>Book List</Header>}
      items={data}
      columnDefinitions={colDefintion}
      disableContentPaddings={true}
      footer={
        <Box textAlign="center">
          <Link href="#">Show all</Link>
        </Box>
      }
    />
  );
}
