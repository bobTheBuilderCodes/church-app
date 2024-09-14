import React from 'react'
import Layout from '../Layout'
import PrayerRequest from '../../components/feature/PrayerRequests'
import Input from '../../components/ui/Input'

const Prayer = () => {
  return (
    <Layout>
       <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold ml-8 mr-auto text-gray-900">
          All Prayer Requests 
          {/* ({membersList.length}) */}
        </h1>
        <div className="flex items-center justify-end mx-4 min-w-[390px]">
          <Input
            type="search"
            id="search"
            name="search"
            autoComplete="true"
            label=""
            placeholder="Search by name"
            className="mb-2 px-4"
          />
          
        </div>
      </div>
      <PrayerRequest />
    </Layout>
  )
}

export default Prayer