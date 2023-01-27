import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router"
import EnterName from "./EnterName"
import NameContext from "./NameContext"
describe('EnterName', () => {

    let name = ''
    //this will just return the inputted name
    let setName = jest.fn()
    
    
    //unit tests 
    it('renders with a heading, paragraph, and input', () => {
        render(<NameContext.Provider value={[name, setName]}>
                <EnterName />
            </NameContext.Provider>)
        expect(screen).toMatchSnapshot()
    })

    it('renders initially with no input value', () => {
        render(<NameContext.Provider value={[name, setName]}>
            <EnterName />
        </NameContext.Provider>)
        expect(screen.getByRole("textbox").textContent.length).toEqual(0)
    })

    it('setName will fire when button is clicked', () => {
        render(<NameContext.Provider value={[name, setName]}>
            <EnterName />
        </NameContext.Provider>, {wrapper: MemoryRouter})
        userEvent.type(screen.getByRole("textbox"), "Jeremy")
        userEvent.click(screen.getByRole("button"))
        expect(setName.mock.calls).toHaveLength(1)
    })

    it('setName will be called with the current input state', () => {
        render(<NameContext.Provider value={[name, setName]}>
            <EnterName />
        </NameContext.Provider>, {wrapper: MemoryRouter})
        userEvent.type(screen.getByRole("textbox"), "Jeremy")
        userEvent.click(screen.getByRole("button"))
        expect(setName.mock.calls[0][0]).toEqual("Jeremy")
    })

    it('setName will not be called if the current input length is 0', () => {
        render(<NameContext.Provider value={[name, setName]}>
            <EnterName />
        </NameContext.Provider>, {wrapper: MemoryRouter})
        userEvent.click(screen.getByRole("button"))
        expect(setName.mock.calls).toHaveLength(0)
    })

    //integration tests
    it.skip('routes to Leaderboard when button is clicked', () => {

    })

    it.skip('updates name when button is clicked', () => {

    })
})