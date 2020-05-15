<template>
  <div class="login" ref="login">
    <div class="login-form">
      <div class="login-title">登录</div>
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
          <el-button type="primary" class="login-btn" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import Api from '@/api';
  import cookies from 'js-cookie';
  export default {
    data () {
      return {
        params: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      };
    },
    created () {
      this.$nextTick(() => {
        this.$refs.login.style.height = window.innerHeight + 'px';
      });
    },
    methods: {
      onSubmit () {
        // todo 登录逻辑
        this.$refs['loginForm'].validate(async (valid) => {
          if (valid) {
            this.$router.push('./index');
            return ;
            const data = await Api('post', 'authLogin', {
              ...this.params
            });
            if(data.success) {
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
  .login {
    background: $color-primary;
    display: flex;
    justify-content: center;
    align-items: center;

    &-title {
      font-size: 24px;
      margin-bottom: 15px;
    }

    &-form {
      width: 328px;
      background: #fff;
      text-align: center;
      margin: 0 auto;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 4px;
    }

    &-btn {
      margin-top: 50px;
      width: 100%;
    }
  }
</style>
