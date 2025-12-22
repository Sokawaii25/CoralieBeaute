export function useMatomoTracking() {
  // Track external link clicks
  const trackExternalLink = (linkName, url) => {
    if (window._paq) {
      window._paq.push(['trackLink', url, 'link'])
      window._paq.push(['trackEvent', 'External Link', 'Click', linkName])
    }
  }

  // Track internal navigation
  const trackNavigation = (section) => {
    if (window._paq) {
      window._paq.push(['trackEvent', 'Navigation', 'Click', section])
    }
  }

  // Track contact clicks
  const trackContact = (contactType, value) => {
    if (window._paq) {
      window._paq.push(['trackEvent', 'Contact', 'Click', `${contactType}: ${value}`])
    }
  }

  // Track social media clicks
  const trackSocialMedia = (platform) => {
    if (window._paq) {
      window._paq.push(['trackEvent', 'Social Media', 'Click', platform])
    }
  }

  return {
    trackExternalLink,
    trackNavigation,
    trackContact,
    trackSocialMedia
  }
}
