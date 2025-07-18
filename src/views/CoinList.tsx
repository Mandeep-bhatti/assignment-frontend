import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import type { Coin } from '../types/coin';

const columns: GridColDef<Coin>[] = [
    {
        field: 'name',
        headerName: 'Coin Name',
        flex:1
    },
    {
        field: 'symbol',
        headerName: 'Symbol',
        renderCell: (p) => {
            return <>
                <div style={{display:"flex",alignItems:"center"}}>
                   <img src={p.row?.image} width={15}/>
                   <span style={{paddingLeft:"10px"}}>{p.row?.symbol}</span>
                </div>
            </>
        },
        flex:1
    },
    {
        field: 'current_price',
        headerName: 'Current Price',
        type: 'number',
        flex:1

    },
    {
        field: 'market_cap',
        headerName: 'Market Cap',
        type: 'number',
        flex:1
    },
    {
        field: 'price_change_24h',
        headerName: 'Change 24',
        type: 'number',
        flex:1
    },
    //   {
    //     field: 'last_updated',
    //     headerName: 'Last Updated',
    //     type: 'date',
    //     width: 110,
    //   },
];

export default function CoinList({ data }: { data: Coin[] }) {
    return (
        <Box sx={{ width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                disableRowSelectionOnClick
                hideFooterPagination
                hideFooter
            />
        </Box>
    );
}