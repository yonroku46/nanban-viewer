import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SmoothiLab | Login',
  description: 'Welcome to SmoothiLab',
}

export default async function ServiceLayout(
  { children }: { children: React.ReactNode }
) {

  return (
    <>
      {children}
    </>
  )
}
