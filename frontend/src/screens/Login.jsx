
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { InputBase } from '@/components/ui/baseInput';
import { Label } from '@/components/ui/label';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { COOKIES } from '@/lib/constants';
import { useCookies } from 'react-cookie';
import { fetch } from '@/lib/http';


const initialValues = {
  name: '',
  password: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Requerido'),
  password: Yup.string().required('Requerido'),
});

export default function Login() {

  const [cookies, setCookie] = useCookies([COOKIES.token]);
  let navigate = useNavigate();

  useEffect(()=>{
  },[])

  async function onSubmit(values) {
    try {
        // const res = await fetch.post(
        //   `${import.meta.env.VITE_VIRTUAL_STORE_URL}/login/staff`,
        //   values
        // );
        // if(res.data.error) throw new Error(res.data.error)
        // setStaffInfo(res.data.body)

        setCookie('log-state', 'log')
        navigate("/");
      
    } catch (error) {
      window.alert(error.message)
    }
  }

  const { values, errors, handleSubmit, ...formik } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className='h-full flex justify-center items-center'>
      <Card className='w-[350px] '>
        <CardHeader>
          <CardTitle>Inicia Sesión</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className='grid w-full items-center gap-4'>
              <InputBase
                value={values.name}
                onChange={formik.handleChange}
                error={errors.name}
                label='Usuario'
                labelClassName='text-left'
                id='name'
                placeholder='Usuario'
              />
              <InputBase
                value={values.password}
                onChange={formik.handleChange}
                error={errors.password}
                label='Contraseña'
                labelClassName='text-left'
                id='password'
                placeholder='Contraseña'
              />
            </div>
          </CardContent>
          <CardFooter className='flex flex-col justify-end'>
            <Button disabled={!formik.isValid} type='submit'>Iniciar Sesión</Button>
            <Link to={'/signin'}>
              Registrate
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
