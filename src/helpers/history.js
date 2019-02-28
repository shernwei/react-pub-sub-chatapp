import { createBrowserHistory } from 'history'

const browserHistory = createBrowserHistory()

const routeTo = ({path}) => {
	browserHistory.push(path)
}


export default browserHistory
export {
	routeTo
}