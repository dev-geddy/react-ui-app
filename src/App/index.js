import React, {Component} from 'react'
import styles from './style.scss'
import SampleComponent from '@reactivelabs/react-ui-lib/src/App'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        App example with component "Hi":
        <SampleComponent />
      </div>
    )
  }
}

export default App