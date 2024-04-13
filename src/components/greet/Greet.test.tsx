/**
 * Greet should render the text hello and if a name is passes to the component
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

test('greet renders with a name', () => {
    render(<Greet name = 'Naincy'/>)
    const textElement = screen.getByText('Hello Naincy')
    expect(textElement).toBeInTheDocument()
})