/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LinkButton from '../components/LinkButton';
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

  useLayoutEffect(() => {
    if (selection) localStorage.setItem(`${data[dataIndex].category}`, selection);
    if (selection) setGreenLight(true);
  }, [selection]);

  useEffect(() => {
    if (!localStorage.getItem(`${data[dataIndex].category}`)) {
      setGreenLight(false);
    }
  }, [to]);

  return (
    <div className={classes.categoryPage}>
      <header className={classes.header}>
        <CategoryPageHeader prevSlug={prevSlug} />
        <CategoryPageProgressBar data={data} dataIndex={dataIndex} confirm={from === 'confirm'} />
      </header>
      <div className={classes.content}>
        <h2 className={classes.categoryTitle}>{data[dataIndex].category}</h2>
        <SelectorGrid
          options={data[dataIndex].options}
          selection={selection}
          setSelection={setSelection}
        />
      </div>
      <div
        className={classes.linkButtonContainer}
      >
        <LinkButton
          text={from === 'confirm' ? 'Confirm' : 'Next'}
          target={from === 'confirm' ? '/confirm' : `/${nextSlug}`}
          greenLight={greenLight}
          destination={dataIndex < data.length - 1 ? data[dataIndex + 1].category : ''}
        />
      </div>
    </div>
  );
}
