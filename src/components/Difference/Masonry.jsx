import styles from "./Masonry.module.scss";

export const Masonry = () => {
  const tiles = [];
  for (let i = 0; i < 29; i++) {
    tiles.push(<img src={ `https://picsum.photos/500/500?random=${i}` } key={i} alt=" " />);
  }

  return (
    <div className={ styles.masonry }>
      {tiles}
    </div>
  );
};