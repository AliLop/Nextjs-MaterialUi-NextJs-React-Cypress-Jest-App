import React from 'react'; 
import { Button } from '@material-ui/core';

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Nextjs App">
      <div>
        <main >
            Next with Material Ui
            <Button variant="contained" color="primary">
              Primary
            </Button>
        </main>
      </div>
    </Layout>
  )
}
