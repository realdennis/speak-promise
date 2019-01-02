/*
 * Author: @realdennis
 * Description:
 *  The default `speechSynthesis.speak` always returns `undefined`,
 *  But I think the promise will be fine when the SpeechSynthesisUtterance end event is triggered.
 * Usage:
 *  import speak from 'speak-promise'
 *  speak(`Your Utterance`).then() // ES6
 *  await speak(`Your Utterance`)  // ES7
 */
export default Utterance =>
  new Promise((resolve, reject) => {
    Utterance.addEventListener('end', resolve, true);
    Utterance.addEventListener('error', reject, true);
    speechSynthesis.speak(Utterance);
  });
