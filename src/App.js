
import React from 'react'

import { Router, Switch, BrowserRouter } from 'react-router-dom'
import AppContext from '../src/app/contexts/AppContext'

import { GlobalCss, MatxSuspense, MatxTheme, MatxLayout } from '../src/app/components'
import { SettingsProvider } from './app/contexts/SettingsContext'
import Route from '../src/routes/route'
const App = () => {
  return (

          <SettingsProvider>
            <MatxTheme>
              <GlobalCss />
                <BrowserRouter>
                    <Route/>
                </BrowserRouter>
            </MatxTheme>
          </SettingsProvider>


  )
}

export default App