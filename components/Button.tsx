import { VariantProps, cva } from 'class-variance-authority';

const classes = cva(
  ['rounded-2xl', 'font-bold', 'hover:scale-110', 'active:scale-100', 'transition', 'duration-200', 'ease-out'],
  {
    variants: {
      intent: {
        primary: ['bg-violet-500', 'text-white', 'border-transparent', 'hover:bg-violet-600'],
        secondary: ['bg-white', 'text-black', 'hover:bg-gray-100', 'border-solid', 'border-2', 'border-gray-800'],
        text: ['bg-transparent', 'text-black', 'hover:bg-gray-100'],
      },
      size: {
        small: ['text-md', 'py-1', 'px-2'],
        medium: ['text-lg', 'py-2', 'px-4'],
        large: ['text-xlg', 'py-4', 'px-8'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

interface Props extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof classes> {
  children: React.ReactNode;
}

function Button({ children, className, intent, size, ...props }: Props): JSX.Element {
  return (
    <button className={classes({ className, intent, size })} {...props}>
      {children}
    </button>
  );
}

export default Button;
