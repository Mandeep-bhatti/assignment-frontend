import {memo} from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import type { Coin } from '../types/coin';

const columns: GridColDef<Coin>[] = [
    {
        field: 'name',
        headerName: 'Coin Name',
        flex: 1
    },
    {
        field: 'symbol',
        headerName: 'Symbol',
        renderCell: (p) => {
            return <>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={p.row?.image} width={15} />
                    <span style={{ paddingLeft: "10px" }}>{p.row?.symbol}</span>
                </div>
            </>
        },
        flex: 1
    },
    {
        field: 'price',
        headerName: 'Current Price',
        type: 'number',
        flex: 1

    },
    {
        field: 'marketCap',
        headerName: 'Market Cap',
        type: 'number',
        flex: 1
    },
    {
        field: 'change24h',
        headerName: 'Change 24',
        type: 'number',
        flex: 1
    },
    {
        field: 'lastUpdatedAt',
        headerName: 'Last Updated',
        type: 'date',
        width: 110,
        valueGetter: (value) => new Date(value)
    },
];

export default memo(function CoinList({ data,isLoading }: { data: Coin[],isLoading:boolean }) {
    return (
        <Box sx={{ width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                getRowId={(row) => row.coinId}
                disableRowSelectionOnClick
                hideFooterPagination
                hideFooter
                loading={isLoading}
            />
        </Box>
    );
})