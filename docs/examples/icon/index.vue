<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-17 13:15:16
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-17 13:28:09
-->
<template>
  <div>
    <p class="titlep">所有图标</p>
    <div class="iconListBox">
      <ul class="icon-list">
        <li v-for="(item, index) in iconData" :key="index">
          <cz-icon :icon="item.name"></cz-icon>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';
import iconList from './icon.json';
export default defineComponent({
  name: 'test',
  setup() {
    const iconData = ref(iconList.glyphs);
    return {
      iconData
    };
  }
});
</script>

<style lang="scss" scoped>
.iconListBox {
  overflow: auto;
}
.icon-list {
  li {
    list-style: none;
    width: 16.66%;
    height: 120px;
    float: left;
    padding: 1vw;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    font-size: 13px;
    transition: all 0.15s ease;
    cursor: pointer;
    i {
      font-size: 36px;
      color: #555;
      display: block;
      margin-top: 1vh;
    }
    span {
      display: inline-block;
      color: #555;
      margin-top: 1vh;
      margin-bottom: 1vh;
    }
    &:hover {
      i,
      span {
        color: #409eff;
      }
    }
  }
}
</style>