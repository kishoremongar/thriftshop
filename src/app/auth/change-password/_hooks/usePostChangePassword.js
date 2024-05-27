import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import apiEndPoints from '@/services/apiEndPoints';
import makeApiRequest from '@/services/makeApiRequest';
import { ErrorToast, SuccessToast } from '@/services/toasterServices';

export default function usePostResetPassword(cb) {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data) => {
      const response = await makeApiRequest.post(
        apiEndPoints.POST_RESET_PASSWORD,
        data
      );
      return response?.data;
    },
    onSuccess: (data) => {
      if (data.msg) {
        router.push('/auth/change-password?s=1', { replace: true });
        SuccessToast({ text: data?.msg });
        cb();
      } else {
        router.push('/auth/change-password?s=0', { replace: true });
      }
    },
    onError: (error) => {
      ErrorToast({ text: error?.response?.data?.msg });
    },
  });
}
