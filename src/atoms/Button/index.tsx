import { FC } from 'react';
import './button.scss';
import { ButtonProps } from './types';

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
