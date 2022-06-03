import React from 'react'

function BoxFilter({toggleTool,isOpenTool}){
    return(
        <div  className={!isOpenTool?'box-filter hidden':'box-filter show'}>
            <div className='header-filter'>
                <h5>Filtrar</h5>
                <span onClick={toggleTool}>x</span>
            </div>
        
            <div className='style-check'>
                <input type="checkbox" id="ePay" name="ePay" value="Cobro con datafono"/>
                <label for="ePay"> Cobro con datafono</label>
            </div>
            <div className='style-check'>
                <input type="checkbox" id="pay" name="pay" value="Cobros con link de pago"/>
                <label for="pay"> Cobros con link de pago</label>
            </div>
            <div className='style-check'>
                <input type="checkbox" id="all" name="all" value="Ver todos"/>
                <label for="all"> Ver todos</label><br/><br/>
            </div>
            <div className='text-center'>
                <button type="submit">Aplicar</button>
            </div>
        </div>
    )
}


export default BoxFilter;