/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryPageHeader from '../components/CategoryPageHeader';
import CategoryPageProgressBar from '../components/CategoryPageProgressBar';
import SelectorGrid from '../components/SelectorGrid';
import classes from '../scss/categoryPage.module.scss';

export default function CategoryPage(props: {
  data: any,
  dataIndex: number,
  prevSlug: string,
  nextSlug: string,
}) {
  const {
    data, dataIndex, prevSlug, nextSlug,
  } = props;
  const location = useLocation();
  const { from, to } = location.state || '';

  const [selection, setSelection] = useState<string | null>(null);
  const [greenLight, setGreenLight] = useState<boolean>(false);

  // checks for pre-existing localStorage
  // then loads into selection or creates a new localStorage item
  useEffect(() => {
    const categoryItemExists = Boolean(localStorage.getItem(`${data[dataIndex].category}`));
    if (categoryItemExists) {
      const initialSelection = localStorage.getItem(`${data[dataIndex].category}`);
      setSelection(initialSelection);
    } else {
      localStorage.setItem(`${data[dataIndex].category}`, '');
    }
  }, [dataIndex]);

  // enable next button on selection change
  useLayoutEffect(() => {
    if (selection) localStorage.setItem(`${data[dataIndex].category}`, selection);
    if (selection) setGreenLight(true);
  }, [selection]);

  // reset greenLight on route change
  useEffect(() => {
    if (!localStorage.getItem(`${data[dataIndex].category}`)) {
      setGreenLight(false);
      localStorage.setItem(`${data[dataIndex].category}`, 'pending');
    }
  }, [to]);

  return (
    <div className={classes.categoryPage}>
      <header className={classes.header}>
        <CategoryPageHeader prevSlug={prevSlug} />
        <CategoryPageProgressBar data={data} dataIndex={dataIndex} confirm={from === 'confirm'} />
      </header>
      <div className={classes.content}>
        <SelectorGrid
          category={data[dataIndex].category}
          options={data[dataIndex].options}
          selection={selection}
          setSelection={setSelection}
          nextSlug={nextSlug}
        />
      </div>
    </div>
  );
}
