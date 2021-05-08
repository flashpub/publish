export interface StateStatus<T = unknown> {
  data: T;
  redirect: [string, string?] | undefined;
  status: 'idle' | 'loading' | 'success' | 'error';
}

export type CommunitySymbol = 'dx' | 'cl';
export type CommunityName = 'outbreak' | 'clinic';
export type CommunityLongName = 'Outbreak' | 'Clinic';

export interface FPCommunity {
  readonly id: string;
  readonly url: string;
  readonly name: CommunityName;
  readonly symbol: CommunitySymbol;
  readonly longName: CommunityLongName;
}
export interface FPConnection {
  apiKey?: string;
  baseUrl?: string;
}
export interface FPConfig {
  community: FPCommunity;
  communityName: CommunityName;
  connection: FPConnection;
}

export interface Provider {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string;
  phoneNumber: string | null;
  providerId: string;
}
export interface Certificate {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string;
  emailVerified: boolean;
  phoneNumber: string | null;
  isAnonymous: boolean;
  tenantId: string | null;
  apiKey: string;
  providerData: Provider[];
}
export interface CommunityContentType {
  readonly order: number;
  readonly info: CommunityContentInfo;
  readonly claim: CommunityContentClaim;
  readonly quickReviews: string[];
  readonly figureRequired: boolean;
  readonly contentTypeLabel: string;
  readonly defaultConditions: CommunityDefaultCondition[];
  readonly reviewPeriodEnabled: boolean;
  readonly articleType: 'micropub' | 'microreview';
}
type CommunityContentInfo = {
  readonly title: string;
  readonly diagram: string;
  readonly description: string;
};
type CommunityContentClaimItem = {
  readonly label: string;
  readonly filter: string;
  readonly newTermAllowed: boolean;
  readonly setFilterAsItem: boolean;
};
type CommunityDefaultCondition = { name: string; type: any };
type CommunityContentClaim = {
  readonly item1: CommunityContentClaimItem;
  readonly item2: CommunityContentClaimItem | null;
  readonly relationship: Relationship[] | null;
  readonly type: 'single' | 'relational' | null;
};
export interface CommunityMetrics {
  userCount: number;
  pubCount: number;
  subCommunityCount: number;
}
export interface Community {
  name: string;
  dictionaryId: string;
  legal?: {
    [key: string]: Legal;
  } | null;
  createdOn: number;
  metrics: CommunityMetrics;
  contentTypes: {
    [key: string]: CommunityContentType;
  };
  loadingTaglines: string[];
  topSubCommunities: string[];
  quickReviewTemplates: string[];
}
export type DictionaryMetrics = {
  readonly pubCount: number;
  readonly dateAdded: number;
  readonly authorCount: number;
  readonly dateModified: number;
};
export type DictionaryOrigin = {
  readonly url: string;
  readonly id: string;
  readonly tag: string;
};
export interface DictionaryTerm {
  readonly id: string;
  readonly isCommunity: boolean;
  readonly ancestors: string[];
  readonly metrics: DictionaryMetrics;
  readonly description: string;
  readonly name: string;
  readonly longName: string;
  readonly origin: DictionaryOrigin;
  readonly props: any | null;
  readonly type: string;
  readonly author: Author;
}
export interface Author {
  readonly email: string;
  readonly name: string;
  readonly id: string;
  readonly orcid: string;
}
