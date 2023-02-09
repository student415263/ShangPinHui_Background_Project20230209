<!-- 三级联动  组件 -->
<template>
  <div>
    <!-- inline是行内表单， 行内  -->
    <el-form :inline="true" :model="cgForm" class="demo-form-inline">
      <el-form-item label="一级分类">
        <el-select
          v-model="cgForm.category1Id"
          placeholder="请选择"
          @change="getCategory2List"
        >
          <el-option v-for="(aa1, index) in list1" :key="index" :label="aa1.name" :value="aa1.id" />
        </el-select>
      </el-form-item>
      <!-- inline是行内表单， 行内  -->
      <el-form-item label="二级分类">
        <el-select
          v-model="cgForm.category2Id"
          placeholder="请选择"
          @change="getCategory3List"
        >
          <el-option v-for="(aa2, index) in list2" :key="index" :label="aa2.name" :value="aa2.id" />
        </el-select>
      </el-form-item>
      <!-- inline是行内表单， 行内  -->
      <el-form-item label="三级分类">
        <el-select
          v-model="cgForm.category3Id"
          placeholder="请选择"
          @change="handle3"
        >
          <el-option v-for="(aa3, index) in list3" :key="index" :label="aa3.name" :value="aa3.id" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CategorySelect',
  data() {
    return {
      formInline: {
        region: ''
      },
      list1: [],
      list2: [],
      list3: [],
      cgForm: {
        // 收集数据
        category1Id: '',
        category2Id: '',
        category3Id: ''
      }
    }
  },
  mounted() {
    this.getCategory1List()
  },
  methods: {
    async getCategory1List() { // 挂载后就触发的
      const aaa = await this.$API.attr.reqGetCategory1List()
      //   console.log(aaa) // OK
      if (aaa.code === 200 || aaa.code === 20000) {
        this.list1 = aaa.data // OK
      } else {
        this.$message.error(aaa.message)
      }
    },
    async getCategory2List() { // 选完第一个个之后触发的
      this.list2 = [] // 重选了一级分类  重置二级分类
      this.list3 = []
      this.cgForm.category2Id = ''
      this.cgForm.category3Id = ''
      const { category1Id } = this.cgForm // 解构出来
      this.$emit('getCategoryId', { categoryId: category1Id, level: 1 }) // 传给父组件
      const aaa = await this.$API.attr.reqGetCategory2List(category1Id)
      //   console.log('22222222222222', aaa) // ok
      if (aaa.code === 200 || aaa.code === 20000) {
        this.list2 = aaa.data
      } else {
        this.$message.error(aaa.message)
      }
    },
    async getCategory3List() {
      this.list3 = []
      this.cgForm.category3Id = '' // 重选了二级分类要充值三级分类
      const { category2Id } = this.cgForm
      this.$emit('getCategoryId', { categoryId: category2Id, level: 2 }) // 传给父组件
      const aaa = await this.$API.attr.reqGetCategory3List(category2Id)
      // console.log('3333333333', aaa) // ok
      if (aaa.code === 200 || aaa.code === 20000) {
        this.list3 = aaa.data
      } else {
        this.$message.error(aaa.message)
      }
    },
    handle3() { // 选完category3之后触发
      const { category3Id } = this.cgForm
      this.$emit('getCategoryId', { categoryId: category3Id, level: 3 }) // 传给父组件  attr
    }
  }
}

</script>

<style>

</style>
