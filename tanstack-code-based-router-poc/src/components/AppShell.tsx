import { Link, Outlet, useRouter } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { privateRoute } from "../route";

export function AppShell() {
    const { signOut } = useAuth();
    const router = useRouter();
    const navigate = privateRoute.useNavigate();
  
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