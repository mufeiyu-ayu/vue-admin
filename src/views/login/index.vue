<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      ref="loginFromRef"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <lang-select class="lang-select"></lang-select>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>

        <el-input
          placeholder="password"
          name="password"
          :type="passwordType"
          v-model="loginForm.password"
        />
        <span class="show-pwd">
          <svg-icon
            :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
            @click="changePwdType"
          ></svg-icon>
        </span>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        :loading="loading"
        @click="handlerLogin"
        >{{ $t('msg.login.loginBtn') }}</el-button
      >
      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<script setup>
import LangSelect from '@/components/LanguageSelect/index.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

// 验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.t('msg.login.usernameRule')
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator(rule, value, cb) {
        if (value.length < 6) {
          cb(new Error(i18n.t('msg.login.passwordRule')))
        } else {
          cb()
        }
      }
    }
  ]
})

// 密码框type类型切换
const passwordType = ref('password')
const changePwdType = () => {
  passwordType.value === 'password'
    ? (passwordType.value = 'text')
    : (passwordType.value = 'password')
}

// 登录动作处理
const loading = ref(false)
const loginFromRef = ref(null)
const store = useStore()
const handlerLogin = () => {
  loginFromRef.value.validate((vaild) => {
    if (!vaild) return
    loading.value = true
    store
      .dispatch('user/loginDisP', loginForm.value)
      .then(() => {
        loading.value = false
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .tips {
      font-size: 16px;
      color: white;
      line-height: 24px;
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  ::v-deep .lang-select {
    position: absolute;
    top: 4px;
    right: 0;
    background-color: #fff;
    font-size: 22px;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
