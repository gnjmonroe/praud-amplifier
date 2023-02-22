/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Data } from '../ts/data';

import Header from '../components/Header';
import CategoryPageProgressBar from '../components/CategoryPageProgressBar';
import SelectorGrid from '../components/SelectorGrid';

import classes from '../scss/pages/categoryPage.module.scss';

export default function CategoryPage(props: {
  data: Data[],
  dataIndex: number,
  prevSlug: string,
  nextSlug: string,
}) {
  const {
    data, dataIndex, prevSlug, nextSlug,
  } = props;
  const location = useLocation();
  const { from } = location.state || '';

  const [selection, setSelection] = useState<string | null>(null);

  /**
   * checks for pre-existing localStorage
   * then loads into selection or
   * creates a new localStorage item
   */
  useEffect(() => {
    if (localStorage.getItem(`${data[dataIndex].category}`)) {
      const priorSelection = localStorage.getItem(`${data[dataIndex].category}`);
      setSelection(priorSelection);
    } else {
      localStorage.setItem(`${data[dataIndex].category}`, '');
    }
  }, [dataIndex]);

  return (
    <div className={classes.categoryPage}>
      <header className={classes.header}>
        <Header prevSlug={prevSlug} />
        <CategoryPageProgressBar
          data={data}
          dataIndex={dataIndex}
          confirm={from === 'confirm'}
        />
      </header>
      <div className={classes.content}>
        <SelectorGrid
          category={data[dataIndex].category}
          options={data[dataIndex].options}
          selection={selection}
          setSelection={setSelection}
          nextSlug={nextSlug}
          from={from}
        />
      </div>
    </div>
  );
}
