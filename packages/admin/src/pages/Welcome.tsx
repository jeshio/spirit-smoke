import React from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import { Card, Alert, Typography } from 'antd'
import styles from './Welcome.less'

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
)

export default (): React.ReactNode => (
  <PageContainer>
    <Card>
      <Alert
        message="Панель управления!"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>Добро пожаловать</Typography.Text>
      <CodePreview>yarn add @ant-design/pro-table</CodePreview>
    </Card>
  </PageContainer>
)
