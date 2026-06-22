import styles from './LogoLoop.module.css';

export default function LogoLoop({ items = [], speed = 28 }) {
  const doubled = [...items, ...items];

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.track}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
