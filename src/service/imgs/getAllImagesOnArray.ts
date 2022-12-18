import adonis from '../../assets/img/skills/adonis.png';
import angular from '../../assets/img/skills/angular.png';
import dataBase from '../../assets/img/skills/banco.png';
import bash from '../../assets/img/skills/bashpng.png';
import contextApi from '../../assets/img/skills/ContextApi.png';
import dbvear from '../../assets/img/skills/dbvear.png';
import diagramaMVC from '../../assets/img/skills/diagramaMVC.png';
import doctrine from '../../assets/img/skills/doctrine.png';
import express from '../../assets/img/skills/express.png';
import git from '../../assets/img/skills/git.png';
import gitHub from '../../assets/img/skills/GitHub-Logo.png';
import gitLab from '../../assets/img/skills/gitlab-logo-100.png';
import heroku from '../../assets/img/skills/heroku.png';
import jest from '../../assets/img/skills/jest.png';
import javaScript from '../../assets/img/skills/js.png';
import mongoDb from '../../assets/img/skills/MongoDB_Logo.svg.png';
import mySql from '../../assets/img/skills/mysql.png';
import node from '../../assets/img/skills/node.png';
import php from '../../assets/img/skills/php.png';
import postgreSql from '../../assets/img/skills/postgresql.png';
import python from '../../assets/img/skills/python.png';
import react from '../../assets/img/skills/react.png';
import redux from '../../assets/img/skills/redux.png';
import restApi from '../../assets/img/skills/rest-api-icon.png';
import sequelize from '../../assets/img/skills/sequelize-1-1175002.png';
import socket from '../../assets/img/skills/socket.png';
import sql from '../../assets/img/skills/sql.png';
import symfony from '../../assets/img/skills/symfony.png';
import typeScript from '../../assets/img/skills/ts.png';
import ubuntu from '../../assets/img/skills/ubuntu.png';
import noSql from '../../assets/img/skills/nosql.png';
import eslLint from '../../assets/img/skills/eslint.png';
import html from '../../assets/img/skills/html5.png';
import css from '../../assets/img/skills/css3.png';

type data = {
  id: number;
  name: string;
  src: string;
  skill: number;
};

function transformImgsToArray(): Array<data> {
  return [
    {
      id: 1,
      name: 'JavaScript',
      src: javaScript,
      skill: 5
    },
    {
      id: 2,
      name: 'NodeJS',
      src: node,
      skill: 5
    },
    {
      id: 3,
      name: 'Banco de dados',
      src: dataBase,
      skill: 5
    },
    {
      id: 4,
      name: 'AngularJS',
      src: angular,
      skill: 4
    },
    {
      id: 5,
      name: 'RestApi',
      src: restApi,
      skill: 5
    },
    {
      id: 6,
      name: 'React',
      src: react,
      skill: 4
    },
    {
      id: 7,
      name: 'PHP',
      src: php,
      skill: 5
    },
    {
      id: 8,
      name: 'HTML5',
      src: html,
      skill: 5
    },
    {
      id: 9,
      name: 'CSS3',
      src: css,
      skill: 5
    },
    {
      id: 10,
      name: 'SQL',
      src: sql,
      skill: 5
    },
    {
      id: 11,
      name: 'Nosql',
      src: noSql,
      skill: 5
    },
    {
      id: 12,
      name: 'TypeScript',
      src: typeScript,
      skill: 5
    },
    {
      id: 13,
      name: 'Mysql',
      src: mySql,
      skill: 5
    },
    {
      id: 14,
      name: 'PostgreSql',
      src: postgreSql,
      skill: 5
    },
    {
      id: 15,
      name: 'Git',
      src: git,
      skill: 4
    },
    {
      id: 16,
      name: 'GitHub',
      src: gitHub,
      skill: 4
    },
    {
      id: 17,
      name: 'express',
      src: express,
      skill: 4
    },
    {
      id: 18,
      name: 'GitLab',
      src: gitLab,
      skill: 4
    },
    {
      id: 19,
      name: 'Adonis JS',
      src: adonis,
      skill: 4
    },
    {
      id: 20,
      name: 'Python',
      src: python,
      skill: 3
    },
    {
      id: 21,
      name: 'Ubuntu',
      src: ubuntu,
      skill: 3
    },
    {
      id: 22,
      name: 'Bash',
      src: bash,
      skill: 3
    },
    {
      id: 23,
      name: 'Dbvear',
      src: dbvear,
      skill: 5
    },
    {
      id: 24,
      name: 'MongoDb',
      src: mongoDb,
      skill: 3
    },
    {
      id: 25,
      name: 'Jest',
      src: jest,
      skill: 3
    },
    {
      id: 26,
      name: 'Symfony',
      src: symfony,
      skill: 3
    },
    {
      id: 27,
      name: 'Arquitetura de Software (MVC, MSC)',
      src: diagramaMVC,
      skill: 5
    },
    {
      id: 28,
      name: 'Redux',
      src: redux,
      skill: 2
    },
    {
      id: 29,
      name: 'Doctrine',
      src: doctrine,
      skill: 3
    },
    {
      id: 30,
      name: 'ContextApi',
      src: contextApi,
      skill: 2
    },
    {
      id: 31,
      name: 'Heroku',
      src: heroku,
      skill: 2
    },
    {
      id: 32,
      name: 'Sequelize',
      src: sequelize,
      skill: 2
    },
    {
      id: 33,
      name: 'SocketIo',
      src: socket,
      skill: 2
    },
    {
      id: 34,
      name: 'EslLint',
      src: eslLint,
      skill: 5
    }
  ];
}

export default function getAllTecnicSkills(): Array<data> {
  return transformImgsToArray().sort((a, b) => b.skill - a.skill);
}
