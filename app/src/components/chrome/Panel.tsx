import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  variant?: 'amber' | 'cyan' | 'grey';
}

export default function Panel({ children, className = '', variant = 'amber' }: Props) {
  const bracket =
    variant === 'cyan' ? 'brackets-cyan' : variant === 'grey' ? 'brackets-grey' : '';
  return (
    <div
      className={`brackets brackets-all ${bracket} border border-border bg-card/70 ${className}`}
    >
      {children}
    </div>
  );
}
