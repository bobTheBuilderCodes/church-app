import React from 'react'
import Layout from '../Layout'
import PrayerRequest from '../../components/feature/PrayerRequests'
import Input from '../../components/ui/Input'

const Prayer = () => {
  return (
    <Layout>
       <div className="flex items-center justify-between mb-8 mx-5 flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">
          All Prayer Requests 
          {/* ({membersList.length}) */}
        </h1>
        <Input
            type="search"
            id="search"
            name="search"
            autoComplete="true"
            label=""
            placeholder="Search by member name"
            className="" 
          />
      </div>
      <PrayerRequest />
    </Layout>
  )
}

export default Prayer