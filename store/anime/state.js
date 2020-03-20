export default function () {
  return {
    latestList: [],
    filterTypes: ['region', 'lang', 'year', 'genres'],
    orderTypes: ['hot', 'comment', 'new'],
    region: [
      {
        label: '台灣',
        id: 5
      },
      {
        label: '日本',
        id: 7
      },
      {
        label: '美國',
        id: 8
      }
    ],
    lang: [
      {
        label: '韓語',
        id: 9
      },
      {
        label: '英語',
        id: 12
      },
      {
        label: '日文',
        id: 18
      },
      {
        label: '中文',
        id: 20
      }
    ],
    year: [
      {
        label: '2019',
        id: 2
      },
      {
        label: '2020',
        id: 3
      }
    ],
    genres: [
      {
        label: '武打',
        id: 21
      },
      {
        label: '愛情',
        id: 20
      }
    ],
    source: [],
    topList: []
  }
}
