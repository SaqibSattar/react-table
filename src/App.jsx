import { useState } from 'react'
import './App.css'
import { BasicTable } from './components/BasicTable'
import { SortingTable } from './components/SortingTable'
import { FilteringTable } from './components/FilteringTable'
import { PaginationTable } from './components/PaginationTable'
import { RowSelection } from './components/RowSelection'
import { ColumnOrder } from './components/ColumnOrder'

function App() {

  return (
    <>
      {/* <BasicTable />
      <SortingTable />
      <FilteringTable />
      <PaginationTable />
      <RowSelection /> */}
      <ColumnOrder/>
    </>
  )
}

export default App
