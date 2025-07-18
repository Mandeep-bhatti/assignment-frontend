import { useEffect } from 'react';
import CoinList from '../../views/CoinList';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import currency from '../../data/currency';
import { useCoins } from '../../core/hooks/coin'
import type { SelectChangeEvent } from '@mui/material';
const Dashboard = () => {
    const { data, refetch, selecetedCurrency, loading, error } = useCoins('usd');

    const currencyHandler = (e: SelectChangeEvent<string>) => {
        refetch(e.target?.value?.toLowerCase())
    }

    useEffect(() => {
        const interval = setInterval(() => refetch(), 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        error && alert('Try after  sometime')
    }, [error]);

    return <>
        <div>
            {/* we can create wrappers of the components*/}
            <Box sx={{ width: '100%', marginBottom: 5 }}>
                <Typography variant="h4" gutterBottom>
                    Top 10 Crypto Currency
                </Typography>

                <Box sx={{ maxWidth: 150 }}>
                    <FormControl fullWidth>
                        <InputLabel id="currency-filter-label">Currency</InputLabel>
                        <Select
                            labelId="currency-filter-label"
                            id="currency-filter"
                            label="Currency"
                            onChange={currencyHandler}
                            value={selecetedCurrency?.toUpperCase()}
                        >
                            {
                                currency?.map((c) => {
                                    return <MenuItem key={c} value={c}>{c}</MenuItem>
                                })
                            }


                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <CoinList data={data} isLoading={loading} />
        </div>
    </>
}


export default Dashboard 