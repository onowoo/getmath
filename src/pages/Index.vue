<template>
    <div class="container">
        <div class="text-center text-2xl p-3 flex">
            <n-input-group>
                <n-button type="primary">
                    输入学生班级姓名
                </n-button>
                <n-input v-model:value="student" :style="{ width: '50%' }" />
            </n-input-group>
            <!-- <n-input-group>
                
                <div>最大计算值</div>    
                <button type="button" @click="countChangeAdd">{{ count }}</button>
            </n-input-group> -->
            
            <n-button type="info" @click="dialogVisible" v-print="printObj">打印</n-button>
            <!-- <n-button type="info" @click="re">刷新</n-button> -->
        </div>
        <div class="main" ref="printContent" id="myPrint">
            <div class="text-center text-2xl pt-6">20以内加减法</div>
            <div class="text-center text-md p-6">{{student}}</div>
            <n-grid :x-gap="12" :y-gap="8" :cols="4">
                <n-grid-item v-for="(item,index) in list" :key="index" class="gap-3 flex">
                <div class="text-sm flex items-center">{{index + 1 }}.</div><div class="font-bold">{{item}}</div><span>______</span>
                </n-grid-item>
            </n-grid>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script setup>
import { reactive } from '@vue/reactivity';
import { onUpdated } from '@vue/runtime-core';
const list = []
const count = ref(20)
const getEquation = (amount = 2, max = count.value) => {
    const res = Math.round(Math.random() * 20)
    // 运算符
    var operators = ['+', '-'];
    var arr = [res];
    for (var i = 1; i < amount; i++) {
        // 获取随机运算符
        var operator = operators[Math.round(Math.random() * 1)];
        var a, b;
        if (operator == '+') {
            b = Math.round(Math.random() * arr[0]);
            a = arr[0] - b;
        } else {
            b = Math.round(Math.random() * (max - arr[0]));
            a = arr[0] + b;
        }
        arr.shift();
        arr = [a, operator, b];
        // arr = [a, operator, b].concat(arr);
        // console.log(arr);
    }
    return {
        eq: arr.join(' '),
        res: res
    }
}
for (var i = 1; i <= 100; i++) {
    var equation = getEquation(Math.round(Math.random() * 1) + 2);
    list.push(equation.eq + '=')
}
onUpdated(()=>{
    for (var i = 1; i <= 100; i++) {
    var equation = getEquation(Math.round(Math.random() * 1) + 2);
    list.push(equation.eq + '=')
}
})
const student = ref("一年二班王峥")
const printObj = reactive({
    id: "myPrint", // 这里是要打印元素的ID
    popTitle: "", // 打印的标题
    extraCss: "", // 打印可引入外部的一个 css 文件
    extraHead: "", // 打印头部文字
})
</script>