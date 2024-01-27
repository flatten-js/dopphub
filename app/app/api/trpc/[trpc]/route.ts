import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { type NextRequest } from "next/server"

import { appRouter } from "@/server/trpc/routes"
import { createTRPCContext } from '@/server/trpc/context'

const handler = (req: NextRequest) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createTRPCContext({ 
      headers: req.headers 
    })
  })
}

export { handler as GET, handler as POST }