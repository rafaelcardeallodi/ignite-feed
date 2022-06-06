import styles from "./styles.module.scss";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
}

export function Avatar({ hasBorder = true, src }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
