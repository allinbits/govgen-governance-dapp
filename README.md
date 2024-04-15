# GovGen Governance dApp

A platform enabling a web UI to [GovGen](https://govgen.io) governance. It allows usets to view proposals and proposal statistics, participate in discussions and provide useful links for each proposal as well as perform transactions to vote or deposit on proposals.

## Usage

You can visit the deployed dApp at [https://app.govgen.io/](https://app.govgen.io/).

The following is a showcase of the existing functionality.

### Homepage

The home page provides a paged view of all existing governance proposals. It shows 16 proposals per page and you can navigate acrosss pages using the navigation arrows at the bottom right.

The default ordering is to show active proposals first (i.e. those in `VOTING` or `DEPOSIT` state) but you can use the dropdown control to switch to `PASSED` first, `REJECTED` first or `FAILED` first.

There is also a dropdown control to filter by proposal status altogetehr as well as a searchbox to search proposals based on `Title` and `Description` content.

In all the pages there is a button at the top that allows you to connect your address in order to display balances or voting history as well as enabling governance related transactions. There are 2 possible options:
- You can either simply supply your public govgen address with whidh the dApp can generate the appropriate CLI commands for voting and depositing txs signable by an offline computer as described [here](https://github.com/atomone-hub/govgen-proposals/blob/main/submit-tx-securely.md). *RECOMMENDED*
- Or you can simply connect your Keplr/Leap/Cosmostation wallets and authorize and submit TXs through their familiar interface.

### Proposal page

The page for a specific proposal (URL format: `https://app.govgen.io/proposals/XXX` where XXX is the id of the proposal) provides a view of all the proposal's details in a tabbed interface.

There is a hero component which includes the title, status, turnout, necessary quorum, expected result and current vote tallies. It also includes the call-to-action to Vote or Deposit (depending on proposal status).

### Install

Install all packages in the repository.

```
pnpm i
```

### Dev

```
pnpm dev
```

### Build

Recursively build all packages in the monorepo.

```
pnpm build
```
