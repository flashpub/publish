import * as React from 'react'
import { PublishService } from './publish.service'

export default class PublishModule extends PublishService {
  Container: React.FC<{ loader?: JSX.Element; error?: JSX.Element }> = (
    props
  ) => {
    console.log('this', this)
    return <div>PUBLISH</div>
  }
}
