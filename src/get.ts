import { get } from 'request';
import * as url from 'url';

const GITHUB = 'https://github.com/v3/'

export default function get(endpoint: string) {
    return url.resolve(GITHUB, endpoint);
}
