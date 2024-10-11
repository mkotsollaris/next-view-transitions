import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useBrowserNativeTransitions } from './browser-native-events'

type FinishViewTransitionFunction = () => void

const ViewTransitionsContext = createContext<
  (callback: FinishViewTransitionFunction) => void
>(() => {})

export function ViewTransitions({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [finishViewTransition, setFinishViewTransition] = useState<FinishViewTransitionFunction | null>(null)

  const setFinishViewTransitionCallback = useCallback((callback: FinishViewTransitionFunction) => {
    setFinishViewTransition(() => callback)
  }, [])

  useEffect(() => {
    if (finishViewTransition) {
      finishViewTransition()
      setFinishViewTransition(null)
    }
  }, [finishViewTransition])

  useBrowserNativeTransitions()

  return (
    <ViewTransitionsContext.Provider value={setFinishViewTransitionCallback}>
      {children}
    </ViewTransitionsContext.Provider>
  )
}

export function useSetFinishViewTransition() {
  return useContext(ViewTransitionsContext)
}
