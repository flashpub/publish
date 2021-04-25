export type IStatus = {
  type: 'idle' | 'loading' | 'success' | 'error'
  msg?: Error | string
}
export type IState<T = unknown> = { data: T; status: IStatus }

export type CommunitySymbol = 'dx' | 'cl'
export type CommunityName = 'outbreak' | 'clinic'
export type CommunityLongName = 'Outbreak' | 'Clinic'

export interface FlashpubCommunity {
  readonly id: string
  readonly url: string
  readonly name: CommunityName
  readonly symbol: CommunitySymbol
  readonly longName: CommunityLongName
  readonly color?: string | ((a?: number) => string)
}
export interface FlashpubConfigPublish {
  readonly standalone: boolean
  readonly environment: 'DEV' | 'TEST' | 'PROD'
}
export interface FlashpubConfigConnection {
  readonly apiKey: string
}

export interface FlashpubConfig {
  readonly community: FlashpubCommunity
  readonly publish: FlashpubConfigPublish
  readonly communityName: CommunityName
  readonly connection: FlashpubConfigConnection
}

export interface URLQueryProps {
  readonly apiKey: string
  readonly communityName: CommunityName
  readonly standalone: string | boolean
}

export interface CommunityDefinition {
  contentTypes: Record<string, CommunityContentType>
  createdOn: number
  dictionaryId: string
  loadingTaglines: string[]
  metrics: CommunityMetrics
  name: string
  topSubCommunities: string[]
  url: string
}

export type CommunityDefaultCondition = { name: string; type: any }

export interface CommunityMetrics {
  readonly pubCount: number
  readonly userCount: number
  readonly subCommunityCount: number
}
export interface CommunityContentType {
  readonly articleType: 'micropub' | 'microreview'
  readonly claim: any
  readonly contentTypeLabel: string
  readonly defaultConditions: CommunityDefaultCondition[]
  readonly figureRequired: boolean
  readonly info: any
  readonly order: number
  readonly quickReviews: string[]
  readonly reviewPeriodEnabled: boolean
}
