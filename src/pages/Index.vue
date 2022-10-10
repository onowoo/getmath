<template>
    <div class="container flex flex-col justify-center h-screen items-center text-5xl gap-15">
        <n-gradient-text type="info">
            <router-link to="/as">加减混合生成器</router-link>  
        </n-gradient-text>
        <n-gradient-text type="danger">
            <router-link to="/md">乘除混合生成器</router-link> 
        </n-gradient-text>
        <n-gradient-text type="error">
            <router-link to="/ca">连续加法生成器</router-link> 
        </n-gradient-text>
        <n-gradient-text type="success">
            <router-link to="/cm">连续减法生成器</router-link> 
        </n-gradient-text>
    </div>
</template>