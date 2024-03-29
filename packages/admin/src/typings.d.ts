import { useSelector as useSelectorOriginal } from 'react-redux'

declare module 'slash2'
declare module '*.css'
declare module '*.less' {
  const content: { [className: string]: string }
  export default content
}
declare module '*.scss'
declare module '*.sass'
declare module '*.gql'
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module 'omit.js'

// google analytics interface
interface GAFieldsObject {
  eventCategory: string
  eventAction: string
  eventLabel?: string
  eventValue?: number
  nonInteraction?: boolean
}
interface Window {
  ga: (command: 'send', hitType: 'event' | 'pageview', fieldsObject: GAFieldsObject | string) => void
  reloadAuthorized: () => void
}

declare let ga: (...args: any[]) => any

// preview.pro.ant.design only do not use in your production ;
declare let ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: 'site' | undefined

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false
declare const APOLLO_URI: string

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export = value
}

declare module 'umi' {
  const useSelector: typeof useSelectorOriginal
  function connect<StoreType>(storeGetter: (store: StoreType) => any): any
}
