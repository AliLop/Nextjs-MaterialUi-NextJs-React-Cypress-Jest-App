import React from 'react'; 
import { Button } from '@material-ui/core';

import Layout from '../components/Layout'

export default function Home() {
  return (
      <div>
        <main >
            Next with Material Ui
            <Button variant="contained" color="primary">
              Primary
            </Button>
        </main>
      </div>
  )
}
