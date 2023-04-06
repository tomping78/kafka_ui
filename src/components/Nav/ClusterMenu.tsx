import React from 'react';
import { Cluster, ClusterFeaturesEnum } from 'generated-sources';
import {
  clusterBrokersPath,
  clusterTopicsPath,
  clusterConsumerGroupsPath,
  clusterSchemasPath,
  clusterConnectorsPath,
  clusterKsqlDbPath,
} from 'lib/paths';

import ClusterMenuItem from './ClusterMenuItem';
import ClusterTab from './ClusterTab/ClusterTab';
import * as S from './Nav.styled';

interface Props {
  cluster: Cluster;
  singleMode?: boolean;
  clickedTitle: string;
  selectedTab?: string;
}

const clusterItems = [
  'Brokers',
  'Topics',
  'Consumers',
  'Schema Registry',
  'KSQL DB',
];

const ClusterMenu: React.FC<Props> = ({
  cluster: { name, status, features },
  singleMode,
  clickedTitle,
  selectedTab,
}) => {
  const hasFeatureConfigured = (key: ClusterFeaturesEnum) =>
    features?.includes(key);
  const [isOpen, setIsOpen] = React.useState(!!singleMode);

  React.useEffect(() => {
    if (clickedTitle === 'Dashboard') {
      setIsOpen(false);
    } else if (clusterItems.includes(clickedTitle)) {
      setIsOpen(selectedTab === name);
    }
  }, [selectedTab, clickedTitle]);

  return (
    <>
      <ClusterTab
        title={name}
        status={status}
        isOpen={isOpen}
        toggleClusterMenu={() => setIsOpen((prev) => !prev)}
        clickedTitle={clickedTitle}
      />
      {isOpen && (
        <S.List>
          <ClusterMenuItem to={clusterBrokersPath(name)} title="Brokers" />
          <ClusterMenuItem to={clusterTopicsPath(name)} title="Topics" />
          <ClusterMenuItem
            to={clusterConsumerGroupsPath(name)}
            title="Consumers"
          />
          {hasFeatureConfigured(ClusterFeaturesEnum.SCHEMA_REGISTRY) && (
            <ClusterMenuItem
              to={clusterSchemasPath(name)}
              title="Schema Registry"
            />
          )}
          {hasFeatureConfigured(ClusterFeaturesEnum.KAFKA_CONNECT) && (
            <ClusterMenuItem
              to={clusterConnectorsPath(name)}
              title="Kafka Connect"
            />
          )}
          {hasFeatureConfigured(ClusterFeaturesEnum.KSQL_DB) && (
            <ClusterMenuItem to={clusterKsqlDbPath(name)} title="KSQL DB" />
          )}
        </S.List>
      )}
    </>
  );
};

export default ClusterMenu;
