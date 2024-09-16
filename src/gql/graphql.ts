/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  bigint: { input: any; output: any; }
  coin: { input: any; output: any; }
  coin_scalar: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  address: Scalars['String']['output'];
  /** An array relationship */
  balances: Array<Balances>;
  /** An aggregate relationship */
  balances_aggregate: Balances_Aggregate;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  /** An array relationship */
  proposals: Array<Proposal>;
  /** An aggregate relationship */
  proposals_aggregate: Proposal_Aggregate;
  /** An array relationship */
  staked_balances: Array<Staked_Balances>;
  /** An aggregate relationship */
  staked_balances_aggregate: Staked_Balances_Aggregate;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Info_Aggregate;
};


/** columns and relationships of "account" */
export type AccountBalancesArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountBalances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountStaked_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountStaked_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  balances?: InputMaybe<Balances_Bool_Exp>;
  balances_aggregate?: InputMaybe<Balances_Aggregate_Bool_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Bool_Exp>;
  proposals?: InputMaybe<Proposal_Bool_Exp>;
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>;
  staked_balances?: InputMaybe<Staked_Balances_Bool_Exp>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint on columns "address" */
  AccountPkey = 'account_pkey'
}

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  balances?: InputMaybe<Balances_Arr_Rel_Insert_Input>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Arr_Rel_Insert_Input>;
  proposal_votes?: InputMaybe<Proposal_Vote_Arr_Rel_Insert_Input>;
  proposals?: InputMaybe<Proposal_Arr_Rel_Insert_Input>;
  staked_balances?: InputMaybe<Staked_Balances_Arr_Rel_Insert_Input>;
  validator_infos?: InputMaybe<Validator_Info_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  address?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  address?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  __typename?: 'account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
  data: Account_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** on_conflict condition type for table "account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint;
  update_columns?: Array<Account_Update_Column>;
  where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  address?: InputMaybe<Order_By>;
  balances_aggregate?: InputMaybe<Balances_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  address: Scalars['String']['input'];
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Address = 'address'
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
  /** column name */
  Address = 'address'
}

export type Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Account_Bool_Exp;
};

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day';
  average_time: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
  one_row_id: Scalars['Boolean']['output'];
};

/** aggregated selection of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate = {
  __typename?: 'average_block_time_per_day_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Day_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Day>;
};

/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_Fields = {
  __typename?: 'average_block_time_per_day_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Day_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Average_Block_Time_Per_Day_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Day_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Day_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Day_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Day_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Day_Avg_Fields = {
  __typename?: 'average_block_time_per_day_avg_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerDayPkey = 'average_block_time_per_day_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Inc_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Insert_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Day_Max_Fields = {
  __typename?: 'average_block_time_per_day_max_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Day_Min_Fields = {
  __typename?: 'average_block_time_per_day_min_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Mutation_Response = {
  __typename?: 'average_block_time_per_day_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Day>;
};

/** on_conflict condition type for table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_On_Conflict = {
  constraint: Average_Block_Time_Per_Day_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Day_Update_Column>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_day */
export type Average_Block_Time_Per_Day_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean']['input'];
};

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Set_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Day_Stddev_Fields = {
  __typename?: 'average_block_time_per_day_stddev_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Day_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_day_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Day_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_day_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Day_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Day_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Day_Sum_Fields = {
  __typename?: 'average_block_time_per_day_sum_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Day_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Average_Block_Time_Per_Day_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Average_Block_Time_Per_Day_Set_Input>;
  /** filter the rows which have to be updated */
  where: Average_Block_Time_Per_Day_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Day_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_day_var_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Day_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_day_var_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Day_Variance_Fields = {
  __typename?: 'average_block_time_per_day_variance_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour';
  average_time: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
  one_row_id: Scalars['Boolean']['output'];
};

/** aggregated selection of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate = {
  __typename?: 'average_block_time_per_hour_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Hour_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Hour>;
};

/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_Fields = {
  __typename?: 'average_block_time_per_hour_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Hour_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Average_Block_Time_Per_Hour_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Hour_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Hour_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Hour_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Hour_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Hour_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Hour_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Hour_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Hour_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Hour_Avg_Fields = {
  __typename?: 'average_block_time_per_hour_avg_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerHourPkey = 'average_block_time_per_hour_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Inc_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Insert_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Hour_Max_Fields = {
  __typename?: 'average_block_time_per_hour_max_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Hour_Min_Fields = {
  __typename?: 'average_block_time_per_hour_min_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Mutation_Response = {
  __typename?: 'average_block_time_per_hour_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Hour>;
};

/** on_conflict condition type for table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_On_Conflict = {
  constraint: Average_Block_Time_Per_Hour_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Hour_Update_Column>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_hour */
export type Average_Block_Time_Per_Hour_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean']['input'];
};

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Set_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Hour_Stddev_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Hour_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Hour_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Hour_Sum_Fields = {
  __typename?: 'average_block_time_per_hour_sum_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Hour_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Average_Block_Time_Per_Hour_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Average_Block_Time_Per_Hour_Set_Input>;
  /** filter the rows which have to be updated */
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Hour_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_var_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Hour_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_var_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Hour_Variance_Fields = {
  __typename?: 'average_block_time_per_hour_variance_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute';
  average_time: Scalars['numeric']['output'];
  height: Scalars['bigint']['output'];
  one_row_id: Scalars['Boolean']['output'];
};

/** aggregated selection of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate = {
  __typename?: 'average_block_time_per_minute_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Minute_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Minute>;
};

/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_Fields = {
  __typename?: 'average_block_time_per_minute_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Minute_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Average_Block_Time_Per_Minute_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Minute_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Minute_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Minute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Minute_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Minute_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Minute_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Minute_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Minute_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Minute_Avg_Fields = {
  __typename?: 'average_block_time_per_minute_avg_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerMinutePkey = 'average_block_time_per_minute_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Inc_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Insert_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Minute_Max_Fields = {
  __typename?: 'average_block_time_per_minute_max_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Minute_Min_Fields = {
  __typename?: 'average_block_time_per_minute_min_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Mutation_Response = {
  __typename?: 'average_block_time_per_minute_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Minute>;
};

/** on_conflict condition type for table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_On_Conflict = {
  constraint: Average_Block_Time_Per_Minute_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Minute_Update_Column>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_minute */
export type Average_Block_Time_Per_Minute_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean']['input'];
};

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Set_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Minute_Stddev_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Minute_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Minute_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  one_row_id?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Minute_Sum_Fields = {
  __typename?: 'average_block_time_per_minute_sum_fields';
  average_time?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Minute_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Average_Block_Time_Per_Minute_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Average_Block_Time_Per_Minute_Set_Input>;
  /** filter the rows which have to be updated */
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Minute_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_var_pop_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Minute_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_var_samp_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Minute_Variance_Fields = {
  __typename?: 'average_block_time_per_minute_variance_fields';
  average_time?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "balances" */
export type Balances = {
  __typename?: 'balances';
  /** An object relationship */
  account: Account;
  address: Scalars['String']['output'];
  /** An object relationship */
  block?: Maybe<Block>;
  coins: Array<Scalars['coin']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "balances" */
export type Balances_Aggregate = {
  __typename?: 'balances_aggregate';
  aggregate?: Maybe<Balances_Aggregate_Fields>;
  nodes: Array<Balances>;
};

export type Balances_Aggregate_Bool_Exp = {
  count?: InputMaybe<Balances_Aggregate_Bool_Exp_Count>;
};

export type Balances_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Balances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Balances_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "balances" */
export type Balances_Aggregate_Fields = {
  __typename?: 'balances_aggregate_fields';
  avg?: Maybe<Balances_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Balances_Max_Fields>;
  min?: Maybe<Balances_Min_Fields>;
  stddev?: Maybe<Balances_Stddev_Fields>;
  stddev_pop?: Maybe<Balances_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Balances_Stddev_Samp_Fields>;
  sum?: Maybe<Balances_Sum_Fields>;
  var_pop?: Maybe<Balances_Var_Pop_Fields>;
  var_samp?: Maybe<Balances_Var_Samp_Fields>;
  variance?: Maybe<Balances_Variance_Fields>;
};


/** aggregate fields of "balances" */
export type Balances_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Balances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "balances" */
export type Balances_Aggregate_Order_By = {
  avg?: InputMaybe<Balances_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Balances_Max_Order_By>;
  min?: InputMaybe<Balances_Min_Order_By>;
  stddev?: InputMaybe<Balances_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Balances_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Balances_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Balances_Sum_Order_By>;
  var_pop?: InputMaybe<Balances_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Balances_Var_Samp_Order_By>;
  variance?: InputMaybe<Balances_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "balances" */
export type Balances_Arr_Rel_Insert_Input = {
  data: Array<Balances_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Balances_On_Conflict>;
};

/** aggregate avg on columns */
export type Balances_Avg_Fields = {
  __typename?: 'balances_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "balances" */
export type Balances_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "balances". All fields are combined with a logical 'AND'. */
export type Balances_Bool_Exp = {
  _and?: InputMaybe<Array<Balances_Bool_Exp>>;
  _not?: InputMaybe<Balances_Bool_Exp>;
  _or?: InputMaybe<Array<Balances_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  coins?: InputMaybe<Coin_Array_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "balances" */
export enum Balances_Constraint {
  /** unique or primary key constraint on columns "address", "height" */
  UniqueHeightBalance = 'unique_height_balance'
}

/** input type for incrementing numeric columns in table "balances" */
export type Balances_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "balances" */
export type Balances_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  address?: InputMaybe<Scalars['String']['input']>;
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Balances_Max_Fields = {
  __typename?: 'balances_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  coins?: Maybe<Array<Scalars['coin']['output']>>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "balances" */
export type Balances_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Balances_Min_Fields = {
  __typename?: 'balances_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  coins?: Maybe<Array<Scalars['coin']['output']>>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "balances" */
export type Balances_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "balances" */
export type Balances_Mutation_Response = {
  __typename?: 'balances_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Balances>;
};

/** on_conflict condition type for table "balances" */
export type Balances_On_Conflict = {
  constraint: Balances_Constraint;
  update_columns?: Array<Balances_Update_Column>;
  where?: InputMaybe<Balances_Bool_Exp>;
};

/** Ordering options when selecting data from "balances". */
export type Balances_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  address?: InputMaybe<Order_By>;
  block?: InputMaybe<Block_Order_By>;
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "balances" */
export enum Balances_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** input type for updating data in table "balances" */
export type Balances_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Balances_Stddev_Fields = {
  __typename?: 'balances_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "balances" */
export type Balances_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Balances_Stddev_Pop_Fields = {
  __typename?: 'balances_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "balances" */
export type Balances_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Balances_Stddev_Samp_Fields = {
  __typename?: 'balances_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "balances" */
export type Balances_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "balances" */
export type Balances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Balances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Balances_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Balances_Sum_Fields = {
  __typename?: 'balances_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "balances" */
export type Balances_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** update columns of table "balances" */
export enum Balances_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

export type Balances_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Balances_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Balances_Set_Input>;
  /** filter the rows which have to be updated */
  where: Balances_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Balances_Var_Pop_Fields = {
  __typename?: 'balances_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "balances" */
export type Balances_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Balances_Var_Samp_Fields = {
  __typename?: 'balances_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "balances" */
export type Balances_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Balances_Variance_Fields = {
  __typename?: 'balances_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "balances" */
export type Balances_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block';
  /** An array relationship */
  balances: Array<Balances>;
  /** An aggregate relationship */
  balances_aggregate: Balances_Aggregate;
  /** An array relationship */
  gov_params: Array<Gov_Params>;
  /** An aggregate relationship */
  gov_params_aggregate: Gov_Params_Aggregate;
  hash: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  num_txs?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Result>;
  /** An aggregate relationship */
  proposal_tally_results_aggregate: Proposal_Tally_Result_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  proposer_address?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  staked_balances: Array<Staked_Balances>;
  /** An aggregate relationship */
  staked_balances_aggregate: Staked_Balances_Aggregate;
  /** An array relationship */
  supplies: Array<Supply>;
  /** An aggregate relationship */
  supplies_aggregate: Supply_Aggregate;
  timestamp: Scalars['timestamp']['output'];
  total_gas?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  /** An object relationship */
  validator?: Maybe<Validator>;
  /** An array relationship */
  validator_commissions: Array<Validator_Commission>;
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commission_Aggregate;
  /** An array relationship */
  validator_descriptions: Array<Validator_Description>;
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Description_Aggregate;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Info_Aggregate;
  /** An array relationship */
  validator_statuses: Array<Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "block" */
export type BlockBalancesArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockBalances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_Tally_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockStaked_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockStaked_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockSuppliesArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockSupplies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Commissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Descriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** aggregated selection of "block" */
export type Block_Aggregate = {
  __typename?: 'block_aggregate';
  aggregate?: Maybe<Block_Aggregate_Fields>;
  nodes: Array<Block>;
};

export type Block_Aggregate_Bool_Exp = {
  count?: InputMaybe<Block_Aggregate_Bool_Exp_Count>;
};

export type Block_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Block_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Block_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "block" */
export type Block_Aggregate_Fields = {
  __typename?: 'block_aggregate_fields';
  avg?: Maybe<Block_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Block_Max_Fields>;
  min?: Maybe<Block_Min_Fields>;
  stddev?: Maybe<Block_Stddev_Fields>;
  stddev_pop?: Maybe<Block_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Block_Stddev_Samp_Fields>;
  sum?: Maybe<Block_Sum_Fields>;
  var_pop?: Maybe<Block_Var_Pop_Fields>;
  var_samp?: Maybe<Block_Var_Samp_Fields>;
  variance?: Maybe<Block_Variance_Fields>;
};


/** aggregate fields of "block" */
export type Block_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Block_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "block" */
export type Block_Aggregate_Order_By = {
  avg?: InputMaybe<Block_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Block_Max_Order_By>;
  min?: InputMaybe<Block_Min_Order_By>;
  stddev?: InputMaybe<Block_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Block_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Block_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Block_Sum_Order_By>;
  var_pop?: InputMaybe<Block_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Block_Var_Samp_Order_By>;
  variance?: InputMaybe<Block_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "block" */
export type Block_Arr_Rel_Insert_Input = {
  data: Array<Block_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Block_On_Conflict>;
};

/** aggregate avg on columns */
export type Block_Avg_Fields = {
  __typename?: 'block_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "block" */
export type Block_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: InputMaybe<Array<Block_Bool_Exp>>;
  _not?: InputMaybe<Block_Bool_Exp>;
  _or?: InputMaybe<Array<Block_Bool_Exp>>;
  balances?: InputMaybe<Balances_Bool_Exp>;
  balances_aggregate?: InputMaybe<Balances_Aggregate_Bool_Exp>;
  gov_params?: InputMaybe<Gov_Params_Bool_Exp>;
  gov_params_aggregate?: InputMaybe<Gov_Params_Aggregate_Bool_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  num_txs?: InputMaybe<Int_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Bool_Exp>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  staked_balances?: InputMaybe<Staked_Balances_Bool_Exp>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Bool_Exp>;
  supplies?: InputMaybe<Supply_Bool_Exp>;
  supplies_aggregate?: InputMaybe<Supply_Aggregate_Bool_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  total_gas?: InputMaybe<Bigint_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_commissions?: InputMaybe<Validator_Commission_Bool_Exp>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Bool_Exp>;
  validator_descriptions?: InputMaybe<Validator_Description_Bool_Exp>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Bool_Exp>;
  validator_statuses?: InputMaybe<Validator_Status_Bool_Exp>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "block" */
export enum Block_Constraint {
  /** unique or primary key constraint on columns "hash" */
  BlockHashKey = 'block_hash_key',
  /** unique or primary key constraint on columns "height" */
  BlockPkey = 'block_pkey'
}

/** input type for incrementing numeric columns in table "block" */
export type Block_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  num_txs?: InputMaybe<Scalars['Int']['input']>;
  total_gas?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "block" */
export type Block_Insert_Input = {
  balances?: InputMaybe<Balances_Arr_Rel_Insert_Input>;
  gov_params?: InputMaybe<Gov_Params_Arr_Rel_Insert_Input>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  num_txs?: InputMaybe<Scalars['Int']['input']>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Arr_Rel_Insert_Input>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Arr_Rel_Insert_Input>;
  proposal_votes?: InputMaybe<Proposal_Vote_Arr_Rel_Insert_Input>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  staked_balances?: InputMaybe<Staked_Balances_Arr_Rel_Insert_Input>;
  supplies?: InputMaybe<Supply_Arr_Rel_Insert_Input>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_gas?: InputMaybe<Scalars['bigint']['input']>;
  transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_commissions?: InputMaybe<Validator_Commission_Arr_Rel_Insert_Input>;
  validator_descriptions?: InputMaybe<Validator_Description_Arr_Rel_Insert_Input>;
  validator_infos?: InputMaybe<Validator_Info_Arr_Rel_Insert_Input>;
  validator_statuses?: InputMaybe<Validator_Status_Arr_Rel_Insert_Input>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Block_Max_Fields = {
  __typename?: 'block_max_fields';
  hash?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  num_txs?: Maybe<Scalars['Int']['output']>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_gas?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "block" */
export type Block_Max_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Block_Min_Fields = {
  __typename?: 'block_min_fields';
  hash?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  num_txs?: Maybe<Scalars['Int']['output']>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  total_gas?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "block" */
export type Block_Min_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "block" */
export type Block_Mutation_Response = {
  __typename?: 'block_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Block>;
};

/** input type for inserting object relation for remote table "block" */
export type Block_Obj_Rel_Insert_Input = {
  data: Block_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Block_On_Conflict>;
};

/** on_conflict condition type for table "block" */
export type Block_On_Conflict = {
  constraint: Block_Constraint;
  update_columns?: Array<Block_Update_Column>;
  where?: InputMaybe<Block_Bool_Exp>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  balances_aggregate?: InputMaybe<Balances_Aggregate_Order_By>;
  gov_params_aggregate?: InputMaybe<Gov_Params_Aggregate_Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Order_By>;
  supplies_aggregate?: InputMaybe<Supply_Aggregate_Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Order_By>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** primary key columns input for table: block */
export type Block_Pk_Columns_Input = {
  height: Scalars['bigint']['input'];
};

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

/** input type for updating data in table "block" */
export type Block_Set_Input = {
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  num_txs?: InputMaybe<Scalars['Int']['input']>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_gas?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Block_Stddev_Fields = {
  __typename?: 'block_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "block" */
export type Block_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Block_Stddev_Pop_Fields = {
  __typename?: 'block_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "block" */
export type Block_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Block_Stddev_Samp_Fields = {
  __typename?: 'block_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "block" */
export type Block_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "block" */
export type Block_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Block_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Block_Stream_Cursor_Value_Input = {
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  num_txs?: InputMaybe<Scalars['Int']['input']>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  total_gas?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Block_Sum_Fields = {
  __typename?: 'block_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  num_txs?: Maybe<Scalars['Int']['output']>;
  total_gas?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "block" */
export type Block_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** update columns of table "block" */
export enum Block_Update_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

export type Block_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Block_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Block_Set_Input>;
  /** filter the rows which have to be updated */
  where: Block_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Block_Var_Pop_Fields = {
  __typename?: 'block_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "block" */
export type Block_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Block_Var_Samp_Fields = {
  __typename?: 'block_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "block" */
export type Block_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Block_Variance_Fields = {
  __typename?: 'block_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  num_txs?: Maybe<Scalars['Float']['output']>;
  total_gas?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "block" */
export type Block_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "coin". All fields are combined with logical 'AND'. */
export type Coin_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['coin']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['coin']['input']>>;
  _eq?: InputMaybe<Array<Scalars['coin']['input']>>;
  _gt?: InputMaybe<Array<Scalars['coin']['input']>>;
  _gte?: InputMaybe<Array<Scalars['coin']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['coin']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['coin']['input']>>;
  _lte?: InputMaybe<Array<Scalars['coin']['input']>>;
  _neq?: InputMaybe<Array<Scalars['coin']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['coin']['input']>>>;
};

/** Boolean expression to compare columns of type "coin_scalar". All fields are combined with logical 'AND'. */
export type Coin_Scalar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['coin_scalar']['input']>;
  _gt?: InputMaybe<Scalars['coin_scalar']['input']>;
  _gte?: InputMaybe<Scalars['coin_scalar']['input']>;
  _in?: InputMaybe<Array<Scalars['coin_scalar']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['coin_scalar']['input']>;
  _lte?: InputMaybe<Scalars['coin_scalar']['input']>;
  _neq?: InputMaybe<Scalars['coin_scalar']['input']>;
  _nin?: InputMaybe<Array<Scalars['coin_scalar']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "gov_params" */
export type Gov_Params = {
  __typename?: 'gov_params';
  /** An object relationship */
  block?: Maybe<Block>;
  deposit_params: Scalars['jsonb']['output'];
  height?: Maybe<Scalars['bigint']['output']>;
  tally_params: Scalars['jsonb']['output'];
  voting_params: Scalars['jsonb']['output'];
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsDeposit_ParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsTally_ParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsVoting_ParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "gov_params" */
export type Gov_Params_Aggregate = {
  __typename?: 'gov_params_aggregate';
  aggregate?: Maybe<Gov_Params_Aggregate_Fields>;
  nodes: Array<Gov_Params>;
};

export type Gov_Params_Aggregate_Bool_Exp = {
  count?: InputMaybe<Gov_Params_Aggregate_Bool_Exp_Count>;
};

export type Gov_Params_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Gov_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Gov_Params_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_Fields = {
  __typename?: 'gov_params_aggregate_fields';
  avg?: Maybe<Gov_Params_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Gov_Params_Max_Fields>;
  min?: Maybe<Gov_Params_Min_Fields>;
  stddev?: Maybe<Gov_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Gov_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gov_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Gov_Params_Sum_Fields>;
  var_pop?: Maybe<Gov_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Gov_Params_Var_Samp_Fields>;
  variance?: Maybe<Gov_Params_Variance_Fields>;
};


/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gov_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "gov_params" */
export type Gov_Params_Aggregate_Order_By = {
  avg?: InputMaybe<Gov_Params_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gov_Params_Max_Order_By>;
  min?: InputMaybe<Gov_Params_Min_Order_By>;
  stddev?: InputMaybe<Gov_Params_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Gov_Params_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Gov_Params_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Gov_Params_Sum_Order_By>;
  var_pop?: InputMaybe<Gov_Params_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Gov_Params_Var_Samp_Order_By>;
  variance?: InputMaybe<Gov_Params_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Gov_Params_Append_Input = {
  deposit_params?: InputMaybe<Scalars['jsonb']['input']>;
  tally_params?: InputMaybe<Scalars['jsonb']['input']>;
  voting_params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "gov_params" */
export type Gov_Params_Arr_Rel_Insert_Input = {
  data: Array<Gov_Params_Insert_Input>;
};

/** aggregate avg on columns */
export type Gov_Params_Avg_Fields = {
  __typename?: 'gov_params_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "gov_params" */
export type Gov_Params_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gov_params". All fields are combined with a logical 'AND'. */
export type Gov_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  _not?: InputMaybe<Gov_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  deposit_params?: InputMaybe<Jsonb_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  tally_params?: InputMaybe<Jsonb_Comparison_Exp>;
  voting_params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Gov_Params_Delete_At_Path_Input = {
  deposit_params?: InputMaybe<Array<Scalars['String']['input']>>;
  tally_params?: InputMaybe<Array<Scalars['String']['input']>>;
  voting_params?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Gov_Params_Delete_Elem_Input = {
  deposit_params?: InputMaybe<Scalars['Int']['input']>;
  tally_params?: InputMaybe<Scalars['Int']['input']>;
  voting_params?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Gov_Params_Delete_Key_Input = {
  deposit_params?: InputMaybe<Scalars['String']['input']>;
  tally_params?: InputMaybe<Scalars['String']['input']>;
  voting_params?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "gov_params" */
export type Gov_Params_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "gov_params" */
export type Gov_Params_Insert_Input = {
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  deposit_params?: InputMaybe<Scalars['jsonb']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  tally_params?: InputMaybe<Scalars['jsonb']['input']>;
  voting_params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Gov_Params_Max_Fields = {
  __typename?: 'gov_params_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "gov_params" */
export type Gov_Params_Max_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gov_Params_Min_Fields = {
  __typename?: 'gov_params_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "gov_params" */
export type Gov_Params_Min_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gov_params" */
export type Gov_Params_Mutation_Response = {
  __typename?: 'gov_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Gov_Params>;
};

/** Ordering options when selecting data from "gov_params". */
export type Gov_Params_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  deposit_params?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  tally_params?: InputMaybe<Order_By>;
  voting_params?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Gov_Params_Prepend_Input = {
  deposit_params?: InputMaybe<Scalars['jsonb']['input']>;
  tally_params?: InputMaybe<Scalars['jsonb']['input']>;
  voting_params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "gov_params" */
export enum Gov_Params_Select_Column {
  /** column name */
  DepositParams = 'deposit_params',
  /** column name */
  Height = 'height',
  /** column name */
  TallyParams = 'tally_params',
  /** column name */
  VotingParams = 'voting_params'
}

/** input type for updating data in table "gov_params" */
export type Gov_Params_Set_Input = {
  deposit_params?: InputMaybe<Scalars['jsonb']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  tally_params?: InputMaybe<Scalars['jsonb']['input']>;
  voting_params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate stddev on columns */
export type Gov_Params_Stddev_Fields = {
  __typename?: 'gov_params_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "gov_params" */
export type Gov_Params_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gov_Params_Stddev_Pop_Fields = {
  __typename?: 'gov_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "gov_params" */
export type Gov_Params_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gov_Params_Stddev_Samp_Fields = {
  __typename?: 'gov_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "gov_params" */
export type Gov_Params_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "gov_params" */
export type Gov_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gov_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gov_Params_Stream_Cursor_Value_Input = {
  deposit_params?: InputMaybe<Scalars['jsonb']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  tally_params?: InputMaybe<Scalars['jsonb']['input']>;
  voting_params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate sum on columns */
export type Gov_Params_Sum_Fields = {
  __typename?: 'gov_params_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "gov_params" */
export type Gov_Params_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

export type Gov_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Gov_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Gov_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Gov_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Gov_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Gov_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Gov_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gov_Params_Set_Input>;
  /** filter the rows which have to be updated */
  where: Gov_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Gov_Params_Var_Pop_Fields = {
  __typename?: 'gov_params_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "gov_params" */
export type Gov_Params_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gov_Params_Var_Samp_Fields = {
  __typename?: 'gov_params_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "gov_params" */
export type Gov_Params_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Gov_Params_Variance_Fields = {
  __typename?: 'gov_params_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "gov_params" */
export type Gov_Params_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "average_block_time_per_day" */
  delete_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_day" */
  delete_average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** delete data from the table: "average_block_time_per_hour" */
  delete_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_hour" */
  delete_average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** delete data from the table: "average_block_time_per_minute" */
  delete_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_minute" */
  delete_average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** delete data from the table: "balances" */
  delete_balances?: Maybe<Balances_Mutation_Response>;
  /** delete data from the table: "block" */
  delete_block?: Maybe<Block_Mutation_Response>;
  /** delete single row from the table: "block" */
  delete_block_by_pk?: Maybe<Block>;
  /** delete data from the table: "gov_params" */
  delete_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** delete data from the table: "proposal" */
  delete_proposal?: Maybe<Proposal_Mutation_Response>;
  /** delete single row from the table: "proposal" */
  delete_proposal_by_pk?: Maybe<Proposal>;
  /** delete data from the table: "proposal_deposit" */
  delete_proposal_deposit?: Maybe<Proposal_Deposit_Mutation_Response>;
  /** delete data from the table: "proposal_staking_pool_snapshot" */
  delete_proposal_staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>;
  /** delete data from the table: "proposal_tally_result" */
  delete_proposal_tally_result?: Maybe<Proposal_Tally_Result_Mutation_Response>;
  /** delete data from the table: "proposal_validator_status_snapshot" */
  delete_proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>;
  /** delete single row from the table: "proposal_validator_status_snapshot" */
  delete_proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** delete data from the table: "proposal_vote" */
  delete_proposal_vote?: Maybe<Proposal_Vote_Mutation_Response>;
  /** delete data from the table: "staked_balances" */
  delete_staked_balances?: Maybe<Staked_Balances_Mutation_Response>;
  /** delete data from the table: "staking_params" */
  delete_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** delete data from the table: "staking_pool" */
  delete_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** delete data from the table: "supply" */
  delete_supply?: Maybe<Supply_Mutation_Response>;
  /** delete data from the table: "transaction" */
  delete_transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete data from the table: "validator" */
  delete_validator?: Maybe<Validator_Mutation_Response>;
  /** delete single row from the table: "validator" */
  delete_validator_by_pk?: Maybe<Validator>;
  /** delete data from the table: "validator_commission" */
  delete_validator_commission?: Maybe<Validator_Commission_Mutation_Response>;
  /** delete data from the table: "validator_description" */
  delete_validator_description?: Maybe<Validator_Description_Mutation_Response>;
  /** delete data from the table: "validator_info" */
  delete_validator_info?: Maybe<Validator_Info_Mutation_Response>;
  /** delete data from the table: "validator_status" */
  delete_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** delete data from the table: "validator_voting_power" */
  delete_validator_voting_power?: Maybe<Validator_Voting_Power_Mutation_Response>;
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>;
  /** insert data into the table: "average_block_time_per_day" */
  insert_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_day" */
  insert_average_block_time_per_day_one?: Maybe<Average_Block_Time_Per_Day>;
  /** insert data into the table: "average_block_time_per_hour" */
  insert_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_hour" */
  insert_average_block_time_per_hour_one?: Maybe<Average_Block_Time_Per_Hour>;
  /** insert data into the table: "average_block_time_per_minute" */
  insert_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_minute" */
  insert_average_block_time_per_minute_one?: Maybe<Average_Block_Time_Per_Minute>;
  /** insert data into the table: "balances" */
  insert_balances?: Maybe<Balances_Mutation_Response>;
  /** insert a single row into the table: "balances" */
  insert_balances_one?: Maybe<Balances>;
  /** insert data into the table: "block" */
  insert_block?: Maybe<Block_Mutation_Response>;
  /** insert a single row into the table: "block" */
  insert_block_one?: Maybe<Block>;
  /** insert data into the table: "gov_params" */
  insert_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** insert a single row into the table: "gov_params" */
  insert_gov_params_one?: Maybe<Gov_Params>;
  /** insert data into the table: "proposal" */
  insert_proposal?: Maybe<Proposal_Mutation_Response>;
  /** insert data into the table: "proposal_deposit" */
  insert_proposal_deposit?: Maybe<Proposal_Deposit_Mutation_Response>;
  /** insert a single row into the table: "proposal_deposit" */
  insert_proposal_deposit_one?: Maybe<Proposal_Deposit>;
  /** insert a single row into the table: "proposal" */
  insert_proposal_one?: Maybe<Proposal>;
  /** insert data into the table: "proposal_staking_pool_snapshot" */
  insert_proposal_staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>;
  /** insert a single row into the table: "proposal_staking_pool_snapshot" */
  insert_proposal_staking_pool_snapshot_one?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** insert data into the table: "proposal_tally_result" */
  insert_proposal_tally_result?: Maybe<Proposal_Tally_Result_Mutation_Response>;
  /** insert a single row into the table: "proposal_tally_result" */
  insert_proposal_tally_result_one?: Maybe<Proposal_Tally_Result>;
  /** insert data into the table: "proposal_validator_status_snapshot" */
  insert_proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>;
  /** insert a single row into the table: "proposal_validator_status_snapshot" */
  insert_proposal_validator_status_snapshot_one?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** insert data into the table: "proposal_vote" */
  insert_proposal_vote?: Maybe<Proposal_Vote_Mutation_Response>;
  /** insert a single row into the table: "proposal_vote" */
  insert_proposal_vote_one?: Maybe<Proposal_Vote>;
  /** insert data into the table: "staked_balances" */
  insert_staked_balances?: Maybe<Staked_Balances_Mutation_Response>;
  /** insert a single row into the table: "staked_balances" */
  insert_staked_balances_one?: Maybe<Staked_Balances>;
  /** insert data into the table: "staking_params" */
  insert_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** insert a single row into the table: "staking_params" */
  insert_staking_params_one?: Maybe<Staking_Params>;
  /** insert data into the table: "staking_pool" */
  insert_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** insert a single row into the table: "staking_pool" */
  insert_staking_pool_one?: Maybe<Staking_Pool>;
  /** insert data into the table: "supply" */
  insert_supply?: Maybe<Supply_Mutation_Response>;
  /** insert a single row into the table: "supply" */
  insert_supply_one?: Maybe<Supply>;
  /** insert data into the table: "transaction" */
  insert_transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert a single row into the table: "transaction" */
  insert_transaction_one?: Maybe<Transaction>;
  /** insert data into the table: "validator" */
  insert_validator?: Maybe<Validator_Mutation_Response>;
  /** insert data into the table: "validator_commission" */
  insert_validator_commission?: Maybe<Validator_Commission_Mutation_Response>;
  /** insert a single row into the table: "validator_commission" */
  insert_validator_commission_one?: Maybe<Validator_Commission>;
  /** insert data into the table: "validator_description" */
  insert_validator_description?: Maybe<Validator_Description_Mutation_Response>;
  /** insert a single row into the table: "validator_description" */
  insert_validator_description_one?: Maybe<Validator_Description>;
  /** insert data into the table: "validator_info" */
  insert_validator_info?: Maybe<Validator_Info_Mutation_Response>;
  /** insert a single row into the table: "validator_info" */
  insert_validator_info_one?: Maybe<Validator_Info>;
  /** insert a single row into the table: "validator" */
  insert_validator_one?: Maybe<Validator>;
  /** insert data into the table: "validator_status" */
  insert_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** insert a single row into the table: "validator_status" */
  insert_validator_status_one?: Maybe<Validator_Status>;
  /** insert data into the table: "validator_voting_power" */
  insert_validator_voting_power?: Maybe<Validator_Voting_Power_Mutation_Response>;
  /** insert a single row into the table: "validator_voting_power" */
  insert_validator_voting_power_one?: Maybe<Validator_Voting_Power>;
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>;
  /** update multiples rows of table: "account" */
  update_account_many?: Maybe<Array<Maybe<Account_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_day" */
  update_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_day" */
  update_average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** update multiples rows of table: "average_block_time_per_day" */
  update_average_block_time_per_day_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Day_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_hour" */
  update_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_hour" */
  update_average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** update multiples rows of table: "average_block_time_per_hour" */
  update_average_block_time_per_hour_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Hour_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_minute" */
  update_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_minute" */
  update_average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** update multiples rows of table: "average_block_time_per_minute" */
  update_average_block_time_per_minute_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Minute_Mutation_Response>>>;
  /** update data of the table: "balances" */
  update_balances?: Maybe<Balances_Mutation_Response>;
  /** update multiples rows of table: "balances" */
  update_balances_many?: Maybe<Array<Maybe<Balances_Mutation_Response>>>;
  /** update data of the table: "block" */
  update_block?: Maybe<Block_Mutation_Response>;
  /** update single row of the table: "block" */
  update_block_by_pk?: Maybe<Block>;
  /** update multiples rows of table: "block" */
  update_block_many?: Maybe<Array<Maybe<Block_Mutation_Response>>>;
  /** update data of the table: "gov_params" */
  update_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** update multiples rows of table: "gov_params" */
  update_gov_params_many?: Maybe<Array<Maybe<Gov_Params_Mutation_Response>>>;
  /** update data of the table: "proposal" */
  update_proposal?: Maybe<Proposal_Mutation_Response>;
  /** update single row of the table: "proposal" */
  update_proposal_by_pk?: Maybe<Proposal>;
  /** update data of the table: "proposal_deposit" */
  update_proposal_deposit?: Maybe<Proposal_Deposit_Mutation_Response>;
  /** update multiples rows of table: "proposal_deposit" */
  update_proposal_deposit_many?: Maybe<Array<Maybe<Proposal_Deposit_Mutation_Response>>>;
  /** update multiples rows of table: "proposal" */
  update_proposal_many?: Maybe<Array<Maybe<Proposal_Mutation_Response>>>;
  /** update data of the table: "proposal_staking_pool_snapshot" */
  update_proposal_staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>;
  /** update multiples rows of table: "proposal_staking_pool_snapshot" */
  update_proposal_staking_pool_snapshot_many?: Maybe<Array<Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>>>;
  /** update data of the table: "proposal_tally_result" */
  update_proposal_tally_result?: Maybe<Proposal_Tally_Result_Mutation_Response>;
  /** update multiples rows of table: "proposal_tally_result" */
  update_proposal_tally_result_many?: Maybe<Array<Maybe<Proposal_Tally_Result_Mutation_Response>>>;
  /** update data of the table: "proposal_validator_status_snapshot" */
  update_proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>;
  /** update single row of the table: "proposal_validator_status_snapshot" */
  update_proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** update multiples rows of table: "proposal_validator_status_snapshot" */
  update_proposal_validator_status_snapshot_many?: Maybe<Array<Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>>>;
  /** update data of the table: "proposal_vote" */
  update_proposal_vote?: Maybe<Proposal_Vote_Mutation_Response>;
  /** update multiples rows of table: "proposal_vote" */
  update_proposal_vote_many?: Maybe<Array<Maybe<Proposal_Vote_Mutation_Response>>>;
  /** update data of the table: "staked_balances" */
  update_staked_balances?: Maybe<Staked_Balances_Mutation_Response>;
  /** update multiples rows of table: "staked_balances" */
  update_staked_balances_many?: Maybe<Array<Maybe<Staked_Balances_Mutation_Response>>>;
  /** update data of the table: "staking_params" */
  update_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** update multiples rows of table: "staking_params" */
  update_staking_params_many?: Maybe<Array<Maybe<Staking_Params_Mutation_Response>>>;
  /** update data of the table: "staking_pool" */
  update_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** update multiples rows of table: "staking_pool" */
  update_staking_pool_many?: Maybe<Array<Maybe<Staking_Pool_Mutation_Response>>>;
  /** update data of the table: "supply" */
  update_supply?: Maybe<Supply_Mutation_Response>;
  /** update multiples rows of table: "supply" */
  update_supply_many?: Maybe<Array<Maybe<Supply_Mutation_Response>>>;
  /** update data of the table: "transaction" */
  update_transaction?: Maybe<Transaction_Mutation_Response>;
  /** update multiples rows of table: "transaction" */
  update_transaction_many?: Maybe<Array<Maybe<Transaction_Mutation_Response>>>;
  /** update data of the table: "validator" */
  update_validator?: Maybe<Validator_Mutation_Response>;
  /** update single row of the table: "validator" */
  update_validator_by_pk?: Maybe<Validator>;
  /** update data of the table: "validator_commission" */
  update_validator_commission?: Maybe<Validator_Commission_Mutation_Response>;
  /** update multiples rows of table: "validator_commission" */
  update_validator_commission_many?: Maybe<Array<Maybe<Validator_Commission_Mutation_Response>>>;
  /** update data of the table: "validator_description" */
  update_validator_description?: Maybe<Validator_Description_Mutation_Response>;
  /** update multiples rows of table: "validator_description" */
  update_validator_description_many?: Maybe<Array<Maybe<Validator_Description_Mutation_Response>>>;
  /** update data of the table: "validator_info" */
  update_validator_info?: Maybe<Validator_Info_Mutation_Response>;
  /** update multiples rows of table: "validator_info" */
  update_validator_info_many?: Maybe<Array<Maybe<Validator_Info_Mutation_Response>>>;
  /** update multiples rows of table: "validator" */
  update_validator_many?: Maybe<Array<Maybe<Validator_Mutation_Response>>>;
  /** update data of the table: "validator_status" */
  update_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** update multiples rows of table: "validator_status" */
  update_validator_status_many?: Maybe<Array<Maybe<Validator_Status_Mutation_Response>>>;
  /** update data of the table: "validator_voting_power" */
  update_validator_voting_power?: Maybe<Validator_Voting_Power_Mutation_Response>;
  /** update multiples rows of table: "validator_voting_power" */
  update_validator_voting_power_many?: Maybe<Array<Maybe<Validator_Voting_Power_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  address: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_DayArgs = {
  where: Average_Block_Time_Per_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_HourArgs = {
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_MinuteArgs = {
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


/** mutation root */
export type Mutation_RootDelete_BalancesArgs = {
  where: Balances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BlockArgs = {
  where: Block_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Block_By_PkArgs = {
  height: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Gov_ParamsArgs = {
  where: Gov_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ProposalArgs = {
  where: Proposal_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_DepositArgs = {
  where: Proposal_Deposit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Staking_Pool_SnapshotArgs = {
  where: Proposal_Staking_Pool_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Tally_ResultArgs = {
  where: Proposal_Tally_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Validator_Status_SnapshotArgs = {
  where: Proposal_Validator_Status_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_VoteArgs = {
  where: Proposal_Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staked_BalancesArgs = {
  where: Staked_Balances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staking_ParamsArgs = {
  where: Staking_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staking_PoolArgs = {
  where: Staking_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SupplyArgs = {
  where: Supply_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ValidatorArgs = {
  where: Validator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_By_PkArgs = {
  consensus_address: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_CommissionArgs = {
  where: Validator_Commission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_DescriptionArgs = {
  where: Validator_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_InfoArgs = {
  where: Validator_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_StatusArgs = {
  where: Validator_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Voting_PowerArgs = {
  where: Validator_Voting_Power_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_DayArgs = {
  objects: Array<Average_Block_Time_Per_Day_Insert_Input>;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Day_OneArgs = {
  object: Average_Block_Time_Per_Day_Insert_Input;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_HourArgs = {
  objects: Array<Average_Block_Time_Per_Hour_Insert_Input>;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Hour_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Hour_OneArgs = {
  object: Average_Block_Time_Per_Hour_Insert_Input;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Hour_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_MinuteArgs = {
  objects: Array<Average_Block_Time_Per_Minute_Insert_Input>;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Minute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Minute_OneArgs = {
  object: Average_Block_Time_Per_Minute_Insert_Input;
  on_conflict?: InputMaybe<Average_Block_Time_Per_Minute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BalancesArgs = {
  objects: Array<Balances_Insert_Input>;
  on_conflict?: InputMaybe<Balances_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Balances_OneArgs = {
  object: Balances_Insert_Input;
  on_conflict?: InputMaybe<Balances_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlockArgs = {
  objects: Array<Block_Insert_Input>;
  on_conflict?: InputMaybe<Block_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Block_OneArgs = {
  object: Block_Insert_Input;
  on_conflict?: InputMaybe<Block_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gov_ParamsArgs = {
  objects: Array<Gov_Params_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Gov_Params_OneArgs = {
  object: Gov_Params_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_ProposalArgs = {
  objects: Array<Proposal_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_DepositArgs = {
  objects: Array<Proposal_Deposit_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Deposit_OneArgs = {
  object: Proposal_Deposit_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_OneArgs = {
  object: Proposal_Insert_Input;
  on_conflict?: InputMaybe<Proposal_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Staking_Pool_SnapshotArgs = {
  objects: Array<Proposal_Staking_Pool_Snapshot_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Staking_Pool_Snapshot_OneArgs = {
  object: Proposal_Staking_Pool_Snapshot_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Tally_ResultArgs = {
  objects: Array<Proposal_Tally_Result_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_Tally_Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Tally_Result_OneArgs = {
  object: Proposal_Tally_Result_Insert_Input;
  on_conflict?: InputMaybe<Proposal_Tally_Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Validator_Status_SnapshotArgs = {
  objects: Array<Proposal_Validator_Status_Snapshot_Insert_Input>;
  on_conflict?: InputMaybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Validator_Status_Snapshot_OneArgs = {
  object: Proposal_Validator_Status_Snapshot_Insert_Input;
  on_conflict?: InputMaybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_VoteArgs = {
  objects: Array<Proposal_Vote_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Vote_OneArgs = {
  object: Proposal_Vote_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Staked_BalancesArgs = {
  objects: Array<Staked_Balances_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Staked_Balances_OneArgs = {
  object: Staked_Balances_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Staking_ParamsArgs = {
  objects: Array<Staking_Params_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_Params_OneArgs = {
  object: Staking_Params_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Staking_PoolArgs = {
  objects: Array<Staking_Pool_Insert_Input>;
  on_conflict?: InputMaybe<Staking_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_Pool_OneArgs = {
  object: Staking_Pool_Insert_Input;
  on_conflict?: InputMaybe<Staking_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SupplyArgs = {
  objects: Array<Supply_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Supply_OneArgs = {
  object: Supply_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ValidatorArgs = {
  objects: Array<Validator_Insert_Input>;
  on_conflict?: InputMaybe<Validator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_CommissionArgs = {
  objects: Array<Validator_Commission_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Commission_OneArgs = {
  object: Validator_Commission_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Validator_DescriptionArgs = {
  objects: Array<Validator_Description_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Description_OneArgs = {
  object: Validator_Description_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Validator_InfoArgs = {
  objects: Array<Validator_Info_Insert_Input>;
  on_conflict?: InputMaybe<Validator_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Info_OneArgs = {
  object: Validator_Info_Insert_Input;
  on_conflict?: InputMaybe<Validator_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_OneArgs = {
  object: Validator_Insert_Input;
  on_conflict?: InputMaybe<Validator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_StatusArgs = {
  objects: Array<Validator_Status_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Status_OneArgs = {
  object: Validator_Status_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Voting_PowerArgs = {
  objects: Array<Validator_Voting_Power_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Voting_Power_OneArgs = {
  object: Validator_Voting_Power_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _set?: InputMaybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _set?: InputMaybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Account_ManyArgs = {
  updates: Array<Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_DayArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Day_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Day_Set_Input>;
  where: Average_Block_Time_Per_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Day_By_PkArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Day_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Day_Set_Input>;
  pk_columns: Average_Block_Time_Per_Day_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Day_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Day_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_HourArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Hour_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Hour_Set_Input>;
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Hour_By_PkArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Hour_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Hour_Set_Input>;
  pk_columns: Average_Block_Time_Per_Hour_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Hour_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Hour_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_MinuteArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Minute_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Minute_Set_Input>;
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Minute_By_PkArgs = {
  _inc?: InputMaybe<Average_Block_Time_Per_Minute_Inc_Input>;
  _set?: InputMaybe<Average_Block_Time_Per_Minute_Set_Input>;
  pk_columns: Average_Block_Time_Per_Minute_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Minute_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Minute_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BalancesArgs = {
  _inc?: InputMaybe<Balances_Inc_Input>;
  _set?: InputMaybe<Balances_Set_Input>;
  where: Balances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Balances_ManyArgs = {
  updates: Array<Balances_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BlockArgs = {
  _inc?: InputMaybe<Block_Inc_Input>;
  _set?: InputMaybe<Block_Set_Input>;
  where: Block_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Block_By_PkArgs = {
  _inc?: InputMaybe<Block_Inc_Input>;
  _set?: InputMaybe<Block_Set_Input>;
  pk_columns: Block_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Block_ManyArgs = {
  updates: Array<Block_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Gov_ParamsArgs = {
  _append?: InputMaybe<Gov_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Gov_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Gov_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Gov_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Gov_Params_Inc_Input>;
  _prepend?: InputMaybe<Gov_Params_Prepend_Input>;
  _set?: InputMaybe<Gov_Params_Set_Input>;
  where: Gov_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gov_Params_ManyArgs = {
  updates: Array<Gov_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProposalArgs = {
  _append?: InputMaybe<Proposal_Append_Input>;
  _delete_at_path?: InputMaybe<Proposal_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Proposal_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Proposal_Delete_Key_Input>;
  _inc?: InputMaybe<Proposal_Inc_Input>;
  _prepend?: InputMaybe<Proposal_Prepend_Input>;
  _set?: InputMaybe<Proposal_Set_Input>;
  where: Proposal_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_By_PkArgs = {
  _append?: InputMaybe<Proposal_Append_Input>;
  _delete_at_path?: InputMaybe<Proposal_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Proposal_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Proposal_Delete_Key_Input>;
  _inc?: InputMaybe<Proposal_Inc_Input>;
  _prepend?: InputMaybe<Proposal_Prepend_Input>;
  _set?: InputMaybe<Proposal_Set_Input>;
  pk_columns: Proposal_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_DepositArgs = {
  _inc?: InputMaybe<Proposal_Deposit_Inc_Input>;
  _set?: InputMaybe<Proposal_Deposit_Set_Input>;
  where: Proposal_Deposit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Deposit_ManyArgs = {
  updates: Array<Proposal_Deposit_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_ManyArgs = {
  updates: Array<Proposal_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Staking_Pool_SnapshotArgs = {
  _inc?: InputMaybe<Proposal_Staking_Pool_Snapshot_Inc_Input>;
  _set?: InputMaybe<Proposal_Staking_Pool_Snapshot_Set_Input>;
  where: Proposal_Staking_Pool_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Staking_Pool_Snapshot_ManyArgs = {
  updates: Array<Proposal_Staking_Pool_Snapshot_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Tally_ResultArgs = {
  _inc?: InputMaybe<Proposal_Tally_Result_Inc_Input>;
  _set?: InputMaybe<Proposal_Tally_Result_Set_Input>;
  where: Proposal_Tally_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Tally_Result_ManyArgs = {
  updates: Array<Proposal_Tally_Result_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_SnapshotArgs = {
  _inc?: InputMaybe<Proposal_Validator_Status_Snapshot_Inc_Input>;
  _set?: InputMaybe<Proposal_Validator_Status_Snapshot_Set_Input>;
  where: Proposal_Validator_Status_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_Snapshot_By_PkArgs = {
  _inc?: InputMaybe<Proposal_Validator_Status_Snapshot_Inc_Input>;
  _set?: InputMaybe<Proposal_Validator_Status_Snapshot_Set_Input>;
  pk_columns: Proposal_Validator_Status_Snapshot_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_Snapshot_ManyArgs = {
  updates: Array<Proposal_Validator_Status_Snapshot_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_VoteArgs = {
  _inc?: InputMaybe<Proposal_Vote_Inc_Input>;
  _set?: InputMaybe<Proposal_Vote_Set_Input>;
  where: Proposal_Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Vote_ManyArgs = {
  updates: Array<Proposal_Vote_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staked_BalancesArgs = {
  _inc?: InputMaybe<Staked_Balances_Inc_Input>;
  _set?: InputMaybe<Staked_Balances_Set_Input>;
  where: Staked_Balances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staked_Balances_ManyArgs = {
  updates: Array<Staked_Balances_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_ParamsArgs = {
  _append?: InputMaybe<Staking_Params_Append_Input>;
  _delete_at_path?: InputMaybe<Staking_Params_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Staking_Params_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Staking_Params_Delete_Key_Input>;
  _inc?: InputMaybe<Staking_Params_Inc_Input>;
  _prepend?: InputMaybe<Staking_Params_Prepend_Input>;
  _set?: InputMaybe<Staking_Params_Set_Input>;
  where: Staking_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Params_ManyArgs = {
  updates: Array<Staking_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_PoolArgs = {
  _inc?: InputMaybe<Staking_Pool_Inc_Input>;
  _set?: InputMaybe<Staking_Pool_Set_Input>;
  where: Staking_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Pool_ManyArgs = {
  updates: Array<Staking_Pool_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SupplyArgs = {
  _inc?: InputMaybe<Supply_Inc_Input>;
  _set?: InputMaybe<Supply_Set_Input>;
  where: Supply_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Supply_ManyArgs = {
  updates: Array<Supply_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _append?: InputMaybe<Transaction_Append_Input>;
  _delete_at_path?: InputMaybe<Transaction_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Transaction_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Transaction_Delete_Key_Input>;
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _prepend?: InputMaybe<Transaction_Prepend_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_ManyArgs = {
  updates: Array<Transaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ValidatorArgs = {
  _set?: InputMaybe<Validator_Set_Input>;
  where: Validator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_By_PkArgs = {
  _set?: InputMaybe<Validator_Set_Input>;
  pk_columns: Validator_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_CommissionArgs = {
  _inc?: InputMaybe<Validator_Commission_Inc_Input>;
  _set?: InputMaybe<Validator_Commission_Set_Input>;
  where: Validator_Commission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Commission_ManyArgs = {
  updates: Array<Validator_Commission_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_DescriptionArgs = {
  _inc?: InputMaybe<Validator_Description_Inc_Input>;
  _set?: InputMaybe<Validator_Description_Set_Input>;
  where: Validator_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Description_ManyArgs = {
  updates: Array<Validator_Description_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_InfoArgs = {
  _inc?: InputMaybe<Validator_Info_Inc_Input>;
  _set?: InputMaybe<Validator_Info_Set_Input>;
  where: Validator_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Info_ManyArgs = {
  updates: Array<Validator_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_ManyArgs = {
  updates: Array<Validator_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_StatusArgs = {
  _inc?: InputMaybe<Validator_Status_Inc_Input>;
  _set?: InputMaybe<Validator_Status_Set_Input>;
  where: Validator_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Status_ManyArgs = {
  updates: Array<Validator_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Voting_PowerArgs = {
  _inc?: InputMaybe<Validator_Voting_Power_Inc_Input>;
  _set?: InputMaybe<Validator_Voting_Power_Set_Input>;
  where: Validator_Voting_Power_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Voting_Power_ManyArgs = {
  updates: Array<Validator_Voting_Power_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "proposal" */
export type Proposal = {
  __typename?: 'proposal';
  /** An object relationship */
  account: Account;
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  content: Scalars['jsonb']['output'];
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>;
  description: Scalars['String']['output'];
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  proposal_route: Scalars['String']['output'];
  /** An array relationship */
  proposal_staking_pool_snapshots: Array<Proposal_Staking_Pool_Snapshot>;
  /** An aggregate relationship */
  proposal_staking_pool_snapshots_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Result>;
  /** An aggregate relationship */
  proposal_tally_results_aggregate: Proposal_Tally_Result_Aggregate;
  proposal_type: Scalars['String']['output'];
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  /** An aggregate relationship */
  proposal_validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  proposer_address: Scalars['String']['output'];
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submit_time: Scalars['timestamp']['output'];
  title: Scalars['String']['output'];
  voting_end_time?: Maybe<Scalars['timestamp']['output']>;
  voting_start_time?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "proposal" */
export type ProposalContentArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Staking_Pool_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Staking_Pool_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Validator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};

/** aggregated selection of "proposal" */
export type Proposal_Aggregate = {
  __typename?: 'proposal_aggregate';
  aggregate?: Maybe<Proposal_Aggregate_Fields>;
  nodes: Array<Proposal>;
};

export type Proposal_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_Fields = {
  __typename?: 'proposal_aggregate_fields';
  avg?: Maybe<Proposal_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Max_Fields>;
  min?: Maybe<Proposal_Min_Fields>;
  stddev?: Maybe<Proposal_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Sum_Fields>;
  var_pop?: Maybe<Proposal_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Variance_Fields>;
};


/** aggregate fields of "proposal" */
export type Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal" */
export type Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Max_Order_By>;
  min?: InputMaybe<Proposal_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Proposal_Append_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "proposal" */
export type Proposal_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Avg_Fields = {
  __typename?: 'proposal_avg_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by avg() on columns of table "proposal" */
export type Proposal_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  active_first_order?: InputMaybe<Int_Comparison_Exp>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  deposit_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  failed_first_order?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  passed_first_order?: InputMaybe<Int_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Bool_Exp>;
  proposal_route?: InputMaybe<String_Comparison_Exp>;
  proposal_staking_pool_snapshots?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  proposal_staking_pool_snapshots_aggregate?: InputMaybe<Proposal_Staking_Pool_Snapshot_Aggregate_Bool_Exp>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Bool_Exp>;
  proposal_type?: InputMaybe<String_Comparison_Exp>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  rejected_first_order?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  voting_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  voting_start_time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal" */
export enum Proposal_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProposalPkey = 'proposal_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Proposal_Delete_At_Path_Input = {
  content?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Proposal_Delete_Elem_Input = {
  content?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Proposal_Delete_Key_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "proposal_deposit" */
export type Proposal_Deposit = {
  __typename?: 'proposal_deposit';
  /** An object relationship */
  account?: Maybe<Account>;
  amount?: Maybe<Array<Scalars['coin']['output']>>;
  /** An object relationship */
  block?: Maybe<Block>;
  depositor_address?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int']['output'];
  timestamp?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "proposal_deposit" */
export type Proposal_Deposit_Aggregate = {
  __typename?: 'proposal_deposit_aggregate';
  aggregate?: Maybe<Proposal_Deposit_Aggregate_Fields>;
  nodes: Array<Proposal_Deposit>;
};

export type Proposal_Deposit_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Deposit_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Deposit_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Fields = {
  __typename?: 'proposal_deposit_aggregate_fields';
  avg?: Maybe<Proposal_Deposit_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Deposit_Max_Fields>;
  min?: Maybe<Proposal_Deposit_Min_Fields>;
  stddev?: Maybe<Proposal_Deposit_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Deposit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Deposit_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Deposit_Sum_Fields>;
  var_pop?: Maybe<Proposal_Deposit_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Deposit_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Deposit_Variance_Fields>;
};


/** aggregate fields of "proposal_deposit" */
export type Proposal_Deposit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Deposit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Deposit_Max_Order_By>;
  min?: InputMaybe<Proposal_Deposit_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Deposit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Deposit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Deposit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Deposit_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Deposit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Deposit_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Deposit_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_deposit" */
export type Proposal_Deposit_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Deposit_Insert_Input>;
};

/** aggregate avg on columns */
export type Proposal_Deposit_Avg_Fields = {
  __typename?: 'proposal_deposit_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_deposit". All fields are combined with a logical 'AND'. */
export type Proposal_Deposit_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  amount?: InputMaybe<Coin_Array_Comparison_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  depositor_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "proposal_deposit" */
export type Proposal_Deposit_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "proposal_deposit" */
export type Proposal_Deposit_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Array<Scalars['coin']['input']>>;
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  depositor_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Proposal_Deposit_Max_Fields = {
  __typename?: 'proposal_deposit_max_fields';
  amount?: Maybe<Array<Scalars['coin']['output']>>;
  depositor_address?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Deposit_Min_Fields = {
  __typename?: 'proposal_deposit_min_fields';
  amount?: Maybe<Array<Scalars['coin']['output']>>;
  depositor_address?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_deposit" */
export type Proposal_Deposit_Mutation_Response = {
  __typename?: 'proposal_deposit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Deposit>;
};

/** Ordering options when selecting data from "proposal_deposit". */
export type Proposal_Deposit_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Block_Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_deposit" */
export enum Proposal_Deposit_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** input type for updating data in table "proposal_deposit" */
export type Proposal_Deposit_Set_Input = {
  amount?: InputMaybe<Array<Scalars['coin']['input']>>;
  depositor_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Deposit_Stddev_Fields = {
  __typename?: 'proposal_deposit_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Deposit_Stddev_Pop_Fields = {
  __typename?: 'proposal_deposit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Deposit_Stddev_Samp_Fields = {
  __typename?: 'proposal_deposit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_deposit" */
export type Proposal_Deposit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Deposit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Deposit_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Array<Scalars['coin']['input']>>;
  depositor_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Deposit_Sum_Fields = {
  __typename?: 'proposal_deposit_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

export type Proposal_Deposit_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Deposit_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Deposit_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Deposit_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Deposit_Var_Pop_Fields = {
  __typename?: 'proposal_deposit_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Deposit_Var_Samp_Fields = {
  __typename?: 'proposal_deposit_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Deposit_Variance_Fields = {
  __typename?: 'proposal_deposit_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "proposal" */
export type Proposal_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "proposal" */
export type Proposal_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['jsonb']['input']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Arr_Rel_Insert_Input>;
  proposal_route?: InputMaybe<Scalars['String']['input']>;
  proposal_staking_pool_snapshots?: InputMaybe<Proposal_Staking_Pool_Snapshot_Arr_Rel_Insert_Input>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Arr_Rel_Insert_Input>;
  proposal_type?: InputMaybe<Scalars['String']['input']>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Arr_Rel_Insert_Input>;
  proposal_votes?: InputMaybe<Proposal_Vote_Arr_Rel_Insert_Input>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  submit_time?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Proposal_Max_Fields = {
  __typename?: 'proposal_max_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  proposal_route?: Maybe<Scalars['String']['output']>;
  proposal_type?: Maybe<Scalars['String']['output']>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submit_time?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  voting_end_time?: Maybe<Scalars['timestamp']['output']>;
  voting_start_time?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "proposal" */
export type Proposal_Max_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Min_Fields = {
  __typename?: 'proposal_min_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  deposit_end_time?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  proposal_route?: Maybe<Scalars['String']['output']>;
  proposal_type?: Maybe<Scalars['String']['output']>;
  proposer_address?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  submit_time?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  voting_end_time?: Maybe<Scalars['timestamp']['output']>;
  voting_start_time?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "proposal" */
export type Proposal_Min_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal" */
export type Proposal_Mutation_Response = {
  __typename?: 'proposal_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal>;
};

/** input type for inserting object relation for remote table "proposal" */
export type Proposal_Obj_Rel_Insert_Input = {
  data: Proposal_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_On_Conflict>;
};

/** on_conflict condition type for table "proposal" */
export type Proposal_On_Conflict = {
  constraint: Proposal_Constraint;
  update_columns?: Array<Proposal_Update_Column>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  active_first_order?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  failed_first_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  passed_first_order?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_staking_pool_snapshots_aggregate?: InputMaybe<Proposal_Staking_Pool_Snapshot_Aggregate_Order_By>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  rejected_first_order?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** primary key columns input for table: proposal */
export type Proposal_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Proposal_Prepend_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "proposal" */
export enum Proposal_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

/** input type for updating data in table "proposal" */
export type Proposal_Set_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  proposal_route?: InputMaybe<Scalars['String']['input']>;
  proposal_type?: InputMaybe<Scalars['String']['input']>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  submit_time?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']['input']>;
};

/** columns and relationships of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot = {
  __typename?: 'proposal_staking_pool_snapshot';
  bonded_tokens: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  not_bonded_tokens: Scalars['String']['output'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate = {
  __typename?: 'proposal_staking_pool_snapshot_aggregate';
  aggregate?: Maybe<Proposal_Staking_Pool_Snapshot_Aggregate_Fields>;
  nodes: Array<Proposal_Staking_Pool_Snapshot>;
};

export type Proposal_Staking_Pool_Snapshot_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Staking_Pool_Snapshot_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Staking_Pool_Snapshot_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_aggregate_fields';
  avg?: Maybe<Proposal_Staking_Pool_Snapshot_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Staking_Pool_Snapshot_Max_Fields>;
  min?: Maybe<Proposal_Staking_Pool_Snapshot_Min_Fields>;
  stddev?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Staking_Pool_Snapshot_Sum_Fields>;
  var_pop?: Maybe<Proposal_Staking_Pool_Snapshot_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Staking_Pool_Snapshot_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Staking_Pool_Snapshot_Variance_Fields>;
};


/** aggregate fields of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Staking_Pool_Snapshot_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Staking_Pool_Snapshot_Max_Order_By>;
  min?: InputMaybe<Proposal_Staking_Pool_Snapshot_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Staking_Pool_Snapshot_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Staking_Pool_Snapshot_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Staking_Pool_Snapshot_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Staking_Pool_Snapshot_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Staking_Pool_Snapshot_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Staking_Pool_Snapshot_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Staking_Pool_Snapshot_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Staking_Pool_Snapshot_Insert_Input>;
};

/** aggregate avg on columns */
export type Proposal_Staking_Pool_Snapshot_Avg_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_staking_pool_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Staking_Pool_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Insert_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Proposal_Staking_Pool_Snapshot_Max_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_max_fields';
  bonded_tokens?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Max_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Staking_Pool_Snapshot_Min_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_min_fields';
  bonded_tokens?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Min_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Mutation_Response = {
  __typename?: 'proposal_staking_pool_snapshot_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Staking_Pool_Snapshot>;
};

/** Ordering options when selecting data from "proposal_staking_pool_snapshot". */
export type Proposal_Staking_Pool_Snapshot_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

/** input type for updating data in table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Set_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Staking_Pool_Snapshot_Sum_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

export type Proposal_Staking_Pool_Snapshot_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Staking_Pool_Snapshot_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Staking_Pool_Snapshot_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Staking_Pool_Snapshot_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Staking_Pool_Snapshot_Var_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Staking_Pool_Snapshot_Var_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Staking_Pool_Snapshot_Variance_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev on columns */
export type Proposal_Stddev_Fields = {
  __typename?: 'proposal_stddev_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by stddev() on columns of table "proposal" */
export type Proposal_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Stddev_Pop_Fields = {
  __typename?: 'proposal_stddev_pop_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by stddev_pop() on columns of table "proposal" */
export type Proposal_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Stddev_Samp_Fields = {
  __typename?: 'proposal_stddev_samp_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by stddev_samp() on columns of table "proposal" */
export type Proposal_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal" */
export type Proposal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  proposal_route?: InputMaybe<Scalars['String']['input']>;
  proposal_type?: InputMaybe<Scalars['String']['input']>;
  proposer_address?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  submit_time?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']['input']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Sum_Fields = {
  __typename?: 'proposal_sum_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal" */
export type Proposal_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_tally_result" */
export type Proposal_Tally_Result = {
  __typename?: 'proposal_tally_result';
  abstain: Scalars['String']['output'];
  /** An object relationship */
  block?: Maybe<Block>;
  height?: Maybe<Scalars['bigint']['output']>;
  no: Scalars['String']['output'];
  no_with_veto: Scalars['String']['output'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  yes: Scalars['String']['output'];
};

/** aggregated selection of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate = {
  __typename?: 'proposal_tally_result_aggregate';
  aggregate?: Maybe<Proposal_Tally_Result_Aggregate_Fields>;
  nodes: Array<Proposal_Tally_Result>;
};

export type Proposal_Tally_Result_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Tally_Result_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Tally_Result_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Fields = {
  __typename?: 'proposal_tally_result_aggregate_fields';
  avg?: Maybe<Proposal_Tally_Result_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Tally_Result_Max_Fields>;
  min?: Maybe<Proposal_Tally_Result_Min_Fields>;
  stddev?: Maybe<Proposal_Tally_Result_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Tally_Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Tally_Result_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Tally_Result_Sum_Fields>;
  var_pop?: Maybe<Proposal_Tally_Result_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Tally_Result_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Tally_Result_Variance_Fields>;
};


/** aggregate fields of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Tally_Result_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Tally_Result_Max_Order_By>;
  min?: InputMaybe<Proposal_Tally_Result_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Tally_Result_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Tally_Result_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Tally_Result_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Tally_Result_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Tally_Result_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Tally_Result_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Tally_Result_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_tally_result" */
export type Proposal_Tally_Result_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Tally_Result_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Tally_Result_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Tally_Result_Avg_Fields = {
  __typename?: 'proposal_tally_result_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_tally_result". All fields are combined with a logical 'AND'. */
export type Proposal_Tally_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  abstain?: InputMaybe<String_Comparison_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  no?: InputMaybe<String_Comparison_Exp>;
  no_with_veto?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  yes?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_tally_result" */
export enum Proposal_Tally_Result_Constraint {
  /** unique or primary key constraint on columns "no", "yes", "no_with_veto", "proposal_id", "abstain" */
  UniqueTally = 'unique_tally'
}

/** input type for incrementing numeric columns in table "proposal_tally_result" */
export type Proposal_Tally_Result_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "proposal_tally_result" */
export type Proposal_Tally_Result_Insert_Input = {
  abstain?: InputMaybe<Scalars['String']['input']>;
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  no?: InputMaybe<Scalars['String']['input']>;
  no_with_veto?: InputMaybe<Scalars['String']['input']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  yes?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Proposal_Tally_Result_Max_Fields = {
  __typename?: 'proposal_tally_result_max_fields';
  abstain?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  no?: Maybe<Scalars['String']['output']>;
  no_with_veto?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  yes?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Max_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Tally_Result_Min_Fields = {
  __typename?: 'proposal_tally_result_min_fields';
  abstain?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  no?: Maybe<Scalars['String']['output']>;
  no_with_veto?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  yes?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Min_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_tally_result" */
export type Proposal_Tally_Result_Mutation_Response = {
  __typename?: 'proposal_tally_result_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Tally_Result>;
};

/** on_conflict condition type for table "proposal_tally_result" */
export type Proposal_Tally_Result_On_Conflict = {
  constraint: Proposal_Tally_Result_Constraint;
  update_columns?: Array<Proposal_Tally_Result_Update_Column>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_tally_result". */
export type Proposal_Tally_Result_Order_By = {
  abstain?: InputMaybe<Order_By>;
  block?: InputMaybe<Block_Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Select_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

/** input type for updating data in table "proposal_tally_result" */
export type Proposal_Tally_Result_Set_Input = {
  abstain?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  no?: InputMaybe<Scalars['String']['input']>;
  no_with_veto?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  yes?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Tally_Result_Stddev_Fields = {
  __typename?: 'proposal_tally_result_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Tally_Result_Stddev_Pop_Fields = {
  __typename?: 'proposal_tally_result_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Tally_Result_Stddev_Samp_Fields = {
  __typename?: 'proposal_tally_result_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_tally_result" */
export type Proposal_Tally_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Tally_Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Tally_Result_Stream_Cursor_Value_Input = {
  abstain?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  no?: InputMaybe<Scalars['String']['input']>;
  no_with_veto?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  yes?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Tally_Result_Sum_Fields = {
  __typename?: 'proposal_tally_result_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** update columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Update_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

export type Proposal_Tally_Result_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Tally_Result_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Tally_Result_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Tally_Result_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Tally_Result_Var_Pop_Fields = {
  __typename?: 'proposal_tally_result_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Tally_Result_Var_Samp_Fields = {
  __typename?: 'proposal_tally_result_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Tally_Result_Variance_Fields = {
  __typename?: 'proposal_tally_result_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** update columns of table "proposal" */
export enum Proposal_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

export type Proposal_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Proposal_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Proposal_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Proposal_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Proposal_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Proposal_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Bool_Exp;
};

/** columns and relationships of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot = {
  __typename?: 'proposal_validator_status_snapshot';
  height: Scalars['bigint']['output'];
  id: Scalars['Int']['output'];
  jailed: Scalars['Boolean']['output'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  status: Scalars['Int']['output'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String']['output'];
  voting_power: Scalars['bigint']['output'];
};

/** aggregated selection of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate = {
  __typename?: 'proposal_validator_status_snapshot_aggregate';
  aggregate?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Fields>;
  nodes: Array<Proposal_Validator_Status_Snapshot>;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And = {
  arguments: Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Fields = {
  __typename?: 'proposal_validator_status_snapshot_aggregate_fields';
  avg?: Maybe<Proposal_Validator_Status_Snapshot_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Validator_Status_Snapshot_Max_Fields>;
  min?: Maybe<Proposal_Validator_Status_Snapshot_Min_Fields>;
  stddev?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Validator_Status_Snapshot_Sum_Fields>;
  var_pop?: Maybe<Proposal_Validator_Status_Snapshot_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Validator_Status_Snapshot_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Validator_Status_Snapshot_Variance_Fields>;
};


/** aggregate fields of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Validator_Status_Snapshot_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Validator_Status_Snapshot_Max_Order_By>;
  min?: InputMaybe<Proposal_Validator_Status_Snapshot_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Validator_Status_Snapshot_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Validator_Status_Snapshot_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Validator_Status_Snapshot_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Validator_Status_Snapshot_Avg_Fields = {
  __typename?: 'proposal_validator_status_snapshot_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_validator_status_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Validator_Status_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProposalValidatorStatusSnapshotPkey = 'proposal_validator_status_snapshot_pkey'
}

/** input type for incrementing numeric columns in table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Proposal_Validator_Status_Snapshot_Max_Fields = {
  __typename?: 'proposal_validator_status_snapshot_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Validator_Status_Snapshot_Min_Fields = {
  __typename?: 'proposal_validator_status_snapshot_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Mutation_Response = {
  __typename?: 'proposal_validator_status_snapshot_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Validator_Status_Snapshot>;
};

/** on_conflict condition type for table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_On_Conflict = {
  constraint: Proposal_Validator_Status_Snapshot_Constraint;
  update_columns?: Array<Proposal_Validator_Status_Snapshot_Update_Column>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_validator_status_snapshot". */
export type Proposal_Validator_Status_Snapshot_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** primary key columns input for table: proposal_validator_status_snapshot */
export type Proposal_Validator_Status_Snapshot_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** select "proposal_validator_status_snapshot_aggregate_bool_exp_bool_and_arguments_columns" columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** select "proposal_validator_status_snapshot_aggregate_bool_exp_bool_or_arguments_columns" columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** input type for updating data in table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Set_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Validator_Status_Snapshot_Sum_Fields = {
  __typename?: 'proposal_validator_status_snapshot_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** update columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

export type Proposal_Validator_Status_Snapshot_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Validator_Status_Snapshot_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Validator_Status_Snapshot_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Validator_Status_Snapshot_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshot_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshot_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Validator_Status_Snapshot_Variance_Fields = {
  __typename?: 'proposal_validator_status_snapshot_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Var_Pop_Fields = {
  __typename?: 'proposal_var_pop_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by var_pop() on columns of table "proposal" */
export type Proposal_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Var_Samp_Fields = {
  __typename?: 'proposal_var_samp_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by var_samp() on columns of table "proposal" */
export type Proposal_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Variance_Fields = {
  __typename?: 'proposal_variance_fields';
  /** A computed field, executes function "active_first" */
  active_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "failed_first" */
  failed_first_order?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "passed_first" */
  passed_first_order?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "rejected_first" */
  rejected_first_order?: Maybe<Scalars['Int']['output']>;
};

/** order by variance() on columns of table "proposal" */
export type Proposal_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_vote" */
export type Proposal_Vote = {
  __typename?: 'proposal_vote';
  /** An object relationship */
  account: Account;
  /** An object relationship */
  block?: Maybe<Block>;
  height?: Maybe<Scalars['bigint']['output']>;
  is_valid: Scalars['Boolean']['output'];
  option: Scalars['String']['output'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int']['output'];
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  voter_address: Scalars['String']['output'];
  weight: Scalars['String']['output'];
};

/** aggregated selection of "proposal_vote" */
export type Proposal_Vote_Aggregate = {
  __typename?: 'proposal_vote_aggregate';
  aggregate?: Maybe<Proposal_Vote_Aggregate_Fields>;
  nodes: Array<Proposal_Vote>;
};

export type Proposal_Vote_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Proposal_Vote_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Proposal_Vote_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Proposal_Vote_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Vote_Aggregate_Bool_Exp_Bool_And = {
  arguments: Proposal_Vote_Select_Column_Proposal_Vote_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Vote_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Vote_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Proposal_Vote_Select_Column_Proposal_Vote_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Vote_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Vote_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Proposal_Vote_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_vote" */
export type Proposal_Vote_Aggregate_Fields = {
  __typename?: 'proposal_vote_aggregate_fields';
  avg?: Maybe<Proposal_Vote_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Proposal_Vote_Max_Fields>;
  min?: Maybe<Proposal_Vote_Min_Fields>;
  stddev?: Maybe<Proposal_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Vote_Sum_Fields>;
  var_pop?: Maybe<Proposal_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Vote_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Vote_Variance_Fields>;
};


/** aggregate fields of "proposal_vote" */
export type Proposal_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "proposal_vote" */
export type Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Vote_Max_Order_By>;
  min?: InputMaybe<Proposal_Vote_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Vote_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_vote" */
export type Proposal_Vote_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Vote_Insert_Input>;
};

/** aggregate avg on columns */
export type Proposal_Vote_Avg_Fields = {
  __typename?: 'proposal_vote_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "proposal_vote" */
export type Proposal_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_vote". All fields are combined with a logical 'AND'. */
export type Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  option?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  voter_address?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "proposal_vote" */
export type Proposal_Vote_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "proposal_vote" */
export type Proposal_Vote_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  proposal?: InputMaybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  voter_address?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Proposal_Vote_Max_Fields = {
  __typename?: 'proposal_vote_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  option?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  voter_address?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "proposal_vote" */
export type Proposal_Vote_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Vote_Min_Fields = {
  __typename?: 'proposal_vote_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  option?: Maybe<Scalars['String']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['timestamp']['output']>;
  voter_address?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "proposal_vote" */
export type Proposal_Vote_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "proposal_vote" */
export type Proposal_Vote_Mutation_Response = {
  __typename?: 'proposal_vote_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Vote>;
};

/** Ordering options when selecting data from "proposal_vote". */
export type Proposal_Vote_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  block?: InputMaybe<Block_Order_By>;
  height?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_vote" */
export enum Proposal_Vote_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VoterAddress = 'voter_address',
  /** column name */
  Weight = 'weight'
}

/** select "proposal_vote_aggregate_bool_exp_bool_and_arguments_columns" columns of table "proposal_vote" */
export enum Proposal_Vote_Select_Column_Proposal_Vote_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsValid = 'is_valid'
}

/** select "proposal_vote_aggregate_bool_exp_bool_or_arguments_columns" columns of table "proposal_vote" */
export enum Proposal_Vote_Select_Column_Proposal_Vote_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsValid = 'is_valid'
}

/** input type for updating data in table "proposal_vote" */
export type Proposal_Vote_Set_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  voter_address?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Proposal_Vote_Stddev_Fields = {
  __typename?: 'proposal_vote_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Vote_Stddev_Pop_Fields = {
  __typename?: 'proposal_vote_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Vote_Stddev_Samp_Fields = {
  __typename?: 'proposal_vote_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_vote" */
export type Proposal_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Vote_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  is_valid?: InputMaybe<Scalars['Boolean']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  proposal_id?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  voter_address?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Proposal_Vote_Sum_Fields = {
  __typename?: 'proposal_vote_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  proposal_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "proposal_vote" */
export type Proposal_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

export type Proposal_Vote_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Proposal_Vote_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Proposal_Vote_Set_Input>;
  /** filter the rows which have to be updated */
  where: Proposal_Vote_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Vote_Var_Pop_Fields = {
  __typename?: 'proposal_vote_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Vote_Var_Samp_Fields = {
  __typename?: 'proposal_vote_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Vote_Variance_Fields = {
  __typename?: 'proposal_vote_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  proposal_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "proposal_vote" */
export type Proposal_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" using primary key columns */
  average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" using primary key columns */
  average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" using primary key columns */
  average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** An array relationship */
  balances: Array<Balances>;
  /** An aggregate relationship */
  balances_aggregate: Balances_Aggregate;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** An array relationship */
  gov_params: Array<Gov_Params>;
  /** An aggregate relationship */
  gov_params_aggregate: Gov_Params_Aggregate;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch aggregated fields from the table: "proposal_deposit" */
  proposal_deposit_aggregate: Proposal_Deposit_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch aggregated fields from the table: "proposal_tally_result" */
  proposal_tally_result_aggregate: Proposal_Tally_Result_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshot" using primary key columns */
  proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch aggregated fields from the table: "proposal_vote" */
  proposal_vote_aggregate: Proposal_Vote_Aggregate;
  /** An array relationship */
  staked_balances: Array<Staked_Balances>;
  /** An aggregate relationship */
  staked_balances_aggregate: Staked_Balances_Aggregate;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch aggregated fields from the table: "validator_info" */
  validator_info_aggregate: Validator_Info_Aggregate;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Query_RootBalancesArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


export type Query_RootBalances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


export type Query_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Query_RootBlock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Query_RootBlock_By_PkArgs = {
  height: Scalars['bigint']['input'];
};


export type Query_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Query_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Query_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Query_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Query_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Query_RootProposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Query_RootStaked_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


export type Query_RootStaked_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


export type Query_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Query_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String']['input'];
};


export type Query_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Query_RootValidator_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Query_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** columns and relationships of "staked_balances" */
export type Staked_Balances = {
  __typename?: 'staked_balances';
  /** An object relationship */
  account?: Maybe<Account>;
  amount: Scalars['coin_scalar']['output'];
  /** An object relationship */
  block?: Maybe<Block>;
  delegator?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  validator?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  validatorByValidator?: Maybe<Validator>;
};

/** aggregated selection of "staked_balances" */
export type Staked_Balances_Aggregate = {
  __typename?: 'staked_balances_aggregate';
  aggregate?: Maybe<Staked_Balances_Aggregate_Fields>;
  nodes: Array<Staked_Balances>;
};

export type Staked_Balances_Aggregate_Bool_Exp = {
  count?: InputMaybe<Staked_Balances_Aggregate_Bool_Exp_Count>;
};

export type Staked_Balances_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Staked_Balances_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "staked_balances" */
export type Staked_Balances_Aggregate_Fields = {
  __typename?: 'staked_balances_aggregate_fields';
  avg?: Maybe<Staked_Balances_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staked_Balances_Max_Fields>;
  min?: Maybe<Staked_Balances_Min_Fields>;
  stddev?: Maybe<Staked_Balances_Stddev_Fields>;
  stddev_pop?: Maybe<Staked_Balances_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staked_Balances_Stddev_Samp_Fields>;
  sum?: Maybe<Staked_Balances_Sum_Fields>;
  var_pop?: Maybe<Staked_Balances_Var_Pop_Fields>;
  var_samp?: Maybe<Staked_Balances_Var_Samp_Fields>;
  variance?: Maybe<Staked_Balances_Variance_Fields>;
};


/** aggregate fields of "staked_balances" */
export type Staked_Balances_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "staked_balances" */
export type Staked_Balances_Aggregate_Order_By = {
  avg?: InputMaybe<Staked_Balances_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Staked_Balances_Max_Order_By>;
  min?: InputMaybe<Staked_Balances_Min_Order_By>;
  stddev?: InputMaybe<Staked_Balances_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Staked_Balances_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Staked_Balances_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Staked_Balances_Sum_Order_By>;
  var_pop?: InputMaybe<Staked_Balances_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Staked_Balances_Var_Samp_Order_By>;
  variance?: InputMaybe<Staked_Balances_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "staked_balances" */
export type Staked_Balances_Arr_Rel_Insert_Input = {
  data: Array<Staked_Balances_Insert_Input>;
};

/** aggregate avg on columns */
export type Staked_Balances_Avg_Fields = {
  __typename?: 'staked_balances_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "staked_balances" */
export type Staked_Balances_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "staked_balances". All fields are combined with a logical 'AND'. */
export type Staked_Balances_Bool_Exp = {
  _and?: InputMaybe<Array<Staked_Balances_Bool_Exp>>;
  _not?: InputMaybe<Staked_Balances_Bool_Exp>;
  _or?: InputMaybe<Array<Staked_Balances_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  amount?: InputMaybe<Coin_Scalar_Comparison_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  delegator?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  validator?: InputMaybe<String_Comparison_Exp>;
  validatorByValidator?: InputMaybe<Validator_Bool_Exp>;
};

/** input type for incrementing numeric columns in table "staked_balances" */
export type Staked_Balances_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "staked_balances" */
export type Staked_Balances_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Scalars['coin_scalar']['input']>;
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  validator?: InputMaybe<Scalars['String']['input']>;
  validatorByValidator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Staked_Balances_Max_Fields = {
  __typename?: 'staked_balances_max_fields';
  amount?: Maybe<Scalars['coin_scalar']['output']>;
  delegator?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  validator?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "staked_balances" */
export type Staked_Balances_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  delegator?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  validator?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Staked_Balances_Min_Fields = {
  __typename?: 'staked_balances_min_fields';
  amount?: Maybe<Scalars['coin_scalar']['output']>;
  delegator?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  validator?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "staked_balances" */
export type Staked_Balances_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  delegator?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  validator?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "staked_balances" */
export type Staked_Balances_Mutation_Response = {
  __typename?: 'staked_balances_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staked_Balances>;
};

/** Ordering options when selecting data from "staked_balances". */
export type Staked_Balances_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Block_Order_By>;
  delegator?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  validator?: InputMaybe<Order_By>;
  validatorByValidator?: InputMaybe<Validator_Order_By>;
};

/** select columns of table "staked_balances" */
export enum Staked_Balances_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Delegator = 'delegator',
  /** column name */
  Height = 'height',
  /** column name */
  Validator = 'validator'
}

/** input type for updating data in table "staked_balances" */
export type Staked_Balances_Set_Input = {
  amount?: InputMaybe<Scalars['coin_scalar']['input']>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  validator?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Staked_Balances_Stddev_Fields = {
  __typename?: 'staked_balances_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "staked_balances" */
export type Staked_Balances_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Staked_Balances_Stddev_Pop_Fields = {
  __typename?: 'staked_balances_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "staked_balances" */
export type Staked_Balances_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Staked_Balances_Stddev_Samp_Fields = {
  __typename?: 'staked_balances_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "staked_balances" */
export type Staked_Balances_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "staked_balances" */
export type Staked_Balances_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staked_Balances_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staked_Balances_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['coin_scalar']['input']>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  validator?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Staked_Balances_Sum_Fields = {
  __typename?: 'staked_balances_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "staked_balances" */
export type Staked_Balances_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

export type Staked_Balances_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staked_Balances_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staked_Balances_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staked_Balances_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staked_Balances_Var_Pop_Fields = {
  __typename?: 'staked_balances_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "staked_balances" */
export type Staked_Balances_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Staked_Balances_Var_Samp_Fields = {
  __typename?: 'staked_balances_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "staked_balances" */
export type Staked_Balances_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Staked_Balances_Variance_Fields = {
  __typename?: 'staked_balances_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "staked_balances" */
export type Staked_Balances_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "staking_params" */
export type Staking_Params = {
  __typename?: 'staking_params';
  height?: Maybe<Scalars['bigint']['output']>;
  params: Scalars['jsonb']['output'];
};


/** columns and relationships of "staking_params" */
export type Staking_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "staking_params" */
export type Staking_Params_Aggregate = {
  __typename?: 'staking_params_aggregate';
  aggregate?: Maybe<Staking_Params_Aggregate_Fields>;
  nodes: Array<Staking_Params>;
};

/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_Fields = {
  __typename?: 'staking_params_aggregate_fields';
  avg?: Maybe<Staking_Params_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staking_Params_Max_Fields>;
  min?: Maybe<Staking_Params_Min_Fields>;
  stddev?: Maybe<Staking_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Params_Sum_Fields>;
  var_pop?: Maybe<Staking_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Params_Var_Samp_Fields>;
  variance?: Maybe<Staking_Params_Variance_Fields>;
};


/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Staking_Params_Append_Input = {
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Staking_Params_Avg_Fields = {
  __typename?: 'staking_params_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "staking_params". All fields are combined with a logical 'AND'. */
export type Staking_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  _not?: InputMaybe<Staking_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Staking_Params_Delete_At_Path_Input = {
  params?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Staking_Params_Delete_Elem_Input = {
  params?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Staking_Params_Delete_Key_Input = {
  params?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "staking_params" */
export type Staking_Params_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "staking_params" */
export type Staking_Params_Insert_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Staking_Params_Max_Fields = {
  __typename?: 'staking_params_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Staking_Params_Min_Fields = {
  __typename?: 'staking_params_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "staking_params" */
export type Staking_Params_Mutation_Response = {
  __typename?: 'staking_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staking_Params>;
};

/** Ordering options when selecting data from "staking_params". */
export type Staking_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Staking_Params_Prepend_Input = {
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "staking_params" */
export enum Staking_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "staking_params" */
export type Staking_Params_Set_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate stddev on columns */
export type Staking_Params_Stddev_Fields = {
  __typename?: 'staking_params_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Params_Stddev_Pop_Fields = {
  __typename?: 'staking_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Params_Stddev_Samp_Fields = {
  __typename?: 'staking_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "staking_params" */
export type Staking_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  params?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate sum on columns */
export type Staking_Params_Sum_Fields = {
  __typename?: 'staking_params_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

export type Staking_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Staking_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Staking_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Staking_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Staking_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staking_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Staking_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staking_Params_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staking_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staking_Params_Var_Pop_Fields = {
  __typename?: 'staking_params_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Staking_Params_Var_Samp_Fields = {
  __typename?: 'staking_params_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Staking_Params_Variance_Fields = {
  __typename?: 'staking_params_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "staking_pool" */
export type Staking_Pool = {
  __typename?: 'staking_pool';
  bonded_tokens: Scalars['String']['output'];
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens: Scalars['String']['output'];
};

/** aggregated selection of "staking_pool" */
export type Staking_Pool_Aggregate = {
  __typename?: 'staking_pool_aggregate';
  aggregate?: Maybe<Staking_Pool_Aggregate_Fields>;
  nodes: Array<Staking_Pool>;
};

/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_Fields = {
  __typename?: 'staking_pool_aggregate_fields';
  avg?: Maybe<Staking_Pool_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staking_Pool_Max_Fields>;
  min?: Maybe<Staking_Pool_Min_Fields>;
  stddev?: Maybe<Staking_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Pool_Sum_Fields>;
  var_pop?: Maybe<Staking_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Pool_Var_Samp_Fields>;
  variance?: Maybe<Staking_Pool_Variance_Fields>;
};


/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Staking_Pool_Avg_Fields = {
  __typename?: 'staking_pool_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "staking_pool". All fields are combined with a logical 'AND'. */
export type Staking_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  _not?: InputMaybe<Staking_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "staking_pool" */
export enum Staking_Pool_Constraint {
  /** unique or primary key constraint on columns "not_bonded_tokens", "bonded_tokens" */
  UniquePool = 'unique_pool'
}

/** input type for incrementing numeric columns in table "staking_pool" */
export type Staking_Pool_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "staking_pool" */
export type Staking_Pool_Insert_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Staking_Pool_Max_Fields = {
  __typename?: 'staking_pool_max_fields';
  bonded_tokens?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Staking_Pool_Min_Fields = {
  __typename?: 'staking_pool_min_fields';
  bonded_tokens?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  not_bonded_tokens?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "staking_pool" */
export type Staking_Pool_Mutation_Response = {
  __typename?: 'staking_pool_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staking_Pool>;
};

/** on_conflict condition type for table "staking_pool" */
export type Staking_Pool_On_Conflict = {
  constraint: Staking_Pool_Constraint;
  update_columns?: Array<Staking_Pool_Update_Column>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};

/** Ordering options when selecting data from "staking_pool". */
export type Staking_Pool_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
};

/** select columns of table "staking_pool" */
export enum Staking_Pool_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens'
}

/** input type for updating data in table "staking_pool" */
export type Staking_Pool_Set_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Staking_Pool_Stddev_Fields = {
  __typename?: 'staking_pool_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Pool_Stddev_Pop_Fields = {
  __typename?: 'staking_pool_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Pool_Stddev_Samp_Fields = {
  __typename?: 'staking_pool_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "staking_pool" */
export type Staking_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Pool_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Staking_Pool_Sum_Fields = {
  __typename?: 'staking_pool_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "staking_pool" */
export enum Staking_Pool_Update_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens'
}

export type Staking_Pool_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staking_Pool_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staking_Pool_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staking_Pool_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staking_Pool_Var_Pop_Fields = {
  __typename?: 'staking_pool_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Staking_Pool_Var_Samp_Fields = {
  __typename?: 'staking_pool_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Staking_Pool_Variance_Fields = {
  __typename?: 'staking_pool_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" using primary key columns */
  average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_day" */
  average_block_time_per_day_stream: Array<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" using primary key columns */
  average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_hour" */
  average_block_time_per_hour_stream: Array<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" using primary key columns */
  average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_minute" */
  average_block_time_per_minute_stream: Array<Average_Block_Time_Per_Minute>;
  /** An array relationship */
  balances: Array<Balances>;
  /** An aggregate relationship */
  balances_aggregate: Balances_Aggregate;
  /** fetch data from the table in a streaming manner: "balances" */
  balances_stream: Array<Balances>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table in a streaming manner: "block" */
  block_stream: Array<Block>;
  /** An array relationship */
  gov_params: Array<Gov_Params>;
  /** An aggregate relationship */
  gov_params_aggregate: Gov_Params_Aggregate;
  /** fetch data from the table in a streaming manner: "gov_params" */
  gov_params_stream: Array<Gov_Params>;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch aggregated fields from the table: "proposal_deposit" */
  proposal_deposit_aggregate: Proposal_Deposit_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_deposit" */
  proposal_deposit_stream: Array<Proposal_Deposit>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_stream: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal" */
  proposal_stream: Array<Proposal>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch aggregated fields from the table: "proposal_tally_result" */
  proposal_tally_result_aggregate: Proposal_Tally_Result_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_tally_result" */
  proposal_tally_result_stream: Array<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshot" using primary key columns */
  proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_stream: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch aggregated fields from the table: "proposal_vote" */
  proposal_vote_aggregate: Proposal_Vote_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_vote" */
  proposal_vote_stream: Array<Proposal_Vote>;
  /** An array relationship */
  staked_balances: Array<Staked_Balances>;
  /** An aggregate relationship */
  staked_balances_aggregate: Staked_Balances_Aggregate;
  /** fetch data from the table in a streaming manner: "staked_balances" */
  staked_balances_stream: Array<Staked_Balances>;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate;
  /** fetch data from the table in a streaming manner: "staking_params" */
  staking_params_stream: Array<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table in a streaming manner: "staking_pool" */
  staking_pool_stream: Array<Staking_Pool>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table in a streaming manner: "supply" */
  supply_stream: Array<Supply>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate;
  /** fetch data from the table in a streaming manner: "validator_commission" */
  validator_commission_stream: Array<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate;
  /** fetch data from the table in a streaming manner: "validator_description" */
  validator_description_stream: Array<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch aggregated fields from the table: "validator_info" */
  validator_info_aggregate: Validator_Info_Aggregate;
  /** fetch data from the table in a streaming manner: "validator_info" */
  validator_info_stream: Array<Validator_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table in a streaming manner: "validator_status" */
  validator_status_stream: Array<Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator" */
  validator_stream: Array<Validator>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table in a streaming manner: "validator_voting_power" */
  validator_voting_power_stream: Array<Validator_Voting_Power>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Subscription_RootAverage_Block_Time_Per_Day_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Day_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Subscription_RootAverage_Block_Time_Per_Hour_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Hour_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean']['input'];
};


export type Subscription_RootAverage_Block_Time_Per_Minute_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Minute_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootBalancesArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


export type Subscription_RootBalances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Balances_Order_By>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


export type Subscription_RootBalances_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Balances_Stream_Cursor_Input>>;
  where?: InputMaybe<Balances_Bool_Exp>;
};


export type Subscription_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_By_PkArgs = {
  height: Scalars['bigint']['input'];
};


export type Subscription_RootBlock_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Block_Stream_Cursor_Input>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Gov_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Deposit_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Deposit_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Result_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Tally_Result_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProposal_Validator_Status_Snapshot_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Validator_Status_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposal_Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootStaked_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


export type Subscription_RootStaked_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


export type Subscription_RootStaked_Balances_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staked_Balances_Stream_Cursor_Input>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


export type Subscription_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staking_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staking_Pool_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Supply_Stream_Cursor_Input>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String']['input'];
};


export type Subscription_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Commission_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Description_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Validator_Voting_Power_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply';
  /** An object relationship */
  block?: Maybe<Block>;
  coins: Array<Scalars['coin']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "supply" */
export type Supply_Aggregate = {
  __typename?: 'supply_aggregate';
  aggregate?: Maybe<Supply_Aggregate_Fields>;
  nodes: Array<Supply>;
};

export type Supply_Aggregate_Bool_Exp = {
  count?: InputMaybe<Supply_Aggregate_Bool_Exp_Count>;
};

export type Supply_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Supply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Supply_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "supply" */
export type Supply_Aggregate_Fields = {
  __typename?: 'supply_aggregate_fields';
  avg?: Maybe<Supply_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Supply_Max_Fields>;
  min?: Maybe<Supply_Min_Fields>;
  stddev?: Maybe<Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Supply_Sum_Fields>;
  var_pop?: Maybe<Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Supply_Var_Samp_Fields>;
  variance?: Maybe<Supply_Variance_Fields>;
};


/** aggregate fields of "supply" */
export type Supply_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "supply" */
export type Supply_Aggregate_Order_By = {
  avg?: InputMaybe<Supply_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Supply_Max_Order_By>;
  min?: InputMaybe<Supply_Min_Order_By>;
  stddev?: InputMaybe<Supply_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Supply_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Supply_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Supply_Sum_Order_By>;
  var_pop?: InputMaybe<Supply_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Supply_Var_Samp_Order_By>;
  variance?: InputMaybe<Supply_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "supply" */
export type Supply_Arr_Rel_Insert_Input = {
  data: Array<Supply_Insert_Input>;
};

/** aggregate avg on columns */
export type Supply_Avg_Fields = {
  __typename?: 'supply_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "supply" */
export type Supply_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: InputMaybe<Array<Supply_Bool_Exp>>;
  _not?: InputMaybe<Supply_Bool_Exp>;
  _or?: InputMaybe<Array<Supply_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  coins?: InputMaybe<Coin_Array_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "supply" */
export type Supply_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "supply" */
export type Supply_Insert_Input = {
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Supply_Max_Fields = {
  __typename?: 'supply_max_fields';
  coins?: Maybe<Array<Scalars['coin']['output']>>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "supply" */
export type Supply_Max_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Supply_Min_Fields = {
  __typename?: 'supply_min_fields';
  coins?: Maybe<Array<Scalars['coin']['output']>>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "supply" */
export type Supply_Min_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "supply" */
export type Supply_Mutation_Response = {
  __typename?: 'supply_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Supply>;
};

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** input type for updating data in table "supply" */
export type Supply_Set_Input = {
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Supply_Stddev_Fields = {
  __typename?: 'supply_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "supply" */
export type Supply_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Supply_Stddev_Pop_Fields = {
  __typename?: 'supply_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "supply" */
export type Supply_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Supply_Stddev_Samp_Fields = {
  __typename?: 'supply_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "supply" */
export type Supply_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "supply" */
export type Supply_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supply_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supply_Stream_Cursor_Value_Input = {
  coins?: InputMaybe<Array<Scalars['coin']['input']>>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Supply_Sum_Fields = {
  __typename?: 'supply_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "supply" */
export type Supply_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

export type Supply_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Supply_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Supply_Set_Input>;
  /** filter the rows which have to be updated */
  where: Supply_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Supply_Var_Pop_Fields = {
  __typename?: 'supply_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "supply" */
export type Supply_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Supply_Var_Samp_Fields = {
  __typename?: 'supply_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "supply" */
export type Supply_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Supply_Variance_Fields = {
  __typename?: 'supply_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "supply" */
export type Supply_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  block: Block;
  fee: Scalars['jsonb']['output'];
  gas_used?: Maybe<Scalars['bigint']['output']>;
  gas_wanted?: Maybe<Scalars['bigint']['output']>;
  hash: Scalars['String']['output'];
  height: Scalars['bigint']['output'];
  logs?: Maybe<Scalars['jsonb']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  messages: Scalars['jsonb']['output'];
  raw_log?: Maybe<Scalars['String']['output']>;
  signatures: Array<Scalars['String']['output']>;
  signer_infos: Scalars['jsonb']['output'];
  success: Scalars['Boolean']['output'];
};


/** columns and relationships of "transaction" */
export type TransactionFeeArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transaction" */
export type TransactionLogsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "transaction" */
export type TransactionSigner_InfosArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

export type Transaction_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Transaction_Aggregate_Bool_Exp_Count>;
};

export type Transaction_Aggregate_Bool_Exp_Bool_And = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Transaction_Append_Input = {
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "transaction" */
export type Transaction_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  fee?: InputMaybe<Jsonb_Comparison_Exp>;
  gas_used?: InputMaybe<Bigint_Comparison_Exp>;
  gas_wanted?: InputMaybe<Bigint_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  logs?: InputMaybe<Jsonb_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  messages?: InputMaybe<Jsonb_Comparison_Exp>;
  raw_log?: InputMaybe<String_Comparison_Exp>;
  signatures?: InputMaybe<String_Array_Comparison_Exp>;
  signer_infos?: InputMaybe<Jsonb_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint on columns "hash" */
  UniqueTx = 'unique_tx'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Transaction_Delete_At_Path_Input = {
  fee?: InputMaybe<Array<Scalars['String']['input']>>;
  logs?: InputMaybe<Array<Scalars['String']['input']>>;
  messages?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_infos?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Transaction_Delete_Elem_Input = {
  fee?: InputMaybe<Scalars['Int']['input']>;
  logs?: InputMaybe<Scalars['Int']['input']>;
  messages?: InputMaybe<Scalars['Int']['input']>;
  signer_infos?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Transaction_Delete_Key_Input = {
  fee?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Scalars['String']['input']>;
  signer_infos?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  gas_wanted?: InputMaybe<Scalars['bigint']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  gas_wanted?: InputMaybe<Scalars['bigint']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  raw_log?: InputMaybe<Scalars['String']['input']>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  gas_used?: Maybe<Scalars['bigint']['output']>;
  gas_wanted?: Maybe<Scalars['bigint']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  raw_log?: Maybe<Scalars['String']['output']>;
  signatures?: Maybe<Array<Scalars['String']['output']>>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  gas_used?: Maybe<Scalars['bigint']['output']>;
  gas_wanted?: Maybe<Scalars['bigint']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  raw_log?: Maybe<Scalars['String']['output']>;
  signatures?: Maybe<Array<Scalars['String']['output']>>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** on_conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  fee?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
  signer_infos?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Transaction_Prepend_Input = {
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

/** select "transaction_aggregate_bool_exp_bool_and_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** select "transaction_aggregate_bool_exp_bool_or_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  gas_wanted?: InputMaybe<Scalars['bigint']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  raw_log?: InputMaybe<Scalars['String']['input']>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  fee?: InputMaybe<Scalars['jsonb']['input']>;
  gas_used?: InputMaybe<Scalars['bigint']['input']>;
  gas_wanted?: InputMaybe<Scalars['bigint']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  logs?: InputMaybe<Scalars['jsonb']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Scalars['jsonb']['input']>;
  raw_log?: InputMaybe<Scalars['String']['input']>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signer_infos?: InputMaybe<Scalars['jsonb']['input']>;
  success?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  gas_used?: Maybe<Scalars['bigint']['output']>;
  gas_wanted?: Maybe<Scalars['bigint']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** update columns of table "transaction" */
export enum Transaction_Update_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

export type Transaction_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Transaction_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Transaction_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Transaction_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Transaction_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Transaction_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  gas_used?: Maybe<Scalars['Float']['output']>;
  gas_wanted?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator" */
export type Validator = {
  __typename?: 'validator';
  /** An array relationship */
  blocks: Array<Block>;
  /** An aggregate relationship */
  blocks_aggregate: Block_Aggregate;
  consensus_address: Scalars['String']['output'];
  consensus_pubkey: Scalars['String']['output'];
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  /** An aggregate relationship */
  proposal_validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** An array relationship */
  staked_balances: Array<Staked_Balances>;
  /** An aggregate relationship */
  staked_balances_aggregate: Staked_Balances_Aggregate;
  /** An object relationship */
  validator_info?: Maybe<Validator_Info>;
};


/** columns and relationships of "validator" */
export type ValidatorBlocksArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorProposal_Validator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorStaked_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorStaked_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staked_Balances_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staked_Balances_Order_By>>;
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
};

/** aggregated selection of "validator" */
export type Validator_Aggregate = {
  __typename?: 'validator_aggregate';
  aggregate?: Maybe<Validator_Aggregate_Fields>;
  nodes: Array<Validator>;
};

/** aggregate fields of "validator" */
export type Validator_Aggregate_Fields = {
  __typename?: 'validator_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Max_Fields>;
  min?: Maybe<Validator_Min_Fields>;
};


/** aggregate fields of "validator" */
export type Validator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Validator_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Bool_Exp>>;
  _not?: InputMaybe<Validator_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Bool_Exp>>;
  blocks?: InputMaybe<Block_Bool_Exp>;
  blocks_aggregate?: InputMaybe<Block_Aggregate_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  consensus_pubkey?: InputMaybe<String_Comparison_Exp>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp>;
  staked_balances?: InputMaybe<Staked_Balances_Bool_Exp>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Bool_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
};

/** columns and relationships of "validator_commission" */
export type Validator_Commission = {
  __typename?: 'validator_commission';
  /** An object relationship */
  block?: Maybe<Block>;
  commission: Scalars['numeric']['output'];
  height?: Maybe<Scalars['bigint']['output']>;
  min_self_delegation: Scalars['bigint']['output'];
  validator_address: Scalars['String']['output'];
  /** An object relationship */
  validator_info: Validator_Info;
};

/** aggregated selection of "validator_commission" */
export type Validator_Commission_Aggregate = {
  __typename?: 'validator_commission_aggregate';
  aggregate?: Maybe<Validator_Commission_Aggregate_Fields>;
  nodes: Array<Validator_Commission>;
};

export type Validator_Commission_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Commission_Aggregate_Bool_Exp_Count>;
};

export type Validator_Commission_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Commission_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_Fields = {
  __typename?: 'validator_commission_aggregate_fields';
  avg?: Maybe<Validator_Commission_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Commission_Max_Fields>;
  min?: Maybe<Validator_Commission_Min_Fields>;
  stddev?: Maybe<Validator_Commission_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Commission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Commission_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Commission_Sum_Fields>;
  var_pop?: Maybe<Validator_Commission_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Commission_Var_Samp_Fields>;
  variance?: Maybe<Validator_Commission_Variance_Fields>;
};


/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_commission" */
export type Validator_Commission_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Commission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Commission_Max_Order_By>;
  min?: InputMaybe<Validator_Commission_Min_Order_By>;
  stddev?: InputMaybe<Validator_Commission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Commission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Commission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Commission_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Commission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Commission_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Commission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_commission" */
export type Validator_Commission_Arr_Rel_Insert_Input = {
  data: Array<Validator_Commission_Insert_Input>;
};

/** aggregate avg on columns */
export type Validator_Commission_Avg_Fields = {
  __typename?: 'validator_commission_avg_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_commission" */
export type Validator_Commission_Avg_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_commission". All fields are combined with a logical 'AND'. */
export type Validator_Commission_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Commission_Bool_Exp>>;
  _not?: InputMaybe<Validator_Commission_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Commission_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  commission?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  min_self_delegation?: InputMaybe<Bigint_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
};

/** input type for incrementing numeric columns in table "validator_commission" */
export type Validator_Commission_Inc_Input = {
  commission?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "validator_commission" */
export type Validator_Commission_Insert_Input = {
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  commission?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  validator_info?: InputMaybe<Validator_Info_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Commission_Max_Fields = {
  __typename?: 'validator_commission_max_fields';
  commission?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  min_self_delegation?: Maybe<Scalars['bigint']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "validator_commission" */
export type Validator_Commission_Max_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Commission_Min_Fields = {
  __typename?: 'validator_commission_min_fields';
  commission?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  min_self_delegation?: Maybe<Scalars['bigint']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "validator_commission" */
export type Validator_Commission_Min_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_commission" */
export type Validator_Commission_Mutation_Response = {
  __typename?: 'validator_commission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Commission>;
};

/** Ordering options when selecting data from "validator_commission". */
export type Validator_Commission_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
};

/** select columns of table "validator_commission" */
export enum Validator_Commission_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** input type for updating data in table "validator_commission" */
export type Validator_Commission_Set_Input = {
  commission?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Validator_Commission_Stddev_Fields = {
  __typename?: 'validator_commission_stddev_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Commission_Stddev_Pop_Fields = {
  __typename?: 'validator_commission_stddev_pop_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Commission_Stddev_Samp_Fields = {
  __typename?: 'validator_commission_stddev_samp_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_commission" */
export type Validator_Commission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Commission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Commission_Stream_Cursor_Value_Input = {
  commission?: InputMaybe<Scalars['numeric']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Validator_Commission_Sum_Fields = {
  __typename?: 'validator_commission_sum_fields';
  commission?: Maybe<Scalars['numeric']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  min_self_delegation?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_commission" */
export type Validator_Commission_Sum_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

export type Validator_Commission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Commission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Commission_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Commission_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Commission_Var_Pop_Fields = {
  __typename?: 'validator_commission_var_pop_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_commission" */
export type Validator_Commission_Var_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Commission_Var_Samp_Fields = {
  __typename?: 'validator_commission_var_samp_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_commission" */
export type Validator_Commission_Var_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Commission_Variance_Fields = {
  __typename?: 'validator_commission_variance_fields';
  commission?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  min_self_delegation?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_commission" */
export type Validator_Commission_Variance_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** unique or primary key constraints on table "validator" */
export enum Validator_Constraint {
  /** unique or primary key constraint on columns "consensus_pubkey" */
  ValidatorConsensusPubkeyKey = 'validator_consensus_pubkey_key',
  /** unique or primary key constraint on columns "consensus_address" */
  ValidatorPkey = 'validator_pkey'
}

/** columns and relationships of "validator_description" */
export type Validator_Description = {
  __typename?: 'validator_description';
  avatar_url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  block?: Maybe<Block>;
  details?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  moniker?: Maybe<Scalars['String']['output']>;
  security_contact?: Maybe<Scalars['String']['output']>;
  validator_address: Scalars['String']['output'];
  /** An object relationship */
  validator_info: Validator_Info;
  website?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "validator_description" */
export type Validator_Description_Aggregate = {
  __typename?: 'validator_description_aggregate';
  aggregate?: Maybe<Validator_Description_Aggregate_Fields>;
  nodes: Array<Validator_Description>;
};

export type Validator_Description_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Description_Aggregate_Bool_Exp_Count>;
};

export type Validator_Description_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Description_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Description_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_Fields = {
  __typename?: 'validator_description_aggregate_fields';
  avg?: Maybe<Validator_Description_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Description_Max_Fields>;
  min?: Maybe<Validator_Description_Min_Fields>;
  stddev?: Maybe<Validator_Description_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Description_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Description_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Description_Sum_Fields>;
  var_pop?: Maybe<Validator_Description_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Description_Var_Samp_Fields>;
  variance?: Maybe<Validator_Description_Variance_Fields>;
};


/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Description_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_description" */
export type Validator_Description_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Description_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Description_Max_Order_By>;
  min?: InputMaybe<Validator_Description_Min_Order_By>;
  stddev?: InputMaybe<Validator_Description_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Description_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Description_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Description_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Description_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Description_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Description_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_description" */
export type Validator_Description_Arr_Rel_Insert_Input = {
  data: Array<Validator_Description_Insert_Input>;
};

/** aggregate avg on columns */
export type Validator_Description_Avg_Fields = {
  __typename?: 'validator_description_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_description" */
export type Validator_Description_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_description". All fields are combined with a logical 'AND'. */
export type Validator_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Description_Bool_Exp>>;
  _not?: InputMaybe<Validator_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Description_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  identity?: InputMaybe<String_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  security_contact?: InputMaybe<String_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "validator_description" */
export type Validator_Description_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "validator_description" */
export type Validator_Description_Insert_Input = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  details?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  security_contact?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  validator_info?: InputMaybe<Validator_Info_Obj_Rel_Insert_Input>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Validator_Description_Max_Fields = {
  __typename?: 'validator_description_max_fields';
  avatar_url?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  moniker?: Maybe<Scalars['String']['output']>;
  security_contact?: Maybe<Scalars['String']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "validator_description" */
export type Validator_Description_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Description_Min_Fields = {
  __typename?: 'validator_description_min_fields';
  avatar_url?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  identity?: Maybe<Scalars['String']['output']>;
  moniker?: Maybe<Scalars['String']['output']>;
  security_contact?: Maybe<Scalars['String']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "validator_description" */
export type Validator_Description_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_description" */
export type Validator_Description_Mutation_Response = {
  __typename?: 'validator_description_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Description>;
};

/** Ordering options when selecting data from "validator_description". */
export type Validator_Description_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  block?: InputMaybe<Block_Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
  website?: InputMaybe<Order_By>;
};

/** select columns of table "validator_description" */
export enum Validator_Description_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "validator_description" */
export type Validator_Description_Set_Input = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  security_contact?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Validator_Description_Stddev_Fields = {
  __typename?: 'validator_description_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_description" */
export type Validator_Description_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Description_Stddev_Pop_Fields = {
  __typename?: 'validator_description_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_description" */
export type Validator_Description_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Description_Stddev_Samp_Fields = {
  __typename?: 'validator_description_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_description" */
export type Validator_Description_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_description" */
export type Validator_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Description_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Description_Stream_Cursor_Value_Input = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  moniker?: InputMaybe<Scalars['String']['input']>;
  security_contact?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Validator_Description_Sum_Fields = {
  __typename?: 'validator_description_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_description" */
export type Validator_Description_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

export type Validator_Description_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Description_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Description_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Description_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Description_Var_Pop_Fields = {
  __typename?: 'validator_description_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_description" */
export type Validator_Description_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Description_Var_Samp_Fields = {
  __typename?: 'validator_description_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_description" */
export type Validator_Description_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Description_Variance_Fields = {
  __typename?: 'validator_description_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_description" */
export type Validator_Description_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_info" */
export type Validator_Info = {
  __typename?: 'validator_info';
  /** An object relationship */
  account?: Maybe<Account>;
  /** An object relationship */
  block?: Maybe<Block>;
  consensus_address: Scalars['String']['output'];
  height?: Maybe<Scalars['bigint']['output']>;
  max_change_rate: Scalars['String']['output'];
  max_rate: Scalars['String']['output'];
  operator_address: Scalars['String']['output'];
  self_delegate_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  validator: Validator;
  /** An array relationship */
  validator_commissions: Array<Validator_Commission>;
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commission_Aggregate;
  /** An array relationship */
  validator_descriptions: Array<Validator_Description>;
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Description_Aggregate;
  /** An array relationship */
  validator_statuses: Array<Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "validator_info" */
export type Validator_InfoValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator_info" */
export type Validator_InfoValidator_Commissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator_info" */
export type Validator_InfoValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator_info" */
export type Validator_InfoValidator_Descriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator_info" */
export type Validator_InfoValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator_info" */
export type Validator_InfoValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator_info" */
export type Validator_InfoValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "validator_info" */
export type Validator_InfoValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** aggregated selection of "validator_info" */
export type Validator_Info_Aggregate = {
  __typename?: 'validator_info_aggregate';
  aggregate?: Maybe<Validator_Info_Aggregate_Fields>;
  nodes: Array<Validator_Info>;
};

export type Validator_Info_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Info_Aggregate_Bool_Exp_Count>;
};

export type Validator_Info_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Info_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_info" */
export type Validator_Info_Aggregate_Fields = {
  __typename?: 'validator_info_aggregate_fields';
  avg?: Maybe<Validator_Info_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Info_Max_Fields>;
  min?: Maybe<Validator_Info_Min_Fields>;
  stddev?: Maybe<Validator_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Info_Sum_Fields>;
  var_pop?: Maybe<Validator_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Info_Var_Samp_Fields>;
  variance?: Maybe<Validator_Info_Variance_Fields>;
};


/** aggregate fields of "validator_info" */
export type Validator_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_info" */
export type Validator_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Info_Max_Order_By>;
  min?: InputMaybe<Validator_Info_Min_Order_By>;
  stddev?: InputMaybe<Validator_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_info" */
export type Validator_Info_Arr_Rel_Insert_Input = {
  data: Array<Validator_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Info_Avg_Fields = {
  __typename?: 'validator_info_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_info" */
export type Validator_Info_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_info". All fields are combined with a logical 'AND'. */
export type Validator_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Info_Bool_Exp>>;
  _not?: InputMaybe<Validator_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Info_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  max_change_rate?: InputMaybe<String_Comparison_Exp>;
  max_rate?: InputMaybe<String_Comparison_Exp>;
  operator_address?: InputMaybe<String_Comparison_Exp>;
  self_delegate_address?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_commissions?: InputMaybe<Validator_Commission_Bool_Exp>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Bool_Exp>;
  validator_descriptions?: InputMaybe<Validator_Description_Bool_Exp>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Bool_Exp>;
  validator_statuses?: InputMaybe<Validator_Status_Bool_Exp>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "validator_info" */
export enum Validator_Info_Constraint {
  /** unique or primary key constraint on columns "consensus_address" */
  ValidatorInfoConsensusAddressKey = 'validator_info_consensus_address_key',
  /** unique or primary key constraint on columns "operator_address" */
  ValidatorInfoOperatorAddressKey = 'validator_info_operator_address_key'
}

/** input type for incrementing numeric columns in table "validator_info" */
export type Validator_Info_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "validator_info" */
export type Validator_Info_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  max_change_rate?: InputMaybe<Scalars['String']['input']>;
  max_rate?: InputMaybe<Scalars['String']['input']>;
  operator_address?: InputMaybe<Scalars['String']['input']>;
  self_delegate_address?: InputMaybe<Scalars['String']['input']>;
  validator?: InputMaybe<Validator_Obj_Rel_Insert_Input>;
  validator_commissions?: InputMaybe<Validator_Commission_Arr_Rel_Insert_Input>;
  validator_descriptions?: InputMaybe<Validator_Description_Arr_Rel_Insert_Input>;
  validator_statuses?: InputMaybe<Validator_Status_Arr_Rel_Insert_Input>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Info_Max_Fields = {
  __typename?: 'validator_info_max_fields';
  consensus_address?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  max_change_rate?: Maybe<Scalars['String']['output']>;
  max_rate?: Maybe<Scalars['String']['output']>;
  operator_address?: Maybe<Scalars['String']['output']>;
  self_delegate_address?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "validator_info" */
export type Validator_Info_Max_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Info_Min_Fields = {
  __typename?: 'validator_info_min_fields';
  consensus_address?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['bigint']['output']>;
  max_change_rate?: Maybe<Scalars['String']['output']>;
  max_rate?: Maybe<Scalars['String']['output']>;
  operator_address?: Maybe<Scalars['String']['output']>;
  self_delegate_address?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "validator_info" */
export type Validator_Info_Min_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_info" */
export type Validator_Info_Mutation_Response = {
  __typename?: 'validator_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Info>;
};

/** input type for inserting object relation for remote table "validator_info" */
export type Validator_Info_Obj_Rel_Insert_Input = {
  data: Validator_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_Info_On_Conflict>;
};

/** on_conflict condition type for table "validator_info" */
export type Validator_Info_On_Conflict = {
  constraint: Validator_Info_Constraint;
  update_columns?: Array<Validator_Info_Update_Column>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_info". */
export type Validator_Info_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  block?: InputMaybe<Block_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Order_By>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Order_By>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** select columns of table "validator_info" */
export enum Validator_Info_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  Height = 'height',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

/** input type for updating data in table "validator_info" */
export type Validator_Info_Set_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  max_change_rate?: InputMaybe<Scalars['String']['input']>;
  max_rate?: InputMaybe<Scalars['String']['input']>;
  operator_address?: InputMaybe<Scalars['String']['input']>;
  self_delegate_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Validator_Info_Stddev_Fields = {
  __typename?: 'validator_info_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_info" */
export type Validator_Info_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Info_Stddev_Pop_Fields = {
  __typename?: 'validator_info_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_info" */
export type Validator_Info_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Info_Stddev_Samp_Fields = {
  __typename?: 'validator_info_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_info" */
export type Validator_Info_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_info" */
export type Validator_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Info_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  max_change_rate?: InputMaybe<Scalars['String']['input']>;
  max_rate?: InputMaybe<Scalars['String']['input']>;
  operator_address?: InputMaybe<Scalars['String']['input']>;
  self_delegate_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Validator_Info_Sum_Fields = {
  __typename?: 'validator_info_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_info" */
export type Validator_Info_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** update columns of table "validator_info" */
export enum Validator_Info_Update_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  Height = 'height',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

export type Validator_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Info_Var_Pop_Fields = {
  __typename?: 'validator_info_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_info" */
export type Validator_Info_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Info_Var_Samp_Fields = {
  __typename?: 'validator_info_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_info" */
export type Validator_Info_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Info_Variance_Fields = {
  __typename?: 'validator_info_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_info" */
export type Validator_Info_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** input type for inserting data into table "validator" */
export type Validator_Insert_Input = {
  blocks?: InputMaybe<Block_Arr_Rel_Insert_Input>;
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  consensus_pubkey?: InputMaybe<Scalars['String']['input']>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Arr_Rel_Insert_Input>;
  staked_balances?: InputMaybe<Staked_Balances_Arr_Rel_Insert_Input>;
  validator_info?: InputMaybe<Validator_Info_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Max_Fields = {
  __typename?: 'validator_max_fields';
  consensus_address?: Maybe<Scalars['String']['output']>;
  consensus_pubkey?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Validator_Min_Fields = {
  __typename?: 'validator_min_fields';
  consensus_address?: Maybe<Scalars['String']['output']>;
  consensus_pubkey?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "validator" */
export type Validator_Mutation_Response = {
  __typename?: 'validator_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator>;
};

/** input type for inserting object relation for remote table "validator" */
export type Validator_Obj_Rel_Insert_Input = {
  data: Validator_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Validator_On_Conflict>;
};

/** on_conflict condition type for table "validator" */
export type Validator_On_Conflict = {
  constraint: Validator_Constraint;
  update_columns?: Array<Validator_Update_Column>;
  where?: InputMaybe<Validator_Bool_Exp>;
};

/** Ordering options when selecting data from "validator". */
export type Validator_Order_By = {
  blocks_aggregate?: InputMaybe<Block_Aggregate_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  consensus_pubkey?: InputMaybe<Order_By>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  staked_balances_aggregate?: InputMaybe<Staked_Balances_Aggregate_Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
};

/** primary key columns input for table: validator */
export type Validator_Pk_Columns_Input = {
  consensus_address: Scalars['String']['input'];
};

/** select columns of table "validator" */
export enum Validator_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

/** input type for updating data in table "validator" */
export type Validator_Set_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  consensus_pubkey?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status';
  /** An object relationship */
  block?: Maybe<Block>;
  height?: Maybe<Scalars['bigint']['output']>;
  jailed: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  validator_address: Scalars['String']['output'];
  /** An object relationship */
  validator_info: Validator_Info;
};

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate';
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>;
  nodes: Array<Validator_Status>;
};

export type Validator_Status_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Count>;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields';
  avg?: Maybe<Validator_Status_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Status_Max_Fields>;
  min?: Maybe<Validator_Status_Min_Fields>;
  stddev?: Maybe<Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Validator_Status_Variance_Fields>;
};


/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_status" */
export type Validator_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Status_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Status_Max_Order_By>;
  min?: InputMaybe<Validator_Status_Min_Order_By>;
  stddev?: InputMaybe<Validator_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Status_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_status" */
export type Validator_Status_Arr_Rel_Insert_Input = {
  data: Array<Validator_Status_Insert_Input>;
};

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_status" */
export type Validator_Status_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  _not?: InputMaybe<Validator_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
};

/** input type for incrementing numeric columns in table "validator_status" */
export type Validator_Status_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "validator_status" */
export type Validator_Status_Insert_Input = {
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  validator_info?: InputMaybe<Validator_Info_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "validator_status" */
export type Validator_Status_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "validator_status" */
export type Validator_Status_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_status" */
export type Validator_Status_Mutation_Response = {
  __typename?: 'validator_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Status>;
};

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  height?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
};

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** select "validator_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** select "validator_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** input type for updating data in table "validator_status" */
export type Validator_Status_Set_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_status" */
export type Validator_Status_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_status" */
export type Validator_Status_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_status" */
export type Validator_Status_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_status" */
export type Validator_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Status_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  jailed?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_status" */
export type Validator_Status_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

export type Validator_Status_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Status_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Status_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_status" */
export type Validator_Status_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_status" */
export type Validator_Status_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_status" */
export type Validator_Status_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator" */
export type Validator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']['input']>;
  consensus_pubkey?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "validator" */
export enum Validator_Update_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

export type Validator_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Bool_Exp;
};

/** columns and relationships of "validator_voting_power" */
export type Validator_Voting_Power = {
  __typename?: 'validator_voting_power';
  /** An object relationship */
  block?: Maybe<Block>;
  height?: Maybe<Scalars['bigint']['output']>;
  validator_address: Scalars['String']['output'];
  /** An object relationship */
  validator_info: Validator_Info;
  voting_power: Scalars['bigint']['output'];
};

/** aggregated selection of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate = {
  __typename?: 'validator_voting_power_aggregate';
  aggregate?: Maybe<Validator_Voting_Power_Aggregate_Fields>;
  nodes: Array<Validator_Voting_Power>;
};

export type Validator_Voting_Power_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp_Count>;
};

export type Validator_Voting_Power_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'validator_voting_power_aggregate_fields';
  avg?: Maybe<Validator_Voting_Power_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Validator_Voting_Power_Max_Fields>;
  min?: Maybe<Validator_Voting_Power_Min_Fields>;
  stddev?: Maybe<Validator_Voting_Power_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Voting_Power_Sum_Fields>;
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Fields>;
  variance?: Maybe<Validator_Voting_Power_Variance_Fields>;
};


/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Voting_Power_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Voting_Power_Max_Order_By>;
  min?: InputMaybe<Validator_Voting_Power_Min_Order_By>;
  stddev?: InputMaybe<Validator_Voting_Power_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Voting_Power_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Voting_Power_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Voting_Power_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Voting_Power_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Voting_Power_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Voting_Power_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_voting_power" */
export type Validator_Voting_Power_Arr_Rel_Insert_Input = {
  data: Array<Validator_Voting_Power_Insert_Input>;
};

/** aggregate avg on columns */
export type Validator_Voting_Power_Avg_Fields = {
  __typename?: 'validator_voting_power_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_voting_power". All fields are combined with a logical 'AND'. */
export type Validator_Voting_Power_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>;
  _not?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "validator_voting_power" */
export type Validator_Voting_Power_Inc_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "validator_voting_power" */
export type Validator_Voting_Power_Insert_Input = {
  block?: InputMaybe<Block_Obj_Rel_Insert_Input>;
  height?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  validator_info?: InputMaybe<Validator_Info_Obj_Rel_Insert_Input>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Validator_Voting_Power_Max_Fields = {
  __typename?: 'validator_voting_power_max_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Voting_Power_Min_Fields = {
  __typename?: 'validator_voting_power_min_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  validator_address?: Maybe<Scalars['String']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "validator_voting_power" */
export type Validator_Voting_Power_Mutation_Response = {
  __typename?: 'validator_voting_power_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Voting_Power>;
};

/** Ordering options when selecting data from "validator_voting_power". */
export type Validator_Voting_Power_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** input type for updating data in table "validator_voting_power" */
export type Validator_Voting_Power_Set_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'validator_voting_power_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'validator_voting_power_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'validator_voting_power_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_voting_power" */
export type Validator_Voting_Power_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Voting_Power_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Voting_Power_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']['input']>;
  validator_address?: InputMaybe<Scalars['String']['input']>;
  voting_power?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Validator_Voting_Power_Sum_Fields = {
  __typename?: 'validator_voting_power_sum_fields';
  height?: Maybe<Scalars['bigint']['output']>;
  voting_power?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

export type Validator_Voting_Power_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Validator_Voting_Power_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Validator_Voting_Power_Set_Input>;
  /** filter the rows which have to be updated */
  where: Validator_Voting_Power_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'validator_voting_power_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'validator_voting_power_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Voting_Power_Variance_Fields = {
  __typename?: 'validator_voting_power_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  voting_power?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

export type AllVotesQueryVariables = Exact<{
  proposalId: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type AllVotesQuery = { __typename?: 'query_root', proposal_vote: Array<{ __typename?: 'proposal_vote', height?: any | null, is_valid: boolean, option: string, proposal_id: number, timestamp?: any | null, voter_address: string, weight: string, block?: { __typename?: 'block', transactions: Array<{ __typename?: 'transaction', height: any, hash: string, memo?: string | null, success: boolean, messages: any }> } | null }>, proposal_vote_aggregate: { __typename?: 'proposal_vote_aggregate', aggregate?: { __typename?: 'proposal_vote_aggregate_fields', count: number } | null } };

export type BalanceQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type BalanceQuery = { __typename?: 'query_root', action_account_balance: Array<{ __typename?: 'balances', coins: Array<any> }> };

export type BlockHeightQueryVariables = Exact<{
  timestamp: Scalars['timestamp']['input'];
}>;


export type BlockHeightQuery = { __typename?: 'query_root', block: Array<{ __typename?: 'block', timestamp: any, height: any }> };

export type BlockTimeQueryVariables = Exact<{
  height?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type BlockTimeQuery = { __typename?: 'query_root', block: Array<{ __typename?: 'block', timestamp: any, height: any }> };

export type DelegatedQueryVariables = Exact<{
  where?: InputMaybe<Staked_Balances_Bool_Exp>;
}>;


export type DelegatedQuery = { __typename?: 'query_root', staked_balances: Array<{ __typename?: 'staked_balances', amount: any, height?: any | null }> };

export type ParamsQueryVariables = Exact<{ [key: string]: never; }>;


export type ParamsQuery = { __typename?: 'query_root', gov_params: Array<{ __typename?: 'gov_params', tally_params: any, deposit_params: any, voting_params: any }> };

export type ProposalQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProposalQuery = { __typename?: 'query_root', proposal: Array<{ __typename?: 'proposal', content: any, deposit_end_time?: any | null, description: string, proposal_route: string, proposal_type: string, id: number, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_votes: Array<{ __typename?: 'proposal_vote', voter_address: string, option: string, weight: string, height?: any | null }>, proposal_tally_results: Array<{ __typename?: 'proposal_tally_result', abstain: string, height?: any | null, no: string, no_with_veto: string, yes: string }>, proposal_deposits: Array<{ __typename?: 'proposal_deposit', amount?: Array<any> | null, depositor_address?: string | null, proposal_id: number, timestamp?: any | null }> }> };

export type ProposalTalliesQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProposalTalliesQuery = { __typename?: 'query_root', proposal_tally_result: Array<{ __typename?: 'proposal_tally_result', abstain: string, no: string, height?: any | null, no_with_veto: string, yes: string, proposal_id?: number | null }> };

export type ProposalsActiveQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  where?: InputMaybe<Proposal_Bool_Exp>;
}>;


export type ProposalsActiveQuery = { __typename?: 'query_root', all_proposals: Array<{ __typename?: 'proposal', content: any, deposit_end_time?: any | null, description: string, id: number, proposal_type: string, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_deposits: Array<{ __typename?: 'proposal_deposit', amount?: Array<any> | null, depositor_address?: string | null }>, proposal_votes_aggregate: { __typename?: 'proposal_vote_aggregate', aggregate?: { __typename?: 'proposal_vote_aggregate_fields', count: number } | null } }>, proposal_aggregate: { __typename?: 'proposal_aggregate', aggregate?: { __typename?: 'proposal_aggregate_fields', count: number } | null } };

export type ProposalsFailedQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  where?: InputMaybe<Proposal_Bool_Exp>;
}>;


export type ProposalsFailedQuery = { __typename?: 'query_root', all_proposals: Array<{ __typename?: 'proposal', content: any, deposit_end_time?: any | null, description: string, id: number, proposal_type: string, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_deposits: Array<{ __typename?: 'proposal_deposit', amount?: Array<any> | null, depositor_address?: string | null }>, proposal_votes_aggregate: { __typename?: 'proposal_vote_aggregate', aggregate?: { __typename?: 'proposal_vote_aggregate_fields', count: number } | null } }>, proposal_aggregate: { __typename?: 'proposal_aggregate', aggregate?: { __typename?: 'proposal_aggregate_fields', count: number } | null } };

export type ProposalsPassedQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  where?: InputMaybe<Proposal_Bool_Exp>;
}>;


export type ProposalsPassedQuery = { __typename?: 'query_root', all_proposals: Array<{ __typename?: 'proposal', content: any, deposit_end_time?: any | null, description: string, id: number, proposal_type: string, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_deposits: Array<{ __typename?: 'proposal_deposit', amount?: Array<any> | null, depositor_address?: string | null }>, proposal_votes_aggregate: { __typename?: 'proposal_vote_aggregate', aggregate?: { __typename?: 'proposal_vote_aggregate_fields', count: number } | null } }>, proposal_aggregate: { __typename?: 'proposal_aggregate', aggregate?: { __typename?: 'proposal_aggregate_fields', count: number } | null } };

export type ProposalsRejectedQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  where?: InputMaybe<Proposal_Bool_Exp>;
}>;


export type ProposalsRejectedQuery = { __typename?: 'query_root', all_proposals: Array<{ __typename?: 'proposal', content: any, deposit_end_time?: any | null, description: string, id: number, proposal_type: string, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_deposits: Array<{ __typename?: 'proposal_deposit', amount?: Array<any> | null, depositor_address?: string | null }>, proposal_votes_aggregate: { __typename?: 'proposal_vote_aggregate', aggregate?: { __typename?: 'proposal_vote_aggregate_fields', count: number } | null } }>, proposal_aggregate: { __typename?: 'proposal_aggregate', aggregate?: { __typename?: 'proposal_aggregate_fields', count: number } | null } };

export type ProposalsSearchQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  searchString: Scalars['String']['input'];
}>;


export type ProposalsSearchQuery = { __typename?: 'query_root', all_proposals: Array<{ __typename?: 'proposal', content: any, deposit_end_time?: any | null, description: string, id: number, proposal_type: string, proposer_address: string, status?: string | null, submit_time: any, title: string, voting_end_time?: any | null, voting_start_time?: any | null, proposal_deposits: Array<{ __typename?: 'proposal_deposit', amount?: Array<any> | null, depositor_address?: string | null }>, proposal_votes_aggregate: { __typename?: 'proposal_vote_aggregate', aggregate?: { __typename?: 'proposal_vote_aggregate_fields', count: number } | null } }>, proposal_aggregate: { __typename?: 'proposal_aggregate', aggregate?: { __typename?: 'proposal_aggregate_fields', count: number } | null } };

export type StakingQueryVariables = Exact<{ [key: string]: never; }>;


export type StakingQuery = { __typename?: 'query_root', staking_pool: Array<{ __typename?: 'staking_pool', bonded_tokens: string, height?: any | null, not_bonded_tokens: string }> };

export type ValSetQueryVariables = Exact<{
  height: Scalars['bigint']['input'];
}>;


export type ValSetQuery = { __typename?: 'query_root', proposal_validator_status_snapshot: Array<{ __typename?: 'validator_status', height?: any | null, jailed: boolean, status: string, validator_address: string, validator_info: { __typename?: 'validator_info', self_delegate_address?: string | null, validator_descriptions: Array<{ __typename?: 'validator_description', identity?: string | null, avatar_url?: string | null, details?: string | null, moniker?: string | null, website?: string | null }> } }> };

export type ValidatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorsQuery = { __typename?: 'query_root', validator_status: Array<{ __typename?: 'validator_status', height?: any | null, jailed: boolean, status: string, validator_address: string, validator_info: { __typename?: 'validator_info', self_delegate_address?: string | null, validator_descriptions: Array<{ __typename?: 'validator_description', identity?: string | null, avatar_url?: string | null, details?: string | null, moniker?: string | null, website?: string | null }> } }> };

export type VoteHistoryQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type VoteHistoryQuery = { __typename?: 'query_root', proposal_vote: Array<{ __typename?: 'proposal_vote', option: string, weight: string, height?: any | null, voter_address: string, proposal_id: number, is_valid: boolean }> };

export type VoteOptionQueryVariables = Exact<{
  proposalId: Scalars['Int']['input'];
  option: Scalars['String']['input'];
}>;


export type VoteOptionQuery = { __typename?: 'query_root', proposal_vote_aggregate: { __typename?: 'proposal_vote_aggregate', aggregate?: { __typename?: 'proposal_vote_aggregate_fields', count: number } | null } };

export type VotesQueryVariables = Exact<{
  address: Scalars['String']['input'];
  proposalId: Scalars['Int']['input'];
  propId: Scalars['String']['input'];
}>;


export type VotesQuery = { __typename?: 'query_root', proposal_vote: Array<{ __typename?: 'proposal_vote', voter_address: string, option: string, height?: any | null, proposal_id: number, timestamp?: any | null, weight: string, block?: { __typename?: 'block', transactions: Array<{ __typename?: 'transaction', height: any, hash: string, memo?: string | null, success: boolean, messages: any }> } | null }> };


export const AllVotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllVotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal_vote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"voter_address"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"voter_address"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"messages"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_contains"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}}}]}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_vote_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<AllVotesQuery, AllVotesQueryVariables>;
export const BalanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Balance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"action_account_balance"},"name":{"kind":"Name","value":"balances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coins"}}]}}]}}]} as unknown as DocumentNode<BalanceQuery, BalanceQueryVariables>;
export const BlockHeightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlockHeight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timestamp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"timestamp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timestamp"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"asc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<BlockHeightQuery, BlockHeightQueryVariables>;
export const BlockTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BlockTime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<BlockTimeQuery, BlockTimeQueryVariables>;
export const DelegatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Delegated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"staked_balances_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staked_balances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"validator"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"validator"},"value":{"kind":"EnumValue","value":"desc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]} as unknown as DocumentNode<DelegatedQuery, DelegatedQueryVariables>;
export const ParamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Params"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gov_params"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tally_params"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_params"}},{"kind":"Field","name":{"kind":"Name","value":"voting_params"}}]}}]}}]} as unknown as DocumentNode<ParamsQuery, ParamsQueryVariables>;
export const ProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Proposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_route"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voter_address"}},{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_tally_results"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abstain"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"no"}},{"kind":"Field","name":{"kind":"Name","value":"no_with_veto"}},{"kind":"Field","name":{"kind":"Name","value":"yes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalQuery, ProposalQueryVariables>;
export const ProposalTalliesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalTallies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal_tally_result"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abstain"}},{"kind":"Field","name":{"kind":"Name","value":"no"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"no_with_veto"}},{"kind":"Field","name":{"kind":"Name","value":"yes"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}}]}}]}}]} as unknown as DocumentNode<ProposalTalliesQuery, ProposalTalliesQueryVariables>;
export const ProposalsActiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalsActive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"proposal_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all_proposals"},"name":{"kind":"Name","value":"proposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_first_order"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalsActiveQuery, ProposalsActiveQueryVariables>;
export const ProposalsFailedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalsFailed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"proposal_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all_proposals"},"name":{"kind":"Name","value":"proposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"failed_first_order"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalsFailedQuery, ProposalsFailedQueryVariables>;
export const ProposalsPassedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalsPassed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"proposal_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all_proposals"},"name":{"kind":"Name","value":"proposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"passed_first_order"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalsPassedQuery, ProposalsPassedQueryVariables>;
export const ProposalsRejectedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalsRejected"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"proposal_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all_proposals"},"name":{"kind":"Name","value":"proposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"rejected_first_order"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalsRejectedQuery, ProposalsRejectedQueryVariables>;
export const ProposalsSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProposalsSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"all_proposals"},"name":{"kind":"Name","value":"proposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active_first_order"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deposit_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_type"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_deposits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"depositor_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_votes_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposer_address"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"submit_time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"voting_end_time"}},{"kind":"Field","name":{"kind":"Name","value":"voting_start_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"proposal_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchString"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ProposalsSearchQuery, ProposalsSearchQueryVariables>;
export const StakingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Staking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staking_pool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bonded_tokens"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"not_bonded_tokens"}}]}}]}}]} as unknown as DocumentNode<StakingQuery, StakingQueryVariables>;
export const ValSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ValSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal_validator_status_snapshot"},"name":{"kind":"Name","value":"validator_status"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"validator_address"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"validator_address"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"jailed"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"validator_address"}},{"kind":"Field","name":{"kind":"Name","value":"validator_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"self_delegate_address"}},{"kind":"Field","name":{"kind":"Name","value":"validator_descriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identity"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"moniker"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ValSetQuery, ValSetQueryVariables>;
export const ValidatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validator_status"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"validator_address"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"validator_address"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc_nulls_last"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"jailed"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"validator_address"}},{"kind":"Field","name":{"kind":"Name","value":"validator_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"self_delegate_address"}},{"kind":"Field","name":{"kind":"Name","value":"validator_descriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identity"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_url"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"moniker"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ValidatorsQuery, ValidatorsQueryVariables>;
export const VoteHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VoteHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal_vote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"voter_address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"voter_address"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}}]}}]}}]} as unknown as DocumentNode<VoteHistoryQuery, VoteHistoryQueryVariables>;
export const VoteOptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VoteOption"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"option"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal_vote_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_valid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"option"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"option"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<VoteOptionQuery, VoteOptionQueryVariables>;
export const VotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Votes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"propId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proposal_vote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proposalId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"voter_address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"voter_address"}},{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"proposal_id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"messages"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_contains"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"proposal_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"propId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"voter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"messages"}}]}}]}}]}}]}}]} as unknown as DocumentNode<VotesQuery, VotesQueryVariables>;