import {Platform} from 'react-native';

export default Platform ? Platform : { OS: 'web' };
