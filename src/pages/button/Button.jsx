import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick }) => {
  const baseStyle =
    'inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 rounded-full bg-red-800 text-zinc-100 hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring focus:ring-red-800 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: baseStyle + ' px-4 py-3 md:px-6 md:py-4',
    small: baseStyle + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: baseStyle + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm ',
    secondary:
      ' inline-block text-sm font-semibold tracking wide uppercase transition-colors duration-300 rounded-full border-2 border-zinc-300 hover:bg-zinc-200 focus:bg-zinc-200 focus:outline-none focus:ring text-zinc-400 focus:ring-zinc-300 focus:ring-offset-2 hover:text-zinc-600 hover:font-semibold focus:text-zinc-600 focus:font-semibold font-disabled:cursor-not-allowed px-4 py-2 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
