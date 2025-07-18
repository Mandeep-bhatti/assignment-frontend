import { useState, useEffect, useCallback } from 'react';
import CoinList from '../../views/CoinList';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Dashboard = () => {
    const [data, setData] = useState([])
    const fetchData = useCallback(async () => {
        try {
            const uri = 'https://assignment-backend-4i3r.onrender.com/api/coins'
            const { data: res } = await fetch(uri, { method: "GET" }).then(v => v.json()) ?? {};
            if (res) {
                setData(res);
            }
        } catch (err: any) {
            alert(err.message)
        }
    }, []);

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, [fetchData]);

    return <>
        <div>
            {/* we can create wrappers of the components*/}
            <Box sx={{ width: '100%', marginBottom: 10 }}>
                <Typography variant="h4" gutterBottom>
                    Top 10 Crypto Currency
                </Typography>
            </Box>
            <CoinList data={data} />
        </div>
    </>
}


export default Dashboard 