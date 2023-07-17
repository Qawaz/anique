import * as React from "react"
import {useState} from "react"
import type {HeadFC, PageProps} from "gatsby"
import {Link} from "gatsby";
import styled from "@emotion/styled"
import {
    Anchor,
    AniqueThemeProvider,
    Button,
    ColorScheme,
    darkTheme,
    H2,
    lightTheme,
    useColorScheme
} from "@qawaz/anique";
import {css, Global} from "@emotion/react";
import {FormDemo} from "../components/FormDemo";

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
  background : ${props=> props.theme.color.bg};
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
  background: ${props => props.theme.color.primary};
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
  background: ${props => props.theme.color.bg200};
  padding: 1em;
  margin-top: 1em;
`

const AnchorLink = Anchor.withComponent(Link)

const IndexPage: React.FC<PageProps> = (props) => {
    const [colorScheme,setColorScheme] = useColorScheme()
    return (
        <>
            <Global styles={GlobalStyles}/>
            <AniqueThemeProvider theme={colorScheme === ColorScheme.Dark ? darkTheme : lightTheme} scheme={colorScheme}>
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
                        isDarkTheme={colorScheme === ColorScheme.Dark}
                        toggleDarkTheme={() => setColorScheme(colorScheme === ColorScheme.Dark ? ColorScheme.Light : ColorScheme.Dark)}
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
