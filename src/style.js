
import styled, { createGlobalStyle } from 'styled-components';
import Cheers from './images/cheers.png';
import Bit from './images/spinner.gif';

export default createGlobalStyle `
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border;
		user-select: none;
	}

	body {
		background-color: #000;
		-webkit-font-smoothing: antialiased;
		font-family: 'BMD Regular';
		color: #222;
		position: relative;
	}
`

export const AppWrapper = styled.div `
	position: relative;
	width: 80%;
	min-width: 1200px;
	height: calc(100vh - 40px);
	margin: auto;
	padding: 20px;
	background-color: #fff;

	.header {
		position: -webkit-sticky;
		position: sticky;
		top: 20px;
		left: 0;
		display: grid;
		grid-template-rows: 2;
		width: 100%;
		height: 120px;
		background-color: #000;
		border-radius: 5px;
		align-items: center;
		justify-content: center;

		h1 {
			font-family: 'Press';
			text-align: center;
			color: #fff;
		}
	}

	.filters {
		position: -webkit-sticky;
		position: sticky;
		top: 160px;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 40px;
		margin: 20px 0;
		border: 1px solid #333;
		border-radius: 5px;
		font-family: 'Press';
		font-size: 14px;

		button {
			height: 30px;
			border: none;
			margin: 5px;
			padding: 5px 10px;
			font-family: 'Bmd Medium';
			border: 2px solid #6E767A;
			border-radius: 5px;
			cursor: pointer;
			transition: .3s;


			&:hover, &.active {
				background-color: #000;
				color: #fff;
			}
		}
	}

	.scroll-container {
		position: relative;
		width: 100%;
		height: calc(100% - 300px);
		overflow: scroll;

		h3 {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-family: 'Press';
			font-size: 20px;
			text-align: center;

			&:before {
				content: '';
				position: absolute;
				top: -25px;
				left: -80px;
				width: 64px;
				height: 64px;
				background-image: url(${Bit});
				background-size: 64px;
			}
		}
	}

	.bits-container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		align-content: center;
		grid-gap: 20px;

		> div {
			position: relative;
    		display: grid;
			justify-items: center;
			background-color: #FAFAFA;
			border: 1px solid rgba(0,0,0,.2);
			border-radius: 4px;
			padding: 10px;
			overflow: hidden;

			p {
				position: absolute;
				bottom: -2px;
				right: -3px;
				font-family: 'Press';
				font-size: 11px;
				color: #fff;
				padding: 7px;
				background-color: #000;
				border-radius: 5px;
			}

			img {
				width: 120px;
				margin: 30px 0 0 0;
				padding: 5px;
			}

			> span {
				position: absolute;
				top: 5px;
				padding: 10px;
				border-radius: 5px;
				font-family: 'Press';
				font-size: 11px;
				text-transform: uppercase;
				letter-spacing: 2px;
				font-weight: 600;
				margin: 0;

				&.zombie { color: #87BF30; };
				&.mummy { color: #6E767A; };
				&.robot { color: #B6C3CC; };
				&.shadow { color: #191B1C; };
				&.skeleton { color: #1EAAC3; };
				&.abomination { color: #D0232C; };
				&.alien { color: #9F24EB; };
				&.human { color: #F5C66D; };
			}
		}

		.tags {
			width: 100%;
			height: auto;
			font-size: 12px;
			font-weight: 900;
			margin: 0 0 20px 0;

			> span {
				display: block;
				float: left;
				font-family: 'Bmd bold';
				font-size: 12px;
				color: #000;
				margin: 2px;
				padding: 3px;
				border-radius: 5px;
				border: 1px dashed;


				&.none { display: none; }
			}
		}
	}

	.beer {
		position: -webkit-sticky;
		position: sticky;
		bottom: 20px;
		left: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		width: calc(100% - 80px);
		height: auto;
		margin: 20px 0;
		padding: 20px 20px 20px 60px;
		border: 1px solid #333;
		border-radius: 5px;
		background-image: url(${Cheers});
		background-size: 40px;
		background-repeat: no-repeat;
		background-position: 10px 10px;
		background-color: #fff;

		p {
			font-family: 'Bmd Medium';
			font-size: 13px;
			color: #000;

			strong {
				font-family: 'Bmd Heavy';
				font-size: 13px;
				color: #9F24EB;
			}
		}

	}

`
