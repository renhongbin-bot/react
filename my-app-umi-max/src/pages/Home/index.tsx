import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useEffect } from 'react';
import styles from './index.less';
const HomePage: React.FC = () => {
  const { name, age } = useModel('global');
  const { add, minus } = useModel('global', (model: { increment: any; decrement: any; }) => ({
    add: model.increment,
    minus: model.decrement,
  }));
  useEffect(() => {

  }, [])
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Button type="primary" ghost>
          Primary
        </Button>
        <Guide name={trim(name)} />
        <Button onClick={add}>+</Button>
        <div>年龄: {age}</div>
        <Button onClick={minus}>-</Button>
        <Button onClick={() => {
        }}>请求</Button>
      </div>
    </PageContainer>
  );
};

export default HomePage;
