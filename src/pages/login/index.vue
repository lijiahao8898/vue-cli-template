<template>
    <div class="login" ref="login">
        <vue-particles
            color="#fff"
            :particleOpacity="0.5"
            :particlesNumber="30"
            shapeType="star"
            :particleSize="4"
            linesColor="#fff"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.2"
            :linesDistance="100"
            :moveSpeed="1"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="particles"
        >
        </vue-particles>
        <div class="login-container">
            <div class="login-title">{{ systemName }}</div>
            <div class="login-form">
                <el-form :model="params" :rules="rules" ref="loginForm">
                    <el-form-item prop="username">
                        <el-input
                            type="text"
                            v-model="params.username"
                            prefix-icon="el-icon-user"
                            autocomplete="off"
                            placeholder="请输入账号"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            type="password"
                            v-model="params.password"
                            prefix-icon="el-icon-lock"
                            autocomplete="off"
                            placeholder="请输入密码"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="login-btn" @click="onSubmit">登 录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import Api from '@/api';
import cookies from 'js-cookie';
import {mapState} from 'vuex';

export default {
    data() {
        return {
            params: {
                username: 'admin',
                password: 'admin',
            },
            rules: {
                username: [
                    {required: true, message: '请输入账号', trigger: 'blur'},
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                ]
            }
        };
    },
    computed: {
        ...mapState('system', {
            systemName: state => state.systemName
        })
    },
    created() {
        this.$nextTick(() => {
            this.$refs.login.style.height = window.innerHeight + 'px';
        });
    },
    methods: {
        onSubmit() {
            // todo 登录逻辑
            this.$refs['loginForm'].validate(async (valid) => {
                if (valid) {
                    this.$router.push('./index');
                    const data = await Api('post', 'authLogin', {
                        ...this.params
                    });
                    if (data.success) {
                        console.log(data);
                        // todo 存入cookie
                        this.$router.push('./index');
                    }
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
};
</script>

<style lang="scss" type="text/scss" scoped>
@import "assets/style/config.scss";

.particles {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

}

.login {
    background: linear-gradient($color-primary, #008B7D);;
    display: flex;
    justify-content: center;
    align-items: center;

    &-title {
        font-size: 38px;
        margin-bottom: 35px;
        color: #fff;
        text-align: center;
    }

    &-form {
        width: 328px;
        background: #fff;
        text-align: center;
        margin: 0 auto;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 8px;
    }

    &-btn {
        margin-top: 50px;
        font-size: 18px;
        width: 100%;
    }
}
</style>
