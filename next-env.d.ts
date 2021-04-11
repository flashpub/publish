/// <reference types="next" />
/// <reference types="next/types/global" />

type IStatus = {
  type: 'idle' | 'loading' | 'success' | 'error';
  msg?: Error | string;
};
type IState<T = unknown> = { data: T; status: IStatus };

type CommunitySymbol = 'dx' | 'cl';
type CommunityName = 'outbreak' | 'clinic';
type CommunityLongName = 'Outbreak' | 'Clinic';

interface FlashpubCommunity {
  readonly id: string;
  readonly url: string;
  readonly name: CommunityName;
  readonly symbol: CommunitySymbol;
  readonly longName: CommunityLongName;
  readonly color?: string | ((a?: number) => string);
}
interface FlashpubConfigPublish {
  readonly standalone: boolean;
  readonly environment: 'DEV' | 'TEST' | 'PROD';
}
interface FlashpubConfigConnection {
  readonly apiKey: string;
}

interface FlashpubConfig {
  readonly community: FlashpubCommunity;
  readonly publish: FlashpubConfigSetup;
  readonly communityName: CommunityName;
  readonly connection: FlashpubConfigConnection;
}

interface URLQueryProps {
  readonly apiKey: string;
  readonly communityName: CommunityName;
  readonly standalone: string | boolean;
}

interface CommunityDefinition {
  name: string;
  dictionaryId: string;
  legal?: {
    [key: string]: Legal;
  } | null;
  createdOn: number;
  metrics: CommunityMetrics;
  contentTypes: ContentTypes;
  loadingTaglines: string[];
  topSubCommunities: string[];
  quickReviewTemplates: string[];
}
