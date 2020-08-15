import React from 'react';
import { ConnectProps } from 'umi';
import { message } from 'antd';
import NoticeIcon from '../NoticeIcon';
import styles from './index.less';

export interface GlobalHeaderRightProps extends Partial<ConnectProps> {
  fetchingNotices?: boolean;
  onNoticeVisibleChange?: (visible: boolean) => void;
  onNoticeClear?: (tabName?: string) => void;
}

const GlobalHeaderRight: React.FC<GlobalHeaderRightProps> = () => (
  <NoticeIcon
    className={styles.action}
    count={0}
    onItemClick={(item) => {
      console.log(item);
    }}
    loading={false}
    clearText="Очистить"
    viewMoreText="Показать ещё"
    onClear={() => {}}
    onPopupVisibleChange={() => {}}
    onViewMore={() => message.info('Click on view more')}
    clearClose
  >
    <NoticeIcon.Tab
      tabKey="notification"
      count={0}
      list={[]}
      title="Заголовок"
      emptyText="Пусто"
      showViewMore
    />
  </NoticeIcon>
)

export default GlobalHeaderRight;
