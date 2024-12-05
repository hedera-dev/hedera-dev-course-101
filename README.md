# Hedera Developer Course 101

Demo repos for Hedera Developer Course 101 - Basics.

<a href="https://gitpod.io/?autostart=true&editor=code&workspaceClass=g1-standard#https://github.com/hedera-dev/hedera-dev-course-101" target="_blank" rel="noreferrer">
  <img src="./img/gitpod-open-button.svg" />
</a>

To follow along, please read the **accompanying tutorial** at [docs.hedera.com](#TODO_TUTORIAL_ROOT_LINK) (WIP).

> ⚠️ NOTE that this repo is still a work in progress,
> and is therefore incomplete.
> Sections are explicitly marked `(WIP)` as markers/ reminders.

## How to run

You may choose to run this demo repo and follow along the tutorial, either:
(a) on your own computer (recommended for experienced developers), or
(b) using Gitpod (recommended for quick/ easy setup).

### How to run on your computer

To run on your own computer, `git clone` this repo,
and follow the instructions in the "pre-requisites" section of the accompanying tutorial.

1. Install all the prerequisite software
1. Run `./util/00-main.sh` and this script will interactively prompt you,
   and populate the values needed in the `.env` file
1. Run `./util/03-get-dependencies.sh` and this script will install the required dependencies
1. Run `./util/04-rpcrelay-run.sh` and this script will run a Hedera JSON-RPC Relay instance
   - Note that this requires `docker` to be available on your system
   - Note that you may delay performing this step until later,
     you only need it for HSCS related sequences
1. Congratulations, you can now move on to the sequences! 🎉

### How to run using Gitpod

To run on Gitpod (a cloud development environment), click the button below:

<a href="https://gitpod.io/?autostart=true&editor=code&workspaceClass=g1-standard#https://github.com/hedera-dev/hedera-dev-course-101" target="_blank" rel="noreferrer">
  <img src="./img/gitpod-open-button.svg" />
</a>

1. Wait for Gitpod to load, this should take less than 10 seconds
1. In the VS code terminal, you should see 3 terminals, `get_deps`, `rpcrelay_run`, and `main`
1. You do not need to use the `get_deps` and `rpcrelay_run` terminals, simply let them run in the background
1. In the `main` terminal, which is the one that displays by default, a script will interactively prompt you
1. Congratulations, you can now move on to the sequences! 🎉

## Sequences

This repo contains the code required for the **labs** in Hedera Developer Course 101.
The following sections outline what each sequence will cover.

Each lab in this course contains a video demonstrating the steps
which are required to complete the lab.
This repo contains the initial (starting point) of the lab,
and you will simply need to replicate the same steps as seen in the video,
and thereby complete the lab.

(WIP)

- Get started
  - [Smoke Test](smokeTest/)
- Module 02 - Blockchain State
  - [Lab: Query network state with JSON-RPC](hdc10102LabQueryRpc/)

## TODOs

- [x] Write the sequence steps for lab 101-02 querying with RPC

## Author

[Brendan Graetz](https://blog.bguiz.com/)

## Licence

MIT
