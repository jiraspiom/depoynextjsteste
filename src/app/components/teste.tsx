// import { ReactNode } from 'react'

import { ReactNode } from 'react'

interface Props {
  allowedRoles: string
  children: ReactNode
}

export default function Teste({ allowedRoles, children }: Props) {
  if (allowedRoles !== '1') return null
  return <div>{children}</div>
}
