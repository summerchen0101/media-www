export default function () {
  return {
    latestList: [],
    filterTypes: ['region', 'year', 'genres', 'lang', 'status'],
    orderTypes: ['hot', 'comment', 'new'],

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
    sources: []
  }
}
