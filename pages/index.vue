<template>
  <section>
    <h1>TODOリスト</h1>
    <div class='addArea'>
      <input id='addName' type='text' name='addName' placeholder='ここに名前を入力してください'>
      <button id='button' class='button'>追加</button>
    </div>
    <div class='Filter'>
      <button class='button'>全て</button>
      <button class='button'>作業前</button>
      <button class='button'>作業中</button>
      <button class='button'>完了</button>
    </div>
    <table class='list'>
      <thead>
        <tr>
          <th>タスク</th>
          <th>登録日時</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item, index) in todos' :key='index'>
          <td>{{ item.content }}</td>
          <td>{{ item.created }}</td>
          <td><button class="button">{{ item.state }}</button></td>
          <td><button class="button">削除</button></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data(){
    return {
      content:''
    }
  },
  computed: {
    ...mapState(['todos'])
  }
})
</script>
