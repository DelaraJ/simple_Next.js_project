import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  loading = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${styles.button} ${styles[variant]} ${loading ? styles.loading : ''}`}
    >
      {loading ? (
        <span className={styles.spinner}></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;