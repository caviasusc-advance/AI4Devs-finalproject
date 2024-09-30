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
import { Button } from '@/components/ui/button';
import { toCurrency } from '@/lib/strings';
import useSessionStorage from '@/hooks/useSessionStorage';


function Home() {
  const [accounts, setAccounts] = useState([]);
  const [fetchAccounts, setFecthAccounts] = useState(true);
  const [ userInfo ] = useSessionStorage('userInfo', '')

  useEffect(() => {
    if(fetchAccounts){
      const fetchQuery = async () => {
        try {
          const response = await fetch.get(`${import.meta.env.VITE_API_URL}/users/${userInfo.userid}/accounts`);
          if (response.data.error) throw new Error(response.data.error);
          const data = await response.data;
          setAccounts(response.data);
        } catch (error) {
          console.error('Error fetching accounts:', error);
        }
      };
  
      fetchQuery();
      setFecthAccounts(false)
    }
  }, [fetchAccounts]);

  const createAccount = async(e) =>{
    try {
      const { type } = e.target.dataset
      const response = await fetch.post(`${import.meta.env.VITE_API_URL}/accounts`, {
        account_type: type,
        initial_balance: 50,
      });
      if (response.data.error) throw new Error(response.data.error);
      alert('Cuenta creada exitosamente');
      setFecthAccounts(true)
    } catch (error) {
      console.error('Error creating account:', error);
    }
  }

  return (
    <div>
      <br/>
      <h1>Hola, {userInfo.name}</h1>
      <br/>
      <div>
        <h2>Crea una cuenta</h2>
        <div className='flex gap-2 justify-center'>
          <Button data-type="C" onClick={createAccount}>Corriente</Button>
          <Button data-type="A" onClick={createAccount}>Ahorros</Button>
        </div>
      </div>
      <br/>

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
              <TableCell>{toCurrency(account.balance)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Home;