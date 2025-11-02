import { ReactNode } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export function Heading({ level = 2, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
}

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export function Paragraph({ children, className = "" }: ParagraphProps) {
  return <p className={className}>{children}</p>;
}

interface LabelProps {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
}

export function Label({ children, className = "", htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}

