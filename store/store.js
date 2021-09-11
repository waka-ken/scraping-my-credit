import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [
        { content: 'テスト', created: '2020-04-30 17:00', state: '作業前' },
        { content: 'テスト', created: '2020-04-30 17:00', state: '作業前' },
        { content: 'テスト', created: '2020-04-30 17:00', state: '作業前' },
      ],
    }),
  })
}

export default createStore({
  mutations: {
    insert(state, obj) {
      const d = new Date()
      const fmt =
        d.getFullYear() +
        '-' +
        '00' +
        (d.getMonth() + 1).slice(-2) +
        '-' +
        ('00' + d.getDate()).slice(-2) +
        ' ' +
        ('00' + d.getHours()).slice(-2) +
        ':' +
        ('00' + d.getMinutes()).slice(-2)
      state.todos.unshift({
        content: obj.content,
        created: fmt,
        state: '作業前',
      })
    },
  },
})
