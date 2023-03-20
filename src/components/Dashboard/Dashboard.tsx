import React from 'react';
import {
  Statistic,
  Row,
  Col,
  Switch,
  Table,
  Button,
  Tag,
  Space,
  Layout,
  Card,
} from 'antd';
import { useClusters } from 'lib/hooks/api/clusters';
import { ServerStatus } from 'generated-sources';
import { clusterNewConfigPath } from 'lib/paths';
import { GlobalSettingsContext } from 'components/contexts/GlobalSettingsContext';
import PageHeading from 'components/common/PageHeading/PageHeading';
import useBoolean from 'lib/hooks/useBoolean';
import BytesFormatted from 'components/common/BytesFormatted/BytesFormatted';

const { Content } = Layout;

const Dashboard: React.FC = () => {
  const clusters = useClusters();
  const { value: showOfflineOnly, toggle } = useBoolean(false);
  const appInfo = React.useContext(GlobalSettingsContext);

  const config = React.useMemo(() => {
    const clusterList = clusters.data || [];
    const offlineClusters = clusterList.filter(
      ({ status }) => status === ServerStatus.OFFLINE
    );
    return {
      list: showOfflineOnly ? offlineClusters : clusterList,
      online: clusterList.length - offlineClusters.length,
      offline: offlineClusters.length,
    };
  }, [clusters, showOfflineOnly]);

  const columns = React.useMemo(() => {
    const initialColumns = [
      { title: 'Cluster name', dataIndex: 'name', key: 'name' },
      { title: 'Version', dataIndex: 'version', key: 'version' },
      { title: 'Brokers count', dataIndex: 'brokerCount', key: 'brokerCount' },
      {
        title: 'Partitions',
        dataIndex: 'onlinePartitionCount',
        key: 'onlinePartitionCount',
      },
      { title: 'Topics', dataIndex: 'topicCount', key: 'topicCount' },
      {
        title: 'Production',
        dataIndex: 'bytesInPerSec',
        key: 'bytesInPerSec',
        render: (bytes: string | number) => <BytesFormatted value={bytes} />,
      },
      {
        title: 'Consumption',
        dataIndex: 'bytesOutPerSec',
        key: 'bytesOutPerSec',
        render: (bytes: string | number) => <BytesFormatted value={bytes} />,
      },
    ];

    if (appInfo.hasDynamicConfig) {
      initialColumns.push({
        title: '',
        dataIndex: 'actions',
        key: 'actions',
      });
    }

    return initialColumns;
  }, []);

  return (
    <>
      <PageHeading text="Dashboard_TEST_KIMIDATA" />
      <Content style={{ padding: '24px' }}>
        <Row
          gutter={[16, 24]}
          style={{
            backgroundColor: 'rgb(241, 242, 243)',
            borderRadius: '8px',
            padding: '16px',
          }}
          key="top"
        >
          <Col span={12} key="online">
            <Card
              bodyStyle={{ backgroundColor: 'white' }}
              style={{ borderRadius: '8px' }}
            >
              <Statistic
                title={<Tag color="green">Online</Tag>}
                value={config.online || 0}
                suffix="clusters"
              />
            </Card>
          </Col>
          <Col span={12} key="offline">
            <Card
              bodyStyle={{ backgroundColor: 'white' }}
              style={{ borderRadius: '8px' }}
            >
              <Statistic
                title={<Tag color="gray">Offline</Tag>}
                value={config.offline || 0}
                suffix="clusters"
              />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '16px' }} key="middle">
          <Col>
            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
              <div>
                <Switch checked={showOfflineOnly} onChange={toggle} />
                <label style={{ marginLeft: '8px' }}>
                  Only offline clusters
                </label>
              </div>
              {appInfo.hasDynamicConfig && (
                <Button
                  type="primary"
                  size="middle"
                  href={clusterNewConfigPath}
                >
                  Configure new cluster
                </Button>
              )}
            </Space>
          </Col>
        </Row>
        <Row style={{ marginTop: '16px' }} key="bottom">
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={config.list}
              rowKey="id"
              pagination={false}
              locale={{
                emptyText: clusters.isFetched
                  ? 'No clusters found'
                  : 'Loading...',
              }}
            />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Dashboard;
