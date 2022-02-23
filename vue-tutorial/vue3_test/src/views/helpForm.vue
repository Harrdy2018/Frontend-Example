<template>
    <div>
        表单 meta 的辅助工具
    </div>
    <div>
        <el-row :gutter="30">
            <el-col :span="7">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>卡片名字</span>
                            <el-button class="button" type="text">Operation button</el-button>
                        </div>
                    </template>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{ 'List item' + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

</script>

<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
    width: 480px;
}
</style>