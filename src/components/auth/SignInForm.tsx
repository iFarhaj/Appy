"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // اضافه کردن روتر برای جابجایی بین صفحات
import { Form, Input, Button, ConfigProvider, message } from "antd"; // اضافه کردن message
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "@/icons";

export default function SignInForm() {
  const [form] = Form.useForm();
  const [step, setStep] = useState<"username" | "password">("username");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // تعریف روتر

  // مرحله اول: تایید نام کاربری
  const handleNextStep = async () => {
    try {
      await form.validateFields(["username"]);
      setStep("password");
    } catch (error) {
      // خطاها توسط آنت دیزاین نمایش داده می‌شوند
    }
  };

  // مرحله نهایی: ارسال فرم به API
  const onFinish = async (values: {username: string; password: string}) => {
    setLoading(true);
    try {
      const response = await fetch("http://bamasan.ir/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        message.success("خوش آمدید! در حال انتقال به پنل...");
        
        // ذخیره توکن در صورت نیاز (مثال: در LocalStorage یا Cookie)
        if (data.token) {
           localStorage.setItem("auth_token", data.token);
        }

        // هدایت به صفحه پنل
        router.push("/panel");
      } else {
        // نمایش پیام خطای دریافتی از سمت سرور
        message.error(data.message || "نام کاربری یا رمز عبور اشتباه است.");
      }
    } catch (error) {
      message.error("خطا در اتصال به سرور. لطفاً اینترنت خود را بررسی کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConfigProvider
      direction="rtl"
      theme={{
        token: {
          colorPrimary: "#22c55e",
          borderRadius: 12,
          fontFamily: "inherit",
          colorError: "#f43f5e",
        },
      }}
    >
      <div className="flex flex-col flex-1 lg:w-1/2 w-full px-6 sm:px-0">
        <div className="w-full max-w-md mt-10 mx-auto mb-8 text-right">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400">
            <span className="rotate-180"><ChevronLeftIcon /></span>
            بازگشت
          </Link>
        </div>

        <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <div className="mb-10 text-right">
            <h1 className="mb-3 font-bold text-gray-900 text-title-sm dark:text-white sm:text-title-md">
              ورود به <span className="text-green-500 font-black">بات‌وات</span>
            </h1>
            <p className="text-theme-sm text-gray-500">
              {step === "username" ? "نام کاربری را وارد کنید." : "رمز عبور را وارد کنید."}
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
            <div className={step === "username" ? "block" : "hidden"}>
              <motion.div
                initial={false}
                animate={step === "username" ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Form.Item
                  name="username"
                  label={<span className="font-semibold dark:text-gray-300">نام کاربری</span>}
                  rules={[
                    { required: true, message: "وارد کردن نام کاربری الزامی است" },
                    { min: 3, message: "نام کاربری باید حداقل ۳ کاراکتر باشد" }
                  ]}
                >
                  <Input 
                    placeholder="ایمیل یا شماره موبایل" 
                    className="h-12 bg-gray-50 dark:bg-gray-800 dark:text-white border-gray-200 dark:border-gray-700"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={handleNextStep}
                  className="h-12! font-bold shadow-lg shadow-green-500/20 text-white mt-4"
                >
                  مرحله بعد
                </Button>
              </motion.div>
            </div>

            {/* مرحله دوم: رمز عبور */}
            <div className={step === "password" ? "block" : "hidden"}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={step === "password" ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Form.Item
                  name="password"
                  label={<span className="font-semibold dark:text-gray-300">رمز عبور</span>}
                  rules={[
                    { required: true, message: "لطفاً رمز عبور را وارد کنید" },
                    { min: 6, message: "رمز عبور نباید کمتر از ۶ کاراکتر باشد" }
                  ]}
                >
                  <Input.Password
                    placeholder="******"
                    className="h-12 bg-gray-50 dark:bg-gray-800 dark:text-white border-gray-200 dark:border-gray-700"
                    iconRender={(visible) => (visible ? <EyeIcon /> : <EyeCloseIcon />)}
                  />
                </Form.Item>

                <div className="flex justify-between items-center my-6">
                  <button 
                    type="button"
                    onClick={() => setStep("username")}
                    className="text-xs font-bold text-green-600 hover:underline h-8"
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
                  className="h-12! font-bold shadow-lg shadow-green-500/20 text-white"
                >
                  تایید و ورود
                </Button>
              </motion.div>
            </div>
          </Form>

          <div className="mt-8 text-center border-t border-gray-50 dark:border-gray-800 pt-6">
            <p className="text-sm text-gray-500 font-outfit">
              حساب ندارید؟{" "}
              <Link href="/signup" className="text-green-600 font-bold hover:underline">
                ثبت‌نام سریع
              </Link>
            </p>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}