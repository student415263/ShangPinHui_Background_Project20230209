<!-- sku -->
<template>
  <div>
    <el-card style="margin: 25px 0">
      <CategorySelect
        @getCategoryId="getCategoryIdInSpu"
      />
    </el-card>
    <el-card>
      <el-button type="primary">
        添加
      </el-button>
      <el-table border>
        <el-table-column type="index" align="center" lable="序号" width="80" />
        <el-table-column prop="prop" label="Spu名称" />
        <el-table-column prop="prop" label="Spu描述" />
        <el-table-column prop="prop" label="操作">
          <template slot-scope="{}">
            <div>
              <el-button type="success" icon="el-icon-plus">添加</el-button>
              <el-button type="success" icon="el-icon-edit">编辑</el-button>
              <el-button type="success" icon="el-icon-info">展示</el-button>
              <el-button type="danger" icon="el-icon-delete">删除</el-button>
            </div>
          </template>

        </el-table-column>
      </el-table>
      <el-pagination
        align="center"
        :total="4444"
        :current-page="1"
        :page-size="10"
        @current-change="abc"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Spu',
  data() {
    return {
      ctg1Id: -1, // 初始值 空字符串也行
      ctg2Id: -1,
      ctg3Id: -1
    }
  },
  methods: {
    getCategoryIdInSpu({ categoryId, level }) { // 子组件绑定的自定义事件触发的函数，接收传过来的参数（自定义事件）
      console.log(categoryId, level) // ok
      if (level === 1) {
        this.ctg1Id = categoryId
        this.ctg2Id = -1
        this.ctg3Id = -1
      } else if (level === 2) {
        this.ctg2Id = categoryId
        this.ctg3Id = -1
      } else {
        this.ctg3Id = categoryId
        // this.getAttrList() // 发请求获取数据的函数
      }
    }
  }
}
</script>

<style>
</style>

