export default {
  ads: state => state.ads
    .reduce((obj, next) => {
      const items = next.advertisement.filter((ad) => {
        return ad.status === 'Y'
      })
      obj[next.id] = items || []
      return obj
    }, {}),
  indexTopAds: (state) => {
    const i = _.findIndex(state.ads, { id: 1 })
    return i > -1 ? state.ads[i].advertisement.filter((ad) => {
      return ad.status === 'Y'
    }) : []
  },
  indexBlockAds: (state) => {
    const i = _.findIndex(state.ads, { id: 2 })
    return i > -1 ? state.ads[i].advertisement.filter((ad) => {
      return ad.status === 'Y'
    }) : []
  },
  filterTopAd: (state) => {
    const i = _.findIndex(state.ads, { id: 3 })
    return i > -1
      ? _(state.ads[i].advertisement).filter({ status: 'Y' }).shuffle().head()
      : []
  },
  filterBottomAd: (state) => {
    const i = _.findIndex(state.ads, { id: 4 })
    return i > -1
      ? _(state.ads[i].advertisement).filter({ status: 'Y' }).shuffle().head()
      : []
  },
  videoRightAd: (state) => {
    const i = _.findIndex(state.ads, { id: 5 })
    return i > -1
      ? _(state.ads[i].advertisement).filter({ status: 'Y' }).shuffle().head()
      : []
  },
  videoBlockAd: (state) => {
    const i = _.findIndex(state.ads, { id: 6 })
    return i > -1
      ? _(state.ads[i].advertisement).filter({ status: 'Y' }).shuffle().head()
      : []
  }
}
