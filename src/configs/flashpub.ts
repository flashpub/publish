import { selectCommunity } from '../utils/internal'

export const FLASHPUB_COMMUNITIES: FlashpubCommunity[] = [
  {
    symbol: 'dx',
    name: 'outbreak',
    longName: 'Outbreak',
    url: 'https://outbreak.flashpub.io',
    id: '962d873c-e0b6-4231-9ee2-80c792d36016',
    color: (a?: number) => `rgba(106, 151, 186, ${a || 1})`
  },
  {
    symbol: 'cl',
    name: 'clinic',
    longName: 'Clinic',
    url: 'https://clinic.flashpub.io',
    id: '9f39c304-9c67-4251-83d9-86f7837c0135',
    color: (a?: number) => `rgba(208, 2, 27, ${a || 1})`
  }
]

const FLASHPUB_CONFIG = (config?: FlashpubConfig) => ({
  communityName: config?.communityName || FLASHPUB_COMMUNITIES[0].name,
  community: selectCommunity(
    config?.communityName || FLASHPUB_COMMUNITIES[0].name,
    FLASHPUB_COMMUNITIES
  ),
  publish: {
    standalone: config?.publish.standalone || false,
    environment: config?.publish.environment || 'DEV'
  },
  connection: {
    apiKey: config?.connection?.apiKey || ''
  }
})

export default FLASHPUB_CONFIG
