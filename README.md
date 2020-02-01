# react-month-frequency

A small configurable component that displays frequency across months

![Example](https://i.imgur.com/1th31hZ.png)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install react-month-frequency
```

## Usage

```javascript
import MonthFreq from "react-month-frequency";

render(){
  return(
      <MonthFreq data={data} config={config} />
  )
}
```

## Config (optional)

The default configuration object has the following shape

```javascript
{
 style:{
  container:{
    width: 470,
    backgroundColor: '#161f29',
    radius: 15
  },
  monthBlockSize: {
    height: 80,
    width: 95
  },
  daySquare: {
    height: 8,
    width: 8,
    color: 'white'
  },
  monthTitle: {
    color: 'white',
    fontSize: 10,
  }
 },
  colorThresholds: [
    {
      from: 0,
      to: 1,
      opacity: 0.1
    },
    {
      from: 1,
      to: 3,
      opacity: 0.2
    },
    {
      from: 3,
      to: 5,
      opacity: 0.4
    },
    {
      from: 5,
      to: 7,
      opacity: 0.6
    },
    {
      from: 7,
      to: 9,
      opacity: 0.8
    },
    {
      from: 9,
      opacity: 1
    }
  ]
}
```

`colorThresholds` is used to configure opacity of day blocks based on data `count` value ranges.

## Data

```javascript
[
  {
    date: "2019/10/24",
    count: 7
  },
  {
    date: "2019/10/23",
    count: 3
  }
];
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
