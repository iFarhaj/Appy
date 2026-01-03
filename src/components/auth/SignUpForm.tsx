'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, ConfigProvider, message } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from '@/icons';

export default function SignUpForm() {
  const [form] = Form.useForm();
  const [step, setStep] = useState<'info' | 'password'>('info');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // مرحله اول: تایید نام کسب‌وکار و شماره موبایل
  const handleNextStep = async () => {
    try {
      await form.validateFields(['companyName', 'mobile']);
      setStep('password');
    } catch (error) {
      // خطاها توسط آنت دیزاین نمایش داده می‌شوند
    }
  };

  // مرحله نهایی: ارسال فرم ثبت‌نام
  const onFinish = async (values: any) => {
    setLoading(true);

    const { confirmPassword, ...dataToSubmit } = values;

    try {
      // در اینجا آدرس API ثبت‌نام خود را جایگزین کنید
      const response = await fetch('http://bamasan.ir/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      const data = await response.json();

      if (response.status === 200 || response.status === 201) {
        message.success('ثبت‌نام با موفقیت انجام شد! در حال انتقال...');
        router.push('/panel');
      } else {
        message.error(data.message || 'خطایی در ثبت‌نام رخ داد.');
      }
    } catch (error) {
      message.error('خطا در اتصال به سرور.');
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
        <div className="mx-auto mt-10 mb-8 w-full max-w-md text-right">
          <Link
            href="/signin"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400"
          >
            <span className="rotate-180">
              <ChevronLeftIcon />
            </span>
            بازگشت به ورود
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
          <div className="mb-10 text-right">
            <h1 className="text-title-sm sm:text-title-md mb-3 font-bold text-gray-900 dark:text-white">
              عضویت در <span className="font-black text-green-500">بات‌وات</span>
            </h1>
            <p className="text-theme-sm text-gray-500">
              {step === 'info'
                ? 'اطلاعات کسب‌وکار خود را وارد کنید.'
                : 'یک رمز عبور امن انتخاب کنید.'}
            </p>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            autoComplete="off"
            preserve={true}
          >
            {/* مرحله اول: اطلاعات پایه */}
            <div className={step === 'info' ? 'block' : 'hidden'}>
              <motion.div
                initial={false}
                animate={step === 'info' ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Form.Item
                  name="companyName"
                  label={<span className="font-semibold dark:text-gray-300">نام کسب‌وکار</span>}
                  rules={[{ required: true, message: 'نام کسب‌وکار الزامی است' }]}
                >
                  <Input
                    placeholder="مثلاً: فروشگاه آنلاین"
                    className="h-12 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </Form.Item>

                <Form.Item
                  name="mobile"
                  label={<span className="font-semibold dark:text-gray-300">شماره موبایل</span>}
                  rules={[
                    { required: true, message: 'شماره موبایل الزامی است' },
                    {
                      pattern: /^09\d{9}$/,
                      message: 'شماره موبایل معتبر نیست (مثال: 09123456789)',
                    },
                  ]}
                >
                  <Input
                    placeholder="09123456789"
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
                    { required: true, message: 'رمز عبور را وارد کنید' },
                    { min: 6, message: 'رمز عبور باید حداقل ۶ کاراکتر باشد' },
                  ]}
                >
                  <Input.Password
                    placeholder="******"
                    className="h-12 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    iconRender={(visible) => (visible ? <EyeIcon /> : <EyeCloseIcon />)}
                  />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  label={<span className="font-semibold dark:text-gray-300">تکرار رمز عبور</span>}
                  dependencies={['password']}
                  rules={[
                    { required: true, message: 'تکرار رمز عبور الزامی است' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('رمز عبور و تکرار آن مطابقت ندارند'));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder="******"
                    className="h-12 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    iconRender={(visible) => (visible ? <EyeIcon /> : <EyeCloseIcon />)}
                  />
                </Form.Item>

                <div className="my-6 flex items-center justify-start">
                  <button
                    type="button"
                    onClick={() => setStep('info')}
                    className="h-8 text-xs font-bold text-green-600 hover:underline"
                  >
                    ویرایش اطلاعات مرحله قبل
                  </button>
                </div>

                <Button
                  type="primary"
                  size="large"
                  block
                  htmlType="submit"
                  loading={loading}
                  className="h-12! font-bold text-white shadow-lg shadow-green-500/20"
                >
                  تایید و ثبت‌نام
                </Button>
              </motion.div>
            </div>
          </Form>

          <div className="mt-8 border-t border-gray-50 pt-6 text-center dark:border-gray-800">
            <p className="text-sm text-gray-500">
              قبلاً ثبت‌نام کرده‌اید؟{' '}
              <Link href="/signin" className="font-bold text-green-600 hover:underline">
                وارد شوید
              </Link>
            </p>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
