import React, { createContext } from 'react'

export const ShopContext = createContext(null)

export const contextProvider = () => {
  return (
    <contextProvider>
    <div>context</div>
    </contextProvider>
  )
}
