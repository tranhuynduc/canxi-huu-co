'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const BaseProivder = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }))
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default BaseProivder
