import React,{useEffect, useState} from 'react'
import Table from './TableComponent'
import BoxFilter from './ToolTipComponent'

function Home({data}){
    const [dataTable, setDataTable] = useState([]);
    const [openTool,setOpenTool]=useState(false);
    const [colour,setColour]=useState('today');

    const toggleTool=()=>{setOpenTool(!openTool)};
    const toggleColour=(tab)=>{
        setColour(tab);
        if(tab!=="today"){setDataTable([])}
    };

    useEffect(()=>{
        if(data && data.sales.length>0 && colour==="today"){
            setDataTable(data.sales)
        }
    },[data,colour])

    const column = [
        { heading: 'Transación', value: 'trade' },
        { heading: 'Fecha y hora', value: 'date' },
        { heading: 'Método de pago', value: 'paymentMethod' },
        { heading: 'ID transación Bold', value: 'IdTrade' },
        { heading: 'Monto', value: ['price','description','pay'] },
    ]

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="column column-left">
                        <div className="own-accounts-container">
                            <div className="card-section">
                                <div className="card-header">
                                <h4>Total de ventas de hoy</h4>
                                </div>
                                <div className="card-body">
                                <h4>$1'560.000</h4>
                                </div>
                                <div className="card-footer">
                                    <div className="text">
                                        <h5>{new Date().toLocaleDateString('es-Co', { month:"long", day:"numeric"})}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column column-rigth">
                        <div className="btn-group">
                            <button className={colour==='today'?'active':''} onClick={()=>toggleColour('today')}>Hoy</button>
                            <button className={colour==='week'?'active':''} onClick={()=>toggleColour('week')}>Esta semana</button>
                            <button className={colour==='month'?'active':''} onClick={()=>toggleColour('month')}>Septiembre</button>
                        </div>
                        <div className='btn-filter'>
                            <div className='btn-group filter'>
                                <button onClick={toggleTool}>Filtrar</button>
                            </div>
                            <BoxFilter toggleTool={toggleTool} isOpenTool={openTool}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-table">
                    <div className="row">
                        <Table data={dataTable} column={column}/>
                    </div>
            </div>
            
        </>
    )
}




export default Home;