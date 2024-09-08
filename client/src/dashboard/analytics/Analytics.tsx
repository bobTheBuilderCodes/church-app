import React from 'react'
import Layout from '../Layout'
import Birthday from '../../components/feature/Birthday'

const Analytics = () => {
  return (
    <Layout>
      <div className='flex mx-10 justify-between'>
      <main className='w-3/4'>
        Main dashboard
      </main>
      <aside className='1/4'>

      <Birthday />
      </aside>
      </div>
    </Layout>
  )
}

export default Analytics