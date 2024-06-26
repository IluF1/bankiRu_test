import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useFilterStore } from '../../utils/store/useFilterStore.tsx'
import styles from './sorting.module.css'

export const Sorting = () => {
	const { setFilter } = useFilterStore()

	const handleChange = (event: SelectChangeEvent<string>) => {
		setFilter(event.target.value)
	}

	return (
		<div className={styles.sorting}>
			<FormControl variant='standard' sx={{ m: 1, minWidth: 130 }}>
				<InputLabel id='demo-simple-select-standard-label'>
					Сортировать
				</InputLabel>
				<Select
					labelId='demo-simple-select-standard-label'
					id='demo-simple-select-standard'
					onChange={handleChange}
				>
					<MenuItem value=''>Не сортировать</MenuItem>
					<MenuItem value='От меньшего к большему'>
						От меньшего к большему
					</MenuItem>
					<MenuItem value='От большего к меньшему'>
						От большего к меньшему
					</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}
