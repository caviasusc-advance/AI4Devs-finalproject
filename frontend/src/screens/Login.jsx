import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { InputBase } from '@/components/ui/baseInput';
import { Select } from '@/components/ui/select';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { COOKIES } from '@/lib/constants';
import { useCookies } from 'react-cookie';
import { fetch } from '@/lib/http';
import useSessionStorage from '@/hooks/useSessionStorage';

const initialValues = {
  id_type: '',
  id_number: '',
  password: '',
};

const validationSchema = Yup.object({
  id_type: Yup.string().required('Requerido'),
  id_number: Yup.string().required('Requerido'),
  password: Yup.string().required('Requerido'),
});

export default function Login() {
  const [cookies, setCookie] = useCookies([COOKIES.token]);
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useSessionStorage('userInfo', '');
  const [documentTypes, setDocumentTypes] = useState([]);

  useEffect(() => {
    const fetchDocumentTypes = async () => {
      try {
        const response = await fetch.get(`${import.meta.env.VITE_API_URL}/system/documentType`);
        if (response.data.error) throw new Error(response.data.error);
        setDocumentTypes(response.data.map(type => ({ value: type.value, name: type.name })));
      } catch (error) {
        console.error('Error fetching document types:', error);
      }
    };

    fetchDocumentTypes();
  }, []);

  async function onSubmit(values) {
    try {
      const res = await fetch.post(`${import.meta.env.VITE_API_URL}/login/user`, values);
      if (res.data.error) throw new Error(res.data.error);

      setUserInfo(res.data);
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
      <Card className='w-[350px] '>
        <CardHeader>
          <CardTitle>Inicia Sesión</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className='grid w-full items-center gap-4'>
              <Select
                data={documentTypes}
                value={values.id_type}
                onValueChange={(value) => {
                  formik.setFieldValue('id_type', value);
                }}
                error={errors.id_type}
                label='Tipo de Identificación'
                id='id_type'
                placeholder='Tipo de Identificación'
              />
              <InputBase
                value={values.id_number}
                onChange={formik.handleChange}
                error={errors.id_number}
                label='Usuario'
                id='id_number'
                placeholder='Usuario'
              />
              <InputBase
                value={values.password}
                onChange={formik.handleChange}
                error={errors.password}
                label='Contraseña'
                id='password'
                placeholder='Contraseña'
                type='password'
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