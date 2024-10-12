import React from 'react'
import Layout from '../Layout'
import PrayerRequest from '../../components/feature/PrayerRequests'
import Input from '../../components/ui/Input'

const Prayer = () => {
  return (
    <Layout>
       <div className="flex items-center justify-between mb-4 flex-wrap">
       <h1 className="text-2xl font-bold ml-4 sm: mb-4 mr-auto text-gray-900">
          All Prayer Requests 
        </h1>
        <Input
            type="search"
            id="search"
            name="search"
            autoComplete="true"
            label=""
            placeholder="Search by member name"
            className="mb-2 w-[94vw] mx-3 sm:w-auto px-4"
          />
      </div>
      <PrayerRequest />
    </Layout>
  )
}

export default Prayer