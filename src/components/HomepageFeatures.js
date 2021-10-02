import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '前端补完',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        这是我理解的前端补完计划
      </>
    ),
  },
  {
    title: 'React学习',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        学习和理解React
      </>
    ),
  },
  {
    title: '自由探索',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        不只是前端
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
