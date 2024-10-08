import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import { fetch } from '@/lib/http';
import { COOKIES } from '@/lib/constants';
import { useCookies } from 'react-cookie';
import Home from '@/assets/svg/home.svg?react';
import MenuIcon from '@/assets/svg/menu.svg?react';
import TransactionIcon from '@/assets/svg/transaction.svg?react';
import LogoutIcon from '@/assets/svg/logout.svg?react';
import { useNavigate, Link } from 'react-router-dom';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';


function NavItem({ Icon, label, path, ...props }){
  return(
    <Link to={path} className='text-left flex items-center hover:bg-slate-400 w-full' {...props}>
      <div className='inline-block w-12 p-2'>
        <Icon className=''/>
      </div>
      <span>{label}</span>
    </Link>
  )
}

export default function SignedLayout() {
  const [cookies, setCookie] = useCookies([COOKIES.token]);
  let navigate = useNavigate();

  useEffect(() => {
    let valid = true;
    console.log(cookies)
    if (cookies?.[COOKIES.token]) {
      // validate token
    } else {
      console.log(':(');
      valid = false;
    }
    if (!valid) {
      navigate('/login');
    }
  });

  const logOut = ()=>{
    return fetch.post(`${import.meta.env.VITE_API_URL}/logout/user`);
  }

  return (
    <div className='h-full grid grid-cols-[auto_1fr]'>
      <Collapsible className='h-full bg-muted grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-hidden group'>
        <CollapsibleTrigger className='col-span-2 bg-primary text-primary-foreground justify-end'>
          <MenuIcon className="w-12 p-2 ml-auto"/>
          </CollapsibleTrigger>
        <div className='w-12 relative'>

          <div className='absolute flex flex-col items-start w-48'>
            <NavItem label='Inicio' path ='/' Icon={Home}/>
            <NavItem label='Transacciones' path ='/transaction' Icon={TransactionIcon}/>
          </div>
          <div className='absolute bottom-0 flex flex-col items-start w-48'>
            <NavItem  onClick={logOut} label='Salir' Icon={LogoutIcon}/>
          </div>
        </div>
        <CollapsibleContent>
        <div className='w-32'/>
          
        </CollapsibleContent>
      </Collapsible>
      <main className='mx-4 my-2'>
        <Outlet />

      </main>
    </div>
  );
}
