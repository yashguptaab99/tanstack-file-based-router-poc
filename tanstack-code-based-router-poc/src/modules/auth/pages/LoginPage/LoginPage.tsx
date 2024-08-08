import { useRouter } from '@tanstack/react-router';
import { useAuth } from '../../../../hooks/useAuth';
import { loginRoute } from './route';


export function LoginPage() {
  const { signIn } = useAuth();
  const router = useRouter();
  const navigate = loginRoute.useNavigate();
  const search = loginRoute.useSearch();

  const handleSignIn = async () => {
    signIn();
    await router.invalidate();
    await navigate({ to: search.redirect || '/' });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-center text-2xl font-bold text-gray-700 mb-4'>
          Login
        </h2>
        <form>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
