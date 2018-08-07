# Abjadify ( https://abjadify.netlify.com/ )

## Application details
  Each arabic letter has number values assigned to them, Abjadify uses both the heavenly and earthly abjad values to take the user inputted arabic text and return total sums of the text, sums for each word, and number values for every letter. Abjadify also informs the user whether the text they have inputted is divisible by either 9 or 7 and the mod 9 value of the text.

## Instructions
To run locally:
- clone down the repo ( https://github.com/arsalonk/abjadify )
- run npm install
- run npm start

Using the App:
- Input any arabic text or passage from the Quran into the input box
- hit enter or press the submit button
- the app will generate data based on the input
- the letters sum portion is grouped by word by default and displays from right to left, flipping the toggle switch will seperate by letter

## Teck Stack
- React
- react-dom / react-router-dom
- Redux
- redux-thunk / react-redux