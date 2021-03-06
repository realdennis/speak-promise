# speak-promise

- [Demo](https://realdennis.github.io/speak-promise/) 
- Return `Promise` when using `speechSynthesis.speak` to speak the `SpeechSynthesisUtterance` instance.

## Description
- `pending` when has not actually been spoken.
- `resolve` when has already been spoken.
  -  `end` event of `SpeechSynthesisUtterance`
- `reject` when error occurs.
  -  `error` event of `SpeechSynthesisUtterance`

## Usage

```
$ npm install speak-promise
```

```
import speakPromise from 'speak-promise'
let msg = new SpeechSynthesisUtterance('Hello world')
speakPromise(msg).then(/*do something*/) // ES6
await speakPromise(msg)  // ES7
```

