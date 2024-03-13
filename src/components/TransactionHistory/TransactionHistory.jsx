import styles from "../TransactionHistory/TransactionHistory.module.css"; 

export default function TransactionHistory({ items }) {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.header}>Type</th>
                        <th className={styles.header}>Amount</th>
                        <th className={styles.header}>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, type, amount, currency }) => (
                        <tr key={id} className={styles.row}>
                            <td className={styles.cell}>{type}</td>
                            <td className={styles.cell}>{amount}</td>
                            <td className={styles.cell}>{currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
