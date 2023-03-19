# timediff-word

`timediff-word` is a JavaScript utility that calculates the time difference between two timestamps and returns a human-readable string representation of the difference in years, days, hours, minutes, and seconds.

## Installation

You can install `timediff-word` via npm:

```
npm install timediff-word
```
## Usage

To use `timediff-word`, you need to pass two timestamps as arguments to the function:

```javascript
const timediff = require('timediff-word');

const timestamp1 = new Date('2022-01-01T00:00:00Z').getTime();
const timestamp2 = new Date().getTime();

const diff = timediff(timestamp1, timestamp2);

console.log(diff); // "1 year and 76 days"
```
The function will return a string representation of the time difference, using the two largest units of time.

If the time difference is less than one year, the function will only display days, hours, minutes, and seconds.

Examples
Here are a few more examples of how to use timediff-word:

```javascript
const timediff = require('timediff-word');

const timestamp1 = new Date('2022-01-01T00:00:00Z').getTime();
const timestamp2 = new Date().getTime();

const diff1 = timediff(timestamp1, timestamp2);

console.log(diff1); // "1 year and 76 days"

const timestamp3 = new Date('2023-03-17T12:00:00Z').getTime();
const timestamp4 = new Date('2023-03-17T12:30:00Z').getTime();

const diff2 = timediff(timestamp3, timestamp4);

console.log(diff2); // "30 minutes"

const timestamp5 = new Date('2023-03-17T12:00:00Z').getTime();
const timestamp6 = new Date('2023-03-18T12:00:00Z').getTime();

const diff3 = timediff(timestamp5, timestamp6);

console.log(diff3); // "1 day"

const timestamp7 = new Date('2020-01-01T00:00:00Z').getTime();
const timestamp8 = new Date().getTime();

const diff4 = timediff(timestamp7, timestamp8);

console.log(diff4); // "2 years and 76 days"
```

These examples show how to use timediff-word to calculate the time difference between two timestamps in a variety of scenarios, including differences in years, days, hours, and minutes.

## Units
The function returns the two largest units of time in the time difference. The available units and their conversions are:

* Year: 31536000 seconds
* Day: 86400 seconds
* Hour: 3600 seconds
* Minute: 60 seconds
* Second: 1 second


## License
```timediff-word``` is released under the MIT License. See LICENSE for details.

## Contributing
If you find a bug or have a feature request, please open an issue on the GitHub repository.

Pull requests are also welcome!

## Credits
`timediff-word` was created by ``Pritam Kumar``.
## GitHub Repository
The source code for timediff-word can be found at https://github.com/developer-pritam/timediff-word.