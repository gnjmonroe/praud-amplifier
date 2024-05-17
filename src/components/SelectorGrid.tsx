import styles from "./SelectorGrid.module.scss";

interface SelectorGridProps {
  children: React.ReactNode | React.ReactNode[];
}
export const SelectorGrid = ({ children }: SelectorGridProps) => {
  return <div className={styles.root}>{children}</div>;
};
