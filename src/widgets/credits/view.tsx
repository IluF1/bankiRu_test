import { useEffect } from 'react'
import { useFilterStore } from '../../utils/store/useFilterStore'
import { formatter } from './helpers/formatPrice'
import styles from './view.module.css'

export const Credits = () => {
	const { amount, filter, data, fetchData } = useFilterStore(state => ({
		amount: state.amount,
		filter: state.filter,
		data: state.data,
		setAmount: state.setAmount,
		fetchData: state.fetchData,
		setFilter: state.setFilter,
	}))

	useEffect(() => {
		fetchData(amount, filter)
	}, [amount, filter, fetchData])

	return (
		<div className={styles.container}>
			{data.map(item => (
				<div className={styles.item} key={item.name}>
					<img src={item.logo} alt='logo' className={styles.logo} />
					<h4 className={styles.name}>{item.name}</h4>
					<div className={styles.sum}>
						<p className={styles.sum_text}>Сумма:</p>
						<h5 className={styles.amount}>{formatter.format(item.amount)}</h5>
					</div>
				</div>
			))}
		</div>
	)
}
