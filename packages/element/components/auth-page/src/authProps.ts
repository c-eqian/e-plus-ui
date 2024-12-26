import { Lock, User } from '@e-plus-ui/icons';
import { markRaw } from 'vue';
import { defineFormSchema } from '../../form-schema';
import type { AuthPageProps } from './type';

export const FORM_CONFIG = defineFormSchema({
  columns: 1,
  items: [
    {
      label: '',
      prop: 'userName',
      type: 'input',
      placeholder: '请输入用户名',
      rules: [
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        }
      ],
      componentProps: {
        prefixIcon: markRaw(User)
      }
    },
    {
      label: '',
      prop: 'password',
      type: 'input',
      placeholder: '请输入密码',
      componentProps: {
        type: 'password',
        showPassword: true,
        prefixIcon: markRaw(Lock)
      },
      rules: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '',
      prop: 'remember',
      type: 'input',
      placeholder: '请输入密码',
      slotKey: 'remember'
    }
  ]
});

export const authProps = {
  loginTitle: '欢迎登录',
  loginText: '登录',
  forgetPasswordText: '找回密码',
  rememberText: '记住密码',
  useRemember: true,
  offsetR: '230px',
  formSchema: () => FORM_CONFIG
} satisfies AuthPageProps;
