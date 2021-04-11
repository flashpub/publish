import React from 'react';
import { FuegoProvider } from '@nandorojo/swr-firestore';

import { Flashpub, Firebase } from '@configs';
import PublishContainer from '@containers/Publish';

import LocalConfig from '../flashpub.config';
import { selectCommunity } from './utils/internal';

const fuego = new Firebase();
const Config = LocalConfig as FlashpubConfig;

class FlashpubPublish {
  protected config = Flashpub(Config);

  constructor() {
    //
  }

  Setup = (config: Partial<FlashpubConfig>) => {
    const prevConfig = this.config;
    this.config = {
      communityName: config?.communityName || prevConfig.communityName,
      community: selectCommunity(
        config?.communityName || prevConfig.communityName,
      ),
      publish: {
        standalone: config?.publish.standalone || prevConfig.publish.standalone,
        environment:
          config?.publish.environment || prevConfig.publish.environment,
      },
      connection: {
        apiKey: config?.connection?.apiKey || prevConfig.connection.apiKey,
      },
    };
  };

  Container: React.FC<{ loader?: JSX.Element; error?: JSX.Element }> = (
    props,
  ) => {
    return (
      <FuegoProvider fuego={fuego}>
        <PublishContainer
          error={props.error}
          loader={props.loader}
          community={this.config.community}
        >
          {props.children}
        </PublishContainer>
      </FuegoProvider>
    );
  };
}

export default FlashpubPublish;
