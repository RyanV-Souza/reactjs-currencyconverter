import React from 'react'

export default function index(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount
  } = props

  return (
    <div>
      <input type="number" value={amount} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
           <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
