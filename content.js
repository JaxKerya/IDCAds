let adObserver;

// Reklam elementlerini gizle
function hideAds() {
    const adSelectors = [
        '.commercial-unit',
        '.ads-ad',
        '#tads',
        '#tadsb',
        'div[data-text-ad="1"]',
        'div[data-ad-container]',
        '.adsbygoogle',
        'div[aria-label*="reklam"]',
        'div[aria-label*="Reklam"]'
    ];

    const ads = document.querySelectorAll(adSelectors.join(','));
    ads.forEach(ad => {
        if (ad.style.display !== 'none' && ad.offsetHeight > 0) {
            ad.style.display = 'none';
        }
    });
}

// Sayfa değişikliklerini izle
function startObserver() {
    adObserver = new MutationObserver(() => {
        hideAds();
    });

    adObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', () => {
    hideAds();
    startObserver();
});

// Sayfa tamamen yüklendiğinde tekrar kontrol et
window.addEventListener('load', () => {
    hideAds();
}); 