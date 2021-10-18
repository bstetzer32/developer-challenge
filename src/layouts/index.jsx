import React from 'react'
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import SEO from "../components/SEO"
import Nav from "../components/Nav"
import { css } from "@emotion/core";

// ========= COMPONENTS =========

// a container to fill the window, wrap all contents, and center them
const Container = styled.div`
	background-color: #7855da;
	color: #ffffff;

	font-family: "Lobster";
	font-size: 2rem;
`;
const PhoneScreen = styled.div`
	background-color: #7855da;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 896px;
`;

// Layout for site, enables any site wide changes to be made from a single file
function Layout({ children, description, title }) {
	return (
		<>
			{/* set the page metadata */}
			<SEO
				title={title}
				description={description}
			/>

			<Container>
				{/* centered container for phone screen */}
				<PhoneScreen>
					<div>
						<Logo
							css={css`
							margin-left: 50px;
							`}
						/>
						{children}

						<div 
							css={css`
							height: 60px;
							`}
						/>
					</div>
					{/* gatsby-link nav menu */}
					<Nav />
				</PhoneScreen>
			</Container>
		</>
	);
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
