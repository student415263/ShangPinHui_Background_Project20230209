<template>
  <div>
    <el-card style="margin: 25px 0px">
      <!-- 全局组件 -->
      <CategorySelect
        @getCategoryId="getCategoryId"
      />
    </el-card>
    <!-- 查看模式 -->
    <div v-if="attrBox">
      <el-card v-if="ctg3Id !== -1">
        <el-button
          type="primary"
          icon="el-icon-plus"
          style="margin-bottom: 20px"
          @click="addOnceAttrsToChangePage"
        >
          添加属性
        </el-button>
        <el-table v-if="ctg3Id !== -1" border :data="attrList">
          <el-table-column type="index" label="序号" width="80" align="center" />
          <el-table-column prop="attrName" label="属性名称" width="250" align="center" />
          <el-table-column label="属性值列表" align="center">
            <template slot-scope="{ row }">
              <!-- row 是 attrList 数组内的每一个具体的第几项 -->
              <el-tag v-for="(aa1, index) in row.attrValueList" :key="index" :type="randomColor" style="margin-right: 10px">
                {{ aa1.valueName }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200" align="center">
            <template slot-scope="{ row }">
              <el-button
                type="warning"
                plain
                size="small"
                icon="el-icon-edit"
                @click="editOnceAttrInfo(row)"
              >
                修改
              </el-button>
              <el-button type="danger" plain size="small" icon="el-icon-delete">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <el-card v-else align="center" style="color: #bbb">
        请选择分类
      </el-card>
    </div>
    <!-- 修改模式 -->
    <div v-else>
      <el-card>
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple">
            <!-- data假的 -->
            <el-form v-model="aaaaa" :inline="true">
              <el-form-item label="属性名：">
                <el-input v-model="getAttrData.attrName" placeholder="请输入属性名" />
              </el-form-item>
            </el-form>
            <el-button
              :disabled="!getAttrData.attrName.replace(/\s*/g, '')"
              type="primary"
              icon="el-icon-plus"
              @click="addAttrList"
            >
              添加属性标签
            </el-button>
            <el-button
              @click="changeAttrbox"
            >
              取消
            </el-button>
            <el-table :data="getAttrData.attrValueList">
              <el-table-column type="index" label="序号" width="180" align="center" />
              <el-table-column label="属性值名称" align="center">
                <template slot-scope="{ row, $index }">
                  <!-- el-input v-model="row.valueName"  有几个数组就有几个valueName就有几个行 -->
                  <el-input
                    v-if="row.inputOrTag === true"
                    :ref="$index"
                    v-model="row.valueName"
                    placeholder="请输入属性标签"
                    size="small"
                    @blur="showTag(row)"
                    @keyup.native.enter="showTag(row)"
                  />
                  <div v-else>
                    <el-tag
                      style="color: #bbb; float: left;"
                      type="info"
                      @click="showInput(row, $index)"
                    >
                      点击标签以修改
                    </el-tag>
                    <el-tag
                      type="randomColor"
                      @click="showInput(row, $index)"
                    >
                      {{ row.valueName }}</el-tag>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center" width="300">
                <template slot-scope="{ row, $index }">
                  <!-- <el-button
                    type="danger"
                    plain
                    size="small"
                    icon="el-icon-delete"
                  >
                    删除
                  </el-button>
                  <el-popconfirm
                    title="这是一段内容确定删除吗？"
                  >
                    <el-button slot="reference">删除</el-button>
                  </el-popconfirm> -->
                  <el-popconfirm
                    confirm-button-text="确定"
                    cancel-button-text="取消"
                    confirm-button-type="primary"
                    :title="`确定删除${row.valueName}吗？`"
                    @onConfirm="deleteAttrTag($index)"
                  >
                    <el-button slot="reference" type="danger" icon="el-icon-delete" size="small">删除</el-button>
                  </el-popconfirm>
                </template>
              </el-table-column>
            </el-table>
            <el-button
              type="primary"
              @click="saveSendToSever"
            >
              <!-- reqPostAttrInfo -->
              全部保存并提交
            </el-button>
            <el-button
              @click="changeAttrbox"
            >
              取消
            </el-button>
          </div></el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'Attr',
  data() {
    return {
      // inputOrTag: true, // 不能写在这里！
      ctg1Id: -1, // 初始值 空字符串也行
      ctg2Id: -1,
      ctg3Id: -1,
      attrList: [], // getAttrList请求获取的data，可以遍历出查看时的数据，listData 很长的数据
      attrBox: true, // look or edit
      aaaaa: '', // temporaryData
      // attrInfo: {}, // &:
      /* attrInfo: {
          attrName: "string",
          attrValueList: [
            {
              attrId: 0,
              // id: 0,
              valueName: "string"
            }
          ],
          categoryId: 0,
          categoryLevel: 3,
          // id: 0
        }
      */
      getAttrData: { // 复制来的 参数
        attrName: '', // ok
        attrValueList: [ // 这个数组也可以用来遍历修改界面时的 el-tag
          {
            attrId: 0,
            valueName: '',
            inputOrTag: true // 仅用来控制显示input还是tag
          }
        ],
        categoryId: 0, // 三级分类的ID
        categoryLevel: 3
      }
    }
  },
  methods: {
    saveSendToSever() {
      // this.$API.attr.reqPostAttrInfo()
      // console.log("111"); // ok
      // Array.forEach() 天下无敌！！！！！！！！！！！！！！！！！！！
      this.getAttrData.attrValueList.forEach(async item => { // 或者使用：this.getAttrData.attrValueList.filter(() => {})
        if (item.valueName.replace(/\s*/gm, '') === '') {
          this.$message.error('请输入非空属性标签')
        } else {
          this.getAttrData.attrValueList.forEach(item => {
            delete item.inputOrTag // 把这个服务器不需要的参数删除掉
          })
          // 发请求
          try { // post用try catch !!!
            await this.$API.attr.reqPostAttrInfo(this.getAttrData)
            this.$message({ type: 'success', message: 'OK' })
            this.attrBox = true // ok
            this.getAttrList()
          } catch (error) {
            this.$message.error('保存失败')
          }
        }
      })
      // this.getAttrData.attrValueList = this.getAttrData.attrValueList.filter(item => { // .filter会返回一个新的过滤之后的新数组
      //   if (item.valueName.replace(/\s*/gm, '') === '') {
      //     item = undefined
      //     this.$message.error('空的数据已经被删除！')
      //     return true
      //   } else {
      //     this.$message('OK')
      //   }
      // })
    },
    deleteAttrTag(index) {
      // console.log('11123') // ok
      this.getAttrData.attrValueList.splice(index, 1)
    },
    editOnceAttrInfo(row) {
      // console.log(row)
      this.attrBox = false
      // this.getAttrData = { ...row } // XXX row数据结构很复杂，不能使用浅拷贝了！！！需要深拷贝
      this.getAttrData = cloneDeep(row) // lodash 提供的 深拷贝 方法
      this.getAttrData.attrValueList.forEach(item => {
        // item.inputOrTag = false // XXX Vue 无法探测普通的新增 property
        this.$set(item, 'inputOrTag', false) // 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property
        /* Vue.set:
          参数：
          {Object | Array} target  // 向谁/给谁添加
          {string | number} propertyName/index
          {any} value */
      })
    },
    addOnceAttrsToChangePage() {
      this.attrBox = false
      this.getAttrData = {
        attrName: '', // ok
        attrValueList: [
          {
            attrId: 0,
            valueName: ''
          }
        ],
        categoryId: this.ctg3Id, // 获取到三级分类的ID // ok
        categoryLevel: 3
      }
    },
    addAttrList() { // 添加标签的相关的那个
      // console.log('111') // ok
      this.getAttrData.attrValueList.push({ // 这个数据本身是一个响应式数据，
        attrId: this.getAttrData.id, // 几个数组 是同样的数据
        valueName: '',
        inputOrTag: true // 每一个数组都有一个这个属性，以独立控制v-if的切换。
      })
      this.$nextTick(() => {
        const newIndex = this.getAttrData.attrValueList.length - 1 // num
        this.$refs[newIndex].focus() // Obj[Num].method()
      })
    },
    showTag(row) {
      // console.log(row)
      const temporaryValueName = row.valueName.replace(/\s*/gm, '') // 去掉空格
      const isSame = this.getAttrData.attrValueList.some(item => { // some（） 有真就退出，返回真
        if (item !== row) { // row 不是他本身 时
          return item.valueName === row.valueName
        }
      })
      if (temporaryValueName === '') {
        this.$message({ message: '请输入一个非空属性', type: 'warning' })
      } else if (isSame === true) {
        this.$message({ message: '请输入一个非重复属性', type: 'warning' })
      } else {
        row.inputOrTag = false // input 已经绑定了row.valueName
      }
    },
    showInput(row, index) {
      row.inputOrTag = true // 切换 input 或者 tag ，会引起dom更新
      this.$nextTick(() => { // Dom 更新完成后再执行！！（否则获取不到input标签，因为不加nextTick，dom还没更新完就执行后面的语句了！）
        // console.log(row) // ok
        // console.log(index)
        // console.log(typeof this.$refs) // object
        // console.log(this.$refs) // object ｛ 0： ｛...｝， 1： ｛...｝， 2： ｛....｝  ...... ｝
        // console.log(typeof this.$refs[index]) // object // index
        // console.log(this.$refs[index]) // 枚举！！// 打印VueComponent // index 是个数字， 1 2 3 ... 这种的，它不是个属性
        // console.log(this.$refs[0] === this.$refs[index]) // ok 只有点第一个才相等才打印true
        this.$refs[index].focus() // focus 实现聚焦方法
      })
    },
    changeAttrbox() { this.attrBox = true },
    getCategoryId({ categoryId, level }) { // 子组件绑定的自定义事件触发的函数，接收传过来的参数（自定义事件）
      // console.log(categoryId, level) // ok
      if (level === 1) {
        this.ctg1Id = categoryId
        this.ctg2Id = -1
        this.ctg3Id = -1
      } else if (level === 2) {
        this.ctg2Id = categoryId
        this.ctg3Id = -1
      } else {
        this.ctg3Id = categoryId
        this.getAttrList() // 发请求获取数据的函数
      }
    },
    async getAttrList() {
      // console.log('111')
      const { ctg1Id, ctg2Id, ctg3Id } = this
      const aaa = await this.$API.attr.reqGetAttrList(ctg1Id, ctg2Id, ctg3Id)
      // console.log('attrList: ', aaa) // ok
      if (aaa.code === 200 || aaa.code === 20000) {
        this.attrList = aaa.data
      } else {
        this.$message.error(aaa.message)
      }
    },
    randomColor() { // tag 的随机颜色
      const romdemNum = Math.floor(Math.random() * 5)
      switch (romdemNum) {
        case 0:
          return ''
        case 1:
          return 'success'
        case 2:
          return 'info'
        case 3:
          return 'warning'
          // break; // return 和 break 只能写一个
        default:
          return 'danger'
      }
    }
  }
}
</script>

<style>

</style>
