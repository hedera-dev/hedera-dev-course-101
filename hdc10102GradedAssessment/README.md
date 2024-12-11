# Graded Assessment: Querying Hedera Network State

Graded assessment materials for module 101-02 of the Hedera Developer Course.

Status: Note that this module is still a work in progress.
Materials that are not available yet or incomplete are marked with "(WIP)".

## Instructions

This subdirectory within the Hedera Developer Course repo is the starting point,
and you will need to make a fresh copy of it within your own git repository,
and use that repo for submissions.
You **should not** work directly within this repo (it will not graded).

If you have yet to initialise a repo for assessments submissions,
perform the following steps:

```shell
mkdir -p ../hedera-dev-course-101-graded-assessments
cd hedera-dev-course-101-graded-assessments
git init
```

Copy this subdirectory into your repo for assessment submissions,
like so:

```shell
cp -r ./hdc10102GradedAssessment/ ../hedera-dev-course-101-graded-assessments/hdc10102Submission/
```

Now you may begin working on your submission for this module!

## Task Description

(1) Using the file `script-hdc10102Task01.js`

- Edit this file to perform a Mirror Node API request to retrieve
  block `3333` from Hedera Testnet.
- You will need to do your own research to work out which API method
  will yield this information.
- Hint: Use **Hedera Mirror Node REST API (Testnet)** for this research.
- Set the return value of the function (`result`) to the value of this block's hash

(2) Using the file `script-hdc10102Task02.js`

- Edit this file to perform a JSON-RPC request to retrieve
  the balance of account `0.0.2`, whose EVM address is
  `0x0000000000000000000000000000000000000002`.
- You will need to do your own research to work out which RPC method
  will yield this information.
- Hint: Use **JSON-RPC API (Ethereum)** or **Hedera RPC (QuickNode)**
  for this research.
- Set the return value of the function (`result`) to
  the value of this account's balance -
  use `BigInt` instead of `Number`.

(3) Using the file `script-hdc10102Task03.txt`

- Edit this file to include the Hashscan URL to view
  account `0.0.10`.
- You will need to do your own research to work out which Hashscan page
  will yield this information.
- The entire contents of this file should be just the URL

## Submission Instructions

Create a new branch `hdc10102` in the git repo,
add and commit the files that you wish to submit,
and finally push this branch to your git remote.
The following commands may be useful:

```shell
git checkout main
git checkout -b hdc10102
# git add ... (the files for your submission)
# git commit ...
git push origin hdc10102
```

- Ensure that your git repo is on Github, and is private.
- Ensure that your git repo has been shared with the
  `hedera-dev-assessor` Github account.
- Ensure that your git repo has been tagged with
  `hedera` and `course`
