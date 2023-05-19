import type { FormInst, FormRules } from 'naive-ui'
import type { UserAccountLoginParams } from '~/apis/user'

export const useAccountLogin = () => {
  const { t } = useI18n()
  const userStore = useUserStore()
  const router = useRouter()

  const formRef = ref<FormInst>()
  const loading = ref(false)

  const model = reactive<UserAccountLoginParams>({
    username: null,
    password: null,
  })

  const rules: FormRules = {
    username: [
      {
        required: true,
        renderMessage: () => t('login.username.required'),
      },
      {
        min: 5,
        max: 20,
        renderMessage: () => t('login.username.length'),
      },
    ],
    password: [
      {
        required: true,
        renderMessage: () => t('login.password.required'),
      },
      {
        min: 5,
        max: 20,
        renderMessage: () => t('login.password.length'),
      },
    ],
  }

  const login = async () => {
    // 1.加载loading状态
    loading.value = true

    try {
      // 2.校验表单是否正确
      await formRef.value?.validate()
      // 3.请求接口
      await userStore.login(model)
      // 4.请求成功设置token
      loading.value = false
      // 5.跳转到首页
      const redirect = router.currentRoute.value.params.redirect as string
      await router.replace(redirect || '/')
    }
    catch (err) {
      loading.value = false
    }
  }

  return {
    formRef,
    loading,
    model,
    rules,
    login,
  }
}
