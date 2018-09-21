import styled from 'styled-components'

export const Section = styled.section.attrs({
  id: props => props.anchor,
})`
  margin-top: 30px;
  color: var(--darkgrey);

  &:before {
    display: block;
    content: "";
    width: 87px;
    height: 3px;
    background-color: var(--silver);
    margin-bottom: 16px;
  }
`

export const Title = styled.h1`
  margin-top: 0px;
  color: var(--dimgrey);
  font-size: 36px;
  font-weight: 700;
`

export const Headline = styled.p`
  font-size: 32px;
  font-family: 'IBM Plex Serif', serif;
  font-weight: 300;
`

export const CallToAction = styled.div`
  font-size: 32px;
  font-family: 'IBM Plex Serif', serif;
  font-weight: 300;
`

export const SubTitle = styled.h2`
  font-family: 'IBM Plex Sans' ,'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  font-size: 24px;
`

export const Paragraph = styled.p`
  font-family: 'IBM Plex Serif', serif;
  font-weight: 300;
  line-height: 22px;
`

export const UnorderedList = styled.ul`
  padding-left: 30px;
`

export const OrderedList = styled.ol`
  padding-left: 30px;
`

export const ListItem = styled.li`
  margin: 4px 0px 12px 4px;
  padding-left: 16px;
  font-family: 'IBM Plex Serif', serif;
  font-size: 16px;
  font-weight: 300;
`
