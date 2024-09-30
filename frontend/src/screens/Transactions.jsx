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
import useSessionStorage from '@/hooks/useSessionStorage';
import { formatDate, toCurrency } from '@/lib/strings';

const initialValues = {
  sourceAccount: '',
  destinationAccount: '',
  amount: '',
  description: '',
};

const validationSchema = Yup.object({
  sourceAccount: Yup.string().required('Requerido'),
  destinationAccount: Yup.string().required('Requerido'),
  amount: Yup.number().required('Requerido').positive('Debe ser un número positivo'),
  description: Yup.string(),
});

function Transactions() {
  const [accounts, setAccounts] = useState([]);
  const [accountsData, setAccountsData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [fetchTransactions, setFetchTransactions] = useState(true);
  const [userInfo] = useSessionStorage('userInfo', '');

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch.get(`${import.meta.env.VITE_API_URL}/users/${userInfo.userid}/accounts`);
        if (response.data.error) throw new Error(response.data.error);
        setAccounts(response.data);
        setAccountsData(response.data.map(account => ({ value: account.id, name: account.account_number })));
        formik.setFieldValue('sourceAccount', response.data[0].id);
        setSelectedAccount(response.data[0].id);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, []);

  useEffect(() => {
    if (selectedAccount && fetchTransactions) {
    const transactionQuery = async () => {
        try {
          const response = await fetch.get(`${import.meta.env.VITE_API_URL}/accounts/${selectedAccount}/transactions`);
          if (response.data.error) throw new Error(response.data.error);
          setTransactions(response.data);
        } catch (error) {
          console.error('Error fetching transactions:', error);
        }
      }
      
      transactionQuery();
      setFetchTransactions(false);
    };
  }, [selectedAccount, fetchTransactions]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch.post(`${import.meta.env.VITE_API_URL}/transactions`, {
          source_account_id: values.sourceAccount,
          destination_account_number: values.destinationAccount,
          amount: values.amount,
          description: values.description,
        });
        if (response.data.error) throw new Error(response.data.error);
        alert('Transacción creada exitosamente');
        resetForm();
        setFetchTransactions(true);
      } catch (error) {
        console.error('Error creating transaction:', error);
      }
    },
  });

  return (
    <div>
      <h1>Transacciones</h1>
      {accounts.length > 0 && (
        <>
          <div className='flex flex-col gap-4'>
            <h2>Realizar transacción</h2>
            <form className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
              <Select
                id="sourceAccount"
                name="sourceAccount"
                label="Cuenta de Origen"
                data={accountsData}
                value={formik.values.sourceAccount}
                onValueChange={(value) => {
                  formik.setFieldValue('sourceAccount', value);
                }}
                error={formik.errors.sourceAccount}
              />
              <InputBase
                id="destinationAccount"
                name="destinationAccount"
                label="Cuenta de Destino"
                type="text"
                value={formik.values.destinationAccount}
                onChange={formik.handleChange}
                error={formik.errors.destinationAccount}
              />
              <InputBase
                id="amount"
                name="amount"
                label="Monto"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                error={formik.errors.amount}
              />
              <InputBase
                id="description"
                name="description"
                label="Descripción"
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.errors.description}
              />
              <Button type="submit">Crear</Button>
            </form>
          </div>
          <br/>
          <br/>
          <div className='flex flex-col gap-4'>
            <h2>Historial de Transacciones</h2>
            <Select
              id="selectedAccount"
              name="selectedAccount"
              label="Seleccionar Cuenta"
              data={accountsData}
              value={selectedAccount}
              onValueChange={(value) => {
                setSelectedAccount(value);
                setFetchTransactions(true);
              }}
            />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Monto</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell className={'text-left'}>{formatDate(transaction.date)}</TableCell>
                    <TableCell className={'text-left'}>{transaction.description}</TableCell>
                    <TableCell className={'text-right'}>{toCurrency(transaction.amount)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
}

export default Transactions;