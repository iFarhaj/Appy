'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // اضافه کردن روتر برای جابجایی بین صفحات
import { Form, Input, Button, ConfigProvider, message } from 'antd'; // اضافه کردن message
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from '@/icons';

export default function SignInForm() {
  const [form] = Form.useForm();
  const [step, setStep] = useState<'username' | 'password'>('username');
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // تعریف روتر

  // مرحله اول: تایید نام کاربری
  const handleNextStep = async () => {
    try {
      await form.validateFields(['username']);
      setStep('password');
    } catch (error) {
      // خطاها توسط آنت دیزاین نمایش داده می‌شوند
    }
  };

  // مرحله نهایی: ارسال فرم به API
  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      const response = await fetch('http://bamasan.ir/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        message.success('خوش آمدید! در حال انتقال به پنل...');

        // ذخیره توکن در صورت نیاز (مثال: در LocalStorage یا Cookie)
        if (data.token) {
          localStorage.setItem('auth_token', data.token);
        }

        // هدایت به صفحه پنل
        router.push('/panel');
      } else {
        // نمایش پیام خطای دریافتی از سمت سرور
        message.error(data.message || 'نام کاربری یا رمز عبور اشتباه است.');
      }
    } catch (error) {
      message.error('خطا در اتصال به سرور. لطفاً اینترنت خود را بررسی کنید.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConfigProvider
      direction="rtl"
      theme={{
        token: {
          colorPrimary: '#22c55e',
          borderRadius: 12,
          fontFamily: 'inherit',
          colorError: '#f43f5e',
        },
      }}
    >
      <div className="flex w-full flex-1 flex-col px-6 sm:px-0 lg:w-1/2">
        <div className="mx-auto mt-10! mb-8 w-full max-w-md text-right">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400"
          >
            <span className="rotate-180">
              <ChevronLeftIcon />
            </span>
            بازگشت
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
          <div className="mb-10 text-right">
            <h1 className="text-title-sm sm:text-title-md mb-3 font-bold text-gray-900 dark:text-white">
              ورود به <span className="font-black text-green-500">بات‌وات</span>
            </h1>
            <p className="text-theme-sm text-gray-500">
              {step === 'username' ? 'نام کاربری را وارد کنید.' : 'رمز عبور را وارد کنید.'}
            </p>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            autoComplete="off"
            preserve={true} // برای حفظ مقدار username در مرحله دوم
          >
            {/* مرحله اول: نام کاربری */}
            <div className={step === 'username' ? 'block' : 'hidden'}>
              <motion.div
                initial={false}
                animate={step === 'username' ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Form.Item
                  name="username"
                  label={<span className="font-semibold dark:text-gray-300">نام کاربری</span>}
                  rules={[
                    { required: true, message: 'وارد کردن نام کاربری الزامی است' },
                    { min: 3, message: 'نام کاربری باید حداقل ۳ کاراکتر باشد' },
                  ]}
                >
                  <Input
                    placeholder="ایمیل یا شماره موبایل"
                    className="h-12 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={handleNextStep}
                  className="mt-4 h-12! font-bold text-white shadow-lg shadow-green-500/20"
                >
                  مرحله بعد
                </Button>
              </motion.div>
            </div>

            {/* مرحله دوم: رمز عبور */}
            <div className={step === 'password' ? 'block' : 'hidden'}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={step === 'password' ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Form.Item
                  name="password"
                  label={<span className="font-semibold dark:text-gray-300">رمز عبور</span>}
                  rules={[
                    { required: true, message: 'لطفاً رمز عبور را وارد کنید' },
                    { min: 6, message: 'رمز عبور نباید کمتر از ۶ کاراکتر باشد' },
                  ]}
                >
                  <Input.Password
                    placeholder="******"
                    className="h-12 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    iconRender={(visible) => (visible ? <EyeIcon /> : <EyeCloseIcon />)}
                  />
                </Form.Item>

                <div className="my-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep('username')}
                    className="h-8 text-xs font-bold text-green-600 hover:underline"
                  >
                    ویرایش نام کاربری
                  </button>
                  <Link href="#" className="text-xs text-gray-400">
                    فراموشی رمز عبور؟
                  </Link>
                </div>

                <Button
                  type="primary"
                  size="large"
                  block
                  htmlType="submit"
                  loading={loading}
                  className="h-12! font-bold text-white shadow-lg shadow-green-500/20"
                >
                  تایید و ورود
                </Button>
              </motion.div>
            </div>
          </Form>

          <div className="mt-8 border-t border-gray-50 pt-6 text-center dark:border-gray-800">
            <p className="font-outfit text-sm text-gray-500">
              حساب ندارید؟{' '}
              <Link href="/signup" className="font-bold text-green-600 hover:underline">
                ثبت‌نام سریع
              </Link>
            </p>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
