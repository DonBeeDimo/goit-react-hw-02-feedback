import s from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={s.title}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
