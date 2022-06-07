import { FC } from "react";
import classNames from "classnames";
import styles from './styles.module.css'

type AvatarSize = "sm" | "md" | "lg";

type AvatarProps = {
  size: AvatarSize;
  source: string;
  isActive: boolean;
  margin?: string
};

const Avatar: FC<AvatarProps> = ({ size, margin, isActive }) => {
  return (
    <div style={{ margin }} className={classNames(styles.base_container, styles[size])}>
      <img
        className={classNames(styles.inner_image, isActive && styles.active)}
        src="https://m.media-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_.jpg"
        alt=""
      />
      {isActive && (
        <div className={classNames(styles.active_dot)}>
        </div>
      )}
    </div>
  );
};

export default Avatar;
