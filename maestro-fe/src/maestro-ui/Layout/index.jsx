import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "../Flex";

const Width = styled.div`
  min-height: 844px;
  max-width: 390px;
  margin: 0 auto;
  padding-bottom: 20px;
  width: 100%;
  background-color: white;
`;

const BackColor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => (
  <BackColor>
    <Width>
      <Flex align="center" direction="column">
        {children}
      </Flex>
    </Width>
  </BackColor>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
