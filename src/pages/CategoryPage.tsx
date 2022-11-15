import React from 'react';
import LinkButton from '../components/LinkButton';
import classes from '../scss/categoryPage.module.scss';

export default function CategoryPage(props: {
  data: any,
  nextSlug: string,
}) {
  const { data, nextSlug } = props;

  return (
    <div className={classes.categoryPage}>
      <h2>{data.category}</h2>
      {data.options.map((option: any) => (
        <p>{option}</p>
      ))}
      <LinkButton text={nextSlug === '../' ? 'Home' : nextSlug} target={`/${nextSlug}`} />
    </div>
  );
}
