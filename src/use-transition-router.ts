import { useRouter as useNextRouter } from 'next/router';
import {startTransition, useCallback, useMemo} from "react";
import { useSetFinishViewTransition } from "./transition-context";

export type TransitionOptions = {
  onTransitionReady?: () => void;
};

type NavigateOptionsWithTransition = AnalyserNode;

export type TransitionRouter = any & {
  push: (href: string, options?: NavigateOptionsWithTransition) => void;
  replace: (href: string, options?: NavigateOptionsWithTransition) => void;
};

export function useTransitionRouter() {
  const router = useNextRouter()
  const setFinishViewTransition = useSetFinishViewTransition()

  const triggerTransition = useCallback((cb: () => void, { onTransitionReady }: TransitionOptions = {}) => {
    if ('startViewTransition' in document) {
      // @ts-ignore
      const transition = document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            startTransition(() => {
              cb();
              setFinishViewTransition(resolve)
            })
          })
      )

      if (onTransitionReady) {
        transition.ready.then(onTransitionReady);
      }
    } else {
      return cb()
    }
  }, [setFinishViewTransition])

  const push = useCallback((
    href: string,
    // @ts-ignore 
    { onTransitionReady, ...options }: NavigateOptionsWithTransition = {}
  ) => {
    triggerTransition(() => router.push(href, options), {
      onTransitionReady
    })
  }, [triggerTransition, router])

  const replace = useCallback((
    href: string,
    // @ts-ignore 
    { onTransitionReady, ...options }: NavigateOptionsWithTransition = {}
  ) => {
    triggerTransition(() => router.replace(href, options), {
      onTransitionReady
    });
  }, [triggerTransition, router]);

  return useMemo<TransitionRouter>(
    () => ({
      ...router,
      push,
      replace,
    }),
    [push, replace, router]);
}