import * as React from 'react'
import Head from 'next/head'

interface IUTitleProps {
  title: string
}

const UMetaTitle: React.FunctionComponent<IUTitleProps> = (props) => {
  return (
    <Head>
      <title>{props.title}, Spirit Smoke</title>
    </Head>
  )
}

export default UMetaTitle
