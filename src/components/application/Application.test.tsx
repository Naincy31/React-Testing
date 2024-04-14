import { Application } from "./Application";
import { render, screen } from '@testing-library/react'

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application/>)

        const labelElement = screen.getByLabelText('Name')
        expect(labelElement).toBeInTheDocument()

        const paragraphElement = screen.getByText('all', {exact: false})
        expect(paragraphElement).toBeInTheDocument()

        const paragraphEle = screen.getByText((content) => content.startsWith('All'))
        expect(paragraphEle).toBeInTheDocument()

        const pageHeading = screen.getByRole('heading', {
            level: 1
        })
        expect(pageHeading).toBeInTheDocument()
    })
})