import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useRouter,
} from '@tanstack/react-router';
import { useAuth } from '../hooks/useAuth';

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ location, context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged())
      throw redirect({ to: '/login', search: { redirect: location.href } });
  },
  component: AppShell,
});

function AppShell() {
  const { signOut } = useAuth();
  const router = useRouter();
  const navigate = Route.useNavigate();

  const handleSignOut = async () => {
    signOut();
    await router.invalidate();
    await navigate({ to: '/login' });
  };
  
  return (
    <div className='flex'>
      <div className='h-screen bg-white shadow-md'>
        <div className='md:block'>
          <nav className='px-10 py-10'>
          <Link
              to='/'
              className='block text-lg font-semibold text-gray-800 hover:text-blue-500 my-2'
            >
              Home
            </Link>
            <Link
              to='/pokemons'
              className='block text-lg font-semibold text-gray-800 hover:text-blue-500 my-2'
            >
              Pokemons
            </Link>
            <button className='block text-lg font-semibold text-gray-800 hover:text-blue-500 my-2' onClick={handleSignOut}>
              Log Out
            </button>
          </nav>
        </div>
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  );
}
