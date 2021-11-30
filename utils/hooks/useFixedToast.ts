import { useEffect } from 'react';
import toast from 'react-hot-toast';

export const useFixedToast = (type: 'error' | 'success' | 'loading', message: string) => {
  useEffect(() => {
    toast[type](message, {
      style: {
        borderRadius: '20px',
        background: '#444',
        color: '#fff',
      },
    });
  }, [message, type]);
};
