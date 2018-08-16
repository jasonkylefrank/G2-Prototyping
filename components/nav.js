import Link from 'next/link';
import { assetPrefix } from '../next.config';

export default (props) => {

    const urls = {
        'home': { 'label': 'Home', 'route': '/' },
        'about': { 'label': 'About', 'route': '/about' },
        'schedule': { 'label': 'Schedule', 'route': '/schedule' }
    };

    const renderItem = (linkText, url, index) => {
        // The assetPrefix solves the Github project pages URL prefix problem
        return (
            <li key={index}>
                <Link href={url} as={assetPrefix + url}>
                    <a>{linkText}</a>
                </Link>
            </li>
        );
    };

    const renderItems = () => {
        const urlKeys = Object.keys(urls);
        return urlKeys.map((urlKey, i) => (
            renderItem(urls[urlKey].label, urls[urlKey].route, i)
        ));
    };

    return (
        <ul>
            {renderItems()}
        </ul>
    );
};