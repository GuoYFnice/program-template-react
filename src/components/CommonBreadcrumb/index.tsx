import React, { Children, useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';
import { menusList } from '@/routes/routerConfig/index'

const CommonBreadcrumb: React.FC = props => {
  const [routeList, setRouteList] = useState<Array<any>>([])
  let array: Array<any> = []
  const { pathname } = useLocation()
  useEffect(() => {
    findTree(menusList, pathname)
    setRouteList(array)
  },[pathname])
  let sign = false
  const findTree = (node: any[], pathname: string) => {
    node.map((item: { name: any; path: any; children: any[]; }) => {
      if (sign === false) {
        array.push({
          name:item.name,
          path:item.path
        });
        if (item.path == pathname) {
          sign = true
          return
        } else if (item.children && item.children.length > 0) {
          findTree(item.children, pathname);
        }
        if (sign === false) {
          array.pop();
        }
        return
      }
      return
    })
  }
  return (
    <>
      <div className={styles.App}>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          {
            routeList.map(item =>
              <Breadcrumb.Item href={item.path} key={item}>
                <span>{item.name}</span>
              </Breadcrumb.Item>
            )
          }
        </Breadcrumb>
      </div>
    </>
  );
};
export default CommonBreadcrumb;