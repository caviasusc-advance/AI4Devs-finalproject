import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import { COOKIES } from '@/lib/constants';
import { useCookies } from 'react-cookie';

export default function UnSignedLayout() {
  const [cookies, setCookie] = useCookies([COOKIES.token]);
  let navigate = useNavigate();

  useEffect(() => {
    if (cookies?.[COOKIES.token]) {
      // validate token
      navigate('/');
    }

  });

  return (
  <div class="h-screen">
      <Outlet />
    </div>
)}
