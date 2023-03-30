import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import  ActionsCreators from '../actionCreators/creators'


export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(ActionsCreators, dispatch)
}