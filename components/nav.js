import Link from 'next/link';
import { siteURLs } from '../site-config/site-urls';

export default (props) => {    

    const renderLinkAnchor = (linkText) => {
        return <a>{linkText}</a>;
    };

    const renderPrefetchLink = (linkText, url) => {
        return (
            <Link href={url} prefetch>
                {renderLinkAnchor(linkText)}
            </Link>
        )
    };

    const renderNonPrefetchLink = (linkText, url) => {
        return (
            <Link href={url}>
                {renderLinkAnchor(linkText)}
            </Link>
        )
    };

    const renderItem = (linkText, url, shouldPrefetch, index) => {
        const link = (shouldPrefetch
            ? renderPrefetchLink(linkText, url)
            : renderNonPrefetchLink(linkText, url)
        );

        return (
            <li key={index}>
                {link}
            </li>
        );
    };

    const renderItems = () => {
        const urlKeys = Object.keys(siteURLs);
        return urlKeys.map((urlKey, i) => (
            renderItem(siteURLs[urlKey].label, siteURLs[urlKey].route, siteURLs[urlKey].prefetch, i)
        ));
    };

    return (
        <nav>
            <ul>
                {renderItems()}
            </ul>
        </nav>
    );
};