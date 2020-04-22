import { EpisodeStatus } from '@/lib/constants'
export default {
  latestList: state => _(state.latestList)
    .map(t => ({
      id: t.id,
      imgUrl: t.image_path,
      title: t.title,
      episodeStatus: t.episode_status,
      latestEpisode: t.episodes[t.episodes.length - 1].title
    }))
    .take(6)
    .value(),
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
  status: state => state.status.map((st, i) => ({
    id: st,
    label: EpisodeStatus.find(t => t.code === st).label
  })),
  topList: state => state.topList.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.title,
    views: t.views,
    episodeStatus: t.episode_status,
    latestEpisode: t.episodes[t.episodes.length - 1].title
  })),
  maybeLikeList: (state, getters) => _.shuffle(getters.topList),
  list: state => state.list.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.title,
    episodeStatus: t.episode_status,
    latestEpisode: t.episodes[t.episodes.length - 1].title
  })),
  total: state => +state.total,
  detail: (state) => {
    const _d = state.detail
    return {
      id: _d.id,
      title: _d.title,
      views: _d.views,
      imgUrl: _d.image_path,
      episodeStatus: _d.episode_status,
      status: _d.episode_status,
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
    author: t.member.account,
    createdAt: t.created_at,
    content: t.contents
  })),
  commentTotal: state => +state.commentTotal,
  sources: state => state.sources.map(t => ({
    id: t.id,
    name: t.title,
    episodes: t.quote.map(e => ({
      id: e.id,
      title: e.title,
      sourceUrl: e.pivot.url,
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
