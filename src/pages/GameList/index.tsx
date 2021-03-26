import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import ownership from '../../GameData/ownership.json'
import games from '../../GameData/games.json'
import styles from './index.module.scss';

const GameList: React.FC = (): JSX.Element => {
  const [gameList, setGameList] = useState<string>()
  useEffect(() => {
    ownership.map(item => {
      if (item.userAccountId === localStorage.getItem('id')) {
        setGameList(item.gameId)
      }
    })
  })
  return (
    <div className={styles.main}>
      {games.map(item => (
        <div className={styles.box} key={item.gameId} style={gameList === item.gameId ? {"border":"1px solid #ffd369",'backgroundColor':'#fff','color':'#000'}:null } >
          <img src={item.thumbnail}></img>
          <div>{item.name}</div>
          {
            item.ageRestriction && item.ageRestriction>=18?<span className={styles.no}>18禁</span>:null
          }
        </div>
      ))}
    </div>
  );
};

export default GameList;
