import s from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, average }) {
  return (
    <ul className={s.list}>
      <li className={s.item}>Good:{good}</li>
      <li className={s.item}>Neutral:{neutral}</li>
      <li className={s.item}>Bad:{bad}</li>
      <li className={s.item}>Total:{total()}</li>
      <li className={s.item}>Average:{average()}%</li>
    </ul>
  );
}
