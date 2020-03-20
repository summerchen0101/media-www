import { EpisodeStatus } from '@/lib/constants/EpisodeStatus'
export default {
  latestList: state => state.latestList.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.title,
    episodeCount: t.episodes_count,
    episodeStatus: t.episode_status
  })),
  filterTypes: state => state.filterTypes,
  orderTypes: state => state.orderTypes,
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
    title: t.title
  })),
  rankList: state => state.rankList.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.title,
    episodeCount: t.episodes_count,
    episodeStatus: t.episode_status
  })),
  list: state => state.list.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.title,
    episodeCount: t.episodes_count,
    episodeStatus: t.episode_status
  })),
  total: state => +state.total,
  detail: (state) => {
    const _d = state.detail
    return {
      id: _d.id,
      title: _d.title,
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
  }
}
