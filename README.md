# Motivation
To have otp inputs more performantly and support webotp api

# key features
- has only one input field, no jumping between multiple inputs
- highly customizable
- support webotp
- zero dependency

# developement guide
I'm new to monorepo and this is my first implementation.
Fist run yarn to install dependencies
```sh
yarn
```
To run the example app first start a `tsc` with `--watch` flag
```sh
yarn workspace react-webotp-input  run tsc --build --watch 
```

then in another terminal you can start the example app to see the live changes from your edits

```sh
yarn workspace example run start 
```

# Pull requests
As always, They are welcome.