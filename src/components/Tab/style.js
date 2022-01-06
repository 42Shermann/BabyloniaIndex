import styled from 'styled-components'

export const StyledTab = styled.div`
.nav-tabs {
  border: none;
}

.nav-tabs .nav-link {
  color: white;
  text-decoration: solid;
  background-color: #921131;
  border: none;
  border-radius: 0px;
}

.nav-tabs .nav-link.active {
  background-color: black;
  border: none;
  color: white;
  font-weight: bolder;
}

.nav-tabs .nav-link:hover {
  background-color: #ad3a57;
}

.nav-tabs .nav-link.active:hover {
  background-color: black;
}

.tabContents {
  background-color: black;
}

.new-line-text {
  white-space: pre-wrap;
}

`
