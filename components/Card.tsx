import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className: string;
}

function Card({ children, className }: Props) {
  return (
    <article className={clsx('rounded-3xl', 'px-10', 'py-4', 'drop-shadow-xl', 'bg-white', className)}>
      {children}
    </article>
  );
}

export default Card;
