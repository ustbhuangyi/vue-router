/* @flow */

export const inBrowser = typeof window !== 'undefined'

export const isIOS901 = inBrowser && /iPhone OS 9_[01]]/i.test(window.navigator.userAgent)

export const isWechatWK = inBrowser && window.__wxjs_is_wkwebview
