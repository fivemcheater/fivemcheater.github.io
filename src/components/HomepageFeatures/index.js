import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '手到拿來',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        只要你成功付款後我就會把你踢出群組
      </>
    ),
  },
  {
    title: '未經思考',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        無論你做什麼，只要你針對我，我都會無腦你靠背你
      </>
    ),
  },
  {
    title: '虛假技術',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        只要你的檔案不是跟我買，我就會隨便瞎掰一個理由說你的檔案不完整，但你問我哪裡不完整，我倒是說不出來
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
