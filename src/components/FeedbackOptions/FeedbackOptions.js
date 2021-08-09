import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onChangeFeedback }) {
  return (
    <ul className={s.list}>
      {options.map(option => (
        <li key={option}>
          <button
            className={s.btn}
            type="button"
            onClick={() => {
              onChangeFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
