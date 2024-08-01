import { fireEvent, render, screen } from "@testing-library/react-native"
import { HomeHeader } from "./index"
import { ThemeProvider } from "styled-components"
import theme from '../../../themes/index'
describe("Component: Header", () => {
    it("Should render correctly", () => {
        const {debug} = render(
                <HomeHeader/>
        )
        debug()
    })

    it("Should execute function", () => {
        render(<HomeHeader/>)
        fireEvent.changeText(screen.getByTestId("search-input"), "teste")
        fireEvent.press(screen.getByTestId("search-button"))
    })

})