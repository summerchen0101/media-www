export default function () {
  return {
    latestList: [],
    filterTypes: ['region', 'lang', 'year', 'genres', 'status'],

    // 搜尋項目
    region: [],
    lang: [],
    year: [],
    genres: [],
    status: [],

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
