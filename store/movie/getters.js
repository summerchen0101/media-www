export default {
  latestList: state => _(state.latestList)
    .map(t => ({
      id: t.id,
      imgUrl: t.image_path,
      title: t.name,
      episodeStatus: t.episode_status
    }))
    .value(),
  latest: (state, getters) => {
    return getters.latestList[0] || {}
  },
  filterTypes: state => state.filterTypes,
  region: state => state.region.map(t => ({
    id: t.id,
    label: t.name
  })),
  lang: state => state.lang.map(t => ({
    id: t.id,
    label: t.title
  })),
  genres: state => state.genres.map(t => ({
    id: t.id,
    label: t.title
  })),
  year: state => state.year.map(t => ({
    id: t.id,
    label: t.title
  })),
  topList: state => state.topList.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.name,
    views: t.views,
    episodeStatus: t.episode_status
  })),
  maybeLikeList: (state, getters) => _.shuffle(getters.topList),
  list: state => state.list.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.name,
    episodeStatus: t.episode_status
  })),
  total: state => +state.total,
  detail: (state) => {
    const _d = state.detail
    return {
      id: _d.id,
      title: _d.name,
      views: _d.views,
      imgUrl: _d.image_path,
      starring: _d.starring ? _d.starring.split(',') : [],
      director: _d.director ? _d.director.split(',') : [],
      desc: _d.description,
      updateAt: _d.updated_at,
      year: _d.years.title,
      region: _d.region.name,
      genres: _d.genres.map(t => t.title)
    }
  },
  commentList: state => state.commentList.map(t => ({
    author: t.account,
    createdAt: t.pivot.created_at,
    content: t.pivot.contents
  })),
  commentTotal: state => +state.commentTotal,
  sources: state => state.sources.map(t => ({
    id: t.id,
    name: t.title,
    episodes: t.episode.map(e => ({
      id: e.id,
      title: e.title,
      sourceUrl: e.sources_url.url,
      analyzeRoot: t.analyze_address
    }))
  })),
  episodeBySource (state, getters) {
    return getters.sources.reduce((obj, source) => {
      obj[source.id] = {}
      source.episodes.forEach((episode) => {
        obj[source.id][episode.id] = episode
      })
      return obj
    }, {})
  },
  isFav: state => state.isFav
}
