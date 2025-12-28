import SignUpForm from '@/components/auth/SignUpForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ورود | بات‌وات',
  description: '',
};

export default function SignIn() {
  return <SignUpForm />;
}
