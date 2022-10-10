<template>
    <div class="container">
        <div class="text-center p-3 flex gap-5">
            <n-input-group>
                <n-button type="primary">
                    输入学生班级姓名
                </n-button>
                <n-input v-model:value="student" />             
            </n-input-group>
            <n-input-group class="flex justify-center items-center">
                <n-button type="primary">
                    输入最大计算值
                </n-button>
                <n-input-number v-model:value="count"/>
            </n-input-group>
            <n-input-group>
                <n-button type="primary">
                    输入打印的题量
                </n-button>
                <n-input-number v-model:value="num"/>
            </n-input-group>
            <n-button type="info" size="medium" @click="createList">生成</n-button>
            <n-button type="info"  v-print="printObj">打印</n-button>
            <n-button type="info" @click="$router.go(-1)">返回</n-button>
            <!-- <n-button type="info" @click="re">刷新</n-button> -->
        </div>
        <div class="main" ref="printContent" id="myPrint">
            <div class="text-center text-2xl pt-6">{{count}}以内连续加法</div>
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

const list = ref([])
const count = ref(20)
const num = ref(100)
const getEquation = (amount = 2, max = count.value) => {
    const res = Math.round(Math.random() * count.value)
    var arr = [res];
    var operator = '+';
    var a, b ,c;
    a = Math.round(Math.random() * arr[0])
    b = Math.round(Math.random() * (max - a));
    c = Math.round(Math.random() * (max - a - b));
    // arr.shift();
    if (a > 0 && b > 0 && c > 0) {
        arr = [a, operator, b, operator, c]; 
    }
    
    return {
        eq: arr.join(' '),
        res: res
    }
}

const createList = () => {
    if (list.value.length > 0) {
        list.value.splice(0,list.value.length)
        for (var i = 1; i <= num.value; i++) {
        let equation = getEquation(Math.round(Math.random() * 1) + 2);
        if (equation.eq.length > 3) {
                list.value.push(equation.eq + "=");
            } else {
                i = i - 1
            }
        }
    } else {
        for (var i = 1; i <= num.value; i++) {
        let equation = getEquation(Math.round(Math.random() * 1) + 2);
        if (equation.eq.length > 3) {
                list.value.push(equation.eq + "=");
            } else {
                i = i - 1
            }
        }
    }
    

}
const student = ref("市二实验一年二班***")
const printObj = reactive({
    id: "myPrint", // 这里是要打印元素的ID
    popTitle: "", // 打印的标题
    extraCss: "", // 打印可引入外部的一个 css 文件
    extraHead: "", // 打印头部文字
    dialogVisbile:false
})
</script>