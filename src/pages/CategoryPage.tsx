import React from 'react';
import { useLocation } from 'react-router-dom';
import LinkButton from '../components/LinkButton';
import CategoryPageHeader from '../components/CategoryPageHeader';
import CategoryPageProgressBar from '../components/CategoryPageProgressBar';
import SelectorGrid from '../components/SelectorGrid';
import classes from '../scss/categoryPage.module.scss';

export default function CategoryPage(props: {
  data: any,
  prevSlug: string,
  nextSlug: string,
}) {
  const { data, prevSlug, nextSlug } = props;
  const location = useLocation();
  const { from } = location.state;

  return (
    <div className={classes.categoryPage}>
      <header className={classes.header}>
        <CategoryPageHeader prevSlug={prevSlug} />
        <CategoryPageProgressBar />
      </header>
      <div className={classes.content}>
        <h2 className={classes.categoryTitle}>{data.category}</h2>
        <img className={classes.image} src="" alt="" />
        <SelectorGrid options={data.options} />
      </div>
      <div className={classes.linkButtonContainer}>
        <LinkButton text={from === 'confirm' ? 'Confirm' : 'Next'} target={from === 'confirm' ? '/confirm' : `/${nextSlug}`} />
      </div>
    </div>
  );
}
