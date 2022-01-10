import React, { Component } from 'react';
import styles from './preloader.module.css';

export default class Preloader extends Component {
  render() {
    return <div className={styles.loading}></div>;
  }
}
