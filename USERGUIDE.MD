# User Guide

## Commands

- `!bot ping`: The bot will respond with `pong`.

## Adding New Commands

You can add more commands by adding more cases to the switch statement in the `messageCreate` event listener. Here's an example of how to add a `hello` command:

```javascript
switch (target) {
  case "ping":
    message.reply("pong");
    break;
  case "hello":
    message.reply("Hello, world!");
    break;
}
