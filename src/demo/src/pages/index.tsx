import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import styled from "@emotion/styled"
import {
    AniqueSystemThemeProvider,
    Button,
    H1,
    H2,
    Anchor,
    useColorScheme,
    darkTheme,
    lightTheme,
    AniqueThemeProvider
} from "@qawaz/anique";
import {css, Global} from "@emotion/react";
import {Link} from "gatsby";
import {FormDemo} from "../components/FormDemo";
import {useState} from "react";

const GlobalStyles = css`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 0.5em;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
`

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1em;
`

const Hero = styled.div`
  width: 100%;
  height: 300px;
  background: ${props => props.theme.color.bgPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin-bottom: 1em;
`

const HeroHeading = styled.span`
  font-size: ${props => props.theme.fontSize.fontSize13};
  text-align: center;
  font-family: ${props => props.theme.font.fontPrimary};
`

const HeroText = styled.p`
  margin-top: 1em;
  margin-bottom: 1em;
`

const Footer = styled.div`
  width: 100%;
  background: ${props => props.theme.color.bgPrimary};
  padding: 1em;
  margin-top: 1em;
`

const AnchorLink = Anchor.withComponent(Link)

const IndexPage: React.FC<PageProps> = (props) => {
    const colorScheme = useColorScheme()
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(colorScheme == "dark")
    return (
        <>
            <Global styles={GlobalStyles}/>
            <AniqueThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <Container>
                    <Header>
                        <H2>Anique</H2>
                        <HeaderNav>
                            <Anchor href={"./storybook"} underlined={false}>
                                Storybook
                            </Anchor>
                            <AnchorLink to={"/docs"} underlined={false}>
                                Docs
                            </AnchorLink>
                        </HeaderNav>
                    </Header>
                    <Hero>
                        <HeroHeading>
                            Minimal React Emotion Component Library
                        </HeroHeading>
                        <HeroText>
                            Easy, Performant & Beautiful Components
                        </HeroText>
                        <AnchorLink to={"/docs/setup"} underlineOnHover={false} colored={false}>
                            <Button primary>
                                Get Started
                            </Button>
                        </AnchorLink>
                    </Hero>
                    <FormDemo
                        isDarkTheme={isDarkTheme}
                        toggleDarkTheme={() => setIsDarkTheme(!isDarkTheme)}
                    />
                    <Footer>
                        Copyright &copy; 2023 Anique
                    </Footer>
                </Container>
            </AniqueThemeProvider>
        </>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Anique | UI Component Library</title>
