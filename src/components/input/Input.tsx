import { Autocomplete, Stack, TextField } from '@mui/material'
import { ChangeEvent, SyntheticEvent } from 'react'
import { useFilterStore } from '../../utils/store/useFilterStore.tsx'
import styles from './input.module.css'

export const Input = () => {
	const { data, setAmount } = useFilterStore()

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAmount(Number(e.target.value))
	}

	const handleOptionChange = (
		_event: SyntheticEvent<Element, Event>,
		value: string | number | null
	) => {
		if (value) {
			setAmount(Number(value))
		}
	}

	return (
		<div className={styles.container}>
			<Stack sx={{ width: 350 }}>
				<Autocomplete
					id='free-solo-demo'
					freeSolo
					options={data.map(option => option.amount)}
					onChange={handleOptionChange}
					renderInput={params => (
						<TextField
							{...params}
							label='Сумма кредита'
							onChange={handleInputChange}
						/>
					)}
				/>
			</Stack>
		</div>
	)
}
