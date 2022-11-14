import { IAdmin } from 'components/Types/interfaces/user.interface';

export default function useUserService() {
  const user: IAdmin | null = JSON.parse(localStorage.getItem('user') as string) || null;

  return {
    user,
  };
}
