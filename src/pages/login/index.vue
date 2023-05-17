<script setup lang="ts">
import {
  GithubOutlined,
  LockOutlined,
  MobileOutlined,
  UserOutlined,
} from '@vicons/antd'
import { BlankLayout } from '~/layouts'
</script>

<template>
  <BlankLayout>
    <div flex="~ col" class="py-20px items-center justify-center">
      <div class="flex items-center">
        <img src="@/assets/vue.svg" class="w-40px h-40px">
        <span class="ml-3 text-33px font-600">Naive Admin Pro</span>
      </div>
      <div
        class="mt-12px mb-40px flex items-center justify-center color-[var(--text-color-3)]"
      >
        {{ $t('login.admin.desc') }}
      </div>
    </div>
    <div class="w-350px mx-auto">
      <n-tabs
        type="line"
        default-value="account"
        justify-content="space-evenly"
      >
        <n-tab-pane name="account" :tab="$t('login.account.tab')">
          <n-form label-align="left" label-placement="left">
            <n-form-item-row>
              <n-input :placeholder="$t('login.username.placeholder')">
                <template #prefix>
                  <n-icon :component="UserOutlined" />
                </template>
              </n-input>
            </n-form-item-row>
            <n-form-item-row>
              <n-input
                type="password"
                show-password-on="click"
                :placeholder="$t('login.password.placeholder')"
              >
                <template #prefix>
                  <n-icon :component="LockOutlined" />
                </template>
              </n-input>
            </n-form-item-row>
            <n-form-item-row>
              <div class="w-100% flex items-center justify-between">
                <n-checkbox>
                  {{ $t('login.remember-me') }}
                </n-checkbox>
                <a class="cursor-pointer text-[var(--primary-color)]">
                  {{ $t('login.forgot-password') }}
                </a>
              </div>
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong>
            {{ $t('login.login') }}
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="mobile" :tab="$t('login.mobile.tab')">
          <n-form label-align="left" label-placement="left">
            <n-form-item-row>
              <n-input :placeholder="$t('login.mobile.placeholder')">
                <template #prefix>
                  <n-icon :component="MobileOutlined" />
                </template>
              </n-input>
            </n-form-item-row>
            <n-form-item-row>
              <n-input-group>
                <n-input
                  :placeholder="
                    $t('login.mobile.verification-code.placeholder')
                  "
                >
                  <template #prefix>
                    <n-icon :component="LockOutlined" />
                  </template>
                </n-input>
                <n-button type="primary" ghost>
                  {{
                    $t('login.mobile.verification-code.get-verification-code')
                  }}
                </n-button>
              </n-input-group>
            </n-form-item-row>
            <n-form-item-row>
              <div class="w-100% flex items-center justify-between">
                <n-checkbox>
                  {{ $t('login.remember-me') }}
                </n-checkbox>
                <a class="cursor-pointer text-[var(--primary-color)]">
                  {{ $t('login.forgot-password') }}
                </a>
              </div>
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong>
            {{ $t('login.login') }}
          </n-button>
        </n-tab-pane>
      </n-tabs>
      <div class="mt-24px flex items-center">
        <span>{{ $t('login.sign-in-with') }}</span>
        <n-icon
          size="24"
          class="cursor-pointer text-[var(--text-color-3)] hover:text-[var(--primary-color)]"
          :component="GithubOutlined"
        />
      </div>
    </div>
  </BlankLayout>
</template>
