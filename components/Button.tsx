'use client';

import Link from 'next/link';
import { ComponentProps } from 'react';

type Props = {
  href: string;
  variant?: 'text' | 'outline';
  children: React.ReactNode;
} & Omit<ComponentProps<'a'>, 'href'>;

export default function Button({ href, variant = 'text', children, ...rest }: Props) {
  const cls = variant === 'outline' ? 'btn-outline' : 'btn-text';
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
