class SiteURL {
    constructor(label, route, prefetch) {
        this.label = label,
            this.route = route,
            this.prefetch = prefetch
    }
}

const siteURLs = {
    'home': new SiteURL('Home', '/', true),
    'about': new SiteURL('About', '/about', true),
    'schedule': new SiteURL('Schedule', '/schedule', true)
};

export {
    SiteURL,
    siteURLs
}