import { CircularProgress } from '@mui/material'
import { Input } from '../components/input/Input'
import { Sorting } from '../components/sorting/sorting.tsx'
import { useFilterStore } from '../utils/store/useFilterStore.tsx'
import { Credits } from '../widgets/credits/view.tsx'
import './assets/styles/App.css'

export const App = () => {
	const { data } = useFilterStore()

	return (
		<div className='container'>
			{data ? (
				<>
					<div>
						<Input />
					</div>
					<div className='sort'>
						<Sorting />
					</div>
					<div>
						<Credits />
					</div>
				</>
			) : (
				<CircularProgress color='info'/>
			)}
		</div>
	)
}
