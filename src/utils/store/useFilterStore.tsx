// TODO:Можно сделать и без zustand
//
import { create } from 'zustand'
import { IData, IFilterStoreState } from './helpers/interfaces'

const URL = '../../../api/mock.json'
const response = await fetch(URL, {
	method: 'GET',
})
const data = await response.json()
const products = data.products

export const useFilterStore = create<IFilterStoreState>(set => ({
	// Устанавлеваем начальные значения
	amount: 0,
	filter: '',
	data: [],

	// Устанавливаем сумму
	setAmount: (amount: number) => set(state => ({ ...state, amount })),

	fetchData: async (amount: number, filter: string) => {
		let filteredData = products

		// Проверям есть ли в инпуте сумма, если да то выводим кредиты которые не больше этой суммы
		if (amount > 0) {
			filteredData = products.filter(
				(product: IData) => product.amount <= amount
			)
		}

		// Сортируем массив в зависимости от выбранного фильтра
		if (filter === 'По максимальной сумме') {
			filteredData.sort((a: IData, b: IData) => b.amount - a.amount)
		} else if (filter === 'По минимальной сумме') {
			filteredData.sort((a: IData, b: IData) => a.amount - b.amount)
		}

		// Обновляем состояние с отфильтрованными и отсортированными данными
		set(state => ({
			...state,
			filter,
			data: filteredData,
		}))
	},

	// Устанавливаем фильтр
	setFilter: (filter: string) => set(state => ({ ...state, filter })),
}))
