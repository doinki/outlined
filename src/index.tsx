import React, { forwardRef } from 'react';

export interface OutlinedRootProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const OutlinedRoot = forwardRef<HTMLDivElement, OutlinedRootProps>(
  ({ style, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          ...style,
        }}
        {...rest}
      />
    );
  },
);

export interface OutlinedLabelProps
  extends React.HTMLAttributes<HTMLLabelElement> {}

export const OutlinedLabel = forwardRef<HTMLLabelElement, OutlinedLabelProps>(
  ({ style, ...rest }, ref) => {
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label
        ref={ref}
        style={{
          cursor: 'pointer',
          display: 'inline-flex',
          padding: '0.5rem',
          ...style,
        }}
        {...rest}
      />
    );
  },
);

export interface OutlinedCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const OutlinedCheckbox = forwardRef<
  HTMLInputElement,
  OutlinedCheckboxProps
>(({ style, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      style={{
        cursor: 'pointer',
        height: 16,
        width: 16,
        ...style,
      }}
      title="Outlined"
      type="checkbox"
      {...rest}
    />
  );
});

export const OutlinedStyle = forwardRef<
  HTMLStyleElement,
  React.StyleHTMLAttributes<HTMLStyleElement>
>((props, ref) => {
  return <style ref={ref} {...props}>{`*{outline:1px solid;}`}</style>;
});

export const Outlined = forwardRef<HTMLDivElement, OutlinedRootProps>(
  (props, ref) => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };

    return (
      <OutlinedRoot ref={ref} {...props}>
        <OutlinedLabel>
          <OutlinedCheckbox checked={checked} onChange={handleChange} />
        </OutlinedLabel>
        {checked && <OutlinedStyle />}
      </OutlinedRoot>
    );
  },
);
