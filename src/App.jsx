import { useState } from 'react'
import './App.css'
import { BasicTable } from './components/BasicTable'
import { SortingTable } from './components/SortingTable'
import { FilteringTable } from './components/FilteringTable'
import { PaginationTable } from './components/PaginationTable'

function App() {

  return (
    <>
      {/* <BasicTable />
      <SortingTable />
      <FilteringTable /> */}
      <PaginationTable />
    </>
  )
}

export default App
