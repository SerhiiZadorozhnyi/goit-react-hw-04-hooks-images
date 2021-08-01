  import { Component } from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <Loader
          type="Puff"
          color="#0F7A8F"
          height={50}
          width={50}
          timeout={2000}
        />
      </div>
    );
  }
}