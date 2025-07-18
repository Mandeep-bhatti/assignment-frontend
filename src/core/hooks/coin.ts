import { useCallback, useEffect, useState } from 'react';
import axios from 'axios'
import type { Coin } from '../../types/coin';

const COINS_URI = 'https://assignment-backend-4i3r.onrender.com/api/coins';

export function useCoins(currency: string = 'usd') {
    const [data, setData] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selecetedCurrency, setCurrency] = useState<string>(currency);

    const fetchData = useCallback(async (currentCurrency: string) => {
        setLoading(true);
        setError(null);
        try {
            const options = { params: { currency: currentCurrency } };

            const { data: response } = await axios.get(COINS_URI, options);

            if (response?.data) {
                setData(response.data);
            } else {
                setData([]);
            }

        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    }, []);

    const refetch = useCallback((currency?: string) => {
        if (currency) {
            setCurrency(currency);
            fetchData(currency)
        } else {
            fetchData(selecetedCurrency)
        }
    }, []);

    useEffect(() => {
        fetchData(selecetedCurrency);
    }, [fetchData]);

    return { data, loading, error, refetch, selecetedCurrency };
}
