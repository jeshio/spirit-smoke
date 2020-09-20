import React from 'react'
import Head from 'next/head'
import UTitle from '@/ui-components/UTitle'
import CCompaniesSelector from '@/containers/CCompaniesSelector'
import UContent from '@/ui-components/UContent'

export default function Home() {
  return (
    <>
      <UTitle title="Табак и угли для кальяна" />

      <CCompaniesSelector />

      <UContent>Контент</UContent>
    </>
  )
}
