import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
  id_type: '',
  id_number: '',
  name: '',
  email: '',
  password: '',
  phone: '',
  address: '',
  birth_date: '',
};

const validationSchema = Yup.object({
  id_type: Yup.string().required('Requerido'),
  id_number: Yup.string().required('Requerido'),
  name: Yup.string().required('Requerido'),
  email: Yup.string().email('Correo inválido').required('Requerido'),
  password: Yup.string().required('Requerido'),
  phone: Yup.string().required('Requerido'),
  address: Yup.string().required('Requerido'),
  birth_date: Yup.date().required('Requerido'),
});

export default function Signin() {
  const [cookies, setCookie] = useCookies([COOKIES.token]);
  let navigate = useNavigate();

  useEffect(() => {}, []);

  async function onSubmit(values) {
    try {
      const res = await fetch.post(`${import.meta.env.VITE_API_URL}/users`, values);
      if (res.data.error) throw new Error(res.data.error);

      setCookie('log-state', 'log');
      navigate('/');
    } catch (error) {
      window.alert(error.message);
    }
  }

  const { values, errors, handleSubmit, ...formik } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className='h-full flex justify-center items-center'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Registro</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className='grid w-full items-center gap-4'>
              <InputBase
                value={values.id_type}
                onChange={formik.handleChange}
                error={errors.id_type}
                label='Tipo de Identificación'
                labelClassName='text-left'
                id='id_type'
                placeholder='Tipo de Identificación'
              />
              <InputBase
                value={values.id_number}
                onChange={formik.handleChange}
                error={errors.id_number}
                label='Número de Identificación'
                labelClassName='text-left'
                id='id_number'
                placeholder='Número de Identificación'
              />
              <InputBase
                value={values.name}
                onChange={formik.handleChange}
                error={errors.name}
                label='Nombre'
                labelClassName='text-left'
                id='name'
                placeholder='Nombre'
              />
              <InputBase
                value={values.email}
                onChange={formik.handleChange}
                error={errors.email}
                label='Correo Electrónico'
                labelClassName='text-left'
                id='email'
                placeholder='Correo Electrónico'
              />
              <InputBase
                value={values.password}
                onChange={formik.handleChange}
                error={errors.password}
                label='Contraseña'
                labelClassName='text-left'
                id='password'
                placeholder='Contraseña'
                type='password'
              />
              <InputBase
                value={values.phone}
                onChange={formik.handleChange}
                error={errors.phone}
                label='Teléfono'
                labelClassName='text-left'
                id='phone'
                placeholder='Teléfono'
              />
              <InputBase
                value={values.address}
                onChange={formik.handleChange}
                error={errors.address}
                label='Dirección'
                labelClassName='text-left'
                id='address'
                placeholder='Dirección'
              />
              <InputBase
                value={values.birth_date}
                onChange={formik.handleChange}
                error={errors.birth_date}
                label='Fecha de Nacimiento'
                labelClassName='text-left'
                id='birth_date'
                placeholder='Fecha de Nacimiento'
                type='date'
              />
            </div>
          </CardContent>
          <CardFooter className='flex flex-col justify-center'>
            <Button disabled={!formik.isValid} type='submit'>
              Registrarse
            </Button>
            <Link to={'/login'}>
              Inicia Sesión
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}