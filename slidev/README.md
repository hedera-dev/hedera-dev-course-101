# Slidev for Hedera Developer Course 101

Slides authored using markdown,
and rendered using [Slidev](https://github.com/slidevjs/slidev).

See [Slidev docs](https://sli.dev/).

## Authoring content

- Edit the [`slides.md`](./slides.md) to update the "master" slide deck,
  which contains the slides for every modules combined.
- Edit the slides markdown files (one per module) to update the slide decks for individual modules.

## Running

### Installation

```shell
pnpm install
```

### Start slides (master deck)

```shell
pnpm dev
```

Then visit [`http://localhost:3030`](http://localhost:3030) -
by default it should open automatically in a new browser window/ tab.

### Start slides (single module deck)

```shell
ln -s ../mod02/slides.md mod02-slides.md
pnpm dev mod02-slides.md
```

Note that symbolic links are necessary because Slidev gets confused when
the target markdown file is in a different directory.
See [bug raised in Slidev](https://github.com/slidevjs/slidev/issues/2071).
