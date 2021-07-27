export const addPersistedStateWatcher = (store, cookies, module) => {
  store.watch(state => module.split('.').reduce(
    (acc, cur) => acc[cur], state
  ), (value) => {
    const payload = cookies.get('store') || {}

    payload[module] = value

    cookies.set('store', payload, {
      path: '/',
      expires: null
    })
  }, {
    immediate: true,
    deep: true
  })
}

export const restorePersistedState = (store, cookies, module) => {
  const persistedState = cookies.get('store') || {}

  if (!(module in persistedState)) {
    return
  }

  // eslint-disable-next-line no-console
  console.log('restoreStoreModule', { module, value: persistedState[module] })
  store.commit('restoreStoreModule', { module, value: persistedState[module] })
}
