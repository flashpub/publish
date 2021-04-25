import LocalConfig from '../flashpub.config.json'

import { Flashpub } from './configs'
import { FlashpubConfig } from './publish.types'
import { selectCommunity } from './utils/internal'

const config = LocalConfig as FlashpubConfig

export class PublishService {
  config = Flashpub(config)

  Config(config: Partial<FlashpubConfig>) {
    const prevConfig = this.config
    this.config = {
      communityName: config?.communityName || prevConfig.communityName,
      community: selectCommunity(
        config?.communityName || prevConfig.communityName
      ),
      publish: {
        standalone:
          config?.publish?.standalone || prevConfig.publish.standalone,
        environment:
          config?.publish?.environment || prevConfig.publish.environment
      },
      connection: {
        apiKey: config?.connection?.apiKey || prevConfig.connection.apiKey
      }
    }
  }
}
