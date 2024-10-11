// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''
  const activeButtonClassName = isActive ? 'active-btn' : ''

  return (
    <li className={`tab-item ${activeTabClassName}`}>
      <button
        type="button"
        className={`tab-button ${activeButtonClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
