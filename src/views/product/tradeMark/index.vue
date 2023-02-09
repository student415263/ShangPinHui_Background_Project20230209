<!-- 品牌管理 -->
<template>
  <div>

    <el-button
      style="margin: 15px 10px 40px 10px"
      type="primary"
      icon="el-icon-plus"
      @click="addShowDialogMethods"
    >
      添加
    </el-button>

    <!-- 对话框 -->
    <el-dialog :title="updateOrAdd === 'add' ? '添加商标' : '修改商标'" :visible.sync="dialogFormVisible">
      <!-- 表单验证中， ref="ruleForm" :model="tmFrom" :rules="rules" 都是必须的 -->
      <el-form ref="ruleForm" :model="tmFrom" :rules="rules">
        <!-- prop 用于表单验证 -->
        <el-form-item label="品牌名称" :label-width="formLabelWidth" prop="tmName">
          <el-input v-model="tmFrom.tmName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="品牌logo" :label-width="formLabelWidth" prop="logoUrl">
          <!--
            action的作用：
            上传图片上传的地址
          -->
          <el-upload
            class="avatar-uploader"
            action="/dev-api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button
          v-if="updateOrAdd === 'update'"
          type="primary"
          @click="updateTradeMarkList"
        >
          修改
        </el-button>
        <el-button
          v-if="updateOrAdd === 'add'"
          type="primary"
          @click="addTradeMarkList"
        >
          添加
        </el-button>
      </div>
    </el-dialog>
    <!-- 表格组件 -->
    <!-- box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) -->
    <!-- element是竖着展示数据的，一列一列地展示 -->
    <!--
      Form 组件提供了表单验证的功能，
      只需要通过 rules 属性传入约定的验证规则，
      并将 Form-Item 的 prop 属性设置为需校验的字段名即可。
    -->
    <el-table :data="list" border style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
      <el-table-column type="index" width="80px" align="center" label="序号" />
      <!-- 如果要显示图片，需要用作用域插槽，（但是我这返回的数据接收不到图片）
        //注释掉的部分就是 练习 例子
      -->
      <el-table-column prop="logoUrl" label="品牌logo" width="86px">
        <!-- 显示图片，也是用插槽！！！注意slot-scope这个属性 -->
        <template slot-scope="{ row }">
          <!-- 解构出来，row里面好像是list下面的对应序列号的数组 -->
          <!-- <div>{{ row }}</div> -->
          <img :src="row.logoUrl" alt="" style="width: 66px; height: 56px; margin: 0; padding: 0">
        </template>
      </el-table-column>
      <el-table-column prop="tmName" label="品牌名字" />
      <el-table-column width="290px" align="center" prop="prop" label="methods">
        <!-- 插槽插入按钮 -->
        <template slot-scope="{ row }">
          <!-- this 'slot-scope' could recelve {row, $$index} -->
          <el-button
            style="margin-right: 22px"
            type="warning"
            size="mini"
            icon="el-icon-edit"
            @click="updateShowDialogMethods(row)"
          >
            修改
          </el-button>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="deleteTradeMarkList(row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- fenyeqi  分页器 -->
    <el-pagination
      align="center"
      style="margin-top: 40px"
      :total="total"
      :pager-count="7"
      :current-page="page"
      :page-size="5"
      :page-sizes="[5, 8, 12]"
      layout="prev, pager, next, jumper, ->, sizes, total"
      @current-change="changeCurrentPage"
      @size-change="changePageSize"
    />
    <!-- layout="" 可以改顺序
      如果sizes或者jumper没有出来，那就把layout放上去
      比如：       layout="prev, pager, next, jumper, ->, sizes, total"
    -->

  </div>
</template>

<script>
export default {
  name: 'TradeMark',
  data() {
    return {
      page: 1,
      limit: 5, // pageSize
      // get
      list: [],
      total: 0,
      // dialog
      dialogFormVisible: false, // show or hide this dialog
      formLabelWidth: '100px',
      //
      imageUrl: '',
      // 收集表单的信息：
      tmFrom: {
        logoUrl: '', // 参数叫啥去看文档，不能乱写
        tmName: ''
      },
      updateOrAdd: '',
      // 修改相关：
      temporaryTmFrom: {
        id: '',
        logoUrl: '',
        tmName: ''
      }, // It has prop- 'id'

      // 表单验证
      rules: {
        // prop: 'tmName'
        tmName: [
          { required: true, message: '请输入品牌名称', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 2 到 10 个字符', trigger: 'change' }
        ],
        logoUrl: [
          { required: true, message: '请选择图片' }
        ]
      }
    }
  },
  mounted() {
    console.log(this.$API) // OK
    this.getTradeMarkList()
  },

  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res, file) // res是成功之后的回调，file有更多的数据
      this.imageUrl = URL.createObjectURL(file.raw)
      // this.imageUrl = res.data // 也可以
      this.tmFrom.logoUrl = res.data
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },

    // 点击弹出来的添加按钮
    addTradeMarkList() {
      this.$refs.ruleForm.validate(async(valid) => {
        if (valid) {
          this.dialogFormVisible = false
          const aaa = await this.$API.tradeMark.reqAddTradeMarkList(this.tmFrom)
          console.log('添加：', aaa)
          if (aaa.code === 200 || aaa.code === 20000) {
            // alert('111')
            // this.$message('添加品牌成功')
            this.$message({
              message: '添加品牌成功',
              type: 'success'
            })
            this.getTradeMarkList(this.page)
          } else {
            this.$message.error(aaa.message)
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 点击弹出来的修改按钮
    updateTradeMarkList() {
      this.$refs.ruleForm.validate(async(valid) => {
        if (valid) {
          this.dialogFormVisible = false
          this.temporaryTmFrom.logoUrl = this.tmFrom.logoUrl
          this.temporaryTmFrom.tmName = this.tmFrom.tmName
          const aaa = await this.$API.tradeMark.reqUpdateTradeMarkList(this.temporaryTmFrom)
          console.log('修改：', aaa)
          if (aaa.code === 200 || aaa.code === 20000) {
            // alert('111')
            // this.$message('添加品牌成功')
            this.$message({
              message: '修改品牌成功',
              type: 'success'
            })
            this.temporaryTmFrom = {}
            this.getTradeMarkList(this.page)
          } else {
            this.$message.error(aaa.message)
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    addShowDialogMethods() { // 点击添加 显示弹出框 的那个
      this.updateOrAdd = 'add'
      this.imageUrl = ''
      this.tmFrom.tmName = ''
      this.tmFrom.logoUrl = ''
      this.temporaryTmFrom = {}
      if (this.dialogFormVisible === false) {
        this.dialogFormVisible = true
      } else { // this   conditional expression   not used
        this.dialogFormVisible = false
      }
    },
    updateShowDialogMethods(row) { // 点击修改 弹出框框 跟上面的添加查不多 thisTradeMarkData 就是 row
      this.updateOrAdd = 'update'
      this.imageUrl = ''
      this.tmFrom.tmName = ''
      this.tmFrom.logoUrl = ''
      this.temporaryTmFrom = {}
      if (this.dialogFormVisible === false) {
        this.dialogFormVisible = true
      } else { // this   conditional expression   not used
        this.dialogFormVisible = false
      }
      console.log(row) // 三个属性  id  tmlogo  tmname  //  id logoUrl tmName
      // this.tmForm = { ...row } // 浅拷贝，防止修改服务器已经穿给我们的数据。
      // 或者这样写好像也行：
      this.temporaryTmFrom.id = row.id
      // console.log('temporaryTmFrom', temporaryTmFrom)
      // XXX let aaa = await this.$API.tradeMark.reqUpdateTradeMarkList(temporaryTmFrom)
      // XXX console.log(aaa)
    },
    // 删除 deleteTradeMarkList
    deleteTradeMarkList(row) {
      // console.log(row)
      this.$confirm(`确定删除${row.tmName}吗？`, '确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => { // 点确定的时候会触发
        console.log('1122')
        const aaa = await this.$API.tradeMark.reqDeleteTradeMarkList(row.id)
        console.log('删除:', aaa)
        if (aaa.code === 200 || aaa.code === 20000) {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getTradeMarkList(this.list.length > 1 ? this.page : this.page - 1)
        }
      }).catch(() => { // 点取消会触发
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },

    changeCurrentPage(elementGivePage) {
      // console.log(elementGivePage) // --element 会把当前页传递过来
      this.page = elementGivePage
      this.getTradeMarkList()
    },
    changePageSize(elementGivePageSize) {
      console.log(elementGivePageSize) // limit Element会把点的sizes的数值给我们
      this.limit = elementGivePageSize
      this.getTradeMarkList(this.page)
    },

    // getTradeMarkList 挂载/其他行为 的 获取页面数据
    async getTradeMarkList() {
      // page, limit
      const { page, limit } = this
      const aaa = await this.$API.tradeMark.reqGetTradeMarkList(page, limit) // OK
      if (aaa.code === 20000 || aaa.code === 200) { // 我这怎么是20000啊？
        console.log('getTradeMarkList:', aaa)
        this.total = aaa.data.total
        this.list = aaa.data.records
      } else {
        alert(aaa.message)
      }
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    /** */
    border: 1px solid rgb(230, 230, 230);
    border-radius: 3px;
    transition: all 0.3s;
  }
  .avatar-uploader-icon:hover {
    border: 1px solid rgb(192, 192, 192);
    box-shadow: 0 0 4px 0px rgb(211, 211, 211);
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
