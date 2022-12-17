import adonis from '../../assets/img/skills/adonis.png';
import angular from '../../assets/img/skills/angular.png';
import dataBase from '../../assets/img/skills/banco.png';
import bash from '../../assets/img/skills/bashpng.png';
import contextApi from '../../assets/img/skills/ContextApi.png';
import css3AndHtml5 from '../../assets/img/skills/CSS3_and_HTML5_logos_and_wordmarks.svg.png';
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
import php from '../../assets/img/skills/php.jpeg';
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
import zsh from '../../assets/img/skills/zsh.png';
import noSql from '../../assets/img/skills/nosql.png';
import eslLint from '../../assets/img/skills/eslint.png';

type data = {
  name: string;
  src: string;
  skill: number;
};

function transformImgsToArray(): Array<data> {
  return [
    {
      name: 'JavaScript',
      src: javaScript,
      skill: 5
    },
    {
      name: 'NodeJS',
      src: node,
      skill: 5
    },
    {
      name: 'Banco de dados',
      src: dataBase,
      skill: 5
    },
    {
      name: 'AngularJS',
      src: angular,
      skill: 4
    },
    {
      name: 'RestApi',
      src: restApi,
      skill: 5
    },
    {
      name: 'React',
      src: react,
      skill: 4
    },
    {
      name: 'PHP',
      src: php,
      skill: 5
    },
    {
      name: 'HTML5 e CSS3',
      src: css3AndHtml5,
      skill: 5
    },
    {
      name: 'SQL',
      src: sql,
      skill: 5
    },
    {
      name: 'Nosql',
      src: noSql,
      skill: 5
    },
    {
      name: 'TypeScript',
      src: typeScript,
      skill: 5
    },
    {
      name: 'Mysql',
      src: mySql,
      skill: 5
    },
    {
      name: 'PostgreSql',
      src: postgreSql,
      skill: 5
    },
    {
      name: 'Git',
      src: git,
      skill: 4
    },
    {
      name: 'GitHub',
      src: gitHub,
      skill: 4
    },
    {
      name: 'express',
      src: express,
      skill: 4
    },
    {
      name: 'GitLab',
      src: gitLab,
      skill: 4
    },
    {
      name: 'Adonis JS',
      src: adonis,
      skill: 4
    },
    {
      name: 'Python',
      src: python,
      skill: 3
    },
    {
      name: 'Ubuntu',
      src: ubuntu,
      skill: 3
    },
    {
      name: 'Zsh',
      src: zsh,
      skill: 3
    },
    {
      name: 'Bash',
      src: bash,
      skill: 3
    },
    {
      name: 'Dbvear',
      src: dbvear,
      skill: 5
    },
    {
      name: 'MongoDb',
      src: mongoDb,
      skill: 3
    },
    {
      name: 'Jest',
      src: jest,
      skill: 3
    },
    {
      name: 'Symfony',
      src: symfony,
      skill: 3
    },
    {
      name: 'Arquitetura de Software (MVC, MSC)',
      src: diagramaMVC,
      skill: 5
    },
    {
      name: 'Redux',
      src: redux,
      skill: 2
    },
    {
      name: 'Doctrine',
      src: doctrine,
      skill: 3
    },
    {
      name: 'ContextApi',
      src: contextApi,
      skill: 2
    },
    {
      name: 'Heroku',
      src: heroku,
      skill: 2
    },
    {
      name: 'Sequelize',
      src: sequelize,
      skill: 2
    },
    {
      name: 'SocketIo',
      src: socket,
      skill: 2
    },
    {
      name: 'EslLint',
      src: eslLint,
      skill: 5
    }
  ];
}

export default function getAllTecnicSkills(): Array<data> {
  return transformImgsToArray().sort((a, b) => a.skill - b.skill);
}
