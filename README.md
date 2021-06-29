# deepSorter 🎡

Originally **deepSorter** is made to make my life easier dealing with payment signature generation work in my company.

**deepSorter** is designed to sort any `object` or `array` alphabetically (or in its reverse order) regardless of numbers of layers deep.

Feel free to improve this library via a handsome PR 🤝

## Installation

```
npm install deepsorter
```

or 

```
yarn add deepsorter
```

## Usage and example


### Example object with 4 layers deep

```
import deepSorter from "deepsorter"

// example data
const data = {
  "c": ["APPLE", "ORANGE", "BANANA"],
  "a": {
    "dog": {
      "color": "gold",
      "breed": "a dog",
      "happiness": ["SAD", "HAPPY", "EXCITED"]
    },
    "numbers": [8.5, "WORLD", 1, 50, "HELLO", 2],
    "cat": {
      "happiness": ["HAPPY", "SAD", "EXCITED"],
      "breed": "a cat",
      "color": "orange",
    },
    "deepArray": [
      {
        "foo": {
          "name": "Rex",
          "age": 26,
          "interests": ["coding", "problem solving", "etc etc"]
        },
        "bar": {
          "name": "Low",
          "age": 100,
          "interests": ["self driving cars", "artificial intelligence"]
        }
      }
    ]
  }
}
```


### Sort Alphabatically

```
deepSorter(data)
{
  "a": {
    "cat": {
      "breed": "a cat",
      "color": "orange",
      "happiness": ["EXCITED", "HAPPY", "SAD"]
    },
    "deepArray": [
      {
        "bar": {
          "age": 100,
          "interests": ["artificial intelligence", "self driving cars"],
          "name": "Low",
        },
        "foo": {
          "age": 26,
          "interests": ["coding", "etc etc", "problem solving"],
          "name": "Rex",
        }
      }
    ],
    "dog": {
      "breed": "a dog",
      "color": "gold",
      "happiness": ["EXCITED", "HAPPY", "SAD"]
    },
    "numbers": [1, 2, 8.5, 50, "HELLO", "WORLD"]
  },
  "c": ["APPLE", "BANANA", "ORANGE"]
}
```

### Sort in reverse order

```
deepSorter(data, reverse=true)
{
  "c": ["ORANGE", "BANANA", "APPLE"],
  "a": {
    "numbers": ["WORLD", "HELLO", 50, 8.5, 2, 1],
    "dog": {
      "happiness": ["SAD", "HAPPY", "EXCITED"],
      "color": "gold",
      "breed": "a dog"
    },
    "deepArray": [
      {
        "foo": {
          "name": "Rex",
          "interests": ["problem solving", "etc etc", "coding"],
          "age": 26,
        },
        "bar": {
          "name": "Low",
          "interests": ["self driving cars", "artificial intelligence"],
          "age": 100,
        }
      }
    ],
  "cat": {
    "happiness": ["SAD", "HAPPY", "EXCITED"],
    "color": "orange",
    "breed": "a cat"
  }
}
```

## Test

```
yarn run test
```