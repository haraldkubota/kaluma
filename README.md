# types-kaluma

This is (going to be) the @types/kaluma for TypeScript declarations
for [Kaluma](https://kalumajs.org/).

## How to use

Until this is in [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped), install manually:

```bash
# Create a tgz with the types file for Kaluma
tgz="$(pwd)/$(npm pack 2>/dev/null)"

# install as a dev dependency in your Kaluma project
cd ~/YOUR_PROJECT/
npm install --save-dev $tgz
```

## History

* v0.2.0 Add rp2, timers, board and graphics context
