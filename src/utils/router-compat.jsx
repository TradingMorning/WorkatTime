'use client'
import React from 'react';
import NextLink from 'next/link';
import { useRouter, usePathname, useSearchParams as useNextSearchParams, useParams as useNextParams } from 'next/navigation';

export function Link({ to, href, children, className, ...props }) {
  const destination = to || href || '#';
  return (
    <NextLink href={destination} className={className} {...props}>
      {children}
    </NextLink>
  );
}

export function NavLink({ to, className, children, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === to;
  
  const computedClassName = typeof className === 'function' 
    ? className({ isActive }) 
    : `${className} ${isActive ? 'text-amber-400' : ''}`;

  return (
    <NextLink href={to} className={computedClassName} {...props}>
      {children}
    </NextLink>
  );
}

export function useNavigate() {
  const router = useRouter();
  return (path, options) => {
    if (options?.replace) {
      router.replace(path);
    } else {
      router.push(path);
    }
  };
}

export function useLocation() {
  const pathname = usePathname();
  const searchParams = useNextSearchParams();
  return {
    pathname,
    search: searchParams?.toString() ? `?${searchParams.toString()}` : '',
    hash: '',
    state: null,
  };
}

export function useSearchParams() {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = (newParams) => {
    let paramsStr = '';
    if (newParams instanceof URLSearchParams) {
      paramsStr = newParams.toString();
    } else if (typeof newParams === 'object' && newParams !== null) {
      const p = new URLSearchParams();
      Object.entries(newParams).forEach(([k, v]) => {
        if (v !== undefined && v !== null) {
          p.set(k, String(v));
        }
      });
      paramsStr = p.toString();
    } else {
      paramsStr = String(newParams || '');
    }
    const query = paramsStr ? `?${paramsStr}` : '';
    router.push(`${pathname}${query}`);
  };

  return [searchParams, setSearchParams];
}

export function useParams() {
  return useNextParams();
}

export function Navigate({ to, replace }) {
  const router = useRouter();
  React.useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [to, replace, router]);
  return null;
}
