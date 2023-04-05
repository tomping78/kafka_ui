import { useClusters } from 'lib/hooks/api/clusters';
import React from 'react';

import ClusterMenu from './ClusterMenu';
import ClusterMenuItem from './ClusterMenuItem';
import * as S from './Nav.styled';

const Nav: React.FC = () => {
  const clusters = useClusters();
  const [clickedTitle, setClickedTitle] = React.useState('');
  const onClickMenu = (v: React.MouseEvent) => {
    const targetElement = v.target as HTMLElement;
    setClickedTitle(targetElement.title);
  };
  return (
    <aside aria-label="Sidebar Menu">
      <S.List onClick={(v) => onClickMenu(v)} clickedTitle={clickedTitle}>
        <ClusterMenuItem to="/" title="Dashboard" isTopLevel />
        {clusters.isSuccess &&
          clusters.data.map((cluster) => (
            <ClusterMenu
              cluster={cluster}
              key={cluster.name}
              singleMode={clusters.data.length === 1}
              clickedTitle={clickedTitle}
            />
          ))}
      </S.List>
    </aside>
  );
};

export default Nav;
