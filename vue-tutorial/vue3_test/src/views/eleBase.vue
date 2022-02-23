<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <el-form
                ref="form"
                :model="model"
                label-width="80px"
                :rules="rules">
                <el-form-item label="密码">
                    <el-form-password v-model="model.psw" v-bind="metaPassword"/>
                </el-form-item>
                <el-form-item label="url">
                    <el-form-url v-model="model.url" v-bind="metaUrl" @myChange="receiveTestA" @change="receiveTest"/>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
    <el-button @click="testBase">test</el-button>
</template>


<script>
import {reactive} from 'vue'
import { formItemList } from '@/components/nf-el-form-item/map-el-form-item.js'
const meteList = {
  // 密码的属性
  metaPassword: reactive({
    controlId: 103,
    controlType: 101,
    colName: 'name'
  }),
  // url的属性
  metaUrl: reactive({
    controlId: 103,
    controlType: 101,
    colName: 'name'
  })
}
export default {
    name: 'eleBase',
    components: {
    ...formItemList
    },
    setup(props, ctx) {
        console.log('ctx', ctx)
        console.log("props ", props);
        const model = reactive({
            psw: '', // 密码,
            url: '', // 网址
        });

        const rules = {

        };

        function testBase(){
            console.log("打印表单: ", model);
        }

        const receiveTestA = (parma1, parma2, parma3) => {
            console.log('父组件收到消息触发事件receiveTestA ', parma1, parma2, parma3);
        }

        const receiveTest = (e)=>{
            console.log("父组件收到消息触发事件receiveTest ", e)
        }

        return {
            model,
            rules,
            receiveTest,
            receiveTestA,
            testBase,
            ...meteList
        }
    }
}
</script>

<style>

</style>