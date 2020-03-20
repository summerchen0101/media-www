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
  }))
}
