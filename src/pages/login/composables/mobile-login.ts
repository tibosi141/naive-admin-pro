import type { FormInst, FormRules } from 'naive-ui'
import type { UserMobileLoginParams } from '~/apis/user'
import { userSendCodeApi } from '~/apis/user'

export const useMobileLogin = () => {
  const { t } = useI18n()
  const userStore = useUserStore()
  const router = useRouter()
  const message = useMessage()

  const mFormRef = ref<FormInst>()
  const mLoading = ref(false)
  const counter = ref(120)
  const countState = ref(false)

  const mModel = reactive<UserMobileLoginParams>({
    mobile: null,
    code: null,
    type: 'mobile',
  })

  const mRules = reactive<FormRules>({
    mobile: [
      {
        key: 'mobile',
        required: true,
        renderMessage: () => t('login.mobile.required'),
      },
      {
        key: 'mobile',
        pattern: /^1[3456789]\d{9}$/,
        renderMessage: () => t('login.mobile.rule'),
      },
    ],
    code: [
      {
        required: true,
        renderMessage: () => t('login.mobile.verification-code.required'),
      },
      {
        min: 6,
        max: 6,
        renderMessage: () => t('login.mobile.verification-code.rule'),
      },
    ],
  })

  const startCount = () => {
    counter.value = 120
    const timer = setInterval(() => {
      if (counter.value <= 0) {
        countState.value = false
        clearInterval(timer)
        return
      }
      counter.value--
    }, 1000)
  }

  const sendCode = async () => {
    const msgIns = message.loading(t('login.mobile.verification-code.loading'))
    try {
      await mFormRef.value?.validate(undefined, rule => rule.key === 'mobile')
      await userSendCodeApi({ mobile: mModel.mobile })
      countState.value = true
      msgIns.destroy()
      message.success(t('login.mobile.verification-code.success'))
      startCount()
    }
    catch (err) {
      msgIns.destroy()
    }
  }

  const mLogin = async () => {
    mLoading.value = true

    try {
      await mFormRef.value?.validate()
      await userStore.login(mModel)

      mLoading.value = false

      const redirect = router.currentRoute.value.params.redirect as string
      await router.replace(redirect || '/')
    }
    catch (err) {
      mLoading.value = false
    }
  }

  return {
    mFormRef,
    mLoading,
    counter,
    countState,
    mModel,
    mRules,
    sendCode,
    mLogin,
  }
}
