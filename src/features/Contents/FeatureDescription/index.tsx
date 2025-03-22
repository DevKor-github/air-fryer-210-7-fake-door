import { ReactNode } from 'react';

import s from './FeatureDescription.module.css';

interface Props {
  index: number;
  title: ReactNode;
  descriptions: string[];
  imgSrc: string;
}
const FeatureDescription = ({ index, title, descriptions, imgSrc }: Props) => {
  return (
    <div className={s.FlexWrapper}>
      <div className={s.Wrapper}>
        <div className={s.Header}>
          <div>{String(index).padStart(2, '0')}</div>
          <h2>{title}</h2>
        </div>
        <div className={s.Description}>
          {descriptions.map((description, ind) => {
            return <p key={ind}>{description}</p>;
          })}
        </div>
        <img className={s.Image} src={imgSrc} alt={`App Feature ${index}`} />
      </div>
    </div>
  );
};
export default FeatureDescription;
