import { MMKV } from 'react-native-mmkv'

export const OAuthTokenStorege = new MMKV({
    id: 'USER_OAUTH_TOKEN',
    encryptionKey: 'hunter2'
})
