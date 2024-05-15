const TransactionHistory = ({ items } ) => {
    return (
    <>
        {
                items.map(({ id, type, amount, currency }) => {
                    return (
                        <>
                            <table key={id} >
                                <thead >
                                    <tr>
                                        <th>{type}</th>
                                        <th>{amount}</th>
                                        <th>{currency}</th>
                                    </tr>
                                </thead>
                            </table>
                    </>
                    )
                
            })
        }
      </>  


    )
}

export default TransactionHistory