<template>
  <el-empty :image-size="imageSize" class="bi-empty">
    <template slot="image">
      <img class="empty" :src="image"/>
    </template>
    <template slot="description">
      <div class="text" :style="textStyle">{{ description }}</div>
    </template>
    <slot></slot>
  </el-empty>
</template>

<script>
import { empty } from "../assets/img.js";
export default {
  name: "bi-empty",
  props:{
    imageSize:{
      type: Number,
      default: 300,
    },
    image:{
      type:String,
      default:empty,
    },
    textStyle:{
      type:Object,
      default:()=>{
        return {
          fontSize:'14px',
          color:'#909399'
        }
      }
    },
    description:{
      type:String,
      default:'暂无数据'
    }
  }
};
</script>