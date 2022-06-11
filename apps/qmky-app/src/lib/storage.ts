import { MMKV } from 'react-native-mmkv'

export const OauthTokenStorege = new MMKV({
    id: 'USER_OAUTH_TOKEN',
    encryptionKey: 'hunter2'
})