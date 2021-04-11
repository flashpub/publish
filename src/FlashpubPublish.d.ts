/// <reference types="next" />
/// <reference types="next/types/global" />

type CommunityName = 'outbreak';
type CommunityLongName = 'Outbreak';
type CommunitySymbol = 'dx';

type FlashpubSetup = {
  default_environment: 'DEV' | 'TEST' | 'PROD';
};

type LocalConfig = {
  /**
   * @param targetCommunity
   */
  targetCommunity: CommunityName;

  /**
   * @param localhost
   */
  localhost: {
    default_environment: 'dev';
  };
};

type FlashpubCommunity = {
  /**
   * @param url
   */
  url: string;

  /**
   * @param name
   */
  name: CommunityName;

  /**
   * @param longName
   */
  longName: CommunityLongName;

  /**
   * @param symbol
   * community shorthand:
   * - 'dx' for 'outbreak
   */
  symbol: CommunitySymbol;

  /**
   * @param id
   */
  id: string;

  /**
   * @param color
   */
  color?: string;
};

type FlashpubPublishConfig = {
  community: FlashpubCommunity;
  setup: FlashpubSetup;
};
