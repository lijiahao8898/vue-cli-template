<template>
  <div class="login" ref="login">
    <div class="login-form">
      <div class="login-title">登录</div>
      <el-form>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="params.account"
            prefix-icon="el-icon-user"
            autocomplete="off"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
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
  export default {
    data () {
      return {
        params: {
          account: '',
          password: '',
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
        console.log(112);
      },
    }
  };
</script>

<style lang="scss" type="text/scss" scoped>
  .login {
    background: teal;
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
      padding: 15px;
      box-sizing: border-box;
      border-radius: 4px;
    }

    &-btn {
      margin-top: 50px;
      width: 100%;
    }
  }
</style>
