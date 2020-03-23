export default function () {
  return {
    latestList: [],
    filterTypes: ['region', 'year', 'genres', 'lang'],

    // 搜尋項目
    region: [],
    lang: [],
    year: [],
    genres: [],

    source: [],
    topList: [],
    list: [],
    total: 0,
    detail: {},
    commentList: [],
    commentTotal: 0,
    sources: [],

    isFav: false
  }
}
