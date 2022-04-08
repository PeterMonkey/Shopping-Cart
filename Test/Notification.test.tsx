import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Notification from '../components/Notification'

test('Testing Notification component', () => {
    const component = render(<Notification count={3}/>)

    component.getByText('3')
})