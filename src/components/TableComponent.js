import React from 'react'

const TableHeadItem = ({ item }) => <th>{item.heading}</th>

const Table = ({ data, column }) => {
    return (
        <>
            <div className='header-table'>
                <h5>Tus ventas de hoy</h5>
            </div>
            <div className='table'>
            <table>
                <thead>
                    <tr>
                        {column.map((item, index) => <TableHeadItem item={item} />)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => <TableRow item={item} column={column} />)}
                </tbody>
            </table>
            </div>

        </>
    )
}
  

const TableRow = ({ item, column }) => (
    <tr>
        {column.map((columnItem, index) => {
  
            if(columnItem.value.includes('.')) {
                const itemSplit = columnItem.value.split('.') 
                return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
            }
    
            if(Array.isArray(columnItem.value)){
                return <td><p>{item[columnItem.value[0]]}</p><p>{item[columnItem.value[1]]}</p><p className='red'>{item[columnItem.value[2]]}</p></td>
            }
            return <td>{item[`${columnItem.value}`]}</td>
        })}
    </tr>
)

export default Table;