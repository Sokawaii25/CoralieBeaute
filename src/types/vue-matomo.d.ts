declare module 'vue-matomo' {
  import { Plugin } from 'vue'
  import { Router } from 'vue-router'

  export interface MatomoOptions {
    host: string
    siteId: number
    router?: Router
    requireConsent?: boolean
    requireCookieConsent?: boolean
    trackInitialView?: boolean
    trackerFileName?: string
    enableLinkTracking?: boolean
    enableHeartBeatTimer?: boolean
    heartBeatTimerInterval?: number
    debug?: boolean
    disableCookies?: boolean
    userId?: string
    cookieDomain?: string
    domains?: string[]
    preInitActions?: Array<[string, ...any[]]>
  }

  export interface MatomoInstance {
    trackPageView(customTitle?: string): void
    trackEvent(category: string, action: string, name?: string, value?: number): void
    trackLink(url: string, linkType?: 'link' | 'download'): void
    setUserId(userId: string): void
    resetUserId(): void
    setCustomUrl(url: string): void
    setDocumentTitle(title: string): void
    setDownloadClasses(classes: string[]): void
    setDownloadExtensions(extensions: string[]): void
    setIgnoreClasses(classes: string[]): void
    setLinkClasses(classes: string[]): void
    setLinkTrackingTimer(time: number): void
    enableLinkTracking(enable: boolean): void
    enableHeartBeatTimer(activeTimeInSeconds?: number): void
    requireConsent(): void
    setConsentGiven(): void
    rememberConsentGiven(hoursToExpire?: number): void
    forgetConsentGiven(): void
    requireCookieConsent(): void
    setCookieConsentGiven(): void
    rememberCookieConsentGiven(hoursToExpire?: number): void
    forgetCookieConsentGiven(): void
  }

  const VueMatomo: Plugin<[MatomoOptions]>
  export default VueMatomo

  export function useMatomo(): MatomoInstance
}
