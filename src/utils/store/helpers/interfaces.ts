export interface IFilterStoreState {
	amount: number
	filter: string
	data: IData[]
	// Функция для получения суммы кредита из инпута
	setAmount: (amount: number) => void
	// В этой функции будет основная логика 
	fetchData: (amount: number, filter: string) => Promise<void>
	// Функция для получения фильтра
	setFilter: (filter: string) => void
}



export interface IData {
	amount: number
	name: string
	logo: string
}