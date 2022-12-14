(function() {
  const threads = [
    {
      'brand': 'Pantone Matching System',
      'code': '108',
      'hexCode': '#fedb00',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '117',
      'hexCode': '#c99700',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1215',
      'hexCode': '#fbd872',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '122',
      'hexCode': '#fed141',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1225',
      'hexCode': '#ffc845',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '123',
      'hexCode': '#ffc72c',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1235',
      'hexCode': '#ffb81c',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '124',
      'hexCode': '#eaaa00',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1245',
      'hexCode': '#c69214',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1355',
      'hexCode': '#ffc56e',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '136',
      'hexCode': '#ffbf3f',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '138',
      'hexCode': '#de7c00',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '139',
      'hexCode': '#af6d04',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '140',
      'hexCode': '#74531c',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1405',
      'hexCode': '#6e4c1e',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1575',
      'hexCode': '#ff7f32',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1585',
      'hexCode': '#ff6a13',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '162',
      'hexCode': '#ffbe9f',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '165',
      'hexCode': '#ff671f',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1655',
      'hexCode': '#fc4c02',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '167',
      'hexCode': '#be531c',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1675',
      'hexCode': '#a9431e',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '172',
      'hexCode': '#fa4616',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1787',
      'hexCode': '#f4364c',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1795',
      'hexCode': '#d22630',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1807',
      'hexCode': '#a4343a',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '184',
      'hexCode': '#f65275',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '186',
      'hexCode': '#c8102e',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '1895',
      'hexCode': '#f5b6cd',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '193',
      'hexCode': '#bf0d3e',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '198',
      'hexCode': '#df4661',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '200',
      'hexCode': '#ba0c2f',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '201',
      'hexCode': '#9d2235',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '202',
      'hexCode': '#862633',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '209',
      'hexCode': '#6f263d',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '218',
      'hexCode': '#e56db1',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '219',
      'hexCode': '#da1884',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '229',
      'hexCode': '#672146',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '241',
      'hexCode': '#af1685',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2607',
      'hexCode': '#500778',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2635',
      'hexCode': '#c5b4e3',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '267',
      'hexCode': '#5f259f',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2695',
      'hexCode': '#2e1a47',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2706',
      'hexCode': '#cbd3eb',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2708',
      'hexCode': '#b8ccea',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2717',
      'hexCode': '#a7c6ed',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2718',
      'hexCode': '#5c88da',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '272',
      'hexCode': '#7474c1',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '274',
      'hexCode': '#211551',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2748',
      'hexCode': '#001871',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2755',
      'hexCode': '#250e62',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2756',
      'hexCode': '#151f6d',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2767',
      'hexCode': '#13294b',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2768',
      'hexCode': '#071d49',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '278',
      'hexCode': '#8bb8e8',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '279',
      'hexCode': '#418fde',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '283',
      'hexCode': '#92c1e9',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '284',
      'hexCode': '#6cace4',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '285',
      'hexCode': '#0072ce',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '288',
      'hexCode': '#002d72',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2915',
      'hexCode': '#62b5e5',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2925',
      'hexCode': '#009cde',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2945',
      'hexCode': '#004c97',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2955',
      'hexCode': '#003865',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '299',
      'hexCode': '#00a3e0',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '2995',
      'hexCode': '#00a9e0',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '303',
      'hexCode': '#002a3a',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '3105',
      'hexCode': '#68d2df',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '3115',
      'hexCode': '#00c1d5',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '312',
      'hexCode': '#00a9ce',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '321',
      'hexCode': '#008c95',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '3255',
      'hexCode': '#2cd5c4',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '3282',
      'hexCode': '#008578',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '335',
      'hexCode': '#007b5f',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '348',
      'hexCode': '#00843d',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '349',
      'hexCode': '#046a38',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '355',
      'hexCode': '#009639',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '359',
      'hexCode': '#a1d884',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '362',
      'hexCode': '#509e2f',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '364',
      'hexCode': '#4a7729',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '369',
      'hexCode': '#64a70b',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '370',
      'hexCode': '#658d1b',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '375',
      'hexCode': '#97d700',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '376',
      'hexCode': '#84bd00',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '378',
      'hexCode': '#59621d',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '389',
      'hexCode': '#d0df00',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '399',
      'hexCode': '#a09200',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '420',
      'hexCode': '#c7c9c7',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '421',
      'hexCode': '#b2b4b2',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '422',
      'hexCode': '#9ea2a2',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '429',
      'hexCode': '#a2aaad',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '430',
      'hexCode': '#7c878e',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '431',
      'hexCode': '#5b6770',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '451',
      'hexCode': '#9b945f',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '453',
      'hexCode': '#bfbb98',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '464',
      'hexCode': '#8b5b29',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '465',
      'hexCode': '#b9975b',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '466',
      'hexCode': '#c6aa76',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '4685',
      'hexCode': '#e0c6ad',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '470',
      'hexCode': '#a45a2a',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '476',
      'hexCode': '#4e3629',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '505',
      'hexCode': '#6f2c3f',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '506',
      'hexCode': '#84344e',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '5305',
      'hexCode': '#c6c4d2',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '5483',
      'hexCode': '#4f868e',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '5555',
      'hexCode': '#5c7f71',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '5635',
      'hexCode': '#94a596',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '567',
      'hexCode': '#173f35',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '5855',
      'hexCode': '#c0bb87',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '639',
      'hexCode': '#0095c8',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '647',
      'hexCode': '#236192',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '651',
      'hexCode': '#a7bcd6',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '652',
      'hexCode': '#7d9bc1',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '653',
      'hexCode': '#326295',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '660',
      'hexCode': '#407ec9',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '661',
      'hexCode': '#003594',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '666',
      'hexCode': '#a192b2',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '722',
      'hexCode': '#c88242',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '726',
      'hexCode': '#e0c09f',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '7548',
      'hexCode': '#ffc600',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '7713',
      'hexCode': '#007d8a',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '7724',
      'hexCode': '#00966c',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '802',
      'hexCode': '#44d62c',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '804',
      'hexCode': '#ffaa4d',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '806',
      'hexCode': '#ff3eb5',
    },
    {
      'brand': 'Pantone Matching System',
      'code': 'Black 6',
      'hexCode': '#101820',
    },
    {
      'brand': 'Pantone Matching System',
      'code': 'Black 7',
      'hexCode': '#3d3935',
    },
    {
      'brand': 'Pantone Matching System',
      'code': 'Cool Gray 10',
      'hexCode': '#63666a',
    },
    {
      'brand': 'Pantone Matching System',
      'code': 'Cool Gray 9',
      'hexCode': '#75787b',
    },
    {
      'brand': 'Pantone Matching System',
      'code': 'Medium Yellow',
      'hexCode': '#ffd900',
    },
    {
      'brand': 'Pantone Matching System',
      'code': 'Warm Red',
      'hexCode': '#f9423a',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '9023',
      'hexCode': '#F4EBDE',
    },
    {
      'brand': 'Pantone Matching System',
      'code': '9220',
      'hexCode': '#F7E6CE',
    },
  ];

  const root = document.getElementById('root');

  const el = root.querySelector('.thread');

  const layout = root.removeChild(el);

  root.append(/*root.querySelector('h1'),*/ ...threads.map(({ brand, code, hexCode }) => {
    const clone = layout.cloneNode(true);

    clone.querySelector('.name').innerHTML = brand;
    clone.querySelector('.code').innerHTML = code;
    clone.querySelector('.color').innerHTML = hexCode;
    clone.querySelector('.example').style.backgroundColor = hexCode;

    return clone;
  }));
})();
