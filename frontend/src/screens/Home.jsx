import React, { useEffect, useState } from 'react';
import { fetch } from '@/lib/http'; // Asegúrate de que esta función esté definida para hacer solicitudes HTTP
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Select } from '@/components/ui/select';
import { InputBase } from '@/components/ui/baseInput';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  accountType: '',
  initialBalance: '',
};

const validationSchema = Yup.object({
  accountType: Yup.string().required('Requerido'),
  initialBalance: Yup.number().required('Requerido').positive('Debe ser un número positivo'),
});

function Home() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch.get(`${import.meta.env.VITE_API_URL}/users/1/accounts`); // Reemplaza '1' con el ID del usuario autenticado
        if (response.data.error) throw new Error(response.data.error);
        const data = await response.data;
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, []);

  const createAccount = async(e) =>{
    try {
      const { type } = e.target.dataset
      const response = await fetch.post(`${import.meta.env.VITE_API_URL}/accounts`, {
        account_type: type,
        initial_balance: 0,
        user_id: 1,
      });
      if (response.data.error) throw new Error(response.data.error);
      alert('Cuenta creada exitosamente');
      resetForm();
      setAccounts([...accounts, response.data]);
    } catch (error) {
      console.error('Error creating account:', error);
    }
  }

  return (
    <div>
      <h1>Bienvenido</h1>

      <div>
        <h2>Crea una cuenta</h2>
        <div className='flex gap-2 justify-center'>
          <Button data-type="C" onClick={createAccount}>Corriente</Button>
          <Button data-type="A" onClick={createAccount}>Ahorros</Button>
        </div>
      </div>
      <h2>Mis Cuentas</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Número de Cuenta</TableHead>
            <TableHead>Tipo de Cuenta</TableHead>
            <TableHead>Saldo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.account_number}>
              <TableCell>{account.account_number}</TableCell>
              <TableCell>{account.account_type}</TableCell>
              <TableCell>{account.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Home;