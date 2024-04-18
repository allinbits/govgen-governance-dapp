# GovGen Governance dApp

GovGen governance dApp is a simple interface, that seamlessly integrates with your existing wallets such as Keplr, Cosmostation or Leap to allow you to interact with GovGen in a secure and efficient manner. There is no need to enter mnemonics, existing as a platform enabling a web UI to [GovGen](https://govgen.io) governance, you simply connect the dApp to your preferred wallet and you gain immediate access to GovGen’s governance functionalities. These functionalties include viewing proposals and proposal statistics, participating in discussions, providing useful links for each proposal as well as performing transactions to vote or deposit on proposals. 

Our goal with the GovGen governance dApp is to empower the community to effortlessly participate in these types of processes by gauging community sentiment in regards to the potential outcome of AtomOne while making it more accessible to engage, regardless of their technical expertise or background.

## Usage

**NOTE: The mainnet deployment is not live yet**

You can visit the deployed dApp at [https://app.govgen.io/](https://app.govgen.io/) for mainnet (pending) or [https://app.govgen.dev/](https://app.govgen.dev/) for devnet.

The following is a showcase of the existing functionality.

### Homepage

The home page provides a paged view of all existing governance proposals. It shows 16 proposals per page and you can navigate across pages using the navigation arrows at the bottom right.

The default ordering is to show active proposals first (i.e. those in `VOTING` or `DEPOSIT` state) but you can use the dropdown control to switch to `PASSED` first, `REJECTED` first or `FAILED` first.

There is also a dropdown control to filter by proposal status altogether as well as a search box to search proposals based on `Title` and `Description` content.

In all the pages, there is a button at the top that allows you to connect your address in order to display balances or voting history as well as enable governance-related transactions. There are 2 possible options:
- You can either simply supply your public govgen address with which the dApp can generate the appropriate CLI commands for voting and depositing txs signable by an offline computer as described [here](https://github.com/atomone-hub/govgen-proposals/blob/main/submit-tx-securely.md). **RECOMMENDED**
- Or you can simply connect your Keplr/Leap/Cosmostation wallets and authorize and submit TXs through their familiar interface.

### Proposal page

The page for a specific proposal (URL format: `https://app.govgen.io/proposals/XXX` or `https://app.govgen.dev/proposals/XXX` for mainnet and devnet respectively, where XXX is the id of the proposal) provides a view of all the proposal's details in a tabbed interface.

There is a hero component that includes the title, status, turnout, necessary quorum, expected result, and current vote tallies. It also consists of a call-to-action to Vote or Deposit (depending on the proposal status).

Under the hero component, you will find the following tabs:

- **Description** (default): Contains the proposal description (also renders markdown)
- **Info**: Contains the general proposal information such as proposer address, submission time, initial and total deposit, voting start time/end time and deposit end time (if appropriate) along with the messages contained in the proposal.
- **Voters**: Contains an in-depth analysis of how all accounts have voted and how validators have voted including a complete breakdown of unique votes.
- **Discussions**: Contains the discussion for this specific proposal. The discussion is backed by GitHub discussions and requires authenticating with a GitHub account before you can participate and authorizing the Discusser app.
- **Links**: Contains useful/helpful links provided by the community that add information and context relevant to the proposal. It also contains an upvote/downvote ratio slider that you can use to filter out downvoted links to your liking.

### Deposit popup

It allows you to add to a proposal's deposit to help push it into the voting period. Once you choose the amount you want to deposit you can either generate the CLI command required to create and then sign the TX using the CLI or use your connected wallet to authorize and broadcast.

### Voting popup

Gives you te ability to vote on a proposal either with a single vote (YES/NO/NO WITH VETO/ABSTAIN) or a weighted vote with the weights you require for those 4 options. Like the deposit popup, you can then either generate the CLI command required to create and then sign the TX using the CLI or use your connected wallet to authorize and broadcast.

## Local deployment

If you don't want to use the deployed version, you can deploy it locally. The only requirements are `node` v18+ and `pnpm`.

First, clone the repo using your favorite git tool.

Then install all packages in the repository:

```
pnpm i
```

Then spin up a local instance using:

```
pnpm dev
```

## Bugs & Feedback

Please use [Github Issues](https://github.com/allinbits/govgen-governance-dapp/issues) to inform us of any bugs or issues you encounter and to request features and improvements.

Thank you.