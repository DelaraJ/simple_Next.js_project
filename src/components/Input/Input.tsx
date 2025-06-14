import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false
}, ref) => {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.error : ''}`}
        required={required}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;