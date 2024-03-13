/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query Balance($address: String!) {\n  action_account_balance(address: $address) {\n    coins\n  }\n}": types.BalanceDocument,
    "query Proposal($id: Int!) {\n  proposal(where: {id: {_eq: $id}}) {\n    content\n    deposit_end_time\n    description\n    proposal_route\n    proposal_type\n    proposal_votes {\n      voter_address\n      option\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n    proposal_tally_results {\n      yes\n      no_with_veto\n      no\n      abstain\n    }\n  }\n}": types.ProposalDocument,
    "query ProposalTallies($id: Int!) {\n  proposal_tally_result(where: {proposal_id: {_eq: $id}}) {\n    height\n    no\n    no_with_veto\n    abstain\n    yes\n    proposal_id\n  }\n}": types.ProposalTalliesDocument,
    "query Proposals {\n  deposit_proposals: proposal(\n    where: {status: {_eq: \"PROPOSAL_STATUS_DEPOSIT_PERIOD\"}, proposal_deposits: {}}\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposer_address\n  }\n  voting_proposals: proposal(\n    where: {status: {_eq: \"PROPOSAL_STATUS_VOTING_PERIOD\"}}\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposer_address\n  }\n  all_proposals: proposal {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposer_address\n  }\n}": types.ProposalsDocument,
    "query VoteHistory($address: String!) {\n  proposal_vote(where: {voter_address: {_eq: $address}}) {\n    option\n    voter_address\n    proposal_id\n  }\n}": types.VoteHistoryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Balance($address: String!) {\n  action_account_balance(address: $address) {\n    coins\n  }\n}"): (typeof documents)["query Balance($address: String!) {\n  action_account_balance(address: $address) {\n    coins\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Proposal($id: Int!) {\n  proposal(where: {id: {_eq: $id}}) {\n    content\n    deposit_end_time\n    description\n    proposal_route\n    proposal_type\n    proposal_votes {\n      voter_address\n      option\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n    proposal_tally_results {\n      yes\n      no_with_veto\n      no\n      abstain\n    }\n  }\n}"): (typeof documents)["query Proposal($id: Int!) {\n  proposal(where: {id: {_eq: $id}}) {\n    content\n    deposit_end_time\n    description\n    proposal_route\n    proposal_type\n    proposal_votes {\n      voter_address\n      option\n    }\n    proposer_address\n    status\n    submit_time\n    title\n    voting_end_time\n    voting_start_time\n    proposal_tally_results {\n      yes\n      no_with_veto\n      no\n      abstain\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProposalTallies($id: Int!) {\n  proposal_tally_result(where: {proposal_id: {_eq: $id}}) {\n    height\n    no\n    no_with_veto\n    abstain\n    yes\n    proposal_id\n  }\n}"): (typeof documents)["query ProposalTallies($id: Int!) {\n  proposal_tally_result(where: {proposal_id: {_eq: $id}}) {\n    height\n    no\n    no_with_veto\n    abstain\n    yes\n    proposal_id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Proposals {\n  deposit_proposals: proposal(\n    where: {status: {_eq: \"PROPOSAL_STATUS_DEPOSIT_PERIOD\"}, proposal_deposits: {}}\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposer_address\n  }\n  voting_proposals: proposal(\n    where: {status: {_eq: \"PROPOSAL_STATUS_VOTING_PERIOD\"}}\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposer_address\n  }\n  all_proposals: proposal {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposer_address\n  }\n}"): (typeof documents)["query Proposals {\n  deposit_proposals: proposal(\n    where: {status: {_eq: \"PROPOSAL_STATUS_DEPOSIT_PERIOD\"}, proposal_deposits: {}}\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposer_address\n  }\n  voting_proposals: proposal(\n    where: {status: {_eq: \"PROPOSAL_STATUS_VOTING_PERIOD\"}}\n  ) {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposer_address\n  }\n  all_proposals: proposal {\n    content\n    deposit_end_time\n    description\n    id\n    proposal_type\n    proposal_deposits {\n      amount\n      depositor_address\n    }\n    proposer_address\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query VoteHistory($address: String!) {\n  proposal_vote(where: {voter_address: {_eq: $address}}) {\n    option\n    voter_address\n    proposal_id\n  }\n}"): (typeof documents)["query VoteHistory($address: String!) {\n  proposal_vote(where: {voter_address: {_eq: $address}}) {\n    option\n    voter_address\n    proposal_id\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;