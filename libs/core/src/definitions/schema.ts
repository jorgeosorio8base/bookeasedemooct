import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Time: { input: any; output: any; }
};

export enum AggregationFunctionType {
  AnyValue = 'ANY_VALUE',
  Avg = 'AVG',
  Count = 'COUNT',
  GroupConcat = 'GROUP_CONCAT',
  Max = 'MAX',
  Min = 'MIN',
  StddevPop = 'STDDEV_POP',
  StddevSamp = 'STDDEV_SAMP',
  Sum = 'SUM',
  VarPop = 'VAR_POP',
  VarSamp = 'VAR_SAMP'
}

export type ApiToken = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ApiTokenRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

/** ApiTokens create input */
export type ApiTokenCreateInput = {
  name: Scalars['String']['input'];
  roles?: InputMaybe<ApiTokensRolesRelationInput>;
};

/** ApiTokens delete input */
export type ApiTokenDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ApiTokenFilter = {
  AND?: InputMaybe<Array<ApiTokenFilter>>;
  OR?: InputMaybe<Array<ApiTokenFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  token?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiTokenGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ApiTokenGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ApiTokenGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type ApiTokenKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** ApiTokenListResponse output */
export type ApiTokenListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<ApiToken>;
};

/** ApiTokenManyResponse output */
export type ApiTokenManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<ApiToken>;
};

/** No longer supported. Use `sort` instead. */
export enum ApiTokenOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** ApiTokens subscription payload */
export type ApiTokenPayload = {
  mutation: MutationType;
  node?: Maybe<ApiToken>;
  previousValues?: Maybe<ApiToken>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ApiTokenRelationFilter = {
  every?: InputMaybe<ApiTokenFilter>;
  none?: InputMaybe<ApiTokenFilter>;
  some?: InputMaybe<ApiTokenFilter>;
};

/** API Token Response */
export type ApiTokenResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  token: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


/** API Token Response */
export type ApiTokenResponseRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

export type ApiTokenSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** ApiTokens subscription filter */
export type ApiTokenSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ApiTokenFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** ApiTokens update input */
export type ApiTokenUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  token?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** ApiTokens update input */
export type ApiTokenUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<ApiTokensRolesUpdateRelationInput>;
};

export type ApiToken_PermissionFilter = {
  AND?: InputMaybe<Array<ApiToken_PermissionFilter>>;
  OR?: InputMaybe<Array<ApiToken_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  token?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ApiToken_PermissionRelationFilter = {
  every?: InputMaybe<ApiToken_PermissionFilter>;
  none?: InputMaybe<ApiToken_PermissionFilter>;
  some?: InputMaybe<ApiToken_PermissionFilter>;
};

/** ApiTokens relation input */
export type ApiTokensRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput>>>;
};

/** ApiTokens relation input */
export type ApiTokensRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<ApiTokens_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<ApiTokens_RoleUpdateInput>>>;
};

/** Roles create input from apiTokens */
export type ApiTokens_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from apiTokens */
export type ApiTokens_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

/** Application */
export type Application = {
  appType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: ApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type ApplicationDeleteMutationInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

/** Application install input */
export type ApplicationInstallInput = {
  appType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<ApplicationStatusEnum>;
};

/** ApplicationListResponse output */
export type ApplicationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Application>;
};

/** Application Status Enum */
export enum ApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type ApplicationUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ApplicationStatusEnum>;
};

/** Async Session */
export type AsyncSession = {
  sessionId: Scalars['String']['output'];
};

export type AsyncSessionStatusResponse = {
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

/** Auth response */
export type Auth = {
  accessToken?: Maybe<Scalars['String']['output']>;
  accessTokenExpiresAt?: Maybe<Scalars['Int']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  idTokenExpiresAt?: Maybe<Scalars['Int']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type AuthenticationProfile = {
  _description?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<AuthenticationProfileAttributes>;
  audiences?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  clientId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  databaseName?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  managementDomain?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<RoleListResponse>;
  secret?: Maybe<Scalars['String']['output']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AuthenticationProfileRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

/** Authentication Profile Attributes */
export type AuthenticationProfileAttributes = CognitoAuthProfileAttributes;

/** Authentication profile connection options */
export type AuthenticationProfileConnectionOptions = {
  facebook?: Maybe<FacebookOptions>;
  github?: Maybe<GithubOptions>;
  google?: Maybe<GoogleOptions>;
};

/** Authentication profile connection options input */
export type AuthenticationProfileConnectionsOptionsInput = {
  facebook?: InputMaybe<FacebookOptionsInput>;
  github?: InputMaybe<GithubOptionsInput>;
  google?: InputMaybe<GoogleOptionsInput>;
};

/** AuthenticationProfiles create input */
export type AuthenticationProfileCreateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles create many input */
export type AuthenticationProfileCreateManyInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesManyRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles delete input */
export type AuthenticationProfileDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticationProfileFilter = {
  AND?: InputMaybe<Array<AuthenticationProfileFilter>>;
  OR?: InputMaybe<Array<AuthenticationProfileFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  databaseName?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  domain?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  managementDomain?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  secret?: InputMaybe<StringPredicate>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AuthenticationProfileGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: AuthenticationProfileGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type AuthenticationProfileGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  audiences?: InputMaybe<Array<GroupByField>>;
  clientId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  databaseName?: InputMaybe<Array<GroupByField>>;
  domain?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  managementDomain?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  secret?: InputMaybe<Array<GroupByField>>;
  selfSignUpEmailDomains?: InputMaybe<Array<GroupByField>>;
  selfSignUpEnabled?: InputMaybe<Array<GroupByField>>;
  type?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type AuthenticationProfileKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfileListResponse output */
export type AuthenticationProfileListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** AuthenticationProfileManyResponse output */
export type AuthenticationProfileManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<AuthenticationProfile>;
};

/** No longer supported. Use `sort` instead. */
export enum AuthenticationProfileOrderBy {
  ClientIdAsc = 'clientId_ASC',
  ClientIdDesc = 'clientId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DatabaseNameAsc = 'databaseName_ASC',
  DatabaseNameDesc = 'databaseName_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DomainAsc = 'domain_ASC',
  DomainDesc = 'domain_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManagementDomainAsc = 'managementDomain_ASC',
  ManagementDomainDesc = 'managementDomain_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SelfSignUpEnabledAsc = 'selfSignUpEnabled_ASC',
  SelfSignUpEnabledDesc = 'selfSignUpEnabled_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** AuthenticationProfiles subscription payload */
export type AuthenticationProfilePayload = {
  mutation: MutationType;
  node?: Maybe<AuthenticationProfile>;
  previousValues?: Maybe<AuthenticationProfile>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AuthenticationProfileRelationFilter = {
  every?: InputMaybe<AuthenticationProfileFilter>;
  none?: InputMaybe<AuthenticationProfileFilter>;
  some?: InputMaybe<AuthenticationProfileFilter>;
};

export type AuthenticationProfileSort = {
  clientId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  databaseName?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  managementDomain?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  secret?: InputMaybe<SortOrder>;
  selfSignUpEnabled?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** AuthenticationProfiles subscription filter */
export type AuthenticationProfileSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AuthenticationProfileFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateByFilterInput = {
  audiences?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput>>>;
  clientId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  databaseName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  domain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  managementDomain?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  secret?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<UpdateByFilterListStringInput>>>;
  selfSignUpEnabled?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  type?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<AuthenticationProfilesRolesUpdateRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AuthenticationProfile_PermissionFilter = {
  AND?: InputMaybe<Array<AuthenticationProfile_PermissionFilter>>;
  OR?: InputMaybe<Array<AuthenticationProfile_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  databaseName?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  domain?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  managementDomain?: InputMaybe<StringPredicate>;
  name?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  secret?: InputMaybe<StringPredicate>;
  selfSignUpEnabled?: InputMaybe<BoolPredicate>;
  type?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type AuthenticationProfile_PermissionRelationFilter = {
  every?: InputMaybe<AuthenticationProfile_PermissionFilter>;
  none?: InputMaybe<AuthenticationProfile_PermissionFilter>;
  some?: InputMaybe<AuthenticationProfile_PermissionFilter>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesManyRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput>>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<AuthenticationProfiles_RoleUpdateInput>>>;
};

/** Roles create input from authenticationProfiles */
export type AuthenticationProfiles_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from authenticationProfiles */
export type AuthenticationProfiles_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

export type AuthenticationSetting = {
  _description?: Maybe<Scalars['String']['output']>;
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  connections?: Maybe<AuthenticationProfileConnectionOptions>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AuthenticationSettingFilter = {
  AND?: InputMaybe<Array<AuthenticationSettingFilter>>;
  OR?: InputMaybe<Array<AuthenticationSettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** AuthenticationSettings subscription payload */
export type AuthenticationSettingPayload = {
  mutation: MutationType;
  node?: Maybe<AuthenticationSetting>;
  previousValues?: Maybe<AuthenticationSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** AuthenticationSettings subscription filter */
export type AuthenticationSettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<AuthenticationSettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** AuthenticationSettings update input */
export type AuthenticationSettingUpdateInput = {
  allowedCallbacks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowedLogouts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  allowedWebOrigins?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  connections?: InputMaybe<AuthenticationProfileConnectionsOptionsInput>;
};

/** Users create input from avatar */
export type Avatar_UserCreateInput = {
  LibraryStaff: UsersLibraryStaffRelationInput;
  Notifications: UsersNotificationsRelationInput;
  Patrons: UsersPatronsRelationInput;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from avatar */
export type Avatar_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: InputMaybe<UserKeyFilter>;
};

export type AwsSignInfoResponse = {
  fields: Scalars['JSON']['output'];
  path: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type BigIntPredicateHaving = {
  AND?: InputMaybe<Array<BigIntPredicateHaving>>;
  OR?: InputMaybe<Array<BigIntPredicateHaving>>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not_equals?: InputMaybe<Scalars['BigInt']['input']>;
  not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BillingCurrentPlanResponse = {
  customerId?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Maybe<BillingPlanFeature>>>;
  id?: Maybe<Scalars['ID']['output']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetrics>>>;
  name?: Maybe<Scalars['String']['output']>;
  nextPlan?: Maybe<BillingNextPlanResponse>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  paymentDetails?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<WorkspaceStatus>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
};

export enum BillingDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type BillingDetailsResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: BillingDetailsOrigin;
};

export type BillingInvoiceItem = {
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  amountRemaining?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoicePdf?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<BillingInvoiceItemOrganizationInfo>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  periodEnd?: Maybe<Scalars['DateTime']['output']>;
  periodStart?: Maybe<Scalars['DateTime']['output']>;
  plan?: Maybe<BillingInvoiceItemPlanInfo>;
  project?: Maybe<BillingInvoiceItemProjectInfo>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type BillingInvoiceItemOrganizationInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingInvoiceItemPlanInfo = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingInvoiceItemProjectInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum BillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Project = 'PROJECT'
}

/** BillingInvoicesListResponse output */
export type BillingInvoicesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingInvoiceItem>;
};

export type BillingLimitMetricItem = {
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  showPriority?: Maybe<Scalars['Int']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type BillingMetricOverageItem = {
  value?: Maybe<Scalars['Float']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
};

export type BillingMetricUsageItem = {
  limitMetric?: Maybe<BillingLimitMetricItem>;
  overage?: Maybe<BillingMetricOverageItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type BillingMetricUsageQuotaItem = {
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** BillingMetricUsageQuotasListResponse output */
export type BillingMetricUsageQuotasListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingMetricUsageQuotaItem>;
};

export type BillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** BillingMetricUsagesListResponse output */
export type BillingMetricUsagesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<BillingMetricUsageItem>;
};

export type BillingNextPlanResponse = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type BillingPlanBaseInfo = {
  capacity?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  featuresTitle?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type BillingPlanFeature = {
  displayName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BillingPlanLimitMetricItem = {
  displayName?: Maybe<Scalars['String']['output']>;
  hardLimit?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['Int']['output']>;
  softLimit?: Maybe<Scalars['Float']['output']>;
};

export type BillingPlanLimitMetrics = {
  hardLimit?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['String']['output']>;
  softLimit?: Maybe<Scalars['String']['output']>;
};

/** BillingPlanUpdateMutationInput */
export type BillingPlanUpdateMutationInput = {
  planId: Scalars['ID']['input'];
  projectID: Scalars['ID']['input'];
};

export type Book = {
  Holds?: Maybe<Hold>;
  Loans?: Maybe<Loan>;
  Recommendations?: Maybe<Recommendation>;
  Reviews?: Maybe<Review>;
  _description?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  availability_status?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isbn?: Maybe<Scalars['String']['output']>;
  publication_date?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Books create input */
export type BookCreateInput = {
  Holds?: InputMaybe<BooksHoldsRelationInput>;
  Loans?: InputMaybe<BooksLoansRelationInput>;
  Recommendations?: InputMaybe<BooksRecommendationsRelationInput>;
  Reviews?: InputMaybe<BooksReviewsRelationInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Books create many input */
export type BookCreateManyInput = {
  Holds: BooksHoldsManyRelationInput;
  Loans: BooksLoansManyRelationInput;
  Recommendations: BooksRecommendationsManyRelationInput;
  Reviews: BooksReviewsManyRelationInput;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Books delete input */
export type BookDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** BookFieldsPermissions create input */
export type BookFieldsPermissions = {
  author?: InputMaybe<Scalars['Boolean']['input']>;
  availability_status?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  genre?: InputMaybe<Scalars['Boolean']['input']>;
  isbn?: InputMaybe<Scalars['Boolean']['input']>;
  publication_date?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookFilter = {
  AND?: InputMaybe<Array<BookFilter>>;
  Holds?: InputMaybe<HoldFilter>;
  Loans?: InputMaybe<LoanFilter>;
  OR?: InputMaybe<Array<BookFilter>>;
  Recommendations?: InputMaybe<RecommendationFilter>;
  Reviews?: InputMaybe<ReviewFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<StringPredicate>;
  availability_status?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  genre?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  isbn?: InputMaybe<StringPredicate>;
  publication_date?: InputMaybe<DateTimePredicate>;
  title?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type BookGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: BookGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type BookGroupByQuery = {
  Holds?: InputMaybe<HoldGroupByQuery>;
  Loans?: InputMaybe<LoanGroupByQuery>;
  Recommendations?: InputMaybe<RecommendationGroupByQuery>;
  Reviews?: InputMaybe<ReviewGroupByQuery>;
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  author?: InputMaybe<Array<GroupByField>>;
  availability_status?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  genre?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  isbn?: InputMaybe<Array<GroupByField>>;
  publication_date?: InputMaybe<Array<GroupByField>>;
  title?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type BookKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
};

/** BookListResponse output */
export type BookListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Book>;
};

/** BookManyResponse output */
export type BookManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Book>;
};

/** No longer supported. Use `sort` instead. */
export enum BookOrderBy {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  AvailabilityStatusAsc = 'availability_status_ASC',
  AvailabilityStatusDesc = 'availability_status_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GenreAsc = 'genre_ASC',
  GenreDesc = 'genre_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsbnAsc = 'isbn_ASC',
  IsbnDesc = 'isbn_DESC',
  PublicationDateAsc = 'publication_date_ASC',
  PublicationDateDesc = 'publication_date_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Books subscription payload */
export type BookPayload = {
  mutation: MutationType;
  node?: Maybe<Book>;
  previousValues?: Maybe<Book>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type BookSort = {
  Holds?: InputMaybe<HoldSort>;
  Loans?: InputMaybe<LoanSort>;
  Recommendations?: InputMaybe<RecommendationSort>;
  Reviews?: InputMaybe<ReviewSort>;
  author?: InputMaybe<SortOrder>;
  availability_status?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  genre?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isbn?: InputMaybe<SortOrder>;
  publication_date?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Books subscription filter */
export type BookSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<BookFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Books update input */
export type BookUpdateByFilterInput = {
  author?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  availability_status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  genre?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  isbn?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  title?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Books update input */
export type BookUpdateInput = {
  Holds?: InputMaybe<BooksHoldsUpdateRelationInput>;
  Loans?: InputMaybe<BooksLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<BooksRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<BooksReviewsUpdateRelationInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Book_PermissionFilter = {
  AND?: InputMaybe<Array<Book_PermissionFilter>>;
  Holds?: InputMaybe<Hold_PermissionFilter>;
  Loans?: InputMaybe<Loan_PermissionFilter>;
  OR?: InputMaybe<Array<Book_PermissionFilter>>;
  Recommendations?: InputMaybe<Recommendation_PermissionFilter>;
  Reviews?: InputMaybe<Review_PermissionFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<StringPredicate>;
  availability_status?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  genre?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  isbn?: InputMaybe<StringPredicate>;
  publication_date?: InputMaybe<DateTimePredicate>;
  title?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Holds create input from book_id */
export type Book_Id_HoldCreateInput = {
  book_id?: InputMaybe<HoldsBook_IdRelationInput>;
  patron_id?: InputMaybe<HoldsPatron_IdRelationInput>;
  position_in_queue?: InputMaybe<Scalars['Int']['input']>;
};

/** Holds update input from book_id */
export type Book_Id_HoldUpdateInput = {
  book_id?: InputMaybe<HoldsBook_IdUpdateRelationInput>;
  patron_id?: InputMaybe<HoldsPatron_IdUpdateRelationInput>;
  position_in_queue?: InputMaybe<Scalars['Int']['input']>;
};

/** Loans create input from book_id */
export type Book_Id_LoanCreateInput = {
  book_id?: InputMaybe<LoansBook_IdRelationInput>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  patron_id?: InputMaybe<LoansPatron_IdRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Loans update input from book_id */
export type Book_Id_LoanUpdateInput = {
  book_id?: InputMaybe<LoansBook_IdUpdateRelationInput>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  patron_id?: InputMaybe<LoansPatron_IdUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Recommendations create input from book_id */
export type Book_Id_RecommendationCreateInput = {
  book_id?: InputMaybe<RecommendationsBook_IdRelationInput>;
  patron_id?: InputMaybe<RecommendationsPatron_IdRelationInput>;
  reason: Scalars['String']['input'];
};

/** Recommendations update input from book_id */
export type Book_Id_RecommendationUpdateInput = {
  book_id?: InputMaybe<RecommendationsBook_IdUpdateRelationInput>;
  patron_id?: InputMaybe<RecommendationsPatron_IdUpdateRelationInput>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

/** Reviews create input from book_id */
export type Book_Id_ReviewCreateInput = {
  book_id?: InputMaybe<ReviewsBook_IdRelationInput>;
  comment: Scalars['String']['input'];
  patron_id?: InputMaybe<ReviewsPatron_IdRelationInput>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** Reviews update input from book_id */
export type Book_Id_ReviewUpdateInput = {
  book_id?: InputMaybe<ReviewsBook_IdUpdateRelationInput>;
  comment?: InputMaybe<Scalars['String']['input']>;
  patron_id?: InputMaybe<ReviewsPatron_IdUpdateRelationInput>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** Books relation input */
export type BooksHoldsManyRelationInput = {
  connect?: InputMaybe<HoldKeyFilter>;
};

/** Books relation input */
export type BooksHoldsRelationInput = {
  connect?: InputMaybe<HoldKeyFilter>;
  create?: InputMaybe<Book_Id_HoldCreateInput>;
};

/** Books relation input */
export type BooksHoldsUpdateRelationInput = {
  connect?: InputMaybe<HoldKeyFilter>;
  create?: InputMaybe<Book_Id_HoldCreateInput>;
  disconnect?: InputMaybe<HoldKeyFilter>;
  reconnect?: InputMaybe<HoldKeyFilter>;
  update?: InputMaybe<Book_Id_HoldUpdateInput>;
};

/** Books relation input */
export type BooksLoansManyRelationInput = {
  connect?: InputMaybe<LoanKeyFilter>;
};

/** Books relation input */
export type BooksLoansRelationInput = {
  connect?: InputMaybe<LoanKeyFilter>;
  create?: InputMaybe<Book_Id_LoanCreateInput>;
};

/** Books relation input */
export type BooksLoansUpdateRelationInput = {
  connect?: InputMaybe<LoanKeyFilter>;
  create?: InputMaybe<Book_Id_LoanCreateInput>;
  disconnect?: InputMaybe<LoanKeyFilter>;
  reconnect?: InputMaybe<LoanKeyFilter>;
  update?: InputMaybe<Book_Id_LoanUpdateInput>;
};

/** Books relation input */
export type BooksRecommendationsManyRelationInput = {
  connect?: InputMaybe<RecommendationKeyFilter>;
};

/** Books relation input */
export type BooksRecommendationsRelationInput = {
  connect?: InputMaybe<RecommendationKeyFilter>;
  create?: InputMaybe<Book_Id_RecommendationCreateInput>;
};

/** Books relation input */
export type BooksRecommendationsUpdateRelationInput = {
  connect?: InputMaybe<RecommendationKeyFilter>;
  create?: InputMaybe<Book_Id_RecommendationCreateInput>;
  disconnect?: InputMaybe<RecommendationKeyFilter>;
  reconnect?: InputMaybe<RecommendationKeyFilter>;
  update?: InputMaybe<Book_Id_RecommendationUpdateInput>;
};

/** Books relation input */
export type BooksReviewsManyRelationInput = {
  connect?: InputMaybe<ReviewKeyFilter>;
};

/** Books relation input */
export type BooksReviewsRelationInput = {
  connect?: InputMaybe<ReviewKeyFilter>;
  create?: InputMaybe<Book_Id_ReviewCreateInput>;
};

/** Books relation input */
export type BooksReviewsUpdateRelationInput = {
  connect?: InputMaybe<ReviewKeyFilter>;
  create?: InputMaybe<Book_Id_ReviewCreateInput>;
  disconnect?: InputMaybe<ReviewKeyFilter>;
  reconnect?: InputMaybe<ReviewKeyFilter>;
  update?: InputMaybe<Book_Id_ReviewUpdateInput>;
};

export type BoolPredicate = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolPredicateHaving = {
  AND?: InputMaybe<Array<BoolPredicateHaving>>;
  OR?: InputMaybe<Array<BoolPredicateHaving>>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

/** ChangePasswordInput */
export type ChangePasswordInput = {
  authProfileId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
};

/** Authentication Profile Attributes for Cognito */
export type CognitoAuthProfileAttributes = {
  clientAuthDomain?: Maybe<Scalars['String']['output']>;
};

/** Computed field mode */
export enum ComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL'
}

/** Custom Table Field Type */
export type CustomTableField = {
  computedMode?: Maybe<ComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<FieldType>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  isList: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Date Field Attributes */
export type DateFieldTypeAttributes = {
  format: Scalars['String']['output'];
};

export enum DatePartFunctionType {
  Date = 'DATE',
  Day = 'DAY',
  DayName = 'DAY_NAME',
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  DayOfYear = 'DAY_OF_YEAR',
  Hour = 'HOUR',
  LastDay = 'LAST_DAY',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  Month = 'MONTH',
  MonthName = 'MONTH_NAME',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  Time = 'TIME',
  Week = 'WEEK',
  WeekDay = 'WEEK_DAY',
  WeekOfYear = 'WEEK_OF_YEAR',
  Year = 'YEAR',
  YearWeek = 'YEAR_WEEK'
}

export type DatePredicateHaving = {
  AND?: InputMaybe<Array<DatePredicateHaving>>;
  OR?: InputMaybe<Array<DatePredicateHaving>>;
  equals?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  not_equals?: InputMaybe<Scalars['Date']['input']>;
  not_in?: InputMaybe<Array<Scalars['Date']['input']>>;
};

export type DateRelativePredicateType = {
  op?: InputMaybe<RelativePredicateOpEnum>;
  unit?: InputMaybe<RelativePredicateUnitEnum>;
  value: Scalars['String']['input'];
};

export type DateRelativePredicates = {
  gt?: InputMaybe<DateRelativePredicateType>;
  gte?: InputMaybe<DateRelativePredicateType>;
  lt?: InputMaybe<DateRelativePredicateType>;
  lte?: InputMaybe<DateRelativePredicateType>;
};

export type DateTimePredicate = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  relative?: InputMaybe<DateRelativePredicates>;
};

export type DateTimePredicateHaving = {
  AND?: InputMaybe<Array<DateTimePredicateHaving>>;
  OR?: InputMaybe<Array<DateTimePredicateHaving>>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Date Type Format Enum */
export enum DateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** DeployDataResponse */
export type DeployDataResponse = {
  buildName: Scalars['String']['output'];
  uploadBuildUrl: Scalars['String']['output'];
  uploadMetaDataUrl: Scalars['String']['output'];
};

export enum DeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT'
}

/** DeployOptions */
export type DeployOptions = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<DeployModeEnum>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum DeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing'
}

/** DeployStatusResult */
export type DeployStatusResult = {
  message?: Maybe<Scalars['String']['output']>;
  status: DeployStatusEnum;
};

/** DeployingBuildInput */
export type DeployingBuildInput = {
  buildName: Scalars['String']['input'];
  options?: InputMaybe<DeployOptions>;
};

export type DeploymentAbItemResponse = {
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  userDeploy?: Maybe<SystemMemberAccountInfo>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
};

export type DigitalResource = {
  _description?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  availability_status?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  publication_date?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** DigitalResources create input */
export type DigitalResourceCreateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** DigitalResources create many input */
export type DigitalResourceCreateManyInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** DigitalResources delete input */
export type DigitalResourceDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** DigitalResourceFieldsPermissions create input */
export type DigitalResourceFieldsPermissions = {
  author?: InputMaybe<Scalars['Boolean']['input']>;
  availability_status?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  format?: InputMaybe<Scalars['Boolean']['input']>;
  publication_date?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DigitalResourceFilter = {
  AND?: InputMaybe<Array<DigitalResourceFilter>>;
  OR?: InputMaybe<Array<DigitalResourceFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<StringPredicate>;
  availability_status?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  format?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  publication_date?: InputMaybe<DateTimePredicate>;
  title?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type DigitalResourceGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: DigitalResourceGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type DigitalResourceGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  author?: InputMaybe<Array<GroupByField>>;
  availability_status?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  format?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  publication_date?: InputMaybe<Array<GroupByField>>;
  title?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type DigitalResourceKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** DigitalResourceListResponse output */
export type DigitalResourceListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<DigitalResource>;
};

/** DigitalResourceManyResponse output */
export type DigitalResourceManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<DigitalResource>;
};

/** No longer supported. Use `sort` instead. */
export enum DigitalResourceOrderBy {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  AvailabilityStatusAsc = 'availability_status_ASC',
  AvailabilityStatusDesc = 'availability_status_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublicationDateAsc = 'publication_date_ASC',
  PublicationDateDesc = 'publication_date_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** DigitalResources subscription payload */
export type DigitalResourcePayload = {
  mutation: MutationType;
  node?: Maybe<DigitalResource>;
  previousValues?: Maybe<DigitalResource>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type DigitalResourceSort = {
  author?: InputMaybe<SortOrder>;
  availability_status?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  publication_date?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** DigitalResources subscription filter */
export type DigitalResourceSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<DigitalResourceFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** DigitalResources update input */
export type DigitalResourceUpdateByFilterInput = {
  author?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  availability_status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  format?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  title?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** DigitalResources update input */
export type DigitalResourceUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DigitalResource_PermissionFilter = {
  AND?: InputMaybe<Array<DigitalResource_PermissionFilter>>;
  OR?: InputMaybe<Array<DigitalResource_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<StringPredicate>;
  availability_status?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  format?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  publication_date?: InputMaybe<DateTimePredicate>;
  title?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type EnvironmentBackupItem = {
  name: Scalars['String']['output'];
  size: Scalars['Float']['output'];
};

export type EnvironmentItem = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** EnvironmentSetupInput */
export type EnvironmentSetupInput = {
  deleteLock?: InputMaybe<Scalars['Boolean']['input']>;
  introspection?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnvironmentVariable = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** EnvironmentVariables create input */
export type EnvironmentVariableCreateInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** EnvironmentVariables create many input */
export type EnvironmentVariableCreateManyInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** EnvironmentVariables delete input */
export type EnvironmentVariableDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EnvironmentVariableFilter = {
  AND?: InputMaybe<Array<EnvironmentVariableFilter>>;
  OR?: InputMaybe<Array<EnvironmentVariableFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  value?: InputMaybe<StringPredicate>;
};

export type EnvironmentVariableGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: EnvironmentVariableGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type EnvironmentVariableGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  value?: InputMaybe<Array<GroupByField>>;
};

export type EnvironmentVariableKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** EnvironmentVariableListResponse output */
export type EnvironmentVariableListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** EnvironmentVariableManyResponse output */
export type EnvironmentVariableManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentVariable>;
};

/** No longer supported. Use `sort` instead. */
export enum EnvironmentVariableOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** EnvironmentVariables subscription payload */
export type EnvironmentVariablePayload = {
  mutation: MutationType;
  node?: Maybe<EnvironmentVariable>;
  previousValues?: Maybe<EnvironmentVariable>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EnvironmentVariableSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

/** EnvironmentVariables subscription filter */
export type EnvironmentVariableSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<EnvironmentVariableFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateByFilterInput = {
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  value?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Event = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  event_date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Events create input */
export type EventCreateInput = {
  description: Scalars['String']['input'];
  event_date?: InputMaybe<Scalars['DateTime']['input']>;
  location: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Events create many input */
export type EventCreateManyInput = {
  description: Scalars['String']['input'];
  event_date?: InputMaybe<Scalars['DateTime']['input']>;
  location: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Events delete input */
export type EventDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** EventFieldsPermissions create input */
export type EventFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  event_date?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventFilter = {
  AND?: InputMaybe<Array<EventFilter>>;
  OR?: InputMaybe<Array<EventFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  event_date?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  location?: InputMaybe<StringPredicate>;
  title?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type EventGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: EventGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type EventGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  description?: InputMaybe<Array<GroupByField>>;
  event_date?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  location?: InputMaybe<Array<GroupByField>>;
  title?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type EventKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** EventListResponse output */
export type EventListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Event>;
};

/** EventManyResponse output */
export type EventManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Event>;
};

/** No longer supported. Use `sort` instead. */
export enum EventOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EventDateAsc = 'event_date_ASC',
  EventDateDesc = 'event_date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Events subscription payload */
export type EventPayload = {
  mutation: MutationType;
  node?: Maybe<Event>;
  previousValues?: Maybe<Event>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type EventSort = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  event_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Events subscription filter */
export type EventSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<EventFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Events update input */
export type EventUpdateByFilterInput = {
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  location?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  title?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Events update input */
export type EventUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  event_date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Event_PermissionFilter = {
  AND?: InputMaybe<Array<Event_PermissionFilter>>;
  OR?: InputMaybe<Array<Event_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  event_date?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  location?: InputMaybe<StringPredicate>;
  title?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Facebook connection params */
export type FacebookOptions = {
  app_id: Scalars['String']['output'];
  app_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Facebook connection params input */
export type FacebookOptionsInput = {
  app_id: Scalars['String']['input'];
  app_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** Field Data Features */
export type FieldDataFeatures = {
  create: Scalars['Boolean']['output'];
  sort: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field Schema Features */
export type FieldSchemaFeatures = {
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field types */
export enum FieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID'
}

/** Field Type Attributes */
export type FieldTypeAttributes = DateFieldTypeAttributes | FileFieldTypeAttributes | GeoFieldTypeAttributes | MissingRelationFieldTypeAttributes | NumberFieldTypeAttributes | SmartFieldTypeAttributes | SwitchFieldTypeAttributes | TextFieldTypeAttributes | UuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type FieldTypeAttributesInput = {
  autoIncrement?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  fieldSize?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isBigInt?: InputMaybe<Scalars['Boolean']['input']>;
  listOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type File = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  /** No longer supported. Use `downloadUrl` instead. */
  downloadStorageUrl?: Maybe<Scalars['String']['output']>;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  /** No longer supported. Use `system.fileUploadSignInfo.AwsSignInfoResponse.fields` instead. */
  fields?: Maybe<Scalars['JSON']['output']>;
  fileId?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  meta?: Maybe<Scalars['JSON']['output']>;
  mods?: Maybe<Scalars['JSON']['output']>;
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  settings_landingPageImage?: Maybe<SettingListResponse>;
  settings_menuBarLogo?: Maybe<SettingListResponse>;
  shareUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** No longer supported */
  uploadUrl?: Maybe<Scalars['String']['output']>;
  /** No longer supported */
  uploaded?: Maybe<Scalars['Boolean']['output']>;
  users_avatar?: Maybe<UserListResponse>;
};


export type FileSettings_LandingPageImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingSort>>;
};


export type FileSettings_MenuBarLogoArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<SettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<SettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SettingSort>>;
};


export type FileUsers_AvatarArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

/** Files create input */
export type FileCreateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput>;
};

/** Files create many input */
export type FileCreateManyInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarManyRelationInput>;
};

/** Files delete input */
export type FileDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** File Field Attributes */
export type FileFieldTypeAttributes = {
  expiration?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
  maxSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']['output']>;
  typeRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

/** FileFieldsPermissions create input */
export type FileFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  downloadUrl?: InputMaybe<Scalars['Boolean']['input']>;
  fields?: InputMaybe<Scalars['Boolean']['input']>;
  fileId?: InputMaybe<Scalars['Boolean']['input']>;
  filename?: InputMaybe<Scalars['Boolean']['input']>;
  meta?: InputMaybe<Scalars['Boolean']['input']>;
  mods?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['Boolean']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  shareUrl?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  uploadUrl?: InputMaybe<Scalars['Boolean']['input']>;
  uploaded?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileFilter = {
  AND?: InputMaybe<Array<FileFilter>>;
  OR?: InputMaybe<Array<FileFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  downloadUrl?: InputMaybe<StringPredicate>;
  fileId?: InputMaybe<StringPredicate>;
  filename?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  provider?: InputMaybe<StringPredicate>;
  public?: InputMaybe<BoolPredicate>;
  settings_landingPageImage?: InputMaybe<SettingRelationFilter>;
  settings_menuBarLogo?: InputMaybe<SettingRelationFilter>;
  shareUrl?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploadUrl?: InputMaybe<StringPredicate>;
  uploaded?: InputMaybe<BoolPredicate>;
  users_avatar?: InputMaybe<UserRelationFilter>;
};

export type FileGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: FileGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type FileGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  downloadUrl?: InputMaybe<Array<GroupByField>>;
  fields?: InputMaybe<Array<GroupByField>>;
  fileId?: InputMaybe<Array<GroupByField>>;
  filename?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  meta?: InputMaybe<Array<GroupByField>>;
  mods?: InputMaybe<Array<GroupByField>>;
  provider?: InputMaybe<Array<GroupByField>>;
  public?: InputMaybe<Array<GroupByField>>;
  settings_landingPageImage?: InputMaybe<SettingGroupByQuery>;
  settings_menuBarLogo?: InputMaybe<SettingGroupByQuery>;
  shareUrl?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  uploadUrl?: InputMaybe<Array<GroupByField>>;
  uploaded?: InputMaybe<Array<GroupByField>>;
  users_avatar?: InputMaybe<UserGroupByQuery>;
};

export type FileKeyFilter = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FileListResponse output */
export type FileListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<File>;
};

/** FileManyResponse output */
export type FileManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<File>;
};

/** No longer supported. Use `sort` instead. */
export enum FileOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DownloadUrlAsc = 'downloadUrl_ASC',
  DownloadUrlDesc = 'downloadUrl_DESC',
  FieldsAsc = 'fields_ASC',
  FieldsDesc = 'fields_DESC',
  FileIdAsc = 'fileId_ASC',
  FileIdDesc = 'fileId_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaAsc = 'meta_ASC',
  MetaDesc = 'meta_DESC',
  ModsAsc = 'mods_ASC',
  ModsDesc = 'mods_DESC',
  ProviderAsc = 'provider_ASC',
  ProviderDesc = 'provider_DESC',
  PublicAsc = 'public_ASC',
  PublicDesc = 'public_DESC',
  ShareUrlAsc = 'shareUrl_ASC',
  ShareUrlDesc = 'shareUrl_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UploadUrlAsc = 'uploadUrl_ASC',
  UploadUrlDesc = 'uploadUrl_DESC',
  UploadedAsc = 'uploaded_ASC',
  UploadedDesc = 'uploaded_DESC'
}

/** Files subscription payload */
export type FilePayload = {
  mutation: MutationType;
  node?: Maybe<File>;
  previousValues?: Maybe<File>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FileSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  downloadUrl?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  filename?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  public?: InputMaybe<SortOrder>;
  shareUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploadUrl?: InputMaybe<SortOrder>;
  uploaded?: InputMaybe<SortOrder>;
};

export type FileStackSignInfoResponse = {
  apiKey: Scalars['String']['output'];
  path: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

/** Files subscription filter */
export type FileSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<FileFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** File Type Format Enum */
export enum FileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** Files update input */
export type FileUpdateByFilterInput = {
  downloadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  fields?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  fileId?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  filename?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  meta?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  mods?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  provider?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  public?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  shareUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  uploadUrl?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  uploaded?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
};

/** Files update input */
export type FileUpdateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput>;
};

export type FileUploadInfoResponse = {
  apiKey: Scalars['String']['output'];
  path: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type File_PermissionFilter = {
  AND?: InputMaybe<Array<File_PermissionFilter>>;
  OR?: InputMaybe<Array<File_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  downloadUrl?: InputMaybe<StringPredicate>;
  fileId?: InputMaybe<StringPredicate>;
  filename?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  provider?: InputMaybe<StringPredicate>;
  public?: InputMaybe<BoolPredicate>;
  settings_landingPageImage?: InputMaybe<Setting_PermissionRelationFilter>;
  settings_menuBarLogo?: InputMaybe<Setting_PermissionRelationFilter>;
  shareUrl?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  uploadUrl?: InputMaybe<StringPredicate>;
  uploaded?: InputMaybe<BoolPredicate>;
  users_avatar?: InputMaybe<User_PermissionRelationFilter>;
};

export type FilesSetting = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  filemanagername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  settings?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** FilesSettings create input */
export type FilesSettingCreateInput = {
  filemanagername: Scalars['String']['input'];
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings: Scalars['JSON']['input'];
};

/** FilesSettings create many input */
export type FilesSettingCreateManyInput = {
  filemanagername: Scalars['String']['input'];
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings: Scalars['JSON']['input'];
};

/** FilesSettings delete input */
export type FilesSettingDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FilesSettingFieldsPermissions create input */
export type FilesSettingFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  filemanagername?: InputMaybe<Scalars['Boolean']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilesSettingFilter = {
  AND?: InputMaybe<Array<FilesSettingFilter>>;
  OR?: InputMaybe<Array<FilesSettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  filemanagername?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  isEnabled?: InputMaybe<BoolPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type FilesSettingGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: FilesSettingGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type FilesSettingGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  filemanagername?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  isEnabled?: InputMaybe<Array<GroupByField>>;
  settings?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type FilesSettingKeyFilter = {
  filemanagername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** FilesSettingListResponse output */
export type FilesSettingListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<FilesSetting>;
};

/** FilesSettingManyResponse output */
export type FilesSettingManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<FilesSetting>;
};

/** No longer supported. Use `sort` instead. */
export enum FilesSettingOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  FilemanagernameAsc = 'filemanagername_ASC',
  FilemanagernameDesc = 'filemanagername_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsEnabledAsc = 'isEnabled_ASC',
  IsEnabledDesc = 'isEnabled_DESC',
  SettingsAsc = 'settings_ASC',
  SettingsDesc = 'settings_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** FilesSettings subscription payload */
export type FilesSettingPayload = {
  mutation: MutationType;
  node?: Maybe<FilesSetting>;
  previousValues?: Maybe<FilesSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FilesSettingSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  filemanagername?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isEnabled?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** FilesSettings subscription filter */
export type FilesSettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<FilesSettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** FilesSettings update input */
export type FilesSettingUpdateByFilterInput = {
  filemanagername?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  isEnabled?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  settings?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
};

/** FilesSettings update input */
export type FilesSettingUpdateInput = {
  filemanagername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
};

export type FilesSetting_PermissionFilter = {
  AND?: InputMaybe<Array<FilesSetting_PermissionFilter>>;
  OR?: InputMaybe<Array<FilesSetting_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  filemanagername?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  isEnabled?: InputMaybe<BoolPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Files relation input */
export type FilesUsers_AvatarManyRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
};

/** Files relation input */
export type FilesUsers_AvatarRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput>>>;
};

/** Files relation input */
export type FilesUsers_AvatarUpdateRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Avatar_UserCreateInput>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter>>;
  reconnect?: InputMaybe<Array<UserKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Avatar_UserUpdateInput>>>;
};

export type FloatPredicateHaving = {
  AND?: InputMaybe<Array<FloatPredicateHaving>>;
  OR?: InputMaybe<Array<FloatPredicateHaving>>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  not_in?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FrontendUtilizationAbResponse = {
  CDN?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

/** FunctionInfo */
export type FunctionInfo = {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
};

/** FunctionInfoCheck */
export type FunctionInfoCheck = {
  version?: Maybe<Scalars['String']['output']>;
};

/** FunctionInfoFilter */
export type FunctionInfoFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  functionType?: InputMaybe<FunctionType>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** FunctionInfoOrderBy */
export enum FunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** FunctionListResponse output */
export type FunctionListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<FunctionInfo>;
};

/** FunctionResolverInfo */
export type FunctionResolverInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  gqlType: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** FunctionTaskInfo */
export type FunctionTaskInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
  scheduleExpression?: Maybe<Scalars['String']['output']>;
};

/** FunctionTriggerInfo */
export type FunctionTriggerInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  name: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** FunctionType */
export enum FunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook'
}

/** FunctionWebhookInfo */
export type FunctionWebhookInfo = FunctionInfo & {
  application?: Maybe<Application>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: FunctionType;
  httpMethod: Scalars['String']['output'];
  name: Scalars['String']['output'];
  workspaceFullPath: Scalars['String']['output'];
  workspaceRelativePath: Scalars['String']['output'];
};

/** Geo Field Attributes */
export type GeoFieldTypeAttributes = {
  format: Scalars['String']['output'];
  srid?: Maybe<Scalars['Int']['output']>;
};

/** Github connection params */
export type GithubOptions = {
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Github connection params input */
export type GithubOptionsInput = {
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** Google connection params */
export type GoogleOptions = {
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
};

/** Google connection params input */
export type GoogleOptionsInput = {
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
};

/** GraphQLCreateFileCustomInput */
export type GraphQlCreateFileCustomInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

/** GraphQLCreateFileItemInput */
export type GraphQlCreateFileItemInput = {
  create?: InputMaybe<GraphQlCreateFileCustomInput>;
};

/** GraphQLFileItemResponse */
export type GraphQlFileItemResponse = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type GroupByField = {
  as?: InputMaybe<Scalars['String']['input']>;
  fn?: InputMaybe<Array<InputMaybe<GroupByFieldFunction>>>;
};

export type GroupByFieldFunction = {
  abs?: InputMaybe<Scalars['Boolean']['input']>;
  aggregate?: InputMaybe<AggregationFunctionType>;
  ascii?: InputMaybe<Scalars['Boolean']['input']>;
  bitLength?: InputMaybe<Scalars['Boolean']['input']>;
  ceil?: InputMaybe<Scalars['Boolean']['input']>;
  charLength?: InputMaybe<Scalars['Boolean']['input']>;
  crc32?: InputMaybe<Scalars['Boolean']['input']>;
  datePart?: InputMaybe<DatePartFunctionType>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  floor?: InputMaybe<Scalars['Boolean']['input']>;
  hex?: InputMaybe<Scalars['Boolean']['input']>;
  ifNull?: InputMaybe<Scalars['String']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<Scalars['Int']['input']>;
  length?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<PatternFunctionArguments>;
  locate?: InputMaybe<LocateFunctionArguments>;
  lower?: InputMaybe<Scalars['Boolean']['input']>;
  lpad?: InputMaybe<StringPadFunctionArguments>;
  ltrim?: InputMaybe<Scalars['Boolean']['input']>;
  mod?: InputMaybe<Scalars['Int']['input']>;
  notLike?: InputMaybe<PatternFunctionArguments>;
  nullIf?: InputMaybe<Scalars['String']['input']>;
  replace?: InputMaybe<ReplaceFunctionArguments>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<Scalars['Int']['input']>;
  round?: InputMaybe<Scalars['Int']['input']>;
  rpad?: InputMaybe<StringPadFunctionArguments>;
  rtrim?: InputMaybe<Scalars['Boolean']['input']>;
  sign?: InputMaybe<Scalars['Boolean']['input']>;
  substring?: InputMaybe<SubstringFunctionArguments>;
  trim?: InputMaybe<TrimFunctionArguments>;
  truncate?: InputMaybe<Scalars['Int']['input']>;
  upper?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupByResponse = {
  ApiTokenGroup: ApiTokenListResponse;
  AuthenticationProfileGroup: AuthenticationProfileListResponse;
  BigInt?: Maybe<Scalars['BigInt']['output']>;
  BookGroup: BookListResponse;
  Boolean?: Maybe<Scalars['Boolean']['output']>;
  Date?: Maybe<Scalars['Date']['output']>;
  DateTime?: Maybe<Scalars['DateTime']['output']>;
  DigitalResourceGroup: DigitalResourceListResponse;
  EnvironmentVariableGroup: EnvironmentVariableListResponse;
  EventGroup: EventListResponse;
  FileGroup: FileListResponse;
  FilesSettingGroup: FilesSettingListResponse;
  Float?: Maybe<Scalars['Float']['output']>;
  GroupIds?: Maybe<Array<Scalars['ID']['output']>>;
  HoldGroup: HoldListResponse;
  ID?: Maybe<Scalars['ID']['output']>;
  Int?: Maybe<Scalars['Int']['output']>;
  JSON?: Maybe<Scalars['JSON']['output']>;
  LibraryStaffGroup: LibraryStaffListResponse;
  LoanGroup: LoanListResponse;
  NotificationGroup: NotificationListResponse;
  PatronGroup: PatronListResponse;
  RecommendationGroup: RecommendationListResponse;
  ReviewGroup: ReviewListResponse;
  RoleGroup: RoleListResponse;
  String?: Maybe<Scalars['String']['output']>;
  UserGroup: UserListResponse;
};


export type GroupByResponseApiTokenGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
};


export type GroupByResponseAuthenticationProfileGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
};


export type GroupByResponseBookGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BookFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<BookGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<BookOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BookSort>>;
};


export type GroupByResponseDigitalResourceGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DigitalResourceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<DigitalResourceGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<DigitalResourceOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DigitalResourceSort>>;
};


export type GroupByResponseEnvironmentVariableGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort>>;
};


export type GroupByResponseEventGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EventGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventSort>>;
};


export type GroupByResponseFileGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileSort>>;
};


export type GroupByResponseFilesSettingGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilesSettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FilesSettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FilesSettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FilesSettingSort>>;
};


export type GroupByResponseHoldGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HoldFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<HoldGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<HoldOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<HoldSort>>;
};


export type GroupByResponseLibraryStaffGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LibraryStaffFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<LibraryStaffGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<LibraryStaffOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<LibraryStaffSort>>;
};


export type GroupByResponseLoanGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<LoanGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<LoanOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<LoanSort>>;
};


export type GroupByResponseNotificationGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<NotificationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationSort>>;
};


export type GroupByResponsePatronGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PatronFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<PatronGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<PatronOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PatronSort>>;
};


export type GroupByResponseRecommendationGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RecommendationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RecommendationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RecommendationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RecommendationSort>>;
};


export type GroupByResponseReviewGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ReviewGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ReviewOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReviewSort>>;
};


export type GroupByResponseRoleGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};


export type GroupByResponseUserGroupArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

export type GroupBySort = {
  alias: Scalars['String']['input'];
  direction: SortOrder;
};

export type GroupIdentifiersGroupByField = {
  as: Scalars['String']['input'];
};

export type Having = {
  AND?: InputMaybe<Array<Having>>;
  OR?: InputMaybe<Array<Having>>;
  alias?: InputMaybe<Scalars['String']['input']>;
  bigint?: InputMaybe<BigIntPredicateHaving>;
  bool?: InputMaybe<BoolPredicateHaving>;
  date?: InputMaybe<DatePredicateHaving>;
  datetime?: InputMaybe<DateTimePredicateHaving>;
  float?: InputMaybe<FloatPredicateHaving>;
  id?: InputMaybe<IdPredicateHaving>;
  int?: InputMaybe<IntPredicateHaving>;
  string?: InputMaybe<StringPredicateHaving>;
};

export type Hold = {
  _description?: Maybe<Scalars['String']['output']>;
  book_id?: Maybe<Book>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  patron_id?: Maybe<Patron>;
  position_in_queue?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Holds create input */
export type HoldCreateInput = {
  book_id?: InputMaybe<HoldsBook_IdRelationInput>;
  patron_id?: InputMaybe<HoldsPatron_IdRelationInput>;
  position_in_queue?: InputMaybe<Scalars['Int']['input']>;
};

/** Holds create many input */
export type HoldCreateManyInput = {
  book_id?: InputMaybe<HoldsBook_IdManyRelationInput>;
  patron_id?: InputMaybe<HoldsPatron_IdManyRelationInput>;
  position_in_queue?: InputMaybe<Scalars['Int']['input']>;
};

/** Holds delete input */
export type HoldDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** HoldFieldsPermissions create input */
export type HoldFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  position_in_queue?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HoldFilter = {
  AND?: InputMaybe<Array<HoldFilter>>;
  OR?: InputMaybe<Array<HoldFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  book_id?: InputMaybe<BookFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  patron_id?: InputMaybe<PatronFilter>;
  position_in_queue?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type HoldGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: HoldGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type HoldGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  book_id?: InputMaybe<BookGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  patron_id?: InputMaybe<PatronGroupByQuery>;
  position_in_queue?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type HoldKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** HoldListResponse output */
export type HoldListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Hold>;
};

/** HoldManyResponse output */
export type HoldManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Hold>;
};

/** No longer supported. Use `sort` instead. */
export enum HoldOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionInQueueAsc = 'position_in_queue_ASC',
  PositionInQueueDesc = 'position_in_queue_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Holds subscription payload */
export type HoldPayload = {
  mutation: MutationType;
  node?: Maybe<Hold>;
  previousValues?: Maybe<Hold>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type HoldSort = {
  book_id?: InputMaybe<BookSort>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  patron_id?: InputMaybe<PatronSort>;
  position_in_queue?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Holds subscription filter */
export type HoldSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<HoldFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Holds update input */
export type HoldUpdateByFilterInput = {
  position_in_queue?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
};

/** Holds update input */
export type HoldUpdateInput = {
  book_id?: InputMaybe<HoldsBook_IdUpdateRelationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  patron_id?: InputMaybe<HoldsPatron_IdUpdateRelationInput>;
  position_in_queue?: InputMaybe<Scalars['Int']['input']>;
};

export type Hold_PermissionFilter = {
  AND?: InputMaybe<Array<Hold_PermissionFilter>>;
  OR?: InputMaybe<Array<Hold_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  book_id?: InputMaybe<Book_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  patron_id?: InputMaybe<Patron_PermissionFilter>;
  position_in_queue?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Holds relation input */
export type HoldsBook_IdManyRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
};

/** Holds relation input */
export type HoldsBook_IdRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
  create?: InputMaybe<Holds_BookCreateInput>;
};

/** Holds relation input */
export type HoldsBook_IdUpdateRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
  create?: InputMaybe<Holds_BookCreateInput>;
  disconnect?: InputMaybe<BookKeyFilter>;
  reconnect?: InputMaybe<BookKeyFilter>;
  update?: InputMaybe<Holds_BookUpdateInput>;
};

/** Holds relation input */
export type HoldsPatron_IdManyRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
};

/** Holds relation input */
export type HoldsPatron_IdRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
  create?: InputMaybe<Holds_PatronCreateInput>;
};

/** Holds relation input */
export type HoldsPatron_IdUpdateRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
  create?: InputMaybe<Holds_PatronCreateInput>;
  disconnect?: InputMaybe<PatronKeyFilter>;
  reconnect?: InputMaybe<PatronKeyFilter>;
  update?: InputMaybe<Holds_PatronUpdateInput>;
};

/** Books create input from Holds */
export type Holds_BookCreateInput = {
  Holds?: InputMaybe<BooksHoldsRelationInput>;
  Loans?: InputMaybe<BooksLoansRelationInput>;
  Recommendations?: InputMaybe<BooksRecommendationsRelationInput>;
  Reviews: BooksReviewsRelationInput;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Books update input from Holds */
export type Holds_BookUpdateInput = {
  Holds?: InputMaybe<BooksHoldsUpdateRelationInput>;
  Loans?: InputMaybe<BooksLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<BooksRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<BooksReviewsUpdateRelationInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Patrons create input from Holds */
export type Holds_PatronCreateInput = {
  Holds?: InputMaybe<PatronsHoldsRelationInput>;
  Loans?: InputMaybe<PatronsLoansRelationInput>;
  Recommendations: PatronsRecommendationsRelationInput;
  Reviews: PatronsReviewsRelationInput;
  borrowing_history: Scalars['JSON']['input'];
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdRelationInput>;
};

/** Patrons update input from Holds */
export type Holds_PatronUpdateInput = {
  Holds?: InputMaybe<PatronsHoldsUpdateRelationInput>;
  Loans?: InputMaybe<PatronsLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<PatronsRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<PatronsReviewsUpdateRelationInput>;
  borrowing_history?: InputMaybe<Scalars['JSON']['input']>;
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdUpdateRelationInput>;
};

export type IdPredicate = {
  contains?: InputMaybe<Scalars['ID']['input']>;
  ends_with?: InputMaybe<Scalars['ID']['input']>;
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not_contains?: InputMaybe<Scalars['ID']['input']>;
  not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type IdPredicateHaving = {
  AND?: InputMaybe<Array<IdPredicateHaving>>;
  OR?: InputMaybe<Array<IdPredicateHaving>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  ends_with?: InputMaybe<Scalars['ID']['input']>;
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not_contains?: InputMaybe<Scalars['ID']['input']>;
  not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
  not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** ImportCSV */
export type ImportCsv = {
  data: ImportCsvData;
  tableId: Scalars['String']['input'];
};

export type ImportCsvData = {
  fields?: InputMaybe<Scalars['String']['input']>;
  hasHeader?: InputMaybe<Scalars['Boolean']['input']>;
  matchField?: InputMaybe<Scalars['String']['input']>;
  overwrite?: InputMaybe<Scalars['Boolean']['input']>;
  tableFields?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

/** ImportedTable */
export type ImportedTable = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Inbox Events List Filter */
export type InboxEventsListFilter = {
  isCompleted?: InputMaybe<IntPredicate>;
};

/** Table Create Index Input */
export type IndexCreateInput = {
  columns: Array<TableIndexColumnInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['ID']['input'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type IndexDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Update Index Input */
export type IndexUpdateInput = {
  columns?: InputMaybe<Array<TableIndexColumnInput>>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TableIndexType>;
};

export type IntPredicate = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntPredicateHaving = {
  AND?: InputMaybe<Array<IntPredicateHaving>>;
  OR?: InputMaybe<Array<IntPredicateHaving>>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntrospectionQueryResponse = {
  url: Scalars['String']['output'];
};

export enum InvitationRoleEnum {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER'
}

/** Invited By Name */
export type InvitedByName = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  workspaceName?: Maybe<Scalars['String']['output']>;
};

/** InvokeData */
export type InvokeData = {
  functionName: Scalars['String']['input'];
  inputArgs?: InputMaybe<Scalars['String']['input']>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
};

/** InvokeFunctionResponse */
export type InvokeFunctionResponse = {
  responseData: Scalars['String']['output'];
};

/** IsSocialUser */
export type IsSocialUser = {
  email: Scalars['String']['input'];
};

export type IsSocialUserResponse = {
  isSocialUser?: Maybe<Scalars['Boolean']['output']>;
};

export type LibraryStaff = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<User>;
};

/** LibraryStaff create input */
export type LibraryStaffCreateInput = {
  position?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<LibraryStaffUser_IdRelationInput>;
};

/** LibraryStaff create many input */
export type LibraryStaffCreateManyInput = {
  position?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<LibraryStaffUser_IdManyRelationInput>;
};

/** LibraryStaff delete input */
export type LibraryStaffDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** LibraryStaffFieldsPermissions create input */
export type LibraryStaffFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LibraryStaffFilter = {
  AND?: InputMaybe<Array<LibraryStaffFilter>>;
  OR?: InputMaybe<Array<LibraryStaffFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  position?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<UserFilter>;
};

export type LibraryStaffGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: LibraryStaffGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type LibraryStaffGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  position?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  user_id?: InputMaybe<UserGroupByQuery>;
};

export type LibraryStaffKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** LibraryStaffListResponse output */
export type LibraryStaffListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<LibraryStaff>;
};

/** LibraryStaffManyResponse output */
export type LibraryStaffManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<LibraryStaff>;
};

/** No longer supported. Use `sort` instead. */
export enum LibraryStaffOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** LibraryStaff subscription payload */
export type LibraryStaffPayload = {
  mutation: MutationType;
  node?: Maybe<LibraryStaff>;
  previousValues?: Maybe<LibraryStaff>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type LibraryStaffSort = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<UserSort>;
};

/** LibraryStaff subscription filter */
export type LibraryStaffSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<LibraryStaffFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** LibraryStaff update input */
export type LibraryStaffUpdateByFilterInput = {
  position?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** LibraryStaff update input */
export type LibraryStaffUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<LibraryStaffUser_IdUpdateRelationInput>;
};

/** LibraryStaff relation input */
export type LibraryStaffUser_IdManyRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
};

/** LibraryStaff relation input */
export type LibraryStaffUser_IdRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
  create?: InputMaybe<LibraryStaff_UserCreateInput>;
};

/** LibraryStaff relation input */
export type LibraryStaffUser_IdUpdateRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
  create?: InputMaybe<LibraryStaff_UserCreateInput>;
  disconnect?: InputMaybe<UserKeyFilter>;
  reconnect?: InputMaybe<UserKeyFilter>;
  update?: InputMaybe<LibraryStaff_UserUpdateInput>;
};

export type LibraryStaff_PermissionFilter = {
  AND?: InputMaybe<Array<LibraryStaff_PermissionFilter>>;
  OR?: InputMaybe<Array<LibraryStaff_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  position?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<User_PermissionFilter>;
};

/** Users create input from LibraryStaff */
export type LibraryStaff_UserCreateInput = {
  LibraryStaff?: InputMaybe<UsersLibraryStaffRelationInput>;
  Notifications: UsersNotificationsRelationInput;
  Patrons?: InputMaybe<UsersPatronsRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from LibraryStaff */
export type LibraryStaff_UserUpdateInput = {
  LibraryStaff?: InputMaybe<UsersLibraryStaffUpdateRelationInput>;
  Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>;
  Patrons?: InputMaybe<UsersPatronsUpdateRelationInput>;
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Loan = {
  _description?: Maybe<Scalars['String']['output']>;
  book_id?: Maybe<Book>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  due_date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  patron_id?: Maybe<Patron>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Loans create input */
export type LoanCreateInput = {
  book_id?: InputMaybe<LoansBook_IdRelationInput>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  patron_id?: InputMaybe<LoansPatron_IdRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Loans create many input */
export type LoanCreateManyInput = {
  book_id?: InputMaybe<LoansBook_IdManyRelationInput>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  patron_id?: InputMaybe<LoansPatron_IdManyRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Loans delete input */
export type LoanDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** LoanFieldsPermissions create input */
export type LoanFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  due_date?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LoanFilter = {
  AND?: InputMaybe<Array<LoanFilter>>;
  OR?: InputMaybe<Array<LoanFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  book_id?: InputMaybe<BookFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  due_date?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  patron_id?: InputMaybe<PatronFilter>;
  status?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type LoanGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: LoanGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type LoanGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  book_id?: InputMaybe<BookGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  due_date?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  patron_id?: InputMaybe<PatronGroupByQuery>;
  status?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type LoanKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** LoanListResponse output */
export type LoanListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Loan>;
};

/** LoanManyResponse output */
export type LoanManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Loan>;
};

/** No longer supported. Use `sort` instead. */
export enum LoanOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DueDateAsc = 'due_date_ASC',
  DueDateDesc = 'due_date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Loans subscription payload */
export type LoanPayload = {
  mutation: MutationType;
  node?: Maybe<Loan>;
  previousValues?: Maybe<Loan>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type LoanSort = {
  book_id?: InputMaybe<BookSort>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  patron_id?: InputMaybe<PatronSort>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Loans subscription filter */
export type LoanSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<LoanFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Loans update input */
export type LoanUpdateByFilterInput = {
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Loans update input */
export type LoanUpdateInput = {
  book_id?: InputMaybe<LoansBook_IdUpdateRelationInput>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  patron_id?: InputMaybe<LoansPatron_IdUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Loan_PermissionFilter = {
  AND?: InputMaybe<Array<Loan_PermissionFilter>>;
  OR?: InputMaybe<Array<Loan_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  book_id?: InputMaybe<Book_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  due_date?: InputMaybe<DateTimePredicate>;
  id?: InputMaybe<IdPredicate>;
  patron_id?: InputMaybe<Patron_PermissionFilter>;
  status?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Loans relation input */
export type LoansBook_IdManyRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
};

/** Loans relation input */
export type LoansBook_IdRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
  create?: InputMaybe<Loans_BookCreateInput>;
};

/** Loans relation input */
export type LoansBook_IdUpdateRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
  create?: InputMaybe<Loans_BookCreateInput>;
  disconnect?: InputMaybe<BookKeyFilter>;
  reconnect?: InputMaybe<BookKeyFilter>;
  update?: InputMaybe<Loans_BookUpdateInput>;
};

/** Loans relation input */
export type LoansPatron_IdManyRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
};

/** Loans relation input */
export type LoansPatron_IdRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
  create?: InputMaybe<Loans_PatronCreateInput>;
};

/** Loans relation input */
export type LoansPatron_IdUpdateRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
  create?: InputMaybe<Loans_PatronCreateInput>;
  disconnect?: InputMaybe<PatronKeyFilter>;
  reconnect?: InputMaybe<PatronKeyFilter>;
  update?: InputMaybe<Loans_PatronUpdateInput>;
};

/** Books create input from Loans */
export type Loans_BookCreateInput = {
  Holds: BooksHoldsRelationInput;
  Loans?: InputMaybe<BooksLoansRelationInput>;
  Recommendations?: InputMaybe<BooksRecommendationsRelationInput>;
  Reviews: BooksReviewsRelationInput;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Books update input from Loans */
export type Loans_BookUpdateInput = {
  Holds?: InputMaybe<BooksHoldsUpdateRelationInput>;
  Loans?: InputMaybe<BooksLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<BooksRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<BooksReviewsUpdateRelationInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Patrons create input from Loans */
export type Loans_PatronCreateInput = {
  Holds: PatronsHoldsRelationInput;
  Loans?: InputMaybe<PatronsLoansRelationInput>;
  Recommendations: PatronsRecommendationsRelationInput;
  Reviews: PatronsReviewsRelationInput;
  borrowing_history: Scalars['JSON']['input'];
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdRelationInput>;
};

/** Patrons update input from Loans */
export type Loans_PatronUpdateInput = {
  Holds?: InputMaybe<PatronsHoldsUpdateRelationInput>;
  Loans?: InputMaybe<PatronsLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<PatronsRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<PatronsReviewsUpdateRelationInput>;
  borrowing_history?: InputMaybe<Scalars['JSON']['input']>;
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdUpdateRelationInput>;
};

export type LocateFunctionArguments = {
  pos?: InputMaybe<Scalars['Int']['input']>;
  str: Scalars['String']['input'];
};

/** LoginResponse */
export type LoginResponse = {
  auth?: Maybe<Auth>;
  success?: Maybe<Scalars['Boolean']['output']>;
  workspaces?: Maybe<Array<WorkspaceInfo>>;
};

/** MissingRelation */
export type MissingRelation = {
  table: Scalars['String']['output'];
};

/** MissingRelation Field Attributes */
export type MissingRelationFieldTypeAttributes = {
  missingTable: Scalars['String']['output'];
};

export type Mutation = {
  ImportCSV?: Maybe<AsyncSession>;
  IsSocialUser?: Maybe<IsSocialUserResponse>;
  apiTokenCreate: ApiTokenResponse;
  apiTokenDelete?: Maybe<SuccessResponse>;
  apiTokenDeleteByFilter?: Maybe<SuccessResponse>;
  apiTokenDestroy?: Maybe<SuccessResponse>;
  apiTokenDestroyByFilter?: Maybe<SuccessResponse>;
  apiTokenRestore: ApiToken;
  apiTokenUpdate: ApiToken;
  apiTokenUpdateByFilter: ApiTokenManyResponse;
  /** @deprecated No longer supported. Use `system.applicationDelete` instead. */
  applicationDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.applicationInstall` instead. */
  applicationInstall?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationUpdate` instead. */
  applicationUpdate?: Maybe<Application>;
  authenticationProfileCreate: AuthenticationProfile;
  authenticationProfileCreateMany: AuthenticationProfileManyResponse;
  authenticationProfileDelete?: Maybe<SuccessResponse>;
  authenticationProfileDeleteByFilter?: Maybe<SuccessResponse>;
  authenticationProfileDestroy?: Maybe<SuccessResponse>;
  authenticationProfileDestroyByFilter?: Maybe<SuccessResponse>;
  authenticationProfileRestore: AuthenticationProfile;
  authenticationProfileUpdate: AuthenticationProfile;
  authenticationProfileUpdateByFilter: AuthenticationProfileManyResponse;
  authenticationSettingsUpdate: AuthenticationSetting;
  /** @deprecated No longer supported. Use `system.billingPlanUpdate` instead. */
  billingPlanUpdate?: Maybe<BillingCurrentPlanResponse>;
  bookCreate: Book;
  bookCreateMany: BookManyResponse;
  bookDelete?: Maybe<SuccessResponse>;
  bookDeleteByFilter?: Maybe<SuccessResponse>;
  bookDestroy?: Maybe<SuccessResponse>;
  bookDestroyByFilter?: Maybe<SuccessResponse>;
  bookRestore: Book;
  bookUpdate: Book;
  bookUpdateByFilter: BookManyResponse;
  /** @deprecated No longer supported. Use `system.deploy` instead. */
  deploy?: Maybe<Scalars['Boolean']['output']>;
  digitalResourceCreate: DigitalResource;
  digitalResourceCreateMany: DigitalResourceManyResponse;
  digitalResourceDelete?: Maybe<SuccessResponse>;
  digitalResourceDeleteByFilter?: Maybe<SuccessResponse>;
  digitalResourceDestroy?: Maybe<SuccessResponse>;
  digitalResourceDestroyByFilter?: Maybe<SuccessResponse>;
  digitalResourceRestore: DigitalResource;
  digitalResourceUpdate: DigitalResource;
  digitalResourceUpdateByFilter: DigitalResourceManyResponse;
  environmentVariableCreate: EnvironmentVariable;
  environmentVariableCreateMany: EnvironmentVariableManyResponse;
  environmentVariableDelete?: Maybe<SuccessResponse>;
  environmentVariableDeleteByFilter?: Maybe<SuccessResponse>;
  environmentVariableDestroy?: Maybe<SuccessResponse>;
  environmentVariableDestroyByFilter?: Maybe<SuccessResponse>;
  environmentVariableRestore: EnvironmentVariable;
  environmentVariableUpdate: EnvironmentVariable;
  environmentVariableUpdateByFilter: EnvironmentVariableManyResponse;
  eventCreate: Event;
  eventCreateMany: EventManyResponse;
  eventDelete?: Maybe<SuccessResponse>;
  eventDeleteByFilter?: Maybe<SuccessResponse>;
  eventDestroy?: Maybe<SuccessResponse>;
  eventDestroyByFilter?: Maybe<SuccessResponse>;
  eventRestore: Event;
  eventUpdate: Event;
  eventUpdateByFilter: EventManyResponse;
  /** @deprecated No longer supported. Use `system.fieldCreate` instead. */
  fieldCreate: TableField;
  /** @deprecated No longer supported. Use `system.fieldDelete` instead. */
  fieldDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.fieldUpdate` instead. */
  fieldUpdate: TableField;
  /** @deprecated No longer supported. Use `system.fieldUpdatePosition` instead. */
  fieldUpdatePosition: SuccessResponse;
  fileCreate: File;
  fileCreateMany: FileManyResponse;
  fileDelete?: Maybe<SuccessResponse>;
  fileDeleteByFilter?: Maybe<SuccessResponse>;
  fileDestroy?: Maybe<SuccessResponse>;
  fileDestroyByFilter?: Maybe<SuccessResponse>;
  fileRestore: File;
  fileUpdate: File;
  fileUpdateByFilter: FileManyResponse;
  filesSettingCreate: FilesSetting;
  filesSettingCreateMany: FilesSettingManyResponse;
  filesSettingDelete?: Maybe<SuccessResponse>;
  filesSettingDeleteByFilter?: Maybe<SuccessResponse>;
  filesSettingDestroy?: Maybe<SuccessResponse>;
  filesSettingDestroyByFilter?: Maybe<SuccessResponse>;
  filesSettingRestore: FilesSetting;
  filesSettingUpdate: FilesSetting;
  filesSettingUpdateByFilter: FilesSettingManyResponse;
  holdCreate: Hold;
  holdCreateMany: HoldManyResponse;
  holdDelete?: Maybe<SuccessResponse>;
  holdDeleteByFilter?: Maybe<SuccessResponse>;
  holdDestroy?: Maybe<SuccessResponse>;
  holdDestroyByFilter?: Maybe<SuccessResponse>;
  holdRestore: Hold;
  holdUpdate: Hold;
  holdUpdateByFilter: HoldManyResponse;
  indexCreate: TableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: TableIndex;
  /** @deprecated No longer supported. Use `system.invoke` instead. */
  invoke?: Maybe<InvokeFunctionResponse>;
  libraryStaffCreate: LibraryStaff;
  libraryStaffCreateMany: LibraryStaffManyResponse;
  libraryStaffDelete?: Maybe<SuccessResponse>;
  libraryStaffDeleteByFilter?: Maybe<SuccessResponse>;
  libraryStaffDestroy?: Maybe<SuccessResponse>;
  libraryStaffDestroyByFilter?: Maybe<SuccessResponse>;
  libraryStaffRestore: LibraryStaff;
  libraryStaffUpdate: LibraryStaff;
  libraryStaffUpdateByFilter: LibraryStaffManyResponse;
  loanCreate: Loan;
  loanCreateMany: LoanManyResponse;
  loanDelete?: Maybe<SuccessResponse>;
  loanDeleteByFilter?: Maybe<SuccessResponse>;
  loanDestroy?: Maybe<SuccessResponse>;
  loanDestroyByFilter?: Maybe<SuccessResponse>;
  loanRestore: Loan;
  loanUpdate: Loan;
  loanUpdateByFilter: LoanManyResponse;
  notificationCreate: Notification;
  notificationCreateMany: NotificationManyResponse;
  notificationDelete?: Maybe<SuccessResponse>;
  notificationDeleteByFilter?: Maybe<SuccessResponse>;
  notificationDestroy?: Maybe<SuccessResponse>;
  notificationDestroyByFilter?: Maybe<SuccessResponse>;
  notificationRestore: Notification;
  notificationUpdate: Notification;
  notificationUpdateByFilter: NotificationManyResponse;
  patronCreate: Patron;
  patronCreateMany: PatronManyResponse;
  patronDelete?: Maybe<SuccessResponse>;
  patronDeleteByFilter?: Maybe<SuccessResponse>;
  patronDestroy?: Maybe<SuccessResponse>;
  patronDestroyByFilter?: Maybe<SuccessResponse>;
  patronRestore: Patron;
  patronUpdate: Patron;
  patronUpdateByFilter: PatronManyResponse;
  /** @deprecated No longer supported. Use `system.prepareDeploy` instead. */
  prepareDeploy: DeployDataResponse;
  recommendationCreate: Recommendation;
  recommendationCreateMany: RecommendationManyResponse;
  recommendationDelete?: Maybe<SuccessResponse>;
  recommendationDeleteByFilter?: Maybe<SuccessResponse>;
  recommendationDestroy?: Maybe<SuccessResponse>;
  recommendationDestroyByFilter?: Maybe<SuccessResponse>;
  recommendationRestore: Recommendation;
  recommendationUpdate: Recommendation;
  recommendationUpdateByFilter: RecommendationManyResponse;
  reviewCreate: Review;
  reviewCreateMany: ReviewManyResponse;
  reviewDelete?: Maybe<SuccessResponse>;
  reviewDeleteByFilter?: Maybe<SuccessResponse>;
  reviewDestroy?: Maybe<SuccessResponse>;
  reviewDestroyByFilter?: Maybe<SuccessResponse>;
  reviewRestore: Review;
  reviewUpdate: Review;
  reviewUpdateByFilter: ReviewManyResponse;
  roleCreate: Role;
  roleCreateMany: RoleManyResponse;
  roleDelete?: Maybe<SuccessResponse>;
  roleDeleteByFilter?: Maybe<SuccessResponse>;
  roleDestroy?: Maybe<SuccessResponse>;
  roleDestroyByFilter?: Maybe<SuccessResponse>;
  roleRestore: Role;
  roleUpdate: Role;
  roleUpdateByFilter: RoleManyResponse;
  sendInvitationTo8base?: Maybe<SuccessResponse>;
  settingsUpdate: Setting;
  system?: Maybe<SystemMutation>;
  /** @deprecated No longer supported. Use `system.tableCreate` instead. */
  tableCreate: Table;
  /** @deprecated No longer supported. Use `system.tableDelete` instead. */
  tableDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.tableUpdate` instead. */
  tableUpdate: Table;
  userChangePassword?: Maybe<SuccessResponse>;
  userCreate: User;
  userCreateMany: UserManyResponse;
  userDelete?: Maybe<SuccessResponse>;
  userDeleteByFilter?: Maybe<SuccessResponse>;
  userDestroy?: Maybe<SuccessResponse>;
  userDestroyByFilter?: Maybe<SuccessResponse>;
  userLogin?: Maybe<LoginResponse>;
  userPasswordForgot?: Maybe<SuccessResponse>;
  userPasswordForgotConfirm?: Maybe<SuccessResponse>;
  userRefreshToken?: Maybe<Auth>;
  userRestore: User;
  /** @deprecated No longer supported. Use `userSignUpWithToken` instead. */
  userSignUp: User;
  /** @deprecated No longer supported. Use `userVerificationEmailResend` instead. */
  userSignUpResend?: Maybe<SuccessResponse>;
  userSignUpWithPassword: User;
  userSignUpWithToken: User;
  userUpdate: User;
  userUpdateByFilter: UserManyResponse;
  userVerificationEmailResend?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.viewCreate` instead. */
  viewCreate: Table;
  viewUpdate: Table;
  /** @deprecated No longer supported. Use `system.workspaceCreate` instead. */
  workspaceCreate?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceCreateAsync` instead. */
  workspaceCreateAsync?: Maybe<WorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceLeave` instead. */
  workspaceLeave?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceUpdate` instead. */
  workspaceUpdate?: Maybe<WorkspaceUpdateResponse>;
};


export type MutationImportCsvArgs = {
  data: ImportCsv;
};


export type MutationIsSocialUserArgs = {
  data: IsSocialUser;
};


export type MutationApiTokenCreateArgs = {
  data: ApiTokenCreateInput;
};


export type MutationApiTokenDeleteArgs = {
  data?: InputMaybe<ApiTokenDeleteInput>;
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDeleteByFilterArgs = {
  filter: ApiTokenFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDestroyArgs = {
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenDestroyByFilterArgs = {
  filter: ApiTokenFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationApiTokenUpdateArgs = {
  data: ApiTokenUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApiTokenKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationApiTokenUpdateByFilterArgs = {
  data: ApiTokenUpdateByFilterInput;
  filter?: InputMaybe<ApiTokenFilter>;
};


export type MutationApplicationDeleteArgs = {
  data: ApplicationDeleteMutationInput;
};


export type MutationApplicationInstallArgs = {
  data: ApplicationInstallInput;
};


export type MutationApplicationUpdateArgs = {
  data: ApplicationUpdateInput;
};


export type MutationAuthenticationProfileCreateArgs = {
  data: AuthenticationProfileCreateInput;
};


export type MutationAuthenticationProfileCreateManyArgs = {
  data: Array<InputMaybe<AuthenticationProfileCreateManyInput>>;
};


export type MutationAuthenticationProfileDeleteArgs = {
  data?: InputMaybe<AuthenticationProfileDeleteInput>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDeleteByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDestroyArgs = {
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileDestroyByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationAuthenticationProfileUpdateArgs = {
  data: AuthenticationProfileUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthenticationProfileUpdateByFilterArgs = {
  data: AuthenticationProfileUpdateByFilterInput;
  filter?: InputMaybe<AuthenticationProfileFilter>;
};


export type MutationAuthenticationSettingsUpdateArgs = {
  data: AuthenticationSettingUpdateInput;
};


export type MutationBillingPlanUpdateArgs = {
  data: BillingPlanUpdateMutationInput;
};


export type MutationBookCreateArgs = {
  data: BookCreateInput;
};


export type MutationBookCreateManyArgs = {
  data: Array<InputMaybe<BookCreateManyInput>>;
};


export type MutationBookDeleteArgs = {
  data?: InputMaybe<BookDeleteInput>;
  filter?: InputMaybe<BookKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBookDeleteByFilterArgs = {
  filter: BookFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBookDestroyArgs = {
  filter?: InputMaybe<BookKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBookDestroyByFilterArgs = {
  filter: BookFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBookRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationBookUpdateArgs = {
  data: BookUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<BookKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationBookUpdateByFilterArgs = {
  data: BookUpdateByFilterInput;
  filter?: InputMaybe<BookFilter>;
};


export type MutationDeployArgs = {
  data?: InputMaybe<DeployingBuildInput>;
};


export type MutationDigitalResourceCreateArgs = {
  data: DigitalResourceCreateInput;
};


export type MutationDigitalResourceCreateManyArgs = {
  data: Array<InputMaybe<DigitalResourceCreateManyInput>>;
};


export type MutationDigitalResourceDeleteArgs = {
  data?: InputMaybe<DigitalResourceDeleteInput>;
  filter?: InputMaybe<DigitalResourceKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDigitalResourceDeleteByFilterArgs = {
  filter: DigitalResourceFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDigitalResourceDestroyArgs = {
  filter?: InputMaybe<DigitalResourceKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDigitalResourceDestroyByFilterArgs = {
  filter: DigitalResourceFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDigitalResourceRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationDigitalResourceUpdateArgs = {
  data: DigitalResourceUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DigitalResourceKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDigitalResourceUpdateByFilterArgs = {
  data: DigitalResourceUpdateByFilterInput;
  filter?: InputMaybe<DigitalResourceFilter>;
};


export type MutationEnvironmentVariableCreateArgs = {
  data: EnvironmentVariableCreateInput;
};


export type MutationEnvironmentVariableCreateManyArgs = {
  data: Array<InputMaybe<EnvironmentVariableCreateManyInput>>;
};


export type MutationEnvironmentVariableDeleteArgs = {
  data?: InputMaybe<EnvironmentVariableDeleteInput>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDeleteByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDestroyArgs = {
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableDestroyByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationEnvironmentVariableUpdateArgs = {
  data: EnvironmentVariableUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<EnvironmentVariableKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEnvironmentVariableUpdateByFilterArgs = {
  data: EnvironmentVariableUpdateByFilterInput;
  filter?: InputMaybe<EnvironmentVariableFilter>;
};


export type MutationEventCreateArgs = {
  data: EventCreateInput;
};


export type MutationEventCreateManyArgs = {
  data: Array<InputMaybe<EventCreateManyInput>>;
};


export type MutationEventDeleteArgs = {
  data?: InputMaybe<EventDeleteInput>;
  filter?: InputMaybe<EventKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEventDeleteByFilterArgs = {
  filter: EventFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEventDestroyArgs = {
  filter?: InputMaybe<EventKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEventDestroyByFilterArgs = {
  filter: EventFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEventRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationEventUpdateArgs = {
  data: EventUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<EventKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEventUpdateByFilterArgs = {
  data: EventUpdateByFilterInput;
  filter?: InputMaybe<EventFilter>;
};


export type MutationFieldCreateArgs = {
  data: TableFieldCreateInput;
};


export type MutationFieldDeleteArgs = {
  data: TableFieldDeleteInput;
};


export type MutationFieldUpdateArgs = {
  data: TableFieldUpdateInput;
};


export type MutationFieldUpdatePositionArgs = {
  data: TableFieldPositionUpdateInput;
};


export type MutationFileCreateArgs = {
  data: FileCreateInput;
};


export type MutationFileCreateManyArgs = {
  data: Array<InputMaybe<FileCreateManyInput>>;
};


export type MutationFileDeleteArgs = {
  data?: InputMaybe<FileDeleteInput>;
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDeleteByFilterArgs = {
  filter: FileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDestroyArgs = {
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileDestroyByFilterArgs = {
  filter: FileFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationFileUpdateArgs = {
  data: FileUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FileKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFileUpdateByFilterArgs = {
  data: FileUpdateByFilterInput;
  filter?: InputMaybe<FileFilter>;
};


export type MutationFilesSettingCreateArgs = {
  data: FilesSettingCreateInput;
};


export type MutationFilesSettingCreateManyArgs = {
  data: Array<InputMaybe<FilesSettingCreateManyInput>>;
};


export type MutationFilesSettingDeleteArgs = {
  data?: InputMaybe<FilesSettingDeleteInput>;
  filter?: InputMaybe<FilesSettingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingDeleteByFilterArgs = {
  filter: FilesSettingFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingDestroyArgs = {
  filter?: InputMaybe<FilesSettingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingDestroyByFilterArgs = {
  filter: FilesSettingFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationFilesSettingUpdateArgs = {
  data: FilesSettingUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FilesSettingKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationFilesSettingUpdateByFilterArgs = {
  data: FilesSettingUpdateByFilterInput;
  filter?: InputMaybe<FilesSettingFilter>;
};


export type MutationHoldCreateArgs = {
  data: HoldCreateInput;
};


export type MutationHoldCreateManyArgs = {
  data: Array<InputMaybe<HoldCreateManyInput>>;
};


export type MutationHoldDeleteArgs = {
  data?: InputMaybe<HoldDeleteInput>;
  filter?: InputMaybe<HoldKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationHoldDeleteByFilterArgs = {
  filter: HoldFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationHoldDestroyArgs = {
  filter?: InputMaybe<HoldKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationHoldDestroyByFilterArgs = {
  filter: HoldFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationHoldRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationHoldUpdateArgs = {
  data: HoldUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<HoldKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationHoldUpdateByFilterArgs = {
  data: HoldUpdateByFilterInput;
  filter?: InputMaybe<HoldFilter>;
};


export type MutationIndexCreateArgs = {
  data: IndexCreateInput;
};


export type MutationIndexDeleteArgs = {
  data: IndexDeleteInput;
};


export type MutationIndexUpdateArgs = {
  data: IndexUpdateInput;
};


export type MutationInvokeArgs = {
  data?: InputMaybe<InvokeData>;
};


export type MutationLibraryStaffCreateArgs = {
  data: LibraryStaffCreateInput;
};


export type MutationLibraryStaffCreateManyArgs = {
  data: Array<InputMaybe<LibraryStaffCreateManyInput>>;
};


export type MutationLibraryStaffDeleteArgs = {
  data?: InputMaybe<LibraryStaffDeleteInput>;
  filter?: InputMaybe<LibraryStaffKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLibraryStaffDeleteByFilterArgs = {
  filter: LibraryStaffFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLibraryStaffDestroyArgs = {
  filter?: InputMaybe<LibraryStaffKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLibraryStaffDestroyByFilterArgs = {
  filter: LibraryStaffFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLibraryStaffRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationLibraryStaffUpdateArgs = {
  data: LibraryStaffUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<LibraryStaffKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLibraryStaffUpdateByFilterArgs = {
  data: LibraryStaffUpdateByFilterInput;
  filter?: InputMaybe<LibraryStaffFilter>;
};


export type MutationLoanCreateArgs = {
  data: LoanCreateInput;
};


export type MutationLoanCreateManyArgs = {
  data: Array<InputMaybe<LoanCreateManyInput>>;
};


export type MutationLoanDeleteArgs = {
  data?: InputMaybe<LoanDeleteInput>;
  filter?: InputMaybe<LoanKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLoanDeleteByFilterArgs = {
  filter: LoanFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLoanDestroyArgs = {
  filter?: InputMaybe<LoanKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLoanDestroyByFilterArgs = {
  filter: LoanFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLoanRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoanUpdateArgs = {
  data: LoanUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<LoanKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLoanUpdateByFilterArgs = {
  data: LoanUpdateByFilterInput;
  filter?: InputMaybe<LoanFilter>;
};


export type MutationNotificationCreateArgs = {
  data: NotificationCreateInput;
};


export type MutationNotificationCreateManyArgs = {
  data: Array<InputMaybe<NotificationCreateManyInput>>;
};


export type MutationNotificationDeleteArgs = {
  data?: InputMaybe<NotificationDeleteInput>;
  filter?: InputMaybe<NotificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationDeleteByFilterArgs = {
  filter: NotificationFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationDestroyArgs = {
  filter?: InputMaybe<NotificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationDestroyByFilterArgs = {
  filter: NotificationFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationNotificationUpdateArgs = {
  data: NotificationUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<NotificationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationNotificationUpdateByFilterArgs = {
  data: NotificationUpdateByFilterInput;
  filter?: InputMaybe<NotificationFilter>;
};


export type MutationPatronCreateArgs = {
  data: PatronCreateInput;
};


export type MutationPatronCreateManyArgs = {
  data: Array<InputMaybe<PatronCreateManyInput>>;
};


export type MutationPatronDeleteArgs = {
  data?: InputMaybe<PatronDeleteInput>;
  filter?: InputMaybe<PatronKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPatronDeleteByFilterArgs = {
  filter: PatronFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPatronDestroyArgs = {
  filter?: InputMaybe<PatronKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPatronDestroyByFilterArgs = {
  filter: PatronFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPatronRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationPatronUpdateArgs = {
  data: PatronUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PatronKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPatronUpdateByFilterArgs = {
  data: PatronUpdateByFilterInput;
  filter?: InputMaybe<PatronFilter>;
};


export type MutationRecommendationCreateArgs = {
  data: RecommendationCreateInput;
};


export type MutationRecommendationCreateManyArgs = {
  data: Array<InputMaybe<RecommendationCreateManyInput>>;
};


export type MutationRecommendationDeleteArgs = {
  data?: InputMaybe<RecommendationDeleteInput>;
  filter?: InputMaybe<RecommendationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRecommendationDeleteByFilterArgs = {
  filter: RecommendationFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRecommendationDestroyArgs = {
  filter?: InputMaybe<RecommendationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRecommendationDestroyByFilterArgs = {
  filter: RecommendationFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRecommendationRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationRecommendationUpdateArgs = {
  data: RecommendationUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RecommendationKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRecommendationUpdateByFilterArgs = {
  data: RecommendationUpdateByFilterInput;
  filter?: InputMaybe<RecommendationFilter>;
};


export type MutationReviewCreateArgs = {
  data: ReviewCreateInput;
};


export type MutationReviewCreateManyArgs = {
  data: Array<InputMaybe<ReviewCreateManyInput>>;
};


export type MutationReviewDeleteArgs = {
  data?: InputMaybe<ReviewDeleteInput>;
  filter?: InputMaybe<ReviewKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReviewDeleteByFilterArgs = {
  filter: ReviewFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReviewDestroyArgs = {
  filter?: InputMaybe<ReviewKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReviewDestroyByFilterArgs = {
  filter: ReviewFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReviewRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationReviewUpdateArgs = {
  data: ReviewUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ReviewKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationReviewUpdateByFilterArgs = {
  data: ReviewUpdateByFilterInput;
  filter?: InputMaybe<ReviewFilter>;
};


export type MutationRoleCreateArgs = {
  data: RoleCreateInput;
};


export type MutationRoleCreateManyArgs = {
  data: Array<InputMaybe<RoleCreateManyInput>>;
};


export type MutationRoleDeleteArgs = {
  data?: InputMaybe<RoleDeleteInput>;
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDeleteByFilterArgs = {
  filter: RoleFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDestroyArgs = {
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleDestroyByFilterArgs = {
  filter: RoleFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationRoleUpdateArgs = {
  data: RoleUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RoleKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRoleUpdateByFilterArgs = {
  data: RoleUpdateByFilterInput;
  filter?: InputMaybe<RoleFilter>;
};


export type MutationSendInvitationTo8baseArgs = {
  inviteEmail: Scalars['String']['input'];
};


export type MutationSettingsUpdateArgs = {
  data: SettingUpdateInput;
};


export type MutationTableCreateArgs = {
  data: TableCreateInput;
};


export type MutationTableDeleteArgs = {
  data: TableDeleteInput;
};


export type MutationTableUpdateArgs = {
  data: TableUpdateInput;
};


export type MutationUserChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationUserCreateArgs = {
  data: UserCreateInput;
};


export type MutationUserCreateManyArgs = {
  data: Array<InputMaybe<UserCreateManyInput>>;
};


export type MutationUserDeleteArgs = {
  data?: InputMaybe<UserDeleteInput>;
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDeleteByFilterArgs = {
  filter: UserFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDestroyArgs = {
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserDestroyByFilterArgs = {
  filter: UserFilter;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserLoginArgs = {
  data: UserLoginInput;
};


export type MutationUserPasswordForgotArgs = {
  data: PasswordForgotInput;
};


export type MutationUserPasswordForgotConfirmArgs = {
  data: PasswordForgotConfirmInput;
};


export type MutationUserRefreshTokenArgs = {
  data: RefreshTokenInput;
};


export type MutationUserRestoreArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserSignUpArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  user: UserCreateInput;
};


export type MutationUserSignUpResendArgs = {
  data: SignUpResendInput;
};


export type MutationUserSignUpWithPasswordArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  password: Scalars['String']['input'];
  user: UserCreateInput;
};


export type MutationUserSignUpWithTokenArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  user: UserCreateInput;
};


export type MutationUserUpdateArgs = {
  data: UserUpdateInput;
  destroyDetached?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserKeyFilter>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUserUpdateByFilterArgs = {
  data: UserUpdateByFilterInput;
  filter?: InputMaybe<UserFilter>;
};


export type MutationUserVerificationEmailResendArgs = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  data: VerificationEmailResendInput;
};


export type MutationViewCreateArgs = {
  data: ViewCreateInput;
};


export type MutationViewUpdateArgs = {
  data: ViewUpdateInput;
};


export type MutationWorkspaceCreateArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceCreateAsyncArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceDeleteArgs = {
  data: WorkspaceDeleteMutationInput;
};


export type MutationWorkspaceLeaveArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationWorkspaceUpdateArgs = {
  data: WorkspaceUpdateMutationInput;
};

export enum MutationType {
  Create = 'create',
  Delete = 'delete',
  Destroy = 'destroy',
  Update = 'update'
}

export type Notification = {
  _description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_read?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  recipient_id?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Notifications create input */
export type NotificationCreateInput = {
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  recipient_id?: InputMaybe<NotificationsRecipient_IdRelationInput>;
};

/** Notifications create many input */
export type NotificationCreateManyInput = {
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  recipient_id?: InputMaybe<NotificationsRecipient_IdManyRelationInput>;
};

/** Notifications delete input */
export type NotificationDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** NotificationFieldsPermissions create input */
export type NotificationFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotificationFilter = {
  AND?: InputMaybe<Array<NotificationFilter>>;
  OR?: InputMaybe<Array<NotificationFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  is_read?: InputMaybe<BoolPredicate>;
  message?: InputMaybe<StringPredicate>;
  recipient_id?: InputMaybe<UserFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type NotificationGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: NotificationGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type NotificationGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  is_read?: InputMaybe<Array<GroupByField>>;
  message?: InputMaybe<Array<GroupByField>>;
  recipient_id?: InputMaybe<UserGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type NotificationKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** NotificationListResponse output */
export type NotificationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Notification>;
};

/** NotificationManyResponse output */
export type NotificationManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Notification>;
};

/** No longer supported. Use `sort` instead. */
export enum NotificationOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsReadAsc = 'is_read_ASC',
  IsReadDesc = 'is_read_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Notifications subscription payload */
export type NotificationPayload = {
  mutation: MutationType;
  node?: Maybe<Notification>;
  previousValues?: Maybe<Notification>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type NotificationSort = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_read?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  recipient_id?: InputMaybe<UserSort>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum NotificationStatusType {
  Done = 'done'
}

/** Notifications subscription filter */
export type NotificationSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<NotificationFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Notifications update input */
export type NotificationUpdateByFilterInput = {
  is_read?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  message?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Notifications update input */
export type NotificationUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  recipient_id?: InputMaybe<NotificationsRecipient_IdUpdateRelationInput>;
};

export type Notification_PermissionFilter = {
  AND?: InputMaybe<Array<Notification_PermissionFilter>>;
  OR?: InputMaybe<Array<Notification_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  is_read?: InputMaybe<BoolPredicate>;
  message?: InputMaybe<StringPredicate>;
  recipient_id?: InputMaybe<User_PermissionFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Notifications relation input */
export type NotificationsRecipient_IdManyRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
};

/** Notifications relation input */
export type NotificationsRecipient_IdRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
  create?: InputMaybe<Notifications_UserCreateInput>;
};

/** Notifications relation input */
export type NotificationsRecipient_IdUpdateRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
  create?: InputMaybe<Notifications_UserCreateInput>;
  disconnect?: InputMaybe<UserKeyFilter>;
  reconnect?: InputMaybe<UserKeyFilter>;
  update?: InputMaybe<Notifications_UserUpdateInput>;
};

/** Users create input from Notifications */
export type Notifications_UserCreateInput = {
  LibraryStaff?: InputMaybe<UsersLibraryStaffRelationInput>;
  Notifications?: InputMaybe<UsersNotificationsRelationInput>;
  Patrons?: InputMaybe<UsersPatronsRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from Notifications */
export type Notifications_UserUpdateInput = {
  LibraryStaff?: InputMaybe<UsersLibraryStaffUpdateRelationInput>;
  Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>;
  Patrons?: InputMaybe<UsersPatronsUpdateRelationInput>;
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Number Field Attributes */
export type NumberFieldTypeAttributes = {
  autoIncrement?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  isBigInt?: Maybe<Scalars['Boolean']['output']>;
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
};

/** Number Type Format Enum */
export enum NumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC'
}

export type OrganizationUpgradeResponse = {
  organizationId: Scalars['String']['output'];
};

export type OrganizationUserInvitationResponse = {
  invitationId: Scalars['String']['output'];
};

/** PasswordForgotConfirmInput */
export type PasswordForgotConfirmInput = {
  authProfileId: Scalars['ID']['input'];
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

/** PasswordForgotInput */
export type PasswordForgotInput = {
  authProfileId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};

export type Patron = {
  Holds?: Maybe<Hold>;
  Loans?: Maybe<Loan>;
  Recommendations?: Maybe<Recommendation>;
  Reviews?: Maybe<Review>;
  _description?: Maybe<Scalars['String']['output']>;
  borrowing_history?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  membership_status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<User>;
};

/** Patrons create input */
export type PatronCreateInput = {
  Holds?: InputMaybe<PatronsHoldsRelationInput>;
  Loans?: InputMaybe<PatronsLoansRelationInput>;
  Recommendations?: InputMaybe<PatronsRecommendationsRelationInput>;
  Reviews?: InputMaybe<PatronsReviewsRelationInput>;
  borrowing_history: Scalars['JSON']['input'];
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdRelationInput>;
};

/** Patrons create many input */
export type PatronCreateManyInput = {
  Holds: PatronsHoldsManyRelationInput;
  Loans: PatronsLoansManyRelationInput;
  Recommendations: PatronsRecommendationsManyRelationInput;
  Reviews: PatronsReviewsManyRelationInput;
  borrowing_history: Scalars['JSON']['input'];
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdManyRelationInput>;
};

/** Patrons delete input */
export type PatronDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** PatronFieldsPermissions create input */
export type PatronFieldsPermissions = {
  borrowing_history?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  membership_status?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PatronFilter = {
  AND?: InputMaybe<Array<PatronFilter>>;
  Holds?: InputMaybe<HoldFilter>;
  Loans?: InputMaybe<LoanFilter>;
  OR?: InputMaybe<Array<PatronFilter>>;
  Recommendations?: InputMaybe<RecommendationFilter>;
  Reviews?: InputMaybe<ReviewFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  membership_status?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<UserFilter>;
};

export type PatronGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: PatronGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type PatronGroupByQuery = {
  Holds?: InputMaybe<HoldGroupByQuery>;
  Loans?: InputMaybe<LoanGroupByQuery>;
  Recommendations?: InputMaybe<RecommendationGroupByQuery>;
  Reviews?: InputMaybe<ReviewGroupByQuery>;
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  borrowing_history?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  membership_status?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  user_id?: InputMaybe<UserGroupByQuery>;
};

export type PatronKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** PatronListResponse output */
export type PatronListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Patron>;
};

/** PatronManyResponse output */
export type PatronManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Patron>;
};

/** No longer supported. Use `sort` instead. */
export enum PatronOrderBy {
  BorrowingHistoryAsc = 'borrowing_history_ASC',
  BorrowingHistoryDesc = 'borrowing_history_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MembershipStatusAsc = 'membership_status_ASC',
  MembershipStatusDesc = 'membership_status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Patrons subscription payload */
export type PatronPayload = {
  mutation: MutationType;
  node?: Maybe<Patron>;
  previousValues?: Maybe<Patron>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PatronSort = {
  Holds?: InputMaybe<HoldSort>;
  Loans?: InputMaybe<LoanSort>;
  Recommendations?: InputMaybe<RecommendationSort>;
  Reviews?: InputMaybe<ReviewSort>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  membership_status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<UserSort>;
};

/** Patrons subscription filter */
export type PatronSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<PatronFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Patrons update input */
export type PatronUpdateByFilterInput = {
  borrowing_history?: InputMaybe<Array<InputMaybe<UpdateByFilterJsonInput>>>;
  membership_status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Patrons update input */
export type PatronUpdateInput = {
  Holds?: InputMaybe<PatronsHoldsUpdateRelationInput>;
  Loans?: InputMaybe<PatronsLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<PatronsRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<PatronsReviewsUpdateRelationInput>;
  borrowing_history?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdUpdateRelationInput>;
};

export type Patron_PermissionFilter = {
  AND?: InputMaybe<Array<Patron_PermissionFilter>>;
  Holds?: InputMaybe<Hold_PermissionFilter>;
  Loans?: InputMaybe<Loan_PermissionFilter>;
  OR?: InputMaybe<Array<Patron_PermissionFilter>>;
  Recommendations?: InputMaybe<Recommendation_PermissionFilter>;
  Reviews?: InputMaybe<Review_PermissionFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  membership_status?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  user_id?: InputMaybe<User_PermissionFilter>;
};

/** Holds create input from patron_id */
export type Patron_Id_HoldCreateInput = {
  book_id?: InputMaybe<HoldsBook_IdRelationInput>;
  patron_id?: InputMaybe<HoldsPatron_IdRelationInput>;
  position_in_queue?: InputMaybe<Scalars['Int']['input']>;
};

/** Holds update input from patron_id */
export type Patron_Id_HoldUpdateInput = {
  book_id?: InputMaybe<HoldsBook_IdUpdateRelationInput>;
  patron_id?: InputMaybe<HoldsPatron_IdUpdateRelationInput>;
  position_in_queue?: InputMaybe<Scalars['Int']['input']>;
};

/** Loans create input from patron_id */
export type Patron_Id_LoanCreateInput = {
  book_id?: InputMaybe<LoansBook_IdRelationInput>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  patron_id?: InputMaybe<LoansPatron_IdRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Loans update input from patron_id */
export type Patron_Id_LoanUpdateInput = {
  book_id?: InputMaybe<LoansBook_IdUpdateRelationInput>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  patron_id?: InputMaybe<LoansPatron_IdUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Recommendations create input from patron_id */
export type Patron_Id_RecommendationCreateInput = {
  book_id?: InputMaybe<RecommendationsBook_IdRelationInput>;
  patron_id?: InputMaybe<RecommendationsPatron_IdRelationInput>;
  reason: Scalars['String']['input'];
};

/** Recommendations update input from patron_id */
export type Patron_Id_RecommendationUpdateInput = {
  book_id?: InputMaybe<RecommendationsBook_IdUpdateRelationInput>;
  patron_id?: InputMaybe<RecommendationsPatron_IdUpdateRelationInput>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

/** Reviews create input from patron_id */
export type Patron_Id_ReviewCreateInput = {
  book_id?: InputMaybe<ReviewsBook_IdRelationInput>;
  comment: Scalars['String']['input'];
  patron_id?: InputMaybe<ReviewsPatron_IdRelationInput>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** Reviews update input from patron_id */
export type Patron_Id_ReviewUpdateInput = {
  book_id?: InputMaybe<ReviewsBook_IdUpdateRelationInput>;
  comment?: InputMaybe<Scalars['String']['input']>;
  patron_id?: InputMaybe<ReviewsPatron_IdUpdateRelationInput>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** Patrons relation input */
export type PatronsHoldsManyRelationInput = {
  connect?: InputMaybe<HoldKeyFilter>;
};

/** Patrons relation input */
export type PatronsHoldsRelationInput = {
  connect?: InputMaybe<HoldKeyFilter>;
  create?: InputMaybe<Patron_Id_HoldCreateInput>;
};

/** Patrons relation input */
export type PatronsHoldsUpdateRelationInput = {
  connect?: InputMaybe<HoldKeyFilter>;
  create?: InputMaybe<Patron_Id_HoldCreateInput>;
  disconnect?: InputMaybe<HoldKeyFilter>;
  reconnect?: InputMaybe<HoldKeyFilter>;
  update?: InputMaybe<Patron_Id_HoldUpdateInput>;
};

/** Patrons relation input */
export type PatronsLoansManyRelationInput = {
  connect?: InputMaybe<LoanKeyFilter>;
};

/** Patrons relation input */
export type PatronsLoansRelationInput = {
  connect?: InputMaybe<LoanKeyFilter>;
  create?: InputMaybe<Patron_Id_LoanCreateInput>;
};

/** Patrons relation input */
export type PatronsLoansUpdateRelationInput = {
  connect?: InputMaybe<LoanKeyFilter>;
  create?: InputMaybe<Patron_Id_LoanCreateInput>;
  disconnect?: InputMaybe<LoanKeyFilter>;
  reconnect?: InputMaybe<LoanKeyFilter>;
  update?: InputMaybe<Patron_Id_LoanUpdateInput>;
};

/** Patrons relation input */
export type PatronsRecommendationsManyRelationInput = {
  connect?: InputMaybe<RecommendationKeyFilter>;
};

/** Patrons relation input */
export type PatronsRecommendationsRelationInput = {
  connect?: InputMaybe<RecommendationKeyFilter>;
  create?: InputMaybe<Patron_Id_RecommendationCreateInput>;
};

/** Patrons relation input */
export type PatronsRecommendationsUpdateRelationInput = {
  connect?: InputMaybe<RecommendationKeyFilter>;
  create?: InputMaybe<Patron_Id_RecommendationCreateInput>;
  disconnect?: InputMaybe<RecommendationKeyFilter>;
  reconnect?: InputMaybe<RecommendationKeyFilter>;
  update?: InputMaybe<Patron_Id_RecommendationUpdateInput>;
};

/** Patrons relation input */
export type PatronsReviewsManyRelationInput = {
  connect?: InputMaybe<ReviewKeyFilter>;
};

/** Patrons relation input */
export type PatronsReviewsRelationInput = {
  connect?: InputMaybe<ReviewKeyFilter>;
  create?: InputMaybe<Patron_Id_ReviewCreateInput>;
};

/** Patrons relation input */
export type PatronsReviewsUpdateRelationInput = {
  connect?: InputMaybe<ReviewKeyFilter>;
  create?: InputMaybe<Patron_Id_ReviewCreateInput>;
  disconnect?: InputMaybe<ReviewKeyFilter>;
  reconnect?: InputMaybe<ReviewKeyFilter>;
  update?: InputMaybe<Patron_Id_ReviewUpdateInput>;
};

/** Patrons relation input */
export type PatronsUser_IdManyRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
};

/** Patrons relation input */
export type PatronsUser_IdRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
  create?: InputMaybe<Patrons_UserCreateInput>;
};

/** Patrons relation input */
export type PatronsUser_IdUpdateRelationInput = {
  connect?: InputMaybe<UserKeyFilter>;
  create?: InputMaybe<Patrons_UserCreateInput>;
  disconnect?: InputMaybe<UserKeyFilter>;
  reconnect?: InputMaybe<UserKeyFilter>;
  update?: InputMaybe<Patrons_UserUpdateInput>;
};

/** Users create input from Patrons */
export type Patrons_UserCreateInput = {
  LibraryStaff: UsersLibraryStaffRelationInput;
  Notifications: UsersNotificationsRelationInput;
  Patrons?: InputMaybe<UsersPatronsRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from Patrons */
export type Patrons_UserUpdateInput = {
  LibraryStaff?: InputMaybe<UsersLibraryStaffUpdateRelationInput>;
  Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>;
  Patrons?: InputMaybe<UsersPatronsUpdateRelationInput>;
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type PatternFunctionArguments = {
  escape?: InputMaybe<Scalars['String']['input']>;
  pattern: Scalars['String']['input'];
};

export type Permission = {
  _description?: Maybe<Scalars['String']['output']>;
  appId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionFilter = {
  AND?: InputMaybe<Array<PermissionFilter>>;
  OR?: InputMaybe<Array<PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  resource?: InputMaybe<StringPredicate>;
  resourceType?: InputMaybe<StringPredicate>;
  role?: InputMaybe<RoleFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type PermissionGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  appId?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  permission?: InputMaybe<Array<GroupByField>>;
  resource?: InputMaybe<Array<GroupByField>>;
  resourceType?: InputMaybe<Array<GroupByField>>;
  role?: InputMaybe<RoleGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

/** Permission Filter */
export type PermissionInputFilter = {
  action?: InputMaybe<Scalars['String']['input']>;
  applicationName?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<PermissionResourceTypeEnum>;
};

/** PermissionListResponse output */
export type PermissionListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Permission>;
};

/** Permissions subscription payload */
export type PermissionPayload = {
  mutation: MutationType;
  node?: Maybe<Permission>;
  previousValues?: Maybe<Permission>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PermissionRelationFilter = {
  every?: InputMaybe<PermissionFilter>;
  none?: InputMaybe<PermissionFilter>;
  some?: InputMaybe<PermissionFilter>;
};

export enum PermissionResourceTypeEnum {
  Custom = 'custom',
  Data = 'data'
}

/** Permissions subscription filter */
export type PermissionSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<PermissionFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

export type Permission_PermissionFilter = {
  AND?: InputMaybe<Array<Permission_PermissionFilter>>;
  OR?: InputMaybe<Array<Permission_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  appId?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  resource?: InputMaybe<StringPredicate>;
  resourceType?: InputMaybe<StringPredicate>;
  role?: InputMaybe<Role_PermissionFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type Permission_PermissionRelationFilter = {
  every?: InputMaybe<Permission_PermissionFilter>;
  none?: InputMaybe<Permission_PermissionFilter>;
  some?: InputMaybe<Permission_PermissionFilter>;
};

/** custom permissions input */
export type PermissionsCustom = {
  data?: InputMaybe<PermissionsCustomData>;
  logic?: InputMaybe<PermissionsCustomLogic>;
  settings?: InputMaybe<PermissionsCustomSettings>;
  users?: InputMaybe<PermissionsCustomUsers>;
};

export type PermissionsCustomData = {
  schemaManagement?: InputMaybe<PermissionsCustomDataSchemaManagement>;
  viewerAccess?: InputMaybe<PermissionsCustomDataViewerAccess>;
};

export type PermissionsCustomDataSchemaManagement = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomDataViewerAccess = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogic = {
  deploy?: InputMaybe<PermissionsCustomLogicDeploy>;
  invoke?: InputMaybe<PermissionsCustomLogicInvoke>;
  logs?: InputMaybe<PermissionsCustomLogicLogs>;
  view?: InputMaybe<PermissionsCustomLogicView>;
};

export type PermissionsCustomLogicDeploy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicInvoke = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicLogs = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomLogicView = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomSettings = {
  workspaceAdministration?: InputMaybe<PermissionsCustomSettingsWorkspaceAdministration>;
};

export type PermissionsCustomSettingsWorkspaceAdministration = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsCustomUsers = {
  teamAdministration?: InputMaybe<PermissionsCustomUsersTeamAdministration>;
};

export type PermissionsCustomUsersTeamAdministration = {
  allow: Scalars['Boolean']['input'];
};

/** Schema tables permissions input */
export type PermissionsData = {
  Books?: InputMaybe<PermissionsDataBooks>;
  DigitalResources?: InputMaybe<PermissionsDataDigitalResources>;
  Events?: InputMaybe<PermissionsDataEvents>;
  Files?: InputMaybe<PermissionsDataFiles>;
  FilesSettings?: InputMaybe<PermissionsDataFilesSettings>;
  Holds?: InputMaybe<PermissionsDataHolds>;
  LibraryStaff?: InputMaybe<PermissionsDataLibraryStaff>;
  Loans?: InputMaybe<PermissionsDataLoans>;
  Notifications?: InputMaybe<PermissionsDataNotifications>;
  Patrons?: InputMaybe<PermissionsDataPatrons>;
  Recommendations?: InputMaybe<PermissionsDataRecommendations>;
  Reviews?: InputMaybe<PermissionsDataReviews>;
  Roles?: InputMaybe<PermissionsDataRoles>;
  Users?: InputMaybe<PermissionsDataUsers>;
};

export type PermissionsDataBooks = {
  create?: InputMaybe<PermissionsDataBooksCreate>;
  delete?: InputMaybe<PermissionsDataBooksDelete>;
  destroy?: InputMaybe<PermissionsDataBooksDestroy>;
  read?: InputMaybe<PermissionsDataBooksRead>;
  update?: InputMaybe<PermissionsDataBooksUpdate>;
};

export type PermissionsDataBooksCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataBooksDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataBooksDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataBooksRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<BookFieldsPermissions>;
  filter?: InputMaybe<Book_PermissionFilter>;
};

export type PermissionsDataBooksUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<BookFieldsPermissions>;
  filter?: InputMaybe<Book_PermissionFilter>;
};

export type PermissionsDataDigitalResources = {
  create?: InputMaybe<PermissionsDataDigitalResourcesCreate>;
  delete?: InputMaybe<PermissionsDataDigitalResourcesDelete>;
  destroy?: InputMaybe<PermissionsDataDigitalResourcesDestroy>;
  read?: InputMaybe<PermissionsDataDigitalResourcesRead>;
  update?: InputMaybe<PermissionsDataDigitalResourcesUpdate>;
};

export type PermissionsDataDigitalResourcesCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataDigitalResourcesDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataDigitalResourcesDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataDigitalResourcesRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<DigitalResourceFieldsPermissions>;
  filter?: InputMaybe<DigitalResource_PermissionFilter>;
};

export type PermissionsDataDigitalResourcesUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<DigitalResourceFieldsPermissions>;
  filter?: InputMaybe<DigitalResource_PermissionFilter>;
};

export type PermissionsDataEvents = {
  create?: InputMaybe<PermissionsDataEventsCreate>;
  delete?: InputMaybe<PermissionsDataEventsDelete>;
  destroy?: InputMaybe<PermissionsDataEventsDestroy>;
  read?: InputMaybe<PermissionsDataEventsRead>;
  update?: InputMaybe<PermissionsDataEventsUpdate>;
};

export type PermissionsDataEventsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataEventsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataEventsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataEventsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<EventFieldsPermissions>;
  filter?: InputMaybe<Event_PermissionFilter>;
};

export type PermissionsDataEventsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<EventFieldsPermissions>;
  filter?: InputMaybe<Event_PermissionFilter>;
};

export type PermissionsDataFiles = {
  create?: InputMaybe<PermissionsDataFilesCreate>;
  delete?: InputMaybe<PermissionsDataFilesDelete>;
  destroy?: InputMaybe<PermissionsDataFilesDestroy>;
  read?: InputMaybe<PermissionsDataFilesRead>;
  update?: InputMaybe<PermissionsDataFilesUpdate>;
};

export type PermissionsDataFilesCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataFilesDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FileFieldsPermissions>;
  filter?: InputMaybe<File_PermissionFilter>;
};

export type PermissionsDataFilesSettings = {
  create?: InputMaybe<PermissionsDataFilesSettingsCreate>;
  delete?: InputMaybe<PermissionsDataFilesSettingsDelete>;
  destroy?: InputMaybe<PermissionsDataFilesSettingsDestroy>;
  read?: InputMaybe<PermissionsDataFilesSettingsRead>;
  update?: InputMaybe<PermissionsDataFilesSettingsUpdate>;
};

export type PermissionsDataFilesSettingsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesSettingsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataFilesSettingsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataFilesSettingsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FilesSettingFieldsPermissions>;
  filter?: InputMaybe<FilesSetting_PermissionFilter>;
};

export type PermissionsDataFilesSettingsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FilesSettingFieldsPermissions>;
  filter?: InputMaybe<FilesSetting_PermissionFilter>;
};

export type PermissionsDataFilesUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<FileFieldsPermissions>;
  filter?: InputMaybe<File_PermissionFilter>;
};

export type PermissionsDataHolds = {
  create?: InputMaybe<PermissionsDataHoldsCreate>;
  delete?: InputMaybe<PermissionsDataHoldsDelete>;
  destroy?: InputMaybe<PermissionsDataHoldsDestroy>;
  read?: InputMaybe<PermissionsDataHoldsRead>;
  update?: InputMaybe<PermissionsDataHoldsUpdate>;
};

export type PermissionsDataHoldsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataHoldsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataHoldsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataHoldsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<HoldFieldsPermissions>;
  filter?: InputMaybe<Hold_PermissionFilter>;
};

export type PermissionsDataHoldsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<HoldFieldsPermissions>;
  filter?: InputMaybe<Hold_PermissionFilter>;
};

export type PermissionsDataLibraryStaff = {
  create?: InputMaybe<PermissionsDataLibraryStaffCreate>;
  delete?: InputMaybe<PermissionsDataLibraryStaffDelete>;
  destroy?: InputMaybe<PermissionsDataLibraryStaffDestroy>;
  read?: InputMaybe<PermissionsDataLibraryStaffRead>;
  update?: InputMaybe<PermissionsDataLibraryStaffUpdate>;
};

export type PermissionsDataLibraryStaffCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataLibraryStaffDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataLibraryStaffDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataLibraryStaffRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<LibraryStaffFieldsPermissions>;
  filter?: InputMaybe<LibraryStaff_PermissionFilter>;
};

export type PermissionsDataLibraryStaffUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<LibraryStaffFieldsPermissions>;
  filter?: InputMaybe<LibraryStaff_PermissionFilter>;
};

export type PermissionsDataLoans = {
  create?: InputMaybe<PermissionsDataLoansCreate>;
  delete?: InputMaybe<PermissionsDataLoansDelete>;
  destroy?: InputMaybe<PermissionsDataLoansDestroy>;
  read?: InputMaybe<PermissionsDataLoansRead>;
  update?: InputMaybe<PermissionsDataLoansUpdate>;
};

export type PermissionsDataLoansCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataLoansDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataLoansDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataLoansRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<LoanFieldsPermissions>;
  filter?: InputMaybe<Loan_PermissionFilter>;
};

export type PermissionsDataLoansUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<LoanFieldsPermissions>;
  filter?: InputMaybe<Loan_PermissionFilter>;
};

export type PermissionsDataNotifications = {
  create?: InputMaybe<PermissionsDataNotificationsCreate>;
  delete?: InputMaybe<PermissionsDataNotificationsDelete>;
  destroy?: InputMaybe<PermissionsDataNotificationsDestroy>;
  read?: InputMaybe<PermissionsDataNotificationsRead>;
  update?: InputMaybe<PermissionsDataNotificationsUpdate>;
};

export type PermissionsDataNotificationsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataNotificationsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataNotificationsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataNotificationsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<NotificationFieldsPermissions>;
  filter?: InputMaybe<Notification_PermissionFilter>;
};

export type PermissionsDataNotificationsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<NotificationFieldsPermissions>;
  filter?: InputMaybe<Notification_PermissionFilter>;
};

export type PermissionsDataPatrons = {
  create?: InputMaybe<PermissionsDataPatronsCreate>;
  delete?: InputMaybe<PermissionsDataPatronsDelete>;
  destroy?: InputMaybe<PermissionsDataPatronsDestroy>;
  read?: InputMaybe<PermissionsDataPatronsRead>;
  update?: InputMaybe<PermissionsDataPatronsUpdate>;
};

export type PermissionsDataPatronsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataPatronsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataPatronsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataPatronsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<PatronFieldsPermissions>;
  filter?: InputMaybe<Patron_PermissionFilter>;
};

export type PermissionsDataPatronsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<PatronFieldsPermissions>;
  filter?: InputMaybe<Patron_PermissionFilter>;
};

export type PermissionsDataRecommendations = {
  create?: InputMaybe<PermissionsDataRecommendationsCreate>;
  delete?: InputMaybe<PermissionsDataRecommendationsDelete>;
  destroy?: InputMaybe<PermissionsDataRecommendationsDestroy>;
  read?: InputMaybe<PermissionsDataRecommendationsRead>;
  update?: InputMaybe<PermissionsDataRecommendationsUpdate>;
};

export type PermissionsDataRecommendationsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRecommendationsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataRecommendationsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRecommendationsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RecommendationFieldsPermissions>;
  filter?: InputMaybe<Recommendation_PermissionFilter>;
};

export type PermissionsDataRecommendationsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RecommendationFieldsPermissions>;
  filter?: InputMaybe<Recommendation_PermissionFilter>;
};

export type PermissionsDataReviews = {
  create?: InputMaybe<PermissionsDataReviewsCreate>;
  delete?: InputMaybe<PermissionsDataReviewsDelete>;
  destroy?: InputMaybe<PermissionsDataReviewsDestroy>;
  read?: InputMaybe<PermissionsDataReviewsRead>;
  update?: InputMaybe<PermissionsDataReviewsUpdate>;
};

export type PermissionsDataReviewsCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataReviewsDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataReviewsDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataReviewsRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ReviewFieldsPermissions>;
  filter?: InputMaybe<Review_PermissionFilter>;
};

export type PermissionsDataReviewsUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<ReviewFieldsPermissions>;
  filter?: InputMaybe<Review_PermissionFilter>;
};

export type PermissionsDataRoles = {
  create?: InputMaybe<PermissionsDataRolesCreate>;
  delete?: InputMaybe<PermissionsDataRolesDelete>;
  destroy?: InputMaybe<PermissionsDataRolesDestroy>;
  read?: InputMaybe<PermissionsDataRolesRead>;
  update?: InputMaybe<PermissionsDataRolesUpdate>;
};

export type PermissionsDataRolesCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRolesDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataRolesDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataRolesRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RoleFieldsPermissions>;
  filter?: InputMaybe<Role_PermissionFilter>;
};

export type PermissionsDataRolesUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<RoleFieldsPermissions>;
  filter?: InputMaybe<Role_PermissionFilter>;
};

export type PermissionsDataUsers = {
  create?: InputMaybe<PermissionsDataUsersCreate>;
  delete?: InputMaybe<PermissionsDataUsersDelete>;
  destroy?: InputMaybe<PermissionsDataUsersDestroy>;
  read?: InputMaybe<PermissionsDataUsersRead>;
  update?: InputMaybe<PermissionsDataUsersUpdate>;
};

export type PermissionsDataUsersCreate = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataUsersDelete = {
  allow: Scalars['Boolean']['input'];
  restore?: InputMaybe<Scalars['Boolean']['input']>;
  review?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsDataUsersDestroy = {
  allow: Scalars['Boolean']['input'];
};

export type PermissionsDataUsersRead = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<UserFieldsPermissions>;
  filter?: InputMaybe<User_PermissionFilter>;
};

export type PermissionsDataUsersUpdate = {
  allow: Scalars['Boolean']['input'];
  fields?: InputMaybe<UserFieldsPermissions>;
  filter?: InputMaybe<User_PermissionFilter>;
};

/** PermissionsInput create input */
export type PermissionsInput = {
  custom?: InputMaybe<PermissionsCustom>;
  data?: InputMaybe<PermissionsData>;
};

export type ProjectItemWs = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<WorkspaceImage>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  apiToken?: Maybe<ApiToken>;
  apiTokensList: ApiTokenListResponse;
  /** @deprecated No longer supported. Use `system.application` instead. */
  application?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationsList` instead. */
  applicationsList?: Maybe<ApplicationListResponse>;
  /** @deprecated No longer supported. Use `system.asyncSessionStatus` instead. */
  asyncSessionStatus?: Maybe<AsyncSessionStatusResponse>;
  authenticationProfile?: Maybe<AuthenticationProfile>;
  authenticationProfilesList: AuthenticationProfileListResponse;
  authenticationSettings?: Maybe<AuthenticationSetting>;
  /** @deprecated No longer supported. Use `system.billingCurrentPlan` instead. */
  billingCurrentPlan?: Maybe<BillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<BillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: BillingInvoicesListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsageQuotasList` instead. */
  billingMetricUsageQuotasList: BillingMetricUsageQuotasListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsagesList` instead. */
  billingMetricUsagesList: BillingMetricUsagesListResponse;
  book?: Maybe<Book>;
  booksList: BookListResponse;
  companyName?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported. Use `system.deployStatus` instead. */
  deployStatus: DeployStatusResult;
  digitalResource?: Maybe<DigitalResource>;
  digitalResourcesList: DigitalResourceListResponse;
  environmentVariable?: Maybe<EnvironmentVariable>;
  environmentVariablesList: EnvironmentVariableListResponse;
  event?: Maybe<Event>;
  eventsList: EventListResponse;
  file?: Maybe<File>;
  /** @deprecated No longer supported. Use `fileUploadSignInfo` instead. */
  fileUploadInfo?: Maybe<FileUploadInfoResponse>;
  filesList: FileListResponse;
  filesSetting?: Maybe<FilesSetting>;
  filesSettingsList: FilesSettingListResponse;
  /** @deprecated No longer supported. Use `system.functionsList` instead. */
  functionsList?: Maybe<FunctionListResponse>;
  functionsVersionCheck?: Maybe<FunctionInfoCheck>;
  hold?: Maybe<Hold>;
  holdsList: HoldListResponse;
  isAllowedCallbackURL?: Maybe<IsAllowedCallbackUrlQueryResponse>;
  libraryStaff?: Maybe<LibraryStaff>;
  libraryStaffsList: LibraryStaffListResponse;
  loan?: Maybe<Loan>;
  loansList: LoanListResponse;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  notification?: Maybe<Notification>;
  notificationsList: NotificationListResponse;
  patron?: Maybe<Patron>;
  patronsList: PatronListResponse;
  recommendation?: Maybe<Recommendation>;
  recommendationsList: RecommendationListResponse;
  review?: Maybe<Review>;
  reviewsList: ReviewListResponse;
  role?: Maybe<Role>;
  rolesList: RoleListResponse;
  settings?: Maybe<Setting>;
  system?: Maybe<SystemQuery>;
  /** @deprecated No longer supported. Use `system.table` instead. */
  table?: Maybe<Table>;
  /** @deprecated No longer supported. Use `system.tableField` instead. */
  tableField?: Maybe<TableField>;
  /** @deprecated No longer supported. Use `system.tablesList` instead. */
  tablesList: TableListResponse;
  user?: Maybe<User>;
  userBillingConfiguration: UserBillingConfigurationResponse;
  userBillingConfigurationArchie: UserBillingConfigurationResponse;
  /** @deprecated No longer supported. Use `system.userInvitationsList` instead. */
  userInvitationsList?: Maybe<UserInvitationList>;
  usersList: UserListResponse;
  viewDryRun?: Maybe<ViewDryRunOutput>;
  /** @deprecated No longer supported. Use `system.workspacesList` instead. */
  workspacesList?: Maybe<WorkspaceListResponse>;
};


export type QueryApiTokenArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApiTokensListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApplicationArgs = {
  id: Scalars['String']['input'];
};


export type QueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String']['input'];
};


export type QueryAuthenticationProfileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAuthenticationProfilesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBillingCurrentPlanArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingInvoicesListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  by?: InputMaybe<BillingInvoicesListFilterType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingMetricUsageQuotasListArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBillingMetricUsagesListArgs = {
  filter?: InputMaybe<BillingMetricUsagesListFilter>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBookArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBooksListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BookFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<BookGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<BookOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BookSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDeployStatusArgs = {
  buildName: Scalars['String']['input'];
};


export type QueryDigitalResourceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDigitalResourcesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DigitalResourceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<DigitalResourceGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<DigitalResourceOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DigitalResourceSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnvironmentVariableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnvironmentVariablesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EnvironmentVariableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EnvironmentVariableGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EnvironmentVariableOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EnvironmentVariableSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<EventGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFileArgs = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesSettingArgs = {
  filemanagername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFilesSettingsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilesSettingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<FilesSettingGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<FilesSettingOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FilesSettingSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFunctionsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FunctionInfoFilter>;
  orderBy?: InputMaybe<Array<InputMaybe<FunctionInfoOrderBy>>>;
};


export type QueryHoldArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHoldsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<HoldFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<HoldGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<HoldOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<HoldSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryIsAllowedCallbackUrlArgs = {
  callbackURL: Scalars['String']['input'];
};


export type QueryLibraryStaffArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLibraryStaffsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LibraryStaffFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<LibraryStaffGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<LibraryStaffOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<LibraryStaffSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLoanArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLoansListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<LoanFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<LoanGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<LoanOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<LoanSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLogsArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryNotificationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNotificationsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<NotificationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<NotificationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPatronArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPatronsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PatronFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<PatronGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<PatronOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PatronSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRecommendationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRecommendationsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RecommendationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RecommendationGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RecommendationOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RecommendationSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryReviewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryReviewsListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReviewFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ReviewGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ReviewOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReviewSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRolesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTableFieldArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTablesListArgs = {
  filter?: InputMaybe<TableListFilter>;
};


export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserBillingConfigurationArgs = {
  filterPlanProjects?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserBillingConfigurationArchieArgs = {
  ideaId?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
  withDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryViewDryRunArgs = {
  sql: Scalars['String']['input'];
};

/** Notifications create input from recipient_id */
export type Recipient_Id_NotificationCreateInput = {
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  recipient_id?: InputMaybe<NotificationsRecipient_IdRelationInput>;
};

/** Notifications update input from recipient_id */
export type Recipient_Id_NotificationUpdateInput = {
  is_read?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  recipient_id?: InputMaybe<NotificationsRecipient_IdUpdateRelationInput>;
};

export type Recommendation = {
  _description?: Maybe<Scalars['String']['output']>;
  book_id?: Maybe<Book>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  patron_id?: Maybe<Patron>;
  reason?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Recommendations create input */
export type RecommendationCreateInput = {
  book_id?: InputMaybe<RecommendationsBook_IdRelationInput>;
  patron_id?: InputMaybe<RecommendationsPatron_IdRelationInput>;
  reason: Scalars['String']['input'];
};

/** Recommendations create many input */
export type RecommendationCreateManyInput = {
  book_id?: InputMaybe<RecommendationsBook_IdManyRelationInput>;
  patron_id?: InputMaybe<RecommendationsPatron_IdManyRelationInput>;
  reason: Scalars['String']['input'];
};

/** Recommendations delete input */
export type RecommendationDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** RecommendationFieldsPermissions create input */
export type RecommendationFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  reason?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RecommendationFilter = {
  AND?: InputMaybe<Array<RecommendationFilter>>;
  OR?: InputMaybe<Array<RecommendationFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  book_id?: InputMaybe<BookFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  patron_id?: InputMaybe<PatronFilter>;
  reason?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type RecommendationGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: RecommendationGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type RecommendationGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  book_id?: InputMaybe<BookGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  patron_id?: InputMaybe<PatronGroupByQuery>;
  reason?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type RecommendationKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** RecommendationListResponse output */
export type RecommendationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Recommendation>;
};

/** RecommendationManyResponse output */
export type RecommendationManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Recommendation>;
};

/** No longer supported. Use `sort` instead. */
export enum RecommendationOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ReasonAsc = 'reason_ASC',
  ReasonDesc = 'reason_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Recommendations subscription payload */
export type RecommendationPayload = {
  mutation: MutationType;
  node?: Maybe<Recommendation>;
  previousValues?: Maybe<Recommendation>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type RecommendationSort = {
  book_id?: InputMaybe<BookSort>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  patron_id?: InputMaybe<PatronSort>;
  reason?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Recommendations subscription filter */
export type RecommendationSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<RecommendationFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Recommendations update input */
export type RecommendationUpdateByFilterInput = {
  reason?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Recommendations update input */
export type RecommendationUpdateInput = {
  book_id?: InputMaybe<RecommendationsBook_IdUpdateRelationInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  patron_id?: InputMaybe<RecommendationsPatron_IdUpdateRelationInput>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type Recommendation_PermissionFilter = {
  AND?: InputMaybe<Array<Recommendation_PermissionFilter>>;
  OR?: InputMaybe<Array<Recommendation_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  book_id?: InputMaybe<Book_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  patron_id?: InputMaybe<Patron_PermissionFilter>;
  reason?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Recommendations relation input */
export type RecommendationsBook_IdManyRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
};

/** Recommendations relation input */
export type RecommendationsBook_IdRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
  create?: InputMaybe<Recommendations_BookCreateInput>;
};

/** Recommendations relation input */
export type RecommendationsBook_IdUpdateRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
  create?: InputMaybe<Recommendations_BookCreateInput>;
  disconnect?: InputMaybe<BookKeyFilter>;
  reconnect?: InputMaybe<BookKeyFilter>;
  update?: InputMaybe<Recommendations_BookUpdateInput>;
};

/** Recommendations relation input */
export type RecommendationsPatron_IdManyRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
};

/** Recommendations relation input */
export type RecommendationsPatron_IdRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
  create?: InputMaybe<Recommendations_PatronCreateInput>;
};

/** Recommendations relation input */
export type RecommendationsPatron_IdUpdateRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
  create?: InputMaybe<Recommendations_PatronCreateInput>;
  disconnect?: InputMaybe<PatronKeyFilter>;
  reconnect?: InputMaybe<PatronKeyFilter>;
  update?: InputMaybe<Recommendations_PatronUpdateInput>;
};

/** Books create input from Recommendations */
export type Recommendations_BookCreateInput = {
  Holds: BooksHoldsRelationInput;
  Loans: BooksLoansRelationInput;
  Recommendations?: InputMaybe<BooksRecommendationsRelationInput>;
  Reviews: BooksReviewsRelationInput;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Books update input from Recommendations */
export type Recommendations_BookUpdateInput = {
  Holds?: InputMaybe<BooksHoldsUpdateRelationInput>;
  Loans?: InputMaybe<BooksLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<BooksRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<BooksReviewsUpdateRelationInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Patrons create input from Recommendations */
export type Recommendations_PatronCreateInput = {
  Holds?: InputMaybe<PatronsHoldsRelationInput>;
  Loans?: InputMaybe<PatronsLoansRelationInput>;
  Recommendations?: InputMaybe<PatronsRecommendationsRelationInput>;
  Reviews?: InputMaybe<PatronsReviewsRelationInput>;
  borrowing_history: Scalars['JSON']['input'];
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdRelationInput>;
};

/** Patrons update input from Recommendations */
export type Recommendations_PatronUpdateInput = {
  Holds?: InputMaybe<PatronsHoldsUpdateRelationInput>;
  Loans?: InputMaybe<PatronsLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<PatronsRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<PatronsReviewsUpdateRelationInput>;
  borrowing_history?: InputMaybe<Scalars['JSON']['input']>;
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdUpdateRelationInput>;
};

/** RefreshTokenInput */
export type RefreshTokenInput = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  refreshToken: Scalars['String']['input'];
};

/** Relation */
export type Relation = {
  refField?: Maybe<TableField>;
  refFieldDisplayName?: Maybe<Scalars['String']['output']>;
  refFieldIsList?: Maybe<Scalars['Boolean']['output']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']['output']>;
  refFieldName?: Maybe<Scalars['String']['output']>;
  refTable: Table;
  relationFieldName?: Maybe<Scalars['String']['output']>;
  relationTableName?: Maybe<Scalars['String']['output']>;
};

/** Relation Create Input */
export type RelationCreateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList: Scalars['Boolean']['input'];
  refFieldIsRequired: Scalars['Boolean']['input'];
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId: Scalars['ID']['input'];
};

/** Relation Update Input */
export type RelationUpdateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId?: InputMaybe<Scalars['ID']['input']>;
};

/** Relative Date Predicate Operation Enum */
export enum RelativePredicateOpEnum {
  Add = 'ADD',
  Sub = 'SUB'
}

/** Relative Date Predicate Unit Enum */
export enum RelativePredicateUnitEnum {
  Day = 'DAY',
  DayHour = 'DAY_HOUR',
  DayMicrosecond = 'DAY_MICROSECOND',
  DayMinute = 'DAY_MINUTE',
  DaySecond = 'DAY_SECOND',
  Hour = 'HOUR',
  HourMicrosecond = 'HOUR_MICROSECOND',
  HourMinute = 'HOUR_MINUTE',
  HourSecond = 'HOUR_SECOND',
  Microsecond = 'MICROSECOND',
  Minute = 'MINUTE',
  MinuteMicrosecond = 'MINUTE_MICROSECOND',
  MinuteSecond = 'MINUTE_SECOND',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Second = 'SECOND',
  SecondMicrosecond = 'SECOND_MICROSECOND',
  Week = 'WEEK',
  Year = 'YEAR',
  YearMonth = 'YEAR_MONTH'
}

export type ReplaceFunctionArguments = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type ResizeImageDirectiveCropOptions = {
  height: Scalars['Int']['input'];
  offsetX?: InputMaybe<Scalars['Int']['input']>;
  offsetY?: InputMaybe<Scalars['Int']['input']>;
  width: Scalars['Int']['input'];
};

export type ResizeImageDirectiveFlipOptions = {
  horizontally?: InputMaybe<Scalars['Boolean']['input']>;
  vertically?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResizeImageDirectiveResizeOptions = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Review = {
  _description?: Maybe<Scalars['String']['output']>;
  book_id?: Maybe<Book>;
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  patron_id?: Maybe<Patron>;
  rating?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** Reviews create input */
export type ReviewCreateInput = {
  book_id?: InputMaybe<ReviewsBook_IdRelationInput>;
  comment: Scalars['String']['input'];
  patron_id?: InputMaybe<ReviewsPatron_IdRelationInput>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** Reviews create many input */
export type ReviewCreateManyInput = {
  book_id?: InputMaybe<ReviewsBook_IdManyRelationInput>;
  comment: Scalars['String']['input'];
  patron_id?: InputMaybe<ReviewsPatron_IdManyRelationInput>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

/** Reviews delete input */
export type ReviewDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ReviewFieldsPermissions create input */
export type ReviewFieldsPermissions = {
  comment?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewFilter = {
  AND?: InputMaybe<Array<ReviewFilter>>;
  OR?: InputMaybe<Array<ReviewFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  book_id?: InputMaybe<BookFilter>;
  comment?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  patron_id?: InputMaybe<PatronFilter>;
  rating?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type ReviewGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: ReviewGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type ReviewGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  book_id?: InputMaybe<BookGroupByQuery>;
  comment?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  patron_id?: InputMaybe<PatronGroupByQuery>;
  rating?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

export type ReviewKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** ReviewListResponse output */
export type ReviewListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Review>;
};

/** ReviewManyResponse output */
export type ReviewManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Review>;
};

/** No longer supported. Use `sort` instead. */
export enum ReviewOrderBy {
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Reviews subscription payload */
export type ReviewPayload = {
  mutation: MutationType;
  node?: Maybe<Review>;
  previousValues?: Maybe<Review>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ReviewSort = {
  book_id?: InputMaybe<BookSort>;
  comment?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  patron_id?: InputMaybe<PatronSort>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Reviews subscription filter */
export type ReviewSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<ReviewFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Reviews update input */
export type ReviewUpdateByFilterInput = {
  comment?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  rating?: InputMaybe<Array<InputMaybe<UpdateByFilterIntInput>>>;
};

/** Reviews update input */
export type ReviewUpdateInput = {
  book_id?: InputMaybe<ReviewsBook_IdUpdateRelationInput>;
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  patron_id?: InputMaybe<ReviewsPatron_IdUpdateRelationInput>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type Review_PermissionFilter = {
  AND?: InputMaybe<Array<Review_PermissionFilter>>;
  OR?: InputMaybe<Array<Review_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  book_id?: InputMaybe<Book_PermissionFilter>;
  comment?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  id?: InputMaybe<IdPredicate>;
  patron_id?: InputMaybe<Patron_PermissionFilter>;
  rating?: InputMaybe<IntPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

/** Reviews relation input */
export type ReviewsBook_IdManyRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
};

/** Reviews relation input */
export type ReviewsBook_IdRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
  create?: InputMaybe<Reviews_BookCreateInput>;
};

/** Reviews relation input */
export type ReviewsBook_IdUpdateRelationInput = {
  connect?: InputMaybe<BookKeyFilter>;
  create?: InputMaybe<Reviews_BookCreateInput>;
  disconnect?: InputMaybe<BookKeyFilter>;
  reconnect?: InputMaybe<BookKeyFilter>;
  update?: InputMaybe<Reviews_BookUpdateInput>;
};

/** Reviews relation input */
export type ReviewsPatron_IdManyRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
};

/** Reviews relation input */
export type ReviewsPatron_IdRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
  create?: InputMaybe<Reviews_PatronCreateInput>;
};

/** Reviews relation input */
export type ReviewsPatron_IdUpdateRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
  create?: InputMaybe<Reviews_PatronCreateInput>;
  disconnect?: InputMaybe<PatronKeyFilter>;
  reconnect?: InputMaybe<PatronKeyFilter>;
  update?: InputMaybe<Reviews_PatronUpdateInput>;
};

/** Books create input from Reviews */
export type Reviews_BookCreateInput = {
  Holds?: InputMaybe<BooksHoldsRelationInput>;
  Loans?: InputMaybe<BooksLoansRelationInput>;
  Recommendations?: InputMaybe<BooksRecommendationsRelationInput>;
  Reviews?: InputMaybe<BooksReviewsRelationInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Books update input from Reviews */
export type Reviews_BookUpdateInput = {
  Holds?: InputMaybe<BooksHoldsUpdateRelationInput>;
  Loans?: InputMaybe<BooksLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<BooksRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<BooksReviewsUpdateRelationInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  availability_status?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  publication_date?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Patrons create input from Reviews */
export type Reviews_PatronCreateInput = {
  Holds?: InputMaybe<PatronsHoldsRelationInput>;
  Loans?: InputMaybe<PatronsLoansRelationInput>;
  Recommendations: PatronsRecommendationsRelationInput;
  Reviews?: InputMaybe<PatronsReviewsRelationInput>;
  borrowing_history: Scalars['JSON']['input'];
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdRelationInput>;
};

/** Patrons update input from Reviews */
export type Reviews_PatronUpdateInput = {
  Holds?: InputMaybe<PatronsHoldsUpdateRelationInput>;
  Loans?: InputMaybe<PatronsLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<PatronsRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<PatronsReviewsUpdateRelationInput>;
  borrowing_history?: InputMaybe<Scalars['JSON']['input']>;
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdUpdateRelationInput>;
};

export type Role = {
  _description?: Maybe<Scalars['String']['output']>;
  apiTokens?: Maybe<ApiTokenListResponse>;
  authenticationProfiles?: Maybe<AuthenticationProfileListResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  membersCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<PermissionListResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UserListResponse>;
};


export type RoleApiTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ApiTokenFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<ApiTokenGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<ApiTokenOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApiTokenSort>>;
};


export type RoleAuthenticationProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthenticationProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<AuthenticationProfileGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthenticationProfileOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthenticationProfileSort>>;
};


export type RolePermissionsArgs = {
  filter?: InputMaybe<PermissionInputFilter>;
};


export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<UserGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserSort>>;
};

/** Roles create input */
export type RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles create many input */
export type RoleCreateManyInput = {
  apiTokens?: InputMaybe<RolesApiTokensManyRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesManyRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  users?: InputMaybe<RolesUsersManyRelationInput>;
};

/** Roles delete input */
export type RoleDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum RoleEnum {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER'
}

/** RoleFieldsPermissions create input */
export type RoleFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RoleFilter = {
  AND?: InputMaybe<Array<RoleFilter>>;
  OR?: InputMaybe<Array<RoleFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  apiTokens?: InputMaybe<ApiTokenRelationFilter>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileRelationFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  permissions?: InputMaybe<PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  users?: InputMaybe<UserRelationFilter>;
};

export type RoleGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: RoleGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type RoleGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  apiTokens?: InputMaybe<ApiTokenGroupByQuery>;
  authenticationProfiles?: InputMaybe<AuthenticationProfileGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  description?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  name?: InputMaybe<Array<GroupByField>>;
  permissions?: InputMaybe<PermissionGroupByQuery>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  users?: InputMaybe<UserGroupByQuery>;
};

export type RoleKeyFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** RoleListResponse output */
export type RoleListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Role>;
};

/** RoleManyResponse output */
export type RoleManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<Role>;
};

/** No longer supported. Use `sort` instead. */
export enum RoleOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SystemTypeAsc = 'systemType_ASC',
  SystemTypeDesc = 'systemType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Roles subscription payload */
export type RolePayload = {
  mutation: MutationType;
  node?: Maybe<Role>;
  previousValues?: Maybe<Role>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type RoleRelationFilter = {
  every?: InputMaybe<RoleFilter>;
  none?: InputMaybe<RoleFilter>;
  some?: InputMaybe<RoleFilter>;
};

export type RoleSort = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Roles subscription filter */
export type RoleSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<RoleFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Roles update input */
export type RoleUpdateByFilterInput = {
  description?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  name?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  systemType?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Roles update input */
export type RoleUpdateInput = {
  apiTokens?: InputMaybe<RolesApiTokensUpdateRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesUpdateRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersUpdateRelationInput>;
};

export type Role_PermissionFilter = {
  AND?: InputMaybe<Array<Role_PermissionFilter>>;
  OR?: InputMaybe<Array<Role_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  apiTokens?: InputMaybe<ApiToken_PermissionRelationFilter>;
  authenticationProfiles?: InputMaybe<AuthenticationProfile_PermissionRelationFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  description?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  name?: InputMaybe<StringPredicate>;
  permissions?: InputMaybe<Permission_PermissionRelationFilter>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  users?: InputMaybe<User_PermissionRelationFilter>;
};

export type Role_PermissionRelationFilter = {
  every?: InputMaybe<Role_PermissionFilter>;
  none?: InputMaybe<Role_PermissionFilter>;
  some?: InputMaybe<Role_PermissionFilter>;
};

/** Roles relation input */
export type RolesApiTokensManyRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensUpdateRelationInput = {
  connect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  disconnect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  reconnect?: InputMaybe<Array<ApiTokenKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_ApiTokenUpdateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesManyRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesUpdateRelationInput = {
  connect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileCreateInput>>>;
  disconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  reconnect?: InputMaybe<Array<AuthenticationProfileKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_AuthenticationProfileUpdateInput>>>;
};

/** Roles relation input */
export type RolesUsersManyRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
};

/** Roles relation input */
export type RolesUsersRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput>>>;
};

/** Roles relation input */
export type RolesUsersUpdateRelationInput = {
  connect?: InputMaybe<Array<UserKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Roles_UserCreateInput>>>;
  disconnect?: InputMaybe<Array<UserKeyFilter>>;
  reconnect?: InputMaybe<Array<UserKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Roles_UserUpdateInput>>>;
};

/** ApiTokens update input from roles */
export type Roles_ApiTokenUpdateInput = {
  data: ApiTokenUpdateInput;
  filter?: InputMaybe<ApiTokenKeyFilter>;
};

/** AuthenticationProfiles create input from roles */
export type Roles_AuthenticationProfileCreateInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  databaseName?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  managementDomain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<AuthenticationProfilesRolesRelationInput>;
  secret?: InputMaybe<Scalars['String']['input']>;
  selfSignUpEmailDomains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selfSignUpEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** AuthenticationProfiles update input from roles */
export type Roles_AuthenticationProfileUpdateInput = {
  data: AuthenticationProfileUpdateInput;
  filter?: InputMaybe<AuthenticationProfileKeyFilter>;
};

/** Users create input from roles */
export type Roles_UserCreateInput = {
  LibraryStaff: UsersLibraryStaffRelationInput;
  Notifications: UsersNotificationsRelationInput;
  Patrons: UsersPatronsRelationInput;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users update input from roles */
export type Roles_UserUpdateInput = {
  data: UserUpdateInput;
  filter?: InputMaybe<UserKeyFilter>;
};

/** Schema Origin */
export type SchemaOrigin = {
  provider?: Maybe<Scalars['String']['output']>;
  type: SchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW'
}

export type Setting = {
  _description?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  buttonLinkColor?: Maybe<Scalars['String']['output']>;
  containerColor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  currency?: Maybe<Scalars['String']['output']>;
  dateFormat?: Maybe<Scalars['String']['output']>;
  landingPageImage?: Maybe<File>;
  language?: Maybe<Scalars['String']['output']>;
  leftNavColor?: Maybe<Scalars['String']['output']>;
  menuBarBGColor?: Maybe<Scalars['String']['output']>;
  menuBarIconsColor?: Maybe<Scalars['String']['output']>;
  menuBarLogo?: Maybe<File>;
  passwordMinLength?: Maybe<Scalars['Int']['output']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']['output']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']['output']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']['output']>;
  rememberDevice?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userInterfaceStyle?: Maybe<Scalars['String']['output']>;
  vanityUrl?: Maybe<Scalars['String']['output']>;
};

export type SettingFilter = {
  AND?: InputMaybe<Array<SettingFilter>>;
  OR?: InputMaybe<Array<SettingFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<StringPredicate>;
  buttonLinkColor?: InputMaybe<StringPredicate>;
  containerColor?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  currency?: InputMaybe<StringPredicate>;
  dateFormat?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  landingPageImage?: InputMaybe<FileFilter>;
  language?: InputMaybe<StringPredicate>;
  leftNavColor?: InputMaybe<StringPredicate>;
  menuBarBGColor?: InputMaybe<StringPredicate>;
  menuBarIconsColor?: InputMaybe<StringPredicate>;
  menuBarLogo?: InputMaybe<FileFilter>;
  passwordMinLength?: InputMaybe<IntPredicate>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate>;
  passwordUpdateInterval?: InputMaybe<IntPredicate>;
  rememberDevice?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userInterfaceStyle?: InputMaybe<StringPredicate>;
  vanityUrl?: InputMaybe<StringPredicate>;
};

export type SettingGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: SettingGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type SettingGroupByQuery = {
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  bgColor?: InputMaybe<Array<GroupByField>>;
  buttonLinkColor?: InputMaybe<Array<GroupByField>>;
  containerColor?: InputMaybe<Array<GroupByField>>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  currency?: InputMaybe<Array<GroupByField>>;
  dateFormat?: InputMaybe<Array<GroupByField>>;
  landingPageImage?: InputMaybe<FileGroupByQuery>;
  language?: InputMaybe<Array<GroupByField>>;
  leftNavColor?: InputMaybe<Array<GroupByField>>;
  menuBarBGColor?: InputMaybe<Array<GroupByField>>;
  menuBarIconsColor?: InputMaybe<Array<GroupByField>>;
  menuBarLogo?: InputMaybe<FileGroupByQuery>;
  passwordMinLength?: InputMaybe<Array<GroupByField>>;
  passwordRequireLowercase?: InputMaybe<Array<GroupByField>>;
  passwordRequireNumbers?: InputMaybe<Array<GroupByField>>;
  passwordRequireSpecial?: InputMaybe<Array<GroupByField>>;
  passwordRequireUppercase?: InputMaybe<Array<GroupByField>>;
  passwordUpdateInterval?: InputMaybe<Array<GroupByField>>;
  rememberDevice?: InputMaybe<Array<GroupByField>>;
  timezone?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
  userInterfaceStyle?: InputMaybe<Array<GroupByField>>;
  vanityUrl?: InputMaybe<Array<GroupByField>>;
};

/** SettingListResponse output */
export type SettingListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<Setting>;
};

/** No longer supported. Use `sort` instead. */
export enum SettingOrderBy {
  BgColorAsc = 'bgColor_ASC',
  BgColorDesc = 'bgColor_DESC',
  ButtonLinkColorAsc = 'buttonLinkColor_ASC',
  ButtonLinkColorDesc = 'buttonLinkColor_DESC',
  ContainerColorAsc = 'containerColor_ASC',
  ContainerColorDesc = 'containerColor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CurrencyAsc = 'currency_ASC',
  CurrencyDesc = 'currency_DESC',
  DateFormatAsc = 'dateFormat_ASC',
  DateFormatDesc = 'dateFormat_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  LeftNavColorAsc = 'leftNavColor_ASC',
  LeftNavColorDesc = 'leftNavColor_DESC',
  MenuBarBgColorAsc = 'menuBarBGColor_ASC',
  MenuBarBgColorDesc = 'menuBarBGColor_DESC',
  MenuBarIconsColorAsc = 'menuBarIconsColor_ASC',
  MenuBarIconsColorDesc = 'menuBarIconsColor_DESC',
  PasswordMinLengthAsc = 'passwordMinLength_ASC',
  PasswordMinLengthDesc = 'passwordMinLength_DESC',
  PasswordRequireLowercaseAsc = 'passwordRequireLowercase_ASC',
  PasswordRequireLowercaseDesc = 'passwordRequireLowercase_DESC',
  PasswordRequireNumbersAsc = 'passwordRequireNumbers_ASC',
  PasswordRequireNumbersDesc = 'passwordRequireNumbers_DESC',
  PasswordRequireSpecialAsc = 'passwordRequireSpecial_ASC',
  PasswordRequireSpecialDesc = 'passwordRequireSpecial_DESC',
  PasswordRequireUppercaseAsc = 'passwordRequireUppercase_ASC',
  PasswordRequireUppercaseDesc = 'passwordRequireUppercase_DESC',
  PasswordUpdateIntervalAsc = 'passwordUpdateInterval_ASC',
  PasswordUpdateIntervalDesc = 'passwordUpdateInterval_DESC',
  RememberDeviceAsc = 'rememberDevice_ASC',
  RememberDeviceDesc = 'rememberDevice_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserInterfaceStyleAsc = 'userInterfaceStyle_ASC',
  UserInterfaceStyleDesc = 'userInterfaceStyle_DESC',
  VanityUrlAsc = 'vanityUrl_ASC',
  VanityUrlDesc = 'vanityUrl_DESC'
}

/** Settings subscription payload */
export type SettingPayload = {
  mutation: MutationType;
  node?: Maybe<Setting>;
  previousValues?: Maybe<Setting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type SettingRelationFilter = {
  every?: InputMaybe<SettingFilter>;
  none?: InputMaybe<SettingFilter>;
  some?: InputMaybe<SettingFilter>;
};

export type SettingSort = {
  bgColor?: InputMaybe<SortOrder>;
  buttonLinkColor?: InputMaybe<SortOrder>;
  containerColor?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  currency?: InputMaybe<SortOrder>;
  dateFormat?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  landingPageImage?: InputMaybe<FileSort>;
  language?: InputMaybe<SortOrder>;
  leftNavColor?: InputMaybe<SortOrder>;
  menuBarBGColor?: InputMaybe<SortOrder>;
  menuBarIconsColor?: InputMaybe<SortOrder>;
  menuBarLogo?: InputMaybe<FileSort>;
  passwordMinLength?: InputMaybe<SortOrder>;
  passwordRequireLowercase?: InputMaybe<SortOrder>;
  passwordRequireNumbers?: InputMaybe<SortOrder>;
  passwordRequireSpecial?: InputMaybe<SortOrder>;
  passwordRequireUppercase?: InputMaybe<SortOrder>;
  passwordUpdateInterval?: InputMaybe<SortOrder>;
  rememberDevice?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userInterfaceStyle?: InputMaybe<SortOrder>;
  vanityUrl?: InputMaybe<SortOrder>;
};

/** Settings subscription filter */
export type SettingSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<SettingFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Settings update input */
export type SettingUpdateInput = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  buttonLinkColor?: InputMaybe<Scalars['String']['input']>;
  containerColor?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  leftNavColor?: InputMaybe<Scalars['String']['input']>;
  menuBarBGColor?: InputMaybe<Scalars['String']['input']>;
  menuBarIconsColor?: InputMaybe<Scalars['String']['input']>;
  passwordMinLength?: InputMaybe<Scalars['Int']['input']>;
  passwordRequireLowercase?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireNumbers?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireSpecial?: InputMaybe<Scalars['Boolean']['input']>;
  passwordRequireUppercase?: InputMaybe<Scalars['Boolean']['input']>;
  passwordUpdateInterval?: InputMaybe<Scalars['Int']['input']>;
  rememberDevice?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  userInterfaceStyle?: InputMaybe<Scalars['String']['input']>;
  vanityUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Setting_PermissionFilter = {
  AND?: InputMaybe<Array<Setting_PermissionFilter>>;
  OR?: InputMaybe<Array<Setting_PermissionFilter>>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<StringPredicate>;
  buttonLinkColor?: InputMaybe<StringPredicate>;
  containerColor?: InputMaybe<StringPredicate>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  currency?: InputMaybe<StringPredicate>;
  dateFormat?: InputMaybe<StringPredicate>;
  deletedAt?: InputMaybe<IntPredicate>;
  landingPageImage?: InputMaybe<File_PermissionFilter>;
  language?: InputMaybe<StringPredicate>;
  leftNavColor?: InputMaybe<StringPredicate>;
  menuBarBGColor?: InputMaybe<StringPredicate>;
  menuBarIconsColor?: InputMaybe<StringPredicate>;
  menuBarLogo?: InputMaybe<File_PermissionFilter>;
  passwordMinLength?: InputMaybe<IntPredicate>;
  passwordRequireLowercase?: InputMaybe<BoolPredicate>;
  passwordRequireNumbers?: InputMaybe<BoolPredicate>;
  passwordRequireSpecial?: InputMaybe<BoolPredicate>;
  passwordRequireUppercase?: InputMaybe<BoolPredicate>;
  passwordUpdateInterval?: InputMaybe<IntPredicate>;
  rememberDevice?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
  userInterfaceStyle?: InputMaybe<StringPredicate>;
  vanityUrl?: InputMaybe<StringPredicate>;
};

export type Setting_PermissionRelationFilter = {
  every?: InputMaybe<Setting_PermissionFilter>;
  none?: InputMaybe<Setting_PermissionFilter>;
  some?: InputMaybe<Setting_PermissionFilter>;
};

/** SignUpResendInput */
export type SignUpResendInput = {
  email: Scalars['String']['input'];
};

/** Smart Field Attributes */
export type SmartFieldTypeAttributes = {
  format: Scalars['String']['output'];
  innerFields?: Maybe<Array<Maybe<CustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** SortOrder */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringPadFunctionArguments = {
  len: Scalars['Int']['input'];
  str: Scalars['String']['input'];
};

export type StringPredicate = {
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type StringPredicateHaving = {
  AND?: InputMaybe<Array<StringPredicateHaving>>;
  OR?: InputMaybe<Array<StringPredicateHaving>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  ends_with?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is_empty?: InputMaybe<Scalars['Boolean']['input']>;
  is_not_empty?: InputMaybe<Scalars['Boolean']['input']>;
  not_contains?: InputMaybe<Scalars['String']['input']>;
  not_ends_with?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  not_starts_with?: InputMaybe<Scalars['String']['input']>;
  starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum StringTrimMode {
  Both = 'BOTH',
  Leading = 'LEADING',
  Trailing = 'TRAILING'
}

export type Subscription = {
  ApiTokens?: Maybe<ApiTokenPayload>;
  AuthenticationProfiles?: Maybe<AuthenticationProfilePayload>;
  AuthenticationSettings?: Maybe<AuthenticationSettingPayload>;
  Books?: Maybe<BookPayload>;
  DigitalResources?: Maybe<DigitalResourcePayload>;
  EnvironmentVariables?: Maybe<EnvironmentVariablePayload>;
  Events?: Maybe<EventPayload>;
  Files?: Maybe<FilePayload>;
  FilesSettings?: Maybe<FilesSettingPayload>;
  Holds?: Maybe<HoldPayload>;
  LibraryStaff?: Maybe<LibraryStaffPayload>;
  Loans?: Maybe<LoanPayload>;
  Notifications?: Maybe<NotificationPayload>;
  Patrons?: Maybe<PatronPayload>;
  Permissions?: Maybe<PermissionPayload>;
  Recommendations?: Maybe<RecommendationPayload>;
  Reviews?: Maybe<ReviewPayload>;
  Roles?: Maybe<RolePayload>;
  Settings?: Maybe<SettingPayload>;
  Users?: Maybe<UserPayload>;
};


export type SubscriptionApiTokensArgs = {
  filter?: InputMaybe<ApiTokenSubscriptionFilter>;
};


export type SubscriptionAuthenticationProfilesArgs = {
  filter?: InputMaybe<AuthenticationProfileSubscriptionFilter>;
};


export type SubscriptionAuthenticationSettingsArgs = {
  filter?: InputMaybe<AuthenticationSettingSubscriptionFilter>;
};


export type SubscriptionBooksArgs = {
  filter?: InputMaybe<BookSubscriptionFilter>;
};


export type SubscriptionDigitalResourcesArgs = {
  filter?: InputMaybe<DigitalResourceSubscriptionFilter>;
};


export type SubscriptionEnvironmentVariablesArgs = {
  filter?: InputMaybe<EnvironmentVariableSubscriptionFilter>;
};


export type SubscriptionEventsArgs = {
  filter?: InputMaybe<EventSubscriptionFilter>;
};


export type SubscriptionFilesArgs = {
  filter?: InputMaybe<FileSubscriptionFilter>;
};


export type SubscriptionFilesSettingsArgs = {
  filter?: InputMaybe<FilesSettingSubscriptionFilter>;
};


export type SubscriptionHoldsArgs = {
  filter?: InputMaybe<HoldSubscriptionFilter>;
};


export type SubscriptionLibraryStaffArgs = {
  filter?: InputMaybe<LibraryStaffSubscriptionFilter>;
};


export type SubscriptionLoansArgs = {
  filter?: InputMaybe<LoanSubscriptionFilter>;
};


export type SubscriptionNotificationsArgs = {
  filter?: InputMaybe<NotificationSubscriptionFilter>;
};


export type SubscriptionPatronsArgs = {
  filter?: InputMaybe<PatronSubscriptionFilter>;
};


export type SubscriptionPermissionsArgs = {
  filter?: InputMaybe<PermissionSubscriptionFilter>;
};


export type SubscriptionRecommendationsArgs = {
  filter?: InputMaybe<RecommendationSubscriptionFilter>;
};


export type SubscriptionReviewsArgs = {
  filter?: InputMaybe<ReviewSubscriptionFilter>;
};


export type SubscriptionRolesArgs = {
  filter?: InputMaybe<RoleSubscriptionFilter>;
};


export type SubscriptionSettingsArgs = {
  filter?: InputMaybe<SettingSubscriptionFilter>;
};


export type SubscriptionUsersArgs = {
  filter?: InputMaybe<UserSubscriptionFilter>;
};

export type SubstringFunctionArguments = {
  len?: InputMaybe<Scalars['Int']['input']>;
  pos: Scalars['Int']['input'];
};

export type SuccessResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SuccessWithMessageResponse = {
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Switch Field Attributes */
export type SwitchFieldTypeAttributes = {
  format: Scalars['String']['output'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Switch Type Format Enum */
export enum SwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO'
}

export type SystemAiIdeasInput = {
  examples?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Application */
export type SystemApplication = {
  appType: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: SystemApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type SystemApplicationDeleteMutationInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

/** Application install input */
export type SystemApplicationInstallInput = {
  appType: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  status?: InputMaybe<SystemApplicationStatusEnum>;
};

/** SystemApplicationListResponse output */
export type SystemApplicationListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemApplication>;
};

/** Application Status Enum */
export enum SystemApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type SystemApplicationUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SystemApplicationStatusEnum>;
};

export type SystemAsyncSessionStatusResponse = {
  result?: Maybe<Scalars['JSON']['output']>;
  status: Scalars['String']['output'];
};

export type SystemAuthProfile = {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SystemAuthenticationInfo = {
  authProfile?: Maybe<Array<Maybe<SystemAuthProfile>>>;
  environmentId?: Maybe<Scalars['String']['output']>;
  environmentName?: Maybe<Scalars['String']['output']>;
};

export type SystemBackendUtilizationResponse = {
  authProfiles?: Maybe<Scalars['Int']['output']>;
  databaseRows?: Maybe<Scalars['Int']['output']>;
  field?: Maybe<Scalars['Int']['output']>;
  fileStorageSize?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  roles?: Maybe<Scalars['Int']['output']>;
  tables?: Maybe<Scalars['Int']['output']>;
};

export type SystemBasicSectionConfigurationForPromptExecutionResponse = {
  content?: Maybe<Scalars['JSON']['output']>;
};

export type SystemBasicSectionConfigurationItem = {
  criteria: Scalars['String']['output'];
  description: Scalars['String']['output'];
  enabledWith8base?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SystemBasicSectionConfigurationResponse = {
  application_classification?: Maybe<Array<Maybe<SystemBasicSectionConfigurationItem>>>;
  building_blocks?: Maybe<Array<Maybe<SystemBasicSectionConfigurationItem>>>;
  commercialization_model?: Maybe<Array<Maybe<SystemBasicSectionConfigurationItem>>>;
};

export type SystemBillingCurrentPlanResponse = {
  customerId?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Maybe<SystemBillingPlanFeature>>>;
  id?: Maybe<Scalars['ID']['output']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetrics>>>;
  name?: Maybe<Scalars['String']['output']>;
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  paymentDetails?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<SystemWorkspaceStatus>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  trialEnd?: Maybe<Scalars['DateTime']['output']>;
};

export enum SystemBillingDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type SystemBillingDetailsResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: SystemBillingDetailsOrigin;
};

export type SystemBillingInvoiceItem = {
  amountDue?: Maybe<Scalars['Float']['output']>;
  amountPaid?: Maybe<Scalars['Float']['output']>;
  amountRemaining?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endingBalance?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  invoicePdf?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<SystemBillingInvoiceItemOrganizationInfo>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  periodEnd?: Maybe<Scalars['DateTime']['output']>;
  periodStart?: Maybe<Scalars['DateTime']['output']>;
  plan?: Maybe<SystemBillingInvoiceItemPlanInfo>;
  project?: Maybe<SystemBillingInvoiceItemProjectInfo>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingInvoiceItemOrganizationInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingInvoiceItemPlanInfo = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingInvoiceItemProjectInfo = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum SystemBillingInvoicesListFilterType {
  Customer = 'CUSTOMER',
  Project = 'PROJECT'
}

/** SystemBillingInvoicesListResponse output */
export type SystemBillingInvoicesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingInvoiceItem>;
};

export type SystemBillingLimitMetricItem = {
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  showPriority?: Maybe<Scalars['Int']['output']>;
  tooltip?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingMetricOverageItem = {
  value?: Maybe<Scalars['Float']['output']>;
  warning?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingMetricUsageItem = {
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  overage?: Maybe<SystemBillingMetricOverageItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingMetricUsageQuotaItem = {
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** SystemBillingMetricUsageQuotasListResponse output */
export type SystemBillingMetricUsageQuotasListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingMetricUsageQuotaItem>;
};

export type SystemBillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** SystemBillingMetricUsagesListResponse output */
export type SystemBillingMetricUsagesListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemBillingMetricUsageItem>;
};

export type SystemBillingNextPlanResponse = {
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type SystemBillingPlanBaseInfo = {
  capacity?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  featuresTitle?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isCustom?: Maybe<Scalars['Boolean']['output']>;
  isLegacy?: Maybe<Scalars['Boolean']['output']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetricItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingPlanFeature = {
  displayName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemBillingPlanLimitMetricItem = {
  displayName?: Maybe<Scalars['String']['output']>;
  hardLimit?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['Int']['output']>;
  softLimit?: Maybe<Scalars['Float']['output']>;
};

export type SystemBillingPlanLimitMetrics = {
  hardLimit?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overagePrice?: Maybe<Scalars['String']['output']>;
  softLimit?: Maybe<Scalars['String']['output']>;
};

/** BillingPlanUpdateMutationInput */
export type SystemBillingPlanUpdateMutationInput = {
  planId: Scalars['ID']['input'];
  projectID: Scalars['ID']['input'];
};

export enum SystemBranchEnvironmentMode {
  Full = 'FULL',
  System = 'SYSTEM'
}

export type SystemCacheEvictResponse = {
  evicted: Array<Maybe<Scalars['String']['output']>>;
};

export type SystemChangePlanIdeaMutationInput = {
  archieId: Scalars['ID']['input'];
  couponId?: InputMaybe<Scalars['String']['input']>;
  couponName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  newPlan: Scalars['String']['input'];
};

export type SystemChangeRoleIdeaMemberMutationInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['ID']['input'];
  role: InvitationRoleEnum;
};

export type SystemChangeRoleIdeaMutationInputList = {
  recipients: Array<SystemChangeRoleIdeaMemberMutationInput>;
};

/** Ci Commit Mode */
export enum SystemCiCommitMode {
  Full = 'FULL',
  OnlyMigrations = 'ONLY_MIGRATIONS',
  OnlyProject = 'ONLY_PROJECT'
}

/** Ci Status */
export type SystemCiStatusOutput = {
  migrations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Scalars['String']['output'];
};

/** CloudLogs Entry */
export type SystemCloudLogsEntry = {
  message?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
};

/** Computed field mode */
export enum SystemComputedFieldMode {
  Stored = 'STORED',
  Virtual = 'VIRTUAL'
}

/** Custom Table Field Type */
export type SystemCustomTableField = {
  computedMode?: Maybe<SystemComputedFieldMode>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType?: Maybe<SystemFieldType>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  isList: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Date Field Attributes */
export type SystemDateFieldTypeAttributes = {
  format: Scalars['String']['output'];
};

/** Date Type Format Enum */
export enum SystemDateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** Delete Member From Organization Response */
export type SystemDeleteArchieMemberFromOrganizationResponse = {
  success: Scalars['Boolean']['output'];
};

export type SystemDeleteIdeaMutationInput = {
  id: Scalars['ID']['input'];
};

export type SystemDeleteMemberIdeaMutationInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['ID']['input'];
};

export type SystemDeleteMemberIdeaMutationInputList = {
  members: Array<SystemDeleteMemberIdeaMutationInput>;
};

/** DeployDataResponse */
export type SystemDeployDataResponse = {
  buildName: Scalars['String']['output'];
  uploadBuildUrl: Scalars['String']['output'];
  uploadMetaDataUrl: Scalars['String']['output'];
};

export enum SystemDeployModeEnum {
  Full = 'FULL',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT'
}

/** DeployOptions */
export type SystemDeployOptions = {
  extensionNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<SystemDeployModeEnum>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
  pluginNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum SystemDeployStatusEnum {
  Compiling = 'compiling',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Deploying = 'deploying',
  Initialize = 'initialize',
  Preparing = 'preparing'
}

/** SystemDeployStatusResult */
export type SystemDeployStatusResult = {
  message?: Maybe<Scalars['String']['output']>;
  status: SystemDeployStatusEnum;
};

/** DeployingBuildInput */
export type SystemDeployingBuildInput = {
  buildName: Scalars['String']['input'];
  options?: InputMaybe<SystemDeployOptions>;
};

export type SystemDeploymentAbItemResponse = {
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  userDeploy?: Maybe<SystemMemberAccountInfo>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
};

export type SystemDeploymentProjectItemResponse = {
  dateDeploy?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  statusDeploy?: Maybe<Scalars['String']['output']>;
  urlDeploy?: Maybe<Scalars['String']['output']>;
  versionDeploy?: Maybe<Scalars['String']['output']>;
  versionFrontEnd?: Maybe<Scalars['String']['output']>;
  workspaceId?: Maybe<Scalars['ID']['output']>;
};

/** SystemDeploymentProjectListResponse output */
export type SystemDeploymentProjectListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemDeploymentProjectItemResponse>;
};

/** SystemEnvironmentBackupListResponse output */
export type SystemEnvironmentBackupListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentBackupItem>;
};

export type SystemEnvironmentMember = {
  avatar?: Maybe<SystemEnvironmentMemberAvatar>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<SystemEnvironmentMemberPermissionsList>;
  registeredAt?: Maybe<Scalars['DateTime']['output']>;
  roles?: Maybe<SystemEnvironmentMemberRolesList>;
  status: Scalars['String']['output'];
};

export type SystemEnvironmentMemberAvatar = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemEnvironmentMemberFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemEnvironmentMemberPermission = {
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
};

export type SystemEnvironmentMemberPermissionsList = {
  count: Scalars['Int']['output'];
  items?: Maybe<Array<SystemEnvironmentMemberPermission>>;
};

export type SystemEnvironmentMemberRole = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SystemEnvironmentMemberRoleIdFilterPredicate = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  not_equals?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemEnvironmentMemberRolesList = {
  count: Scalars['Int']['output'];
  items?: Maybe<Array<SystemEnvironmentMemberRole>>;
};

export type SystemEnvironmentMemberStatusFilterPredicate = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type SystemEnvironmentMemberUpdateData = {
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemEnvironmentMembersFilter = {
  email: Scalars['String']['input'];
};

export type SystemEnvironmentMembersListFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<SystemEnvironmentMemberRoleIdFilterPredicate>;
  status?: InputMaybe<SystemEnvironmentMemberStatusFilterPredicate>;
  workspaceId?: InputMaybe<Scalars['ID']['input']>;
};

/** SystemEnvironmentMembersListResponse output */
export type SystemEnvironmentMembersListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemEnvironmentMember>;
};

export type SystemEnvironmentMembersListSort = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  isOwner?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type SystemEnvironmentProjectItem = {
  fields?: Maybe<Scalars['String']['output']>;
  functions?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tables?: Maybe<Scalars['String']['output']>;
  worksApiHost?: Maybe<Scalars['String']['output']>;
  workspaceId: Scalars['ID']['output'];
  workspaceName: Scalars['String']['output'];
};

export enum SystemEnvironmentRelationModeEnum {
  ForeignKey = 'ForeignKey',
  Pivot = 'Pivot'
}

export type SystemEnvironmentRoleBaseInfo = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SystemEnvironmentRoleList = {
  assignedRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
  environmentId: Scalars['String']['output'];
  environmentName: Scalars['String']['output'];
  exists?: Maybe<Scalars['Boolean']['output']>;
  roles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
};

export type SystemEnvironmentSettings = {
  deleteLock?: Maybe<Scalars['Boolean']['output']>;
  fileManagementProvider?: Maybe<SystemFileManagerProviderTypeEnum>;
  introspection?: Maybe<Scalars['Boolean']['output']>;
  relationMode?: Maybe<SystemEnvironmentRelationModeEnum>;
};

/** SystemEnvironmentsListResponse output */
export type SystemEnvironmentsListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<EnvironmentItem>;
};

/** SystemEnvironmentsProjectListResponse output */
export type SystemEnvironmentsProjectListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemEnvironmentProjectItem>;
};

export type SystemExportIdeaToDocumentInput = {
  advancedConsiderations?: InputMaybe<Scalars['Boolean']['input']>;
  applicationServices?: InputMaybe<Scalars['Boolean']['input']>;
  applicationServicesDetails?: InputMaybe<Scalars['Boolean']['input']>;
  designGeneral?: InputMaybe<Scalars['Boolean']['input']>;
  ideaId: Scalars['ID']['input'];
  includeAll?: InputMaybe<Scalars['Boolean']['input']>;
  modules?: InputMaybe<Scalars['Boolean']['input']>;
  modulesDetails?: InputMaybe<Scalars['Boolean']['input']>;
  output?: InputMaybe<Scalars['String']['input']>;
  overview?: InputMaybe<Scalars['Boolean']['input']>;
  screens?: InputMaybe<Scalars['Boolean']['input']>;
  siteMap?: InputMaybe<Scalars['Boolean']['input']>;
  userTypes?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemExportIdeaToDocumentResponse = {
  content?: Maybe<Scalars['JSON']['output']>;
  documentType: Scalars['String']['output'];
};

/** Field Data Features */
export type SystemFieldDataFeatures = {
  create: Scalars['Boolean']['output'];
  sort: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field Schema Features */
export type SystemFieldSchemaFeatures = {
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Field types */
export enum SystemFieldType {
  Date = 'DATE',
  File = 'FILE',
  Geo = 'GEO',
  Id = 'ID',
  Json = 'JSON',
  MissingRelation = 'MISSING_RELATION',
  Number = 'NUMBER',
  OneWayRelation = 'ONE_WAY_RELATION',
  Relation = 'RELATION',
  Smart = 'SMART',
  Switch = 'SWITCH',
  Text = 'TEXT',
  Uuid = 'UUID'
}

/** Field Type Attributes */
export type SystemFieldTypeAttributes = SystemDateFieldTypeAttributes | SystemFileFieldTypeAttributes | SystemGeoFieldTypeAttributes | SystemMissingRelationFieldTypeAttributes | SystemNumberFieldTypeAttributes | SystemSmartFieldTypeAttributes | SystemSwitchFieldTypeAttributes | SystemTextFieldTypeAttributes | SystemUuidFieldTypeAttributes;

/** Field Type Attributes Input */
export type SystemFieldTypeAttributesInput = {
  autoIncrement?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  expiration?: InputMaybe<Scalars['Int']['input']>;
  fieldSize?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  isBigInt?: InputMaybe<Scalars['Boolean']['input']>;
  listOptions?: InputMaybe<Array<Scalars['String']['input']>>;
  maxSize?: InputMaybe<Scalars['Int']['input']>;
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  precision?: InputMaybe<Scalars['Int']['input']>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  typeRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SystemFileBaseInfo = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** File Field Attributes */
export type SystemFileFieldTypeAttributes = {
  expiration?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
  maxSize?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']['output']>;
  typeRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

export enum SystemFileManagerProviderTypeEnum {
  Aws = 'aws',
  Filestack = 'filestack',
  Uploadcare = 'uploadcare'
}

/** File Type Format Enum */
export enum SystemFileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** FileUploadByUrlInput */
export type SystemFileUploadByUrlInput = {
  url: Scalars['String']['input'];
};

/** FileUploadByUrlResponse */
export type SystemFileUploadByUrlResponse = {
  fileId: Scalars['String']['output'];
  meta: Scalars['JSON']['output'];
};

export type SystemFileUploadSignInfo = AwsSignInfoResponse | FileStackSignInfoResponse | UploadcareSignInfoResponse;

export type SystemFrontendUtilizationAbResponse = {
  CDN?: Maybe<Scalars['Boolean']['output']>;
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

export type SystemFrontendUtilizationResponse = {
  assets?: Maybe<Scalars['Int']['output']>;
  customStates?: Maybe<Scalars['Int']['output']>;
  functions?: Maybe<Scalars['Int']['output']>;
  layouts?: Maybe<Scalars['Int']['output']>;
  libraries?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  requests?: Maybe<Scalars['Int']['output']>;
  resources?: Maybe<Scalars['Int']['output']>;
};

/** FunctionInfo */
export type SystemFunctionInfo = {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
};

/** FunctionInfoCheck */
export type SystemFunctionInfoCheck = {
  version?: Maybe<Scalars['String']['output']>;
};

/** FunctionInfoFilter */
export type SystemFunctionInfoFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  functionType?: InputMaybe<SystemFunctionType>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** FunctionInfoOrderBy */
export enum SystemFunctionInfoOrderBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** SystemFunctionListResponse output */
export type SystemFunctionListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemFunctionInfo>;
};

/** FunctionResolverInfo */
export type SystemFunctionResolverInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  gqlType: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** FunctionTaskInfo */
export type SystemFunctionTaskInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
  scheduleExpression?: Maybe<Scalars['String']['output']>;
};

/** FunctionTriggerInfo */
export type SystemFunctionTriggerInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  name: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

/** FunctionType */
export enum SystemFunctionType {
  Resolver = 'resolver',
  Schedule = 'schedule',
  Task = 'task',
  Trigger = 'trigger',
  Webhook = 'webhook'
}

/** FunctionWebhookInfo */
export type SystemFunctionWebhookInfo = SystemFunctionInfo & {
  application?: Maybe<SystemApplication>;
  description?: Maybe<Scalars['String']['output']>;
  functionType: SystemFunctionType;
  httpMethod: Scalars['String']['output'];
  name: Scalars['String']['output'];
  workspaceFullPath: Scalars['String']['output'];
  workspaceRelativePath: Scalars['String']['output'];
};

/** Diff Environment Input */
export type SystemGenerateEnvironmentOutput = {
  url?: Maybe<Scalars['String']['output']>;
};

/** Geo Field Attributes */
export type SystemGeoFieldTypeAttributes = {
  format: Scalars['String']['output'];
  srid?: Maybe<Scalars['Int']['output']>;
};

export type SystemGetCouponResponse = {
  amount_off?: Maybe<Scalars['Float']['output']>;
  duration: Scalars['String']['output'];
  duration_in_months: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  percent_off?: Maybe<Scalars['Float']['output']>;
  valid: Scalars['Boolean']['output'];
};

export type SystemGetInvitationIdeaResponse = {
  archieId: Scalars['ID']['output'];
  ideaId: Scalars['ID']['output'];
  invitationId: Scalars['ID']['output'];
  nickName: Scalars['String']['output'];
  role: InvitationRoleEnum;
  status: Scalars['String']['output'];
};

export type SystemGraphQlArchitecturesResponse = {
  enabling_technologies?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  infrastructure_diagram?: Maybe<Scalars['JSON']['output']>;
  integrations?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlBlueprintResponse = {
  ai_enablement_ideas?: Maybe<Scalars['JSON']['output']>;
  application_classification?: Maybe<Scalars['JSON']['output']>;
  building_blocks?: Maybe<Scalars['JSON']['output']>;
  commercialization_model?: Maybe<Scalars['JSON']['output']>;
  design_preview?: Maybe<Scalars['JSON']['output']>;
  design_principles?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  insights?: Maybe<Scalars['JSON']['output']>;
  modules?: Maybe<Scalars['JSON']['output']>;
  originalPrompt?: Maybe<Scalars['JSON']['output']>;
  problem_statement?: Maybe<Scalars['JSON']['output']>;
  solution_statement?: Maybe<Scalars['JSON']['output']>;
  user_types?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlBuildingBlocksRequirementsResponse = {
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stories?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlBuildingBlocksResponse = {
  buildingBlocksRequirements?: Maybe<Array<Maybe<SystemGraphQlBuildingBlocksRequirementsResponse>>>;
  checked?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlBuildingBlocksScreensResponse = {
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  screensWireframes?: Maybe<Array<Maybe<SystemGraphQlScreensWireFramesResponse>>>;
  status?: Maybe<Scalars['String']['output']>;
  urlPath?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlFeaturesBreakdownResponse = {
  functionality?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  technicalRequirements?: Maybe<Scalars['JSON']['output']>;
  userInterfaces?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlModulesRequirementsResponse = {
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stories?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlModulesResponse = {
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  modulesRequirements?: Maybe<Array<Maybe<SystemGraphQlModulesRequirementsResponse>>>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  uiPattern?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlOverviewResponse = {
  accessibility_requirements?: Maybe<Scalars['JSON']['output']>;
  application_classification?: Maybe<Scalars['JSON']['output']>;
  commercialization_model?: Maybe<Scalars['JSON']['output']>;
  compliance_requirements?: Maybe<Scalars['JSON']['output']>;
  design_principles?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  performance_requirements?: Maybe<Scalars['JSON']['output']>;
  problem_statement?: Maybe<Scalars['JSON']['output']>;
  security_requirements?: Maybe<Scalars['JSON']['output']>;
  solution_statement?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlScreensWireFramesResponse = {
  html?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlSectionResultRegenerateMutationInput = {
  archieId: Scalars['ID']['input'];
  idea: Scalars['ID']['input'];
  instructions?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  provisionalData?: InputMaybe<Scalars['Boolean']['input']>;
  requirementsDescription?: InputMaybe<Scalars['String']['input']>;
  sectionCategoriesWithIds?: InputMaybe<Scalars['JSON']['input']>;
};

export type SystemGraphQlUserAccountsResponse = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlUserInterfacesResponse = {
  requirements_design_guidelines?: Maybe<Scalars['JSON']['output']>;
  requirements_site_map?: Maybe<Scalars['JSON']['output']>;
  requirements_ui_ux_general?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  wireframe_layout?: Maybe<Scalars['JSON']['output']>;
};

export type SystemGraphQlUserTypeDetailsResponse = {
  comprehensive_needs?: Maybe<Scalars['JSON']['output']>;
  comprehensive_painpoints?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlUserTypeUseCaseResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemGraphQlUserTypesResponse = {
  description?: Maybe<Scalars['String']['output']>;
  deviceusages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  softwareproficiency?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  userTypesDetails?: Maybe<Array<Maybe<SystemGraphQlUserTypeDetailsResponse>>>;
  userTypesUseCases?: Maybe<Array<Maybe<SystemGraphQlUserTypeUseCaseResponse>>>;
};

export type SystemIdeaDetailsResponse = {
  archieId: Scalars['ID']['output'];
  architectures?: Maybe<Array<Maybe<SystemGraphQlArchitecturesResponse>>>;
  blueprints?: Maybe<Array<Maybe<SystemGraphQlBlueprintResponse>>>;
  buildingBlocks?: Maybe<Array<Maybe<SystemGraphQlBuildingBlocksResponse>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  detailedProgress?: Maybe<Scalars['JSON']['output']>;
  elevatorDescription?: Maybe<Scalars['String']['output']>;
  executedDesign?: Maybe<Scalars['Boolean']['output']>;
  featuresBreakdown?: Maybe<Array<Maybe<SystemGraphQlFeaturesBreakdownResponse>>>;
  id: Scalars['ID']['output'];
  invitations?: Maybe<Array<Maybe<SystemIdeaInvitationBaseResponse>>>;
  isDemoProject?: Maybe<Scalars['Boolean']['output']>;
  members?: Maybe<Array<Maybe<SystemIdeaMemberBaseResponse>>>;
  modules?: Maybe<Array<Maybe<SystemGraphQlModulesResponse>>>;
  nextStep: Scalars['String']['output'];
  nickName: Scalars['String']['output'];
  overviews?: Maybe<Array<Maybe<SystemGraphQlOverviewResponse>>>;
  owner?: Maybe<SystemMemberAccountInfo>;
  ownerType?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<SystemPlanInfoIdea>;
  progress: Scalars['Float']['output'];
  requirementsDescription?: Maybe<Scalars['String']['output']>;
  screens?: Maybe<Array<Maybe<SystemGraphQlBuildingBlocksScreensResponse>>>;
  technicalDesign?: Maybe<SystemTechnicalDesignResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userInterfaces?: Maybe<Array<Maybe<SystemGraphQlUserInterfacesResponse>>>;
  userTypes?: Maybe<Array<Maybe<SystemGraphQlUserTypesResponse>>>;
};

export type SystemIdeaGeneralCreateMutationInput = {
  description: Scalars['String']['input'];
  nickName?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdeaGeneralResponse = {
  archieId: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nickName: Scalars['String']['output'];
};

export type SystemIdeaGeneralUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  elevatorDescription?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  nickName?: InputMaybe<Scalars['String']['input']>;
  requirementsDescription?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdeaGraphQlSchema = {
  schema: Scalars['String']['output'];
};

export type SystemIdeaImproveMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type SystemIdeaImproveResponse = {
  suggestion: Scalars['String']['output'];
};

export type SystemIdeaImproveWithAiMutationInput = {
  aiIdeas?: InputMaybe<Array<InputMaybe<SystemAiIdeasInput>>>;
  archieId: Scalars['ID']['input'];
};

export type SystemIdeaImproveWithAiResponse = {
  expectedBenefits?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  kpis?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  statement: Scalars['String']['output'];
};

export type SystemIdeaInvitationBaseResponse = {
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: InvitationRoleEnum;
};

/** Idea Invitation Member */
export type SystemIdeaInvitationMember = {
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  userAccounts?: Maybe<SystemGraphQlUserAccountsResponse>;
};

export type SystemIdeaItemOrganizationMember = {
  archieId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  detailedProgress?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  nextStep?: Maybe<Scalars['String']['output']>;
  nickName: Scalars['String']['output'];
  progress: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SystemIdeaItemRespSingle = {
  archieId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  detailedProgress?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lastActivityAt?: Maybe<Scalars['DateTime']['output']>;
  members?: Maybe<Array<Maybe<SystemMemberAccountInfo>>>;
  nextStep: Scalars['String']['output'];
  nickName: Scalars['String']['output'];
  owner?: Maybe<SystemMemberAccountInfo>;
  progress: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** SystemIdeaItemResponse output */
export type SystemIdeaItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemIdeaItemRespSingle>;
};

export type SystemIdeaMemberBaseResponse = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  onboardingStatus: Scalars['JSON']['output'];
  organizationId: Scalars['ID']['output'];
  role: InvitationRoleEnum;
};

export type SystemIdeaUserResponse = {
  ideas: SystemIdeaItemResponse;
};

export type SystemInboxEventDetailsUnion = SystemInboxEventEnvironmentInvitationDetails | SystemInboxEventNotificationDetailsType | SystemInboxEventOrganizationInvitationDetails;

export type SystemInboxEventEnvironmentInvitationDetails = {
  environmentName?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  project?: Maybe<SystemInboxEventProject>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<SystemInboxEventWorkspace>;
};

export type SystemInboxEventInvitedBy = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventItem = {
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<SystemInboxEventDetailsUnion>;
  id: Scalars['ID']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<SystemInboxEventTypeEnum>;
};

export type SystemInboxEventNotificationDetailsType = {
  details?: Maybe<Scalars['JSON']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventOrganization = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventOrganizationInvitationDetails = {
  invitedBy?: Maybe<SystemInboxEventInvitedBy>;
  organization?: Maybe<SystemInboxEventOrganization>;
  status?: Maybe<SystemInboxEventStatusEnum>;
  uuid?: Maybe<Scalars['String']['output']>;
};

export type SystemInboxEventProject = {
  apiHost?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum SystemInboxEventStatusEnum {
  Accepted = 'accepted',
  Declined = 'declined',
  Sent = 'sent'
}

export enum SystemInboxEventTypeEnum {
  EnvironmentInvitation = 'EnvironmentInvitation',
  Notification = 'Notification',
  OrganizationInvitation = 'OrganizationInvitation'
}

export type SystemInboxEventWorkspace = {
  apiHost?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  id: Scalars['ID']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** SystemInboxEventsListResponse output */
export type SystemInboxEventsListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemInboxEventItem>;
};

/** Table Create Index Input */
export type SystemIndexCreateInput = {
  columns: Array<SystemTableIndexColumnInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableId: Scalars['ID']['input'];
  type: TableIndexType;
};

/** Table Delete Index Input */
export type SystemIndexDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Update Index Input */
export type SystemIndexUpdateInput = {
  columns?: InputMaybe<Array<SystemTableIndexColumnInput>>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TableIndexType>;
};

/** Idea Invitation Accept/Cancel Response */
export type SystemInvitationAcceptCancelResponse = {
  success: Scalars['Boolean']['output'];
};

/** Idea invitation accept/Cancel input */
export type SystemInvitationIdeaAcceptCancelInput = {
  accepted: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

/** Idea Invitation Cancel Response */
export type SystemInvitationIdeaResendResponse = {
  success: Scalars['Boolean']['output'];
};

/** Idea invitation cancel input */
export type SystemInvitationIdeaResendlInput = {
  id: Scalars['String']['input'];
};

/** Invite recipient input */
export type SystemInviteIdeaRecipientInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['String']['input'];
  organizationUserId?: InputMaybe<Scalars['String']['input']>;
  role: RoleEnum;
};

/** Invite idea input */
export type SystemInviteMembersIdeaInput = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
  recipients: Array<SystemInviteIdeaRecipientInput>;
};

/** Invite members input */
export type SystemInviteMembersInput = {
  recipients: Array<SystemInviteRecipientInput>;
};

/** Invite recipient input */
export type SystemInviteRecipientInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Invited By Name */
export type SystemInvitedByName = {
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  projectName?: Maybe<Scalars['String']['output']>;
  workspaceName?: Maybe<Scalars['String']['output']>;
};

/** InvokeData */
export type SystemInvokeData = {
  functionName: Scalars['String']['input'];
  inputArgs?: InputMaybe<Scalars['String']['input']>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
};

/** InvokeFunctionResponse */
export type SystemInvokeFunctionResponse = {
  responseData: Scalars['String']['output'];
};

/** LogsListFiltered Response */
export type SystemLogsListFilteredResponse = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemCloudLogsEntry>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

/**
 * Member - list of workspaces you are member of
 * Owner - list of workspaces you are owner of
 * OrganizationUser - list of organizations you are part of
 */
export type SystemMemberAccountDeleteDetails = {
  member?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
  organizationUser?: Maybe<Array<Maybe<SystemOrganizationBaseItem>>>;
  owner?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
};

export type SystemMemberAccountDeleteResponse = {
  details?: Maybe<SystemMemberAccountDeleteDetails>;
  success: Scalars['Boolean']['output'];
};

export type SystemMemberAccountInfo = {
  aboutMe?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  archieRole?: Maybe<Scalars['String']['output']>;
  authCreateMethod?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  intendedUse?: Maybe<Scalars['String']['output']>;
  isADemoUser?: Maybe<Scalars['Boolean']['output']>;
  isArchieAdmin?: Maybe<Scalars['Boolean']['output']>;
  isDeveloper?: Maybe<Scalars['Boolean']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isOrganizationOwner?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  learningMode?: Maybe<Scalars['Boolean']['output']>;
  linkedInUsername?: Maybe<Scalars['String']['output']>;
  onboardingStatus?: Maybe<Scalars['JSON']['output']>;
  projectDescription?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  sourceAccount?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SystemUserType>;
  website?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type SystemMemberAccountUpsertDataInput = {
  aboutMe?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  archieRole?: InputMaybe<Scalars['String']['input']>;
  authCreateMethod?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<GraphQlCreateFileItemInput>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  githubUsername?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  intendedUse?: InputMaybe<Scalars['String']['input']>;
  isADemoUser?: InputMaybe<Scalars['Boolean']['input']>;
  isArchieAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isDeveloper?: InputMaybe<Scalars['Boolean']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  isOrganizationOwner?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  learningMode?: InputMaybe<Scalars['Boolean']['input']>;
  linkedInUsername?: InputMaybe<Scalars['String']['input']>;
  onboardingStatus?: InputMaybe<Scalars['JSON']['input']>;
  organizationCreatorRole?: InputMaybe<Scalars['String']['input']>;
  organizationKind?: InputMaybe<Scalars['String']['input']>;
  organizationNeed?: InputMaybe<Scalars['String']['input']>;
  organizationSize?: InputMaybe<Scalars['String']['input']>;
  projectDescription?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  sourceAccount?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  twitterUsername?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemUserType>;
  website?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type SystemMemberArchieInviteOrganizationInput = {
  email: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

/** Member Change Organization Role Input */
export type SystemMemberChangeOrganizationRoleInput = {
  id: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

/** Member Change Organization Role Response */
export type SystemMemberChangeOrganizationRoleResponse = {
  success: Scalars['Boolean']['output'];
};

/** Member Invitation */
export type SystemMemberInvitation = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** Member invitation accept input */
export type SystemMemberInvitationAcceptInput = {
  accepted: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

/** Member Invitation Accept Response */
export type SystemMemberInvitationAcceptResponse = {
  success: Scalars['Boolean']['output'];
};

/** Cancel members invitations input */
export type SystemMemberInvitationCancelInput = {
  email: Scalars['String']['input'];
};

/** Resend member invitation input */
export type SystemMemberInvitationResendInput = {
  email: Scalars['ID']['input'];
};

export type SystemMemberInvitationsList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemMemberInvitation>>>;
};

export type SystemMemberOrganizationAccountInfo = {
  aboutMe?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  archieRole?: Maybe<Scalars['String']['output']>;
  authCreateMethod?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
  city?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  githubUsername?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ideas?: Maybe<Array<Maybe<SystemIdeaItemOrganizationMember>>>;
  intendedUse?: Maybe<Scalars['String']['output']>;
  isADemoUser?: Maybe<Scalars['Boolean']['output']>;
  isArchieAdmin?: Maybe<Scalars['Boolean']['output']>;
  isDeveloper?: Maybe<Scalars['Boolean']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  isOrganizationOwner?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  learningMode?: Maybe<Scalars['Boolean']['output']>;
  linkedInUsername?: Maybe<Scalars['String']['output']>;
  onboardingStatus?: Maybe<Scalars['JSON']['output']>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  projectDescription?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  sourceAccount?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SystemUserType>;
  website?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

/** Member Change Organization Role Input */
export type SystemMemberOrganizationInviteMutationInput = {
  ideaId?: InputMaybe<Scalars['String']['input']>;
  ideaRole?: InputMaybe<Scalars['String']['input']>;
  invitedByName: Scalars['String']['input'];
  members?: InputMaybe<Array<InputMaybe<SystemMemberArchieInviteOrganizationInput>>>;
  organizationId: Scalars['ID']['input'];
  organizationName: Scalars['String']['input'];
};

/** Member Change Organization Role Input */
export type SystemMemberOrganizationResendInviteMutationInput = {
  email: Scalars['String']['input'];
  invitedByName: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  organizationName: Scalars['String']['input'];
};

/** MemberPaymentDetailsUpdateMutationInput */
export type SystemMemberPaymentDetailsUpdateMutationInput = {
  cardToken?: InputMaybe<Scalars['String']['input']>;
};

/** Member Resend Verify Account Email Response */
export type SystemMemberResendVerifyAccountEmailResponse = {
  success: Scalars['Boolean']['output'];
};

/** Member Resend Verify Account Email input */
export type SystemMemberResendVerifyAccountEmaillInput = {
  email: Scalars['String']['input'];
};

export type SystemMembersAccountList = {
  items?: Maybe<Array<Maybe<SystemMemberOrganizationAccountInfo>>>;
};

export type SystemMembersIdeaList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemIdeaInvitationMember>>>;
};

/** MissingRelation Field Attributes */
export type SystemMissingRelationFieldTypeAttributes = {
  missingTable: Scalars['String']['output'];
};

export type SystemMutation = {
  ExportIdeaToDocument?: Maybe<SystemExportIdeaToDocumentResponse>;
  applicationDelete?: Maybe<SuccessResponse>;
  applicationInstall?: Maybe<SystemApplication>;
  applicationUpdate?: Maybe<SystemApplication>;
  billingContextCacheEvict?: Maybe<SystemCacheEvictResponse>;
  billingPlanUpdate?: Maybe<SystemBillingCurrentPlanResponse>;
  changePlanIdea?: Maybe<SystemBillingCurrentPlanResponse>;
  changeRoleIdeaInvitation?: Maybe<SuccessResponse>;
  changeRoleIdeaMember?: Maybe<SuccessResponse>;
  ciCommit?: Maybe<AsyncSession>;
  ciInstall?: Maybe<SuccessResponse>;
  createOrganizationSettingsTech: SystemOrganizationSettingsTech;
  deleteArchieMemberFromOrganization: SystemDeleteArchieMemberFromOrganizationResponse;
  deleteIdea?: Maybe<SuccessResponse>;
  deleteMemberIdea?: Maybe<SuccessResponse>;
  deploy?: Maybe<Scalars['Boolean']['output']>;
  environmentBackup?: Maybe<AsyncSession>;
  environmentBranch?: Maybe<AsyncSession>;
  environmentDelete?: Maybe<SuccessResponse>;
  environmentDeleteAsync?: Maybe<AsyncSession>;
  environmentMemberDelete: SuccessResponse;
  environmentMemberUpdate?: Maybe<SystemEnvironmentMember>;
  environmentRestore?: Maybe<AsyncSession>;
  environmentSetup?: Maybe<SuccessResponse>;
  fieldCreate: SystemTableField;
  fieldDelete: SuccessResponse;
  fieldUpdate: SystemTableField;
  fieldUpdatePosition: SuccessResponse;
  fileUploadByUrl: SystemFileUploadByUrlResponse;
  ideaImprove?: Maybe<SystemIdeaImproveResponse>;
  ideaImproveWithAI?: Maybe<SystemIdeaImproveWithAiResponse>;
  ideaTransferOwner?: Maybe<SuccessResponse>;
  ideaUserCreate?: Maybe<SystemIdeaGeneralResponse>;
  ideaUserUpdate?: Maybe<SystemIdeaGeneralResponse>;
  indexCreate: SystemTableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: SystemTableIndex;
  invitationIdeaAcceptCancel: SystemInvitationAcceptCancelResponse;
  invitationIdeaResend: SystemInvitationIdeaResendResponse;
  inviteMembers: Array<Maybe<SystemTeamInvitationDetails>>;
  inviteToIdea?: Maybe<SuccessResponse>;
  invoke?: Maybe<SystemInvokeFunctionResponse>;
  memberAccountDelete?: Maybe<SystemMemberAccountDeleteResponse>;
  memberAccountUpsert?: Maybe<SystemMemberAccountInfo>;
  memberChangeOrganizationRole: SystemMemberChangeOrganizationRoleResponse;
  memberInvitationAccept: SystemMemberInvitationAcceptResponse;
  memberInvitationCancel?: Maybe<SuccessResponse>;
  memberInvitationResend?: Maybe<SuccessResponse>;
  memberPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  memberResendVerifyAccountEmail: SystemMemberResendVerifyAccountEmailResponse;
  notificationUpdate?: Maybe<SuccessResponse>;
  onboardingUpdate?: Maybe<SystemMemberAccountInfo>;
  organizationArchieUpgrade?: Maybe<OrganizationUpgradeResponse>;
  organizationInviteUser?: Maybe<OrganizationUserInvitationResponse>;
  organizationInviteUserAccept?: Maybe<SuccessResponse>;
  organizationInviteUserCancel?: Maybe<SuccessResponse>;
  organizationMemberInvite?: Maybe<SuccessResponse>;
  organizationMemberResendInvite?: Maybe<SuccessResponse>;
  organizationPaymentDetailsUpdate?: Maybe<SystemPaymentDetailsResponse>;
  organizationProjectUserRemove?: Maybe<SuccessResponse>;
  organizationProjectUserShare?: Maybe<SuccessResponse>;
  organizationUpdate?: Maybe<SystemOrganizationItem>;
  organizationUserRemove?: Maybe<SuccessResponse>;
  organizationUserUpdate?: Maybe<SystemOrganizationUserInfo>;
  partnerCreate?: Maybe<SystemPartnerGeneralResponse>;
  postMessageToQueue?: Maybe<SuccessResponse>;
  prepareDeploy: SystemDeployDataResponse;
  projectCreate?: Maybe<AsyncSession>;
  projectDelete?: Maybe<AsyncSession>;
  projectLeave?: Maybe<SuccessResponse>;
  projectUpdate?: Maybe<SystemProjectUpdateResponse>;
  removeOrganizationSettingsTech: SuccessResponse;
  rolePermissionsCacheEvict?: Maybe<SystemCacheEvictResponse>;
  sectionResultCreate?: Maybe<SystemSectionResultResponse>;
  sectionResultGenerate?: Maybe<SuccessResponse>;
  sectionResultPropagate?: Maybe<SuccessResponse>;
  sectionResultRegenerate?: Maybe<SuccessResponse>;
  sectionResultUpdate?: Maybe<SuccessResponse>;
  tableCreate: SystemTable;
  tableDelete: SuccessResponse;
  tableUpdate: SystemTable;
  updateOrganizationSettings: SystemOrganizationSettings;
  viewCreate: SystemTable;
  viewUpdate: SystemTable;
  workspaceCreate?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceCreateAsync?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  workspaceLeave?: Maybe<SuccessResponse>;
  workspaceUpdate?: Maybe<SystemWorkspaceUpdateResponse>;
};


export type SystemMutationExportIdeaToDocumentArgs = {
  data: SystemExportIdeaToDocumentInput;
};


export type SystemMutationApplicationDeleteArgs = {
  data: SystemApplicationDeleteMutationInput;
};


export type SystemMutationApplicationInstallArgs = {
  data: SystemApplicationInstallInput;
};


export type SystemMutationApplicationUpdateArgs = {
  data: SystemApplicationUpdateInput;
};


export type SystemMutationBillingContextCacheEvictArgs = {
  keys: Array<Scalars['String']['input']>;
  projectKeys: Array<Scalars['String']['input']>;
};


export type SystemMutationBillingPlanUpdateArgs = {
  data: SystemBillingPlanUpdateMutationInput;
};


export type SystemMutationChangePlanIdeaArgs = {
  data: SystemChangePlanIdeaMutationInput;
};


export type SystemMutationChangeRoleIdeaInvitationArgs = {
  data: SystemChangeRoleIdeaMutationInputList;
};


export type SystemMutationChangeRoleIdeaMemberArgs = {
  data: SystemChangeRoleIdeaMutationInputList;
};


export type SystemMutationCiCommitArgs = {
  build?: InputMaybe<Scalars['String']['input']>;
  migrationNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mode?: InputMaybe<SystemCiCommitMode>;
  nodeVersion?: InputMaybe<Scalars['String']['input']>;
};


export type SystemMutationCreateOrganizationSettingsTechArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationSettingsId: Scalars['ID']['input'];
};


export type SystemMutationDeleteArchieMemberFromOrganizationArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};


export type SystemMutationDeleteIdeaArgs = {
  data: SystemDeleteIdeaMutationInput;
};


export type SystemMutationDeleteMemberIdeaArgs = {
  data: SystemDeleteMemberIdeaMutationInputList;
};


export type SystemMutationDeployArgs = {
  data?: InputMaybe<SystemDeployingBuildInput>;
};


export type SystemMutationEnvironmentBackupArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentBranchArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  mode?: InputMaybe<SystemBranchEnvironmentMode>;
  name: Scalars['String']['input'];
};


export type SystemMutationEnvironmentDeleteArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentDeleteAsyncArgs = {
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentMemberDeleteArgs = {
  filter?: InputMaybe<SystemEnvironmentMembersFilter>;
};


export type SystemMutationEnvironmentMemberUpdateArgs = {
  data?: InputMaybe<SystemEnvironmentMemberUpdateData>;
  filter?: InputMaybe<SystemEnvironmentMembersFilter>;
};


export type SystemMutationEnvironmentRestoreArgs = {
  backup: Scalars['String']['input'];
  environmentName: Scalars['String']['input'];
};


export type SystemMutationEnvironmentSetupArgs = {
  data?: InputMaybe<EnvironmentSetupInput>;
};


export type SystemMutationFieldCreateArgs = {
  data: SystemTableFieldCreateInput;
};


export type SystemMutationFieldDeleteArgs = {
  data: SystemTableFieldDeleteInput;
};


export type SystemMutationFieldUpdateArgs = {
  data: SystemTableFieldUpdateInput;
};


export type SystemMutationFieldUpdatePositionArgs = {
  data: SystemTableFieldPositionUpdateInput;
};


export type SystemMutationFileUploadByUrlArgs = {
  data: SystemFileUploadByUrlInput;
};


export type SystemMutationIdeaImproveArgs = {
  data: SystemIdeaImproveMutationInput;
};


export type SystemMutationIdeaImproveWithAiArgs = {
  data: SystemIdeaImproveWithAiMutationInput;
};


export type SystemMutationIdeaTransferOwnerArgs = {
  data: SystemTransferIdeaOwnerMutationInput;
};


export type SystemMutationIdeaUserCreateArgs = {
  data: SystemIdeaGeneralCreateMutationInput;
};


export type SystemMutationIdeaUserUpdateArgs = {
  data: SystemIdeaGeneralUpdateMutationInput;
};


export type SystemMutationIndexCreateArgs = {
  data: SystemIndexCreateInput;
};


export type SystemMutationIndexDeleteArgs = {
  data: SystemIndexDeleteInput;
};


export type SystemMutationIndexUpdateArgs = {
  data: SystemIndexUpdateInput;
};


export type SystemMutationInvitationIdeaAcceptCancelArgs = {
  data: SystemInvitationIdeaAcceptCancelInput;
};


export type SystemMutationInvitationIdeaResendArgs = {
  data: SystemInvitationIdeaResendlInput;
};


export type SystemMutationInviteMembersArgs = {
  data: SystemInviteMembersInput;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SystemMutationInviteToIdeaArgs = {
  data: SystemInviteMembersIdeaInput;
};


export type SystemMutationInvokeArgs = {
  data?: InputMaybe<SystemInvokeData>;
};


export type SystemMutationMemberAccountUpsertArgs = {
  data?: InputMaybe<SystemMemberAccountUpsertDataInput>;
};


export type SystemMutationMemberChangeOrganizationRoleArgs = {
  data: SystemMemberChangeOrganizationRoleInput;
};


export type SystemMutationMemberInvitationAcceptArgs = {
  data: SystemMemberInvitationAcceptInput;
};


export type SystemMutationMemberInvitationCancelArgs = {
  data: SystemMemberInvitationCancelInput;
};


export type SystemMutationMemberInvitationResendArgs = {
  data: SystemMemberInvitationResendInput;
};


export type SystemMutationMemberPaymentDetailsUpdateArgs = {
  data: SystemMemberPaymentDetailsUpdateMutationInput;
};


export type SystemMutationMemberResendVerifyAccountEmailArgs = {
  data: SystemMemberResendVerifyAccountEmaillInput;
};


export type SystemMutationNotificationUpdateArgs = {
  id: Scalars['String']['input'];
  status: NotificationStatusType;
};


export type SystemMutationOnboardingUpdateArgs = {
  data?: InputMaybe<SystemMemberAccountUpsertDataInput>;
};


export type SystemMutationOrganizationArchieUpgradeArgs = {
  data: SystemOrganizationUpgradeMutationInput;
};


export type SystemMutationOrganizationInviteUserArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  projectRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectWithEnvironmentRolesInput>>>;
  role: Scalars['String']['input'];
};


export type SystemMutationOrganizationInviteUserAcceptArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationInviteUserCancelArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationMemberInviteArgs = {
  data: SystemMemberOrganizationInviteMutationInput;
};


export type SystemMutationOrganizationMemberResendInviteArgs = {
  data: SystemMemberOrganizationResendInviteMutationInput;
};


export type SystemMutationOrganizationPaymentDetailsUpdateArgs = {
  data: SystemOrganizationPaymentDetailsUpdateMutationInput;
};


export type SystemMutationOrganizationProjectUserRemoveArgs = {
  email: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};


export type SystemMutationOrganizationProjectUserShareArgs = {
  email: Scalars['String']['input'];
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectEnvironmentRolesInput>>>;
  projectId: Scalars['ID']['input'];
};


export type SystemMutationOrganizationUpdateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SystemOrganizationTypeEnum>;
};


export type SystemMutationOrganizationUserRemoveArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};


export type SystemMutationOrganizationUserUpdateArgs = {
  email: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  role: Scalars['String']['input'];
};


export type SystemMutationPartnerCreateArgs = {
  data: SystemPartnerGeneralCreateMutationInput;
};


export type SystemMutationPostMessageToQueueArgs = {
  data: SystemPostMessageToQueueInput;
};


export type SystemMutationProjectCreateArgs = {
  data: SystemProjectCreateMutationInput;
};


export type SystemMutationProjectDeleteArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemMutationProjectLeaveArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemMutationProjectUpdateArgs = {
  data: SystemProjectUpdateMutationInput;
};


export type SystemMutationRemoveOrganizationSettingsTechArgs = {
  organizationSettingsTechId: Scalars['ID']['input'];
};


export type SystemMutationRolePermissionsCacheEvictArgs = {
  keys: Array<Scalars['String']['input']>;
};


export type SystemMutationSectionResultCreateArgs = {
  data: SystemSectionResultCreateMutationInput;
};


export type SystemMutationSectionResultGenerateArgs = {
  data: SystemSectionResultGenerateMutationInput;
};


export type SystemMutationSectionResultPropagateArgs = {
  data: SystemSectionResultPropagateUpdateMutationInput;
};


export type SystemMutationSectionResultRegenerateArgs = {
  data: SystemGraphQlSectionResultRegenerateMutationInput;
};


export type SystemMutationSectionResultUpdateArgs = {
  data: SystemSectionResultUpdateMutationInput;
};


export type SystemMutationTableCreateArgs = {
  data: SystemTableCreateInput;
};


export type SystemMutationTableDeleteArgs = {
  data: SystemTableDeleteInput;
};


export type SystemMutationTableUpdateArgs = {
  data: SystemTableUpdateInput;
};


export type SystemMutationUpdateOrganizationSettingsArgs = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isWhiteLabelActive?: InputMaybe<Scalars['Boolean']['input']>;
  statementOfWork?: InputMaybe<Scalars['String']['input']>;
};


export type SystemMutationViewCreateArgs = {
  data: SystemViewCreateInput;
};


export type SystemMutationViewUpdateArgs = {
  data: SystemViewUpdateInput;
};


export type SystemMutationWorkspaceCreateArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceCreateAsyncArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceDeleteArgs = {
  data: SystemWorkspaceDeleteMutationInput;
};


export type SystemMutationWorkspaceLeaveArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SystemMutationWorkspaceUpdateArgs = {
  data: SystemWorkspaceUpdateMutationInput;
};

/** Number Field Attributes */
export type SystemNumberFieldTypeAttributes = {
  autoIncrement?: Maybe<Scalars['Boolean']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format: Scalars['String']['output'];
  isBigInt?: Maybe<Scalars['Boolean']['output']>;
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  precision?: Maybe<Scalars['Int']['output']>;
};

/** Number Type Format Enum */
export enum SystemNumberTypeFormatEnum {
  Currency = 'CURRENCY',
  Fraction = 'FRACTION',
  Number = 'NUMBER',
  Percentage = 'PERCENTAGE',
  Scientific = 'SCIENTIFIC'
}

export type SystemOrganizationArchieBaseItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  isOrganizationOwner: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organizationCreatorRole?: Maybe<Scalars['String']['output']>;
  organizationKind?: Maybe<Scalars['String']['output']>;
  organizationSize?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
};

export type SystemOrganizationBaseItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  name: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
};

export type SystemOrganizationInvitation = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  email: Scalars['String']['output'];
  emailFrom: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  firstNameFrom?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastNameFrom?: Maybe<Scalars['String']['output']>;
  organization: SystemOrganizationBaseItem;
  role: Scalars['String']['output'];
};

export type SystemOrganizationItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemOrganizationItemImage>;
  name: Scalars['String']['output'];
  type?: Maybe<SystemOrganizationTypeEnum>;
  users?: Maybe<Array<Maybe<SystemOrganizationUserInfo>>>;
};

export type SystemOrganizationItemImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** OrganizationPaymentDetailsUpdateMutationInput */
export type SystemOrganizationPaymentDetailsUpdateMutationInput = {
  cardToken: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

/** environmentId to add to with roles (array of ids). */
export type SystemOrganizationProjectEnvironmentRolesInput = {
  environmentId: Scalars['String']['input'];
  roles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SystemOrganizationProjectItem = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

export type SystemOrganizationProjectWithEnvironmentRolesInput = {
  environmentRoles?: InputMaybe<Array<InputMaybe<SystemOrganizationProjectEnvironmentRolesInput>>>;
  projectId: Scalars['ID']['input'];
};

/** Representation of a organization settings. */
export type SystemOrganizationSettings = {
  id: Scalars['ID']['output'];
  /** Flag to indicate if white label is active. */
  isWhiteLabelActive?: Maybe<Scalars['Boolean']['output']>;
  /** Statement of work defined by the organization. */
  statementOfWork?: Maybe<Scalars['String']['output']>;
  /** Stack of technologies defined by the organization. */
  techStack: Array<SystemOrganizationSettingsTech>;
  /** White label image defined by the organization. */
  whiteLabelImage?: Maybe<SystemFileBaseInfo>;
};

/** Representation of a organization settings technology. */
export type SystemOrganizationSettingsTech = {
  /** Description of the tech stack. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Name of the given tech stack, example "React". */
  name: Scalars['String']['output'];
};

export enum SystemOrganizationTypeEnum {
  Agency = 'agency',
  Community = 'community',
  Company = 'company',
  Individual = 'individual'
}

/** Organization Upgrade Input */
export type SystemOrganizationUpgradeMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  licenseId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationCreatorRole: Scalars['String']['input'];
  organizationKind: Scalars['String']['input'];
  organizationSize: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type SystemOrganizationUserInfo = {
  avatar?: Maybe<GraphQlFileItemResponse>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  projects?: Maybe<Array<Maybe<SystemOrganizationProjectItem>>>;
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type SystemOrganizationWorkspaceItem = {
  apiHost?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemFileBaseInfo>;
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

/** SystemOrganizationsListArchieResponse output */
export type SystemOrganizationsListArchieResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemOrganizationArchieBaseItem>;
};

/** SystemOrganizationsListResponse output */
export type SystemOrganizationsListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemOrganizationBaseItem>;
};

export type SystemPartnerGeneralCreateMutationInput = {
  anythingElse?: InputMaybe<Scalars['String']['input']>;
  blueprintUrl: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  location: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SystemPartnerGeneralResponse = {
  AccountId: Scalars['String']['output'];
  anythingElse?: Maybe<Scalars['String']['output']>;
  blueprintUrl: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  location: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type SystemPartnerItemRespSingle = {
  AccountId: Scalars['String']['output'];
  anythingElse?: Maybe<Scalars['String']['output']>;
  blueprintUrl: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  location: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

/** SystemPartnerItemResponse output */
export type SystemPartnerItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemPartnerItemRespSingle>;
};

export type SystemPartnerResponse = {
  partners: SystemPartnerItemResponse;
};

export enum SystemPaymentDetailsOrigin {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export enum SystemPaymentDetailsOriginProject {
  Member = 'member',
  Organization = 'organization',
  Workspace = 'workspace'
}

export type SystemPaymentDetailsProjectResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<SystemPaymentDetailsOriginProject>;
};

export type SystemPaymentDetailsResponse = {
  brand?: Maybe<Scalars['String']['output']>;
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  origin: SystemPaymentDetailsOrigin;
};

/** Diff Environment Input */
export type SystemPlanEnvironmentOutput = {
  url?: Maybe<Scalars['String']['output']>;
};

export type SystemPlanForIdeaQueryResponse = {
  id?: Maybe<Scalars['ID']['output']>;
};

export type SystemPlanInfoIdea = {
  features?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  planName?: Maybe<Scalars['String']['output']>;
};

export type SystemPostMessageToQueueInput = {
  message?: InputMaybe<Scalars['JSON']['input']>;
  routingKey?: InputMaybe<Scalars['String']['input']>;
};

/** ProjectCreateMutationInput */
export type SystemProjectCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  billingPlanId?: InputMaybe<Scalars['ID']['input']>;
  cardToken?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  howStart?: InputMaybe<Scalars['String']['input']>;
  ideaId?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemProjectDeploymentsResponse = {
  deploymentsProject?: Maybe<SystemDeploymentProjectListResponse>;
};

export type SystemProjectFrontendResponse = {
  frontendUtilization?: Maybe<SystemFrontendUtilizationResponse>;
  frontendWorkspaces?: Maybe<SystemWorkspaceListResponse>;
};

export type SystemProjectImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectItemRespSingle = {
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemProjectImage>;
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  region?: Maybe<Scalars['String']['output']>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};

/** SystemProjectItemResponse output */
export type SystemProjectItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemProjectItemRespSingle>;
};

export type SystemProjectItemWs = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemWorkspaceImage>;
  name: Scalars['String']['output'];
  region?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectPlanResponse = {
  overagesPrice?: Maybe<Scalars['Float']['output']>;
  paymentDetail?: Maybe<SystemPaymentDetailsProjectResponse>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
};

export type SystemProjectQuotasResponse = {
  metricUsages?: Maybe<SystemBillingMetricUsagesListResponse>;
  metricUsagesQuotas?: Maybe<SystemBillingMetricUsageQuotasListResponse>;
};

/** ProjectUpdateMutationInput */
export type SystemProjectUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemProjectUpdateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemProjectUserDetailsResponse = {
  apiHost: Scalars['String']['output'];
  authenticationInfo?: Maybe<Array<Maybe<SystemAuthenticationInfo>>>;
  backendUtilization?: Maybe<SystemBackendUtilizationResponse>;
  backendWorkspaces?: Maybe<SystemWorkspaceListResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  environmentsProject?: Maybe<SystemEnvironmentsProjectListResponse>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemProjectImage>;
  kind: Scalars['String']['output'];
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  metricUsages?: Maybe<SystemBillingMetricUsagesListResponse>;
  metricUsagesQuotas?: Maybe<SystemBillingMetricUsageQuotasListResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  overagesPrice?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<SystemMemberAccountInfo>;
  paymentDetail?: Maybe<SystemPaymentDetailsProjectResponse>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  region?: Maybe<Scalars['String']['output']>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
};

export type SystemProjectUserResponse = {
  myProjects: SystemProjectItemResponse;
  sharedProjects: SystemProjectItemResponse;
};

export type SystemPromptItemRespSingle = {
  basicSectionConfiguration?: Maybe<Scalars['JSON']['output']>;
  dependsOn?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  inputVariables: Scalars['JSON']['output'];
  iterableConfig?: Maybe<Scalars['JSON']['output']>;
  modelId: Scalars['ID']['output'];
  modelName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  outputSchema: Scalars['JSON']['output'];
  package: Scalars['String']['output'];
  sectionCategory?: Maybe<Scalars['String']['output']>;
  templateBody: Scalars['String']['output'];
};

/** SystemPromptItemResponse output */
export type SystemPromptItemResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemPromptItemRespSingle>;
};

export type SystemPromptsResponse = {
  prompts: SystemPromptItemResponse;
};

export type SystemQuery = {
  application?: Maybe<SystemApplication>;
  applicationsList?: Maybe<SystemApplicationListResponse>;
  asyncSessionStatus?: Maybe<SystemAsyncSessionStatusResponse>;
  basicSectionConfigurationForPromptQuery?: Maybe<SystemBasicSectionConfigurationForPromptExecutionResponse>;
  basicSectionConfigurationQuery?: Maybe<SystemBasicSectionConfigurationResponse>;
  billingCurrentPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.memberPaymentDetails, system.organizationPaymentDetails or system.workspacePaymentDetails` instead. */
  billingDetails?: Maybe<SystemBillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.memberBillingHistory, system.organizationBillingHistory or system.workspaceBillingHistory` instead. */
  billingInvoicesList: SystemBillingInvoicesListResponse;
  billingMetricUsageQuotasList: SystemBillingMetricUsageQuotasListResponse;
  billingMetricUsagesList: SystemBillingMetricUsagesListResponse;
  ciGenerate?: Maybe<SystemGenerateEnvironmentOutput>;
  ciGenerateAsync?: Maybe<AsyncSession>;
  /** @deprecated No longer supported. Use `ciGenerate` instead. */
  ciPlan?: Maybe<SystemPlanEnvironmentOutput>;
  ciStatus?: Maybe<SystemCiStatusOutput>;
  deployStatus: SystemDeployStatusResult;
  ensureOrganizationSettings: SystemOrganizationSettings;
  environmentBackupsList?: Maybe<SystemEnvironmentBackupListResponse>;
  environmentMember?: Maybe<SystemEnvironmentMember>;
  environmentMembersList?: Maybe<SystemEnvironmentMembersListResponse>;
  environmentSettings?: Maybe<SystemEnvironmentSettings>;
  environmentsList?: Maybe<SystemEnvironmentsListResponse>;
  fileUploadSignInfo?: Maybe<SystemFileUploadSignInfo>;
  functionsList?: Maybe<SystemFunctionListResponse>;
  functionsVersionCheck?: Maybe<SystemFunctionInfoCheck>;
  getCouponQuery?: Maybe<SystemGetCouponResponse>;
  getCurrentPlanForIdeaQuery?: Maybe<SystemPlanForIdeaQueryResponse>;
  getEnvironmentRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleList>>>;
  getInvitationIdeaQuery?: Maybe<SystemGetInvitationIdeaResponse>;
  ideaDetails?: Maybe<SystemIdeaDetailsResponse>;
  ideaGraphQLSchemaQuery: SystemIdeaGraphQlSchema;
  ideaMembers?: Maybe<SystemMembersIdeaList>;
  ideaSectionDetails?: Maybe<SystemIdeaDetailsResponse>;
  ideasDemoListQuery?: Maybe<SystemIdeaUserResponse>;
  ideasListQuery?: Maybe<SystemIdeaUserResponse>;
  ideasUserListQuery?: Maybe<SystemIdeaUserResponse>;
  inboxEventsList?: Maybe<SystemInboxEventsListResponse>;
  introspection?: Maybe<IntrospectionQueryResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated No longer supported. Use `system.logsListFiltered` instead. */
  logsList?: Maybe<Array<Maybe<SystemCloudLogsEntry>>>;
  logsListFiltered?: Maybe<SystemLogsListFilteredResponse>;
  memberAccount?: Maybe<SystemMemberAccountInfo>;
  memberAccountFromEmail?: Maybe<SystemMemberAccountInfo>;
  memberBillingHistory: SystemBillingInvoicesListResponse;
  memberFromOrganization?: Maybe<SystemMemberOrganizationAccountInfo>;
  memberInvitation?: Maybe<SystemMemberInvitation>;
  memberInvitationsList?: Maybe<SystemMemberInvitationsList>;
  memberPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  membersByOrganization?: Maybe<SystemMembersAccountList>;
  organizationBillingHistory: SystemBillingInvoicesListResponse;
  organizationBillingPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  organizationById?: Maybe<SystemOrganizationItem>;
  organizationInvitationById?: Maybe<SystemOrganizationInvitation>;
  organizationPaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  organizationsListByArchieUser?: Maybe<SystemOrganizationsListArchieResponse>;
  organizationsListByUser?: Maybe<SystemOrganizationsListResponse>;
  partnerListQuery?: Maybe<SystemPartnerResponse>;
  projectDeployments?: Maybe<SystemProjectDeploymentsResponse>;
  projectFrontend?: Maybe<SystemProjectFrontendResponse>;
  projectInfoDetails?: Maybe<SystemProjectUserDetailsResponse>;
  projectPlan?: Maybe<SystemProjectPlanResponse>;
  projectQuotas?: Maybe<SystemProjectQuotasResponse>;
  projectsUserListQuery?: Maybe<SystemProjectUserResponse>;
  promptListQuery?: Maybe<SystemPromptsResponse>;
  table?: Maybe<SystemTable>;
  tableField?: Maybe<SystemTableField>;
  tablesList: SystemTableListResponse;
  userBillingConfiguration: SystemUserBillingConfigurationResponse;
  userBillingConfigurationArchie: SystemUserBillingConfigurationResponse;
  userInvitationsList?: Maybe<SystemUserInvitationList>;
  viewDryRun?: Maybe<SystemViewDryRunOutput>;
  workspaceName?: Maybe<Scalars['String']['output']>;
  workspacePaymentDetails?: Maybe<SystemPaymentDetailsResponse>;
  workspacesFrontendList?: Maybe<SystemWorkspaceListResponse>;
  workspacesList?: Maybe<SystemWorkspaceListResponse>;
};


export type SystemQueryApplicationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String']['input'];
};


export type SystemQueryBillingCurrentPlanArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingInvoicesListArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  by?: InputMaybe<SystemBillingInvoicesListFilterType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingMetricUsageQuotasListArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryBillingMetricUsagesListArgs = {
  filter?: InputMaybe<SystemBillingMetricUsagesListFilter>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryCiGenerateArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCiGenerateAsyncArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCiPlanArgs = {
  sourceEnvironmentId?: InputMaybe<Scalars['String']['input']>;
  tables?: InputMaybe<Array<Scalars['String']['input']>>;
  targetEnvironmentId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryDeployStatusArgs = {
  buildName: Scalars['String']['input'];
};


export type SystemQueryEnsureOrganizationSettingsArgs = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryEnvironmentBackupsListArgs = {
  environmentName?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryEnvironmentMemberArgs = {
  filter?: InputMaybe<SystemEnvironmentMemberFilter>;
};


export type SystemQueryEnvironmentMembersListArgs = {
  environmentIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<SystemEnvironmentMembersListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SystemEnvironmentMembersListSort>>;
};


export type SystemQueryEnvironmentsListArgs = {
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryFunctionsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SystemFunctionInfoFilter>;
  orderBy?: InputMaybe<Array<InputMaybe<SystemFunctionInfoOrderBy>>>;
};


export type SystemQueryGetCouponQueryArgs = {
  couponName: Scalars['String']['input'];
};


export type SystemQueryGetEnvironmentRolesArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryGetInvitationIdeaQueryArgs = {
  id: Scalars['ID']['input'];
};


export type SystemQueryIdeaDetailsArgs = {
  demoMode?: InputMaybe<Scalars['Boolean']['input']>;
  ideaId: Scalars['ID']['input'];
};


export type SystemQueryIdeaGraphQlSchemaQueryArgs = {
  ideaId: Scalars['ID']['input'];
};


export type SystemQueryIdeaMembersArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryIdeaSectionDetailsArgs = {
  ideaId: Scalars['ID']['input'];
  packageIdea: Scalars['ID']['input'];
  sectionCategory: Scalars['ID']['input'];
};


export type SystemQueryIdeasUserListQueryArgs = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryInboxEventsListArgs = {
  filter?: InputMaybe<InboxEventsListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryLogsArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SystemQueryLogsListArgs = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  functionName: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SystemQueryLogsListFilteredArgs = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  resource?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryMemberAccountFromEmailArgs = {
  email: Scalars['String']['input'];
};


export type SystemQueryMemberBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  hideOrganizationInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryMemberFromOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryMemberInvitationArgs = {
  id: Scalars['String']['input'];
};


export type SystemQueryMembersByOrganizationArgs = {
  organizationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationBillingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  hideWorkspaceInvoices?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['ID']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemQueryOrganizationBillingPlanArgs = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryOrganizationByIdArgs = {
  organizationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationInvitationByIdArgs = {
  invitationId: Scalars['String']['input'];
};


export type SystemQueryOrganizationPaymentDetailsArgs = {
  organizationId: Scalars['ID']['input'];
};


export type SystemQueryProjectDeploymentsArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectFrontendArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectInfoDetailsArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectPlanArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectQuotasArgs = {
  projectId: Scalars['ID']['input'];
};


export type SystemQueryProjectsUserListQueryArgs = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemQueryTableArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryTableFieldArgs = {
  id: Scalars['ID']['input'];
};


export type SystemQueryTablesListArgs = {
  filter?: InputMaybe<SystemTableListFilter>;
};


export type SystemQueryUserBillingConfigurationArgs = {
  filterPlanProjects?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryUserBillingConfigurationArchieArgs = {
  ideaId?: InputMaybe<Scalars['ID']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryViewDryRunArgs = {
  sql: Scalars['String']['input'];
};


export type SystemQueryWorkspacePaymentDetailsArgs = {
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

/** Relation */
export type SystemRelation = {
  refField?: Maybe<SystemTableField>;
  refFieldDisplayName?: Maybe<Scalars['String']['output']>;
  refFieldIsList?: Maybe<Scalars['Boolean']['output']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']['output']>;
  refFieldName?: Maybe<Scalars['String']['output']>;
  refTable: SystemTable;
  relationFieldName?: Maybe<Scalars['String']['output']>;
  relationTableName?: Maybe<Scalars['String']['output']>;
};

/** Relation Create Input */
export type SystemRelationCreateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList: Scalars['Boolean']['input'];
  refFieldIsRequired: Scalars['Boolean']['input'];
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId: Scalars['ID']['input'];
};

/** Relation Update Input */
export type SystemRelationUpdateInput = {
  refFieldDisplayName?: InputMaybe<Scalars['String']['input']>;
  refFieldIsList?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  refFieldName?: InputMaybe<Scalars['String']['input']>;
  refTableId?: InputMaybe<Scalars['ID']['input']>;
};

/** Schema Origin */
export type SystemSchemaOrigin = {
  provider?: Maybe<Scalars['String']['output']>;
  type: SystemSchemaOriginType;
};

/** Schema Origin Type Enum */
export enum SystemSchemaOriginType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
  View = 'VIEW'
}

export type SystemSectionResultCreateMutationInput = {
  archieId: Scalars['ID']['input'];
  composedPrompt: Scalars['JSON']['input'];
  content: Scalars['JSON']['input'];
  cost?: InputMaybe<Scalars['Float']['input']>;
  custom?: InputMaybe<Scalars['Boolean']['input']>;
  executionTime?: InputMaybe<Scalars['Int']['input']>;
  failureReason?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isRegenerate?: InputMaybe<Scalars['Boolean']['input']>;
  lLMApiCalls?: InputMaybe<Scalars['Int']['input']>;
  modelId: Scalars['ID']['input'];
  package: Scalars['String']['input'];
  prompt: Scalars['ID']['input'];
  provisionalData?: InputMaybe<Scalars['Boolean']['input']>;
  sectionCategory: Scalars['String']['input'];
  status?: InputMaybe<SystemStatusIdea>;
  tokensInput?: InputMaybe<Scalars['Int']['input']>;
  tokensOutput?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemSectionResultGenerateMutationInput = {
  archieId: Scalars['ID']['input'];
  contextData?: InputMaybe<Scalars['JSON']['input']>;
  idea: Scalars['ID']['input'];
  iterableID?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  provisionalData?: InputMaybe<Scalars['Boolean']['input']>;
  sectionCategories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemSectionResultPropagateUpdateMutationInput = {
  archieId: Scalars['ID']['input'];
  content: Scalars['JSON']['input'];
  package: Scalars['String']['input'];
  sectionCategory: Scalars['String']['input'];
};

export type SystemSectionResultResponse = {
  sectionId: Scalars['ID']['output'];
  sectionResultId: Scalars['ID']['output'];
};

export type SystemSectionResultUpdateMutationInput = {
  archieId: Scalars['ID']['input'];
  overviewId?: InputMaybe<Scalars['String']['input']>;
  package: Scalars['String']['input'];
  sectionCategories?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

/** Smart Field Attributes */
export type SystemSmartFieldTypeAttributes = {
  format: Scalars['String']['output'];
  innerFields?: Maybe<Array<Maybe<SystemCustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SystemSmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** StatusIdea */
export enum SystemStatusIdea {
  Completed = 'Completed',
  Locked = 'Locked',
  NeedsAttention = 'NeedsAttention',
  Open = 'Open'
}

/** Switch Field Attributes */
export type SystemSwitchFieldTypeAttributes = {
  format: Scalars['String']['output'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Switch Type Format Enum */
export enum SystemSwitchTypeFormatEnum {
  ActiveInactive = 'ACTIVE_INACTIVE',
  Custom = 'CUSTOM',
  HighLow = 'HIGH_LOW',
  OnOff = 'ON_OFF',
  TrueFalse = 'TRUE_FALSE',
  YesNo = 'YES_NO'
}

/** Table */
export type SystemTable = {
  application?: Maybe<SystemApplication>;
  attributes?: Maybe<SystemTableAttributes>;
  dataFeatures: SystemTableDataFeatures;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<SystemTableField>>;
  fieldsForIndexing?: Maybe<Array<Maybe<SystemTableField>>>;
  id: Scalars['ID']['output'];
  indexes?: Maybe<Array<SystemTableIndex>>;
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  origin: SystemSchemaOrigin;
  schemaFeatures: SystemTableSchemaFeatures;
};

/** Table Attributes */
export type SystemTableAttributes = SystemViewAttributes;

/** Table Create Input */
export type SystemTableCreateInput = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Table Data Features */
export type SystemTableDataFeatures = {
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Table Delete Input */
export type SystemTableDeleteInput = {
  id: Scalars['ID']['input'];
};

/** TableField */
export type SystemTableField = {
  computedMode?: Maybe<SystemComputedFieldMode>;
  dataFeatures: SystemFieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  id: Scalars['ID']['output'];
  isList: Scalars['Boolean']['output'];
  isMeta: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  origin: SystemSchemaOrigin;
  relation?: Maybe<SystemRelation>;
  schemaFeatures: SystemFieldSchemaFeatures;
  table: SystemTable;
};

/** Table Field Create Input */
export type SystemTableFieldCreateInput = {
  computedMode?: InputMaybe<SystemComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType: SystemFieldType;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<SystemRelationCreateInput>;
  tableId: Scalars['ID']['input'];
};

/** Table Field Delete Input */
export type SystemTableFieldDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Field Position Update Input */
export type SystemTableFieldPositionUpdateInput = {
  id: Scalars['ID']['input'];
  newPosition: Scalars['Int']['input'];
};

/** Table Field Update Input */
export type SystemTableFieldUpdateInput = {
  computedMode?: InputMaybe<SystemComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<SystemFieldType>;
  fieldTypeAttributes?: InputMaybe<SystemFieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<SystemRelationUpdateInput>;
};

/** Table Index */
export type SystemTableIndex = {
  columns?: Maybe<Array<SystemTableIndexColumn>>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  table: SystemTable;
  type: Scalars['String']['output'];
};

/** Table Index Column */
export type SystemTableIndexColumn = {
  name: Scalars['String']['output'];
};

/** Table Index Column Input */
export type SystemTableIndexColumnInput = {
  name: Scalars['String']['input'];
};

/** Table List Application Filter */
export type SystemTableListApplicationFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table List Filter */
export type SystemTableListFilter = {
  applications?: InputMaybe<Array<InputMaybe<SystemTableListApplicationFilter>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']['input']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Table List Response */
export type SystemTableListResponse = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemTable>>>;
};

/** Table Schema Create Features */
export type SystemTableSchemaCreateFeatures = {
  DATE: Scalars['Boolean']['output'];
  FILE: Scalars['Boolean']['output'];
  GEO: Scalars['Boolean']['output'];
  ID: Scalars['Boolean']['output'];
  JSON: Scalars['Boolean']['output'];
  MISSING_RELATION: Scalars['Boolean']['output'];
  NUMBER: Scalars['Boolean']['output'];
  ONE_WAY_RELATION: Scalars['Boolean']['output'];
  RELATION: Scalars['Boolean']['output'];
  SMART: Scalars['Boolean']['output'];
  SWITCH: Scalars['Boolean']['output'];
  TEXT: Scalars['Boolean']['output'];
  UUID: Scalars['Boolean']['output'];
};

/** Table Schema Features */
export type SystemTableSchemaFeatures = {
  computedFields: Scalars['Boolean']['output'];
  create: SystemTableSchemaCreateFeatures;
  update?: Maybe<SystemTableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type SystemTableSchemaMetaFieldFeatures = {
  displayName: Scalars['Boolean']['output'];
  name: Scalars['Boolean']['output'];
};

/** Table Update Input */
export type SystemTableUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Team Invitation Details */
export type SystemTeamInvitationDetails = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

export type SystemTechnicalDesignResponse = {
  baaSProjectId?: Maybe<Scalars['String']['output']>;
  customFunctions?: Maybe<Scalars['JSON']['output']>;
  dataModel?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
};

/** Text Field Attributes */
export type SystemTextFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
};

/** Text Type Format Enum */
export enum SystemTextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED'
}

export type SystemTransferIdeaOwnerMutationInput = {
  email: Scalars['String']['input'];
  ideaId: Scalars['ID']['input'];
};

/** UUID Field Attributes */
export type SystemUuidFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
};

export type SystemUserBillingConfigurationResponse = {
  availablePlans: Array<SystemBillingPlanBaseInfo>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean']['output'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean']['output'];
};

/** User Invitation Details */
export type SystemUserInvitationDetails = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<SystemInvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** User Invitation List */
export type SystemUserInvitationList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SystemUserInvitationDetails>>>;
};

/** User Type */
export enum SystemUserType {
  Agency = 'Agency',
  Corporation = 'Corporation',
  MyOwn = 'MyOwn',
  Team = 'Team'
}

/** View Attributes */
export type SystemViewAttributes = {
  query?: Maybe<Scalars['String']['output']>;
};

/** View Create Input */
export type SystemViewCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/** Dry Run Response for previewing SQL Views */
export type SystemViewDryRunOutput = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  timeMs?: Maybe<Scalars['Int']['output']>;
};

/** View Update Input */
export type SystemViewUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** WorkspaceCreateMutationInput */
export type SystemWorkspaceCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  howStart?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<SystemWorkspaceKind>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemWorkspaceCreateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** WorkspaceDeleteMutationInput */
export type SystemWorkspaceDeleteMutationInput = {
  workspaceId: Scalars['ID']['input'];
};

export type SystemWorkspaceImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type SystemWorkspaceItem = {
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<SystemWorkspaceImage>;
  is8BaseAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  lastDeployABInfo?: Maybe<SystemDeploymentAbItemResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<SystemBillingCurrentPlanResponse>;
  project?: Maybe<SystemProjectItemWs>;
  region?: Maybe<Scalars['String']['output']>;
  summaryABInfo?: Maybe<SystemFrontendUtilizationAbResponse>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
  webSocket?: Maybe<Scalars['String']['output']>;
};

/** Workspace Kind */
export enum SystemWorkspaceKind {
  Frontend = 'frontend',
  General = 'general'
}

/** SystemWorkspaceListResponse output */
export type SystemWorkspaceListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<SystemWorkspaceItem>;
};

export enum SystemWorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type SystemWorkspaceUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SystemWorkspaceUpdateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Table */
export type Table = {
  application?: Maybe<Application>;
  attributes?: Maybe<TableAttributes>;
  dataFeatures: TableDataFeatures;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<TableField>>;
  fieldsForIndexing?: Maybe<Array<Maybe<TableField>>>;
  id: Scalars['ID']['output'];
  indexes?: Maybe<Array<TableIndex>>;
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  origin: SchemaOrigin;
  schemaFeatures: TableSchemaFeatures;
};

/** Table Attributes */
export type TableAttributes = ViewAttributes;

/** Table Create Input */
export type TableCreateInput = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

/** Table Data Features */
export type TableDataFeatures = {
  create: Scalars['Boolean']['output'];
  delete: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
};

/** Table Delete Input */
export type TableDeleteInput = {
  id: Scalars['ID']['input'];
};

/** TableField */
export type TableField = {
  computedMode?: Maybe<ComputedFieldMode>;
  dataFeatures: FieldDataFeatures;
  defaultValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['String']['output']>;
  fieldType: FieldType;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  id: Scalars['ID']['output'];
  isList: Scalars['Boolean']['output'];
  isMeta: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isUnique?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  origin: SchemaOrigin;
  relation?: Maybe<Relation>;
  schemaFeatures: FieldSchemaFeatures;
  table: Table;
};

/** Table Field Create Input */
export type TableFieldCreateInput = {
  computedMode?: InputMaybe<ComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType: FieldType;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationCreateInput>;
  tableId: Scalars['ID']['input'];
};

/** Table Field Delete Input */
export type TableFieldDeleteInput = {
  id: Scalars['ID']['input'];
};

/** Table Field Position Update Input */
export type TableFieldPositionUpdateInput = {
  id: Scalars['ID']['input'];
  newPosition: Scalars['Int']['input'];
};

/** Table Field Update Input */
export type TableFieldUpdateInput = {
  computedMode?: InputMaybe<ComputedFieldMode>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['String']['input']>;
  fieldType?: InputMaybe<FieldType>;
  fieldTypeAttributes?: InputMaybe<FieldTypeAttributesInput>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  initialValue?: InputMaybe<Scalars['String']['input']>;
  isList?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  isUnique?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  relation?: InputMaybe<RelationUpdateInput>;
};

/** Table Index */
export type TableIndex = {
  columns?: Maybe<Array<TableIndexColumn>>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  table: Table;
  type: Scalars['String']['output'];
};

/** Table Index Column */
export type TableIndexColumn = {
  name: Scalars['String']['output'];
};

/** Table Index Column Input */
export type TableIndexColumnInput = {
  name: Scalars['String']['input'];
};

export enum TableIndexType {
  Index = 'INDEX',
  Unique = 'UNIQUE'
}

/** Table List Application Filter */
export type TableListApplicationFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table List Filter */
export type TableListFilter = {
  applications?: InputMaybe<Array<InputMaybe<TableListApplicationFilter>>>;
  onlyUserTables?: InputMaybe<Scalars['Boolean']['input']>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Table List Response */
export type TableListResponse = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<Table>>>;
};

/** Table Schema Create Features */
export type TableSchemaCreateFeatures = {
  DATE: Scalars['Boolean']['output'];
  FILE: Scalars['Boolean']['output'];
  GEO: Scalars['Boolean']['output'];
  ID: Scalars['Boolean']['output'];
  JSON: Scalars['Boolean']['output'];
  MISSING_RELATION: Scalars['Boolean']['output'];
  NUMBER: Scalars['Boolean']['output'];
  ONE_WAY_RELATION: Scalars['Boolean']['output'];
  RELATION: Scalars['Boolean']['output'];
  SMART: Scalars['Boolean']['output'];
  SWITCH: Scalars['Boolean']['output'];
  TEXT: Scalars['Boolean']['output'];
  UUID: Scalars['Boolean']['output'];
};

/** Table Schema Features */
export type TableSchemaFeatures = {
  computedFields: Scalars['Boolean']['output'];
  create: TableSchemaCreateFeatures;
  update?: Maybe<TableSchemaMetaFieldFeatures>;
};

/** Table Schema Meta Field Features */
export type TableSchemaMetaFieldFeatures = {
  displayName: Scalars['Boolean']['output'];
  name: Scalars['Boolean']['output'];
};

/** Table Update Input */
export type TableUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Text Field Attributes */
export type TextFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
  format: Scalars['String']['output'];
};

/** Text Type Format Enum */
export enum TextTypeFormatEnum {
  Ein = 'EIN',
  Email = 'EMAIL',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Name = 'NAME',
  Unformatted = 'UNFORMATTED'
}

export type TrimFunctionArguments = {
  mode?: InputMaybe<StringTrimMode>;
  str: Scalars['String']['input'];
};

/** UUID Field Attributes */
export type UuidFieldTypeAttributes = {
  fieldSize?: Maybe<Scalars['Int']['output']>;
};

export type UpdateByFilterBooleanSwitchInput = {
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateByFilterIntInput = {
  add?: InputMaybe<Scalars['Int']['input']>;
  div?: InputMaybe<Scalars['Int']['input']>;
  mod?: InputMaybe<Scalars['Int']['input']>;
  mult?: InputMaybe<Scalars['Int']['input']>;
  pow?: InputMaybe<Scalars['Int']['input']>;
  prec?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
  sqrt?: InputMaybe<Scalars['Boolean']['input']>;
  sub?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateByFilterJsonInput = {
  set?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateByFilterListStringInput = {
  insert?: InputMaybe<UpdateByFilterListStringInsertOperationInput>;
  push?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  remove?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  removeValue?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  swap?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  unshift?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateByFilterListStringInsertOperationInput = {
  start: Scalars['Int']['input'];
  values: Array<Scalars['String']['input']>;
};

export type UpdateByFilterStringInput = {
  postfix?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByFilterStringSwitchInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

/** UpdatedFieldsFilter */
export type UpdatedFieldsFilter = {
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  every?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadcareSignInfoResponse = {
  expire: Scalars['String']['output'];
  publicKey: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type User = {
  LibraryStaff?: Maybe<LibraryStaff>;
  Notifications?: Maybe<Notification>;
  Patrons?: Maybe<Patron>;
  _description?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<File>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is8base?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<UserPermissionList>;
  roles?: Maybe<RoleListResponse>;
  status?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserPermissionsArgs = {
  filter?: InputMaybe<PermissionInputFilter>;
};


export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupBy?: InputMaybe<RoleGroupBy>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<RoleOrderBy>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RoleSort>>;
};

export type UserBillingConfigurationResponse = {
  availablePlans: Array<BillingPlanBaseInfo>;
  /** @deprecated Flag is deprecated */
  isCancelSubscriptionAvailable: Scalars['Boolean']['output'];
  /** @deprecated Flag is deprecated */
  isFreePlanAvailable: Scalars['Boolean']['output'];
};

/** Users create input */
export type UserCreateInput = {
  LibraryStaff?: InputMaybe<UsersLibraryStaffRelationInput>;
  Notifications?: InputMaybe<UsersNotificationsRelationInput>;
  Patrons?: InputMaybe<UsersPatronsRelationInput>;
  avatar?: InputMaybe<UsersAvatarRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users create many input */
export type UserCreateManyInput = {
  LibraryStaff: UsersLibraryStaffManyRelationInput;
  Notifications: UsersNotificationsManyRelationInput;
  Patrons: UsersPatronsManyRelationInput;
  avatar?: InputMaybe<UsersAvatarManyRelationInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesManyRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** Users delete input */
export type UserDeleteInput = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** UserFieldsPermissions create input */
export type UserFieldsPermissions = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['Boolean']['input']>;
  is8base?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFilter = {
  AND?: InputMaybe<Array<UserFilter>>;
  LibraryStaff?: InputMaybe<LibraryStaffFilter>;
  Notifications?: InputMaybe<NotificationFilter>;
  OR?: InputMaybe<Array<UserFilter>>;
  Patrons?: InputMaybe<PatronFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<FileFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<UserFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  firstName?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  is8base?: InputMaybe<BoolPredicate>;
  is_self?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StringPredicate>;
  not_self?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<RoleRelationFilter>;
  status?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type UserGroupBy = {
  first?: InputMaybe<Scalars['Int']['input']>;
  having?: InputMaybe<Having>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: UserGroupByQuery;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GroupBySort>>;
};

export type UserGroupByQuery = {
  LibraryStaff?: InputMaybe<LibraryStaffGroupByQuery>;
  Notifications?: InputMaybe<NotificationGroupByQuery>;
  Patrons?: InputMaybe<PatronGroupByQuery>;
  _group?: InputMaybe<Array<GroupIdentifiersGroupByField>>;
  avatar?: InputMaybe<FileGroupByQuery>;
  createdAt?: InputMaybe<Array<GroupByField>>;
  createdBy?: InputMaybe<UserGroupByQuery>;
  email?: InputMaybe<Array<GroupByField>>;
  firstName?: InputMaybe<Array<GroupByField>>;
  id?: InputMaybe<Array<GroupByField>>;
  is8base?: InputMaybe<Array<GroupByField>>;
  lastName?: InputMaybe<Array<GroupByField>>;
  origin?: InputMaybe<Array<GroupByField>>;
  roles?: InputMaybe<RoleGroupByQuery>;
  status?: InputMaybe<Array<GroupByField>>;
  timezone?: InputMaybe<Array<GroupByField>>;
  updatedAt?: InputMaybe<Array<GroupByField>>;
};

/** User Invitation Details */
export type UserInvitationDetails = {
  accepted?: Maybe<Scalars['Boolean']['output']>;
  acceptedOn?: Maybe<Scalars['DateTime']['output']>;
  apiHost?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  invitedBy?: Maybe<InvitedByName>;
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  resentOn?: Maybe<Scalars['DateTime']['output']>;
};

/** User Invitation List */
export type UserInvitationList = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<UserInvitationDetails>>>;
};

export type UserKeyFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** UserListResponse output */
export type UserListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
  /** List items */
  items: Array<User>;
};

/** UserLoginInput */
export type UserLoginInput = {
  authProfileId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  fromInvitation?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

/** UserManyResponse output */
export type UserManyResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<User>;
};

/** No longer supported. Use `sort` instead. */
export enum UserOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  Is8baseAsc = 'is8base_ASC',
  Is8baseDesc = 'is8base_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Users subscription payload */
export type UserPayload = {
  mutation: MutationType;
  node?: Maybe<User>;
  previousValues?: Maybe<User>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** User Permission */
export type UserPermission = {
  permission?: Maybe<Scalars['JSON']['output']>;
  resource?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<Scalars['String']['output']>;
};

/** User Permission List */
export type UserPermissionList = {
  count: Scalars['Int']['output'];
  items?: Maybe<Array<UserPermission>>;
};

export type UserRelationFilter = {
  every?: InputMaybe<UserFilter>;
  none?: InputMaybe<UserFilter>;
  some?: InputMaybe<UserFilter>;
};

export type UserSort = {
  LibraryStaff?: InputMaybe<LibraryStaffSort>;
  Notifications?: InputMaybe<NotificationSort>;
  Patrons?: InputMaybe<PatronSort>;
  avatar?: InputMaybe<FileSort>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<UserSort>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is8base?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  origin?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  timezone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Users subscription filter */
export type UserSubscriptionFilter = {
  mutation_in?: InputMaybe<Array<InputMaybe<MutationType>>>;
  node?: InputMaybe<UserFilter>;
  updatedFields?: InputMaybe<UpdatedFieldsFilter>;
};

/** Users update input */
export type UserUpdateByFilterInput = {
  email?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  firstName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  is8base?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  isOwner?: InputMaybe<Array<InputMaybe<UpdateByFilterBooleanSwitchInput>>>;
  lastName?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
  origin?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  status?: InputMaybe<Array<InputMaybe<UpdateByFilterStringSwitchInput>>>;
  timezone?: InputMaybe<Array<InputMaybe<UpdateByFilterStringInput>>>;
};

/** Users update input */
export type UserUpdateInput = {
  LibraryStaff?: InputMaybe<UsersLibraryStaffUpdateRelationInput>;
  Notifications?: InputMaybe<UsersNotificationsUpdateRelationInput>;
  Patrons?: InputMaybe<UsersPatronsUpdateRelationInput>;
  avatar?: InputMaybe<UsersAvatarUpdateRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UsersRolesUpdateRelationInput>;
  status?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type User_PermissionFilter = {
  AND?: InputMaybe<Array<User_PermissionFilter>>;
  LibraryStaff?: InputMaybe<LibraryStaff_PermissionFilter>;
  Notifications?: InputMaybe<Notification_PermissionFilter>;
  OR?: InputMaybe<Array<User_PermissionFilter>>;
  Patrons?: InputMaybe<Patron_PermissionFilter>;
  _fullText?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<File_PermissionFilter>;
  createdAt?: InputMaybe<DateTimePredicate>;
  createdBy?: InputMaybe<User_PermissionFilter>;
  deletedAt?: InputMaybe<IntPredicate>;
  email?: InputMaybe<StringPredicate>;
  firstName?: InputMaybe<StringPredicate>;
  id?: InputMaybe<IdPredicate>;
  is8base?: InputMaybe<BoolPredicate>;
  is_self?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<StringPredicate>;
  not_self?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<StringPredicate>;
  roles?: InputMaybe<Role_PermissionRelationFilter>;
  status?: InputMaybe<StringPredicate>;
  timezone?: InputMaybe<StringPredicate>;
  updatedAt?: InputMaybe<DateTimePredicate>;
};

export type User_PermissionRelationFilter = {
  every?: InputMaybe<User_PermissionFilter>;
  none?: InputMaybe<User_PermissionFilter>;
  some?: InputMaybe<User_PermissionFilter>;
};

/** LibraryStaff create input from user_id */
export type User_Id_LibraryStaffCreateInput = {
  position?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<LibraryStaffUser_IdRelationInput>;
};

/** LibraryStaff update input from user_id */
export type User_Id_LibraryStaffUpdateInput = {
  position?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<LibraryStaffUser_IdUpdateRelationInput>;
};

/** Patrons create input from user_id */
export type User_Id_PatronCreateInput = {
  Holds: PatronsHoldsRelationInput;
  Loans: PatronsLoansRelationInput;
  Recommendations: PatronsRecommendationsRelationInput;
  Reviews: PatronsReviewsRelationInput;
  borrowing_history: Scalars['JSON']['input'];
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdRelationInput>;
};

/** Patrons update input from user_id */
export type User_Id_PatronUpdateInput = {
  Holds?: InputMaybe<PatronsHoldsUpdateRelationInput>;
  Loans?: InputMaybe<PatronsLoansUpdateRelationInput>;
  Recommendations?: InputMaybe<PatronsRecommendationsUpdateRelationInput>;
  Reviews?: InputMaybe<PatronsReviewsUpdateRelationInput>;
  borrowing_history?: InputMaybe<Scalars['JSON']['input']>;
  membership_status?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<PatronsUser_IdUpdateRelationInput>;
};

/** Users relation input */
export type UsersAvatarManyRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
};

/** Users relation input */
export type UsersAvatarRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
  create?: InputMaybe<Users_Avatar_FileCreateInput>;
};

/** Users relation input */
export type UsersAvatarUpdateRelationInput = {
  connect?: InputMaybe<FileKeyFilter>;
  create?: InputMaybe<Users_Avatar_FileCreateInput>;
  disconnect?: InputMaybe<FileKeyFilter>;
  reconnect?: InputMaybe<FileKeyFilter>;
  update?: InputMaybe<Users_Avatar_FileUpdateInput>;
};

/** Users relation input */
export type UsersLibraryStaffManyRelationInput = {
  connect?: InputMaybe<LibraryStaffKeyFilter>;
};

/** Users relation input */
export type UsersLibraryStaffRelationInput = {
  connect?: InputMaybe<LibraryStaffKeyFilter>;
  create?: InputMaybe<User_Id_LibraryStaffCreateInput>;
};

/** Users relation input */
export type UsersLibraryStaffUpdateRelationInput = {
  connect?: InputMaybe<LibraryStaffKeyFilter>;
  create?: InputMaybe<User_Id_LibraryStaffCreateInput>;
  disconnect?: InputMaybe<LibraryStaffKeyFilter>;
  reconnect?: InputMaybe<LibraryStaffKeyFilter>;
  update?: InputMaybe<User_Id_LibraryStaffUpdateInput>;
};

/** Users relation input */
export type UsersNotificationsManyRelationInput = {
  connect?: InputMaybe<NotificationKeyFilter>;
};

/** Users relation input */
export type UsersNotificationsRelationInput = {
  connect?: InputMaybe<NotificationKeyFilter>;
  create?: InputMaybe<Recipient_Id_NotificationCreateInput>;
};

/** Users relation input */
export type UsersNotificationsUpdateRelationInput = {
  connect?: InputMaybe<NotificationKeyFilter>;
  create?: InputMaybe<Recipient_Id_NotificationCreateInput>;
  disconnect?: InputMaybe<NotificationKeyFilter>;
  reconnect?: InputMaybe<NotificationKeyFilter>;
  update?: InputMaybe<Recipient_Id_NotificationUpdateInput>;
};

/** Users relation input */
export type UsersPatronsManyRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
};

/** Users relation input */
export type UsersPatronsRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
  create?: InputMaybe<User_Id_PatronCreateInput>;
};

/** Users relation input */
export type UsersPatronsUpdateRelationInput = {
  connect?: InputMaybe<PatronKeyFilter>;
  create?: InputMaybe<User_Id_PatronCreateInput>;
  disconnect?: InputMaybe<PatronKeyFilter>;
  reconnect?: InputMaybe<PatronKeyFilter>;
  update?: InputMaybe<User_Id_PatronUpdateInput>;
};

/** Users relation input */
export type UsersRolesManyRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
};

/** Users relation input */
export type UsersRolesRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>;
};

/** Users relation input */
export type UsersRolesUpdateRelationInput = {
  connect?: InputMaybe<Array<RoleKeyFilter>>;
  create?: InputMaybe<Array<InputMaybe<Users_RoleCreateInput>>>;
  disconnect?: InputMaybe<Array<RoleKeyFilter>>;
  reconnect?: InputMaybe<Array<RoleKeyFilter>>;
  update?: InputMaybe<Array<InputMaybe<Users_RoleUpdateInput>>>;
};

/** Roles create input from users */
export type Users_RoleCreateInput = {
  apiTokens?: InputMaybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: InputMaybe<RolesAuthenticationProfilesRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsInput>;
  users?: InputMaybe<RolesUsersRelationInput>;
};

/** Roles update input from users */
export type Users_RoleUpdateInput = {
  data: RoleUpdateInput;
  filter?: InputMaybe<RoleKeyFilter>;
};

/** Files create input from users_avatar */
export type Users_Avatar_FileCreateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarRelationInput>;
};

/** Files update input from users_avatar */
export type Users_Avatar_FileUpdateInput = {
  fileId?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSON']['input']>;
  mods?: InputMaybe<Scalars['JSON']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
  users_avatar?: InputMaybe<FilesUsers_AvatarUpdateRelationInput>;
};

/** VerificationEmailResendInput */
export type VerificationEmailResendInput = {
  email: Scalars['String']['input'];
};

/** View Attributes */
export type ViewAttributes = {
  query?: Maybe<Scalars['String']['output']>;
};

/** View Create Input */
export type ViewCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

/** Dry Run Response for previewing SQL Views */
export type ViewDryRunOutput = {
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Scalars['JSON']['output']>;
  timeMs?: Maybe<Scalars['Int']['output']>;
};

/** View Update Input */
export type ViewUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

/** WorkspaceCreateMutationInput */
export type WorkspaceCreateMutationInput = {
  authType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  howStart?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  kind?: InputMaybe<WorkspaceKind>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['ID']['input']>;
};

export type WorkspaceCreateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** WorkspaceDeleteMutationInput */
export type WorkspaceDeleteMutationInput = {
  workspaceId: Scalars['ID']['input'];
};

export type WorkspaceImage = {
  downloadUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** LoginResponseWorkspace name and id */
export type WorkspaceInfo = {
  name?: Maybe<Scalars['String']['output']>;
  workspace?: Maybe<Scalars['ID']['output']>;
};

export type WorkspaceItem = {
  apiHost?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<WorkspaceImage>;
  is8BaseAuthEnabled?: Maybe<Scalars['Boolean']['output']>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']['output']>;
  isOwner: Scalars['Boolean']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  lastDeployABInfo?: Maybe<DeploymentAbItemResponse>;
  name: Scalars['String']['output'];
  nextPlan?: Maybe<BillingNextPlanResponse>;
  organization?: Maybe<SystemOrganizationBaseItem>;
  owner?: Maybe<SystemMemberAccountInfo>;
  plan?: Maybe<BillingCurrentPlanResponse>;
  project?: Maybe<ProjectItemWs>;
  region?: Maybe<Scalars['String']['output']>;
  summaryABInfo?: Maybe<FrontendUtilizationAbResponse>;
  teamMemberCount?: Maybe<Scalars['Int']['output']>;
  webSocket?: Maybe<Scalars['String']['output']>;
};

/** Workspace Kind */
export enum WorkspaceKind {
  Frontend = 'frontend',
  General = 'general'
}

/** WorkspaceListResponse output */
export type WorkspaceListResponse = {
  /** List items count */
  count: Scalars['Int']['output'];
  /** List items */
  items: Array<WorkspaceItem>;
};

export enum WorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Canceling = 'canceling',
  Pending = 'pending',
  Suspended = 'suspended'
}

/** WorkspaceUpdateMutationInput */
export type WorkspaceUpdateMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<GraphQlCreateFileItemInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type WorkspaceUpdateResponse = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<GraphQlFileItemResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IsAllowedCallbackUrlQueryResponse = {
  isEnabled: Scalars['Boolean']['output'];
};
