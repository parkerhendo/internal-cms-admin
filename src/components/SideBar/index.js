import React, { Component } from 'react';
import InlineSVG from 'react-svg-inline';
import styles from './styles.scss';
import { NavItem } from '../../elements';

const home = require('../../assets/img/home.svg');
const games = require('../../assets/img/games.svg');
const states = require('../../assets/img/states.svg');
const schools = require('../../assets/img/schools.svg');
const teams = require('../../assets/img/teams.svg');
const players = require('../../assets/img/players.svg');
const calendar = require('../../assets/img/calendar.svg');
const faq = require('../../assets/img/faq.svg');
const staff = require('../../assets/img/staff.svg');
const settings = require('../../assets/img/settings.svg');


export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.navContainer}>
            <nav className={styles.nav}>
              <NavItem to="dashboard" title="Dashboard" icon={home} />
              <NavItem to="esports" title="Esports" icon={games} />
              <NavItem to="states" title="States" icon={states} />
              <NavItem to="schools" title="Schools" icon={schools} />
              <NavItem to="teams" title="Teams" icon={teams} />
              <NavItem to="players" title="Players" icon={players} />
              <NavItem to="schedule" title="Schedule" icon={calendar} />
              <NavItem to="faq" title="FAQ" icon={faq} />
              <NavItem to="staff" title="Staff" icon={staff} />
              <NavItem to="settings" title="Settings" icon={settings} />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
