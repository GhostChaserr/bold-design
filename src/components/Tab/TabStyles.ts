import styled from 'styled-components'

export const StyledTabWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const StyledTabButtonsWrapper = styled.div<{
  center?: boolean
}>`
	width: 100%;
	display: flex;
	flex-direction: row;
	padding: 5px;
	justify-content: ${({ center }) => (center ? 'center;' : 'flex-start;')};
	align-items: center;
`;

export const StyledTabButton = styled.button<{
  isActive?: boolean
}>`
  padding: 20px 20px;
  border: 1px solid
  outline: none;
  background-color: rgba(0,0,0,0);
  border: none;
  outline: none;
  opacity: 0.8;
  font-weight: ${({ isActive }) => (isActive ? '900;' : 'normal;')};
  border-bottom: ${({ isActive }) => (isActive ? '5px solid #d32029;' : '5px solid white;')};
  cursor: pointer;
`;

export const StyledTabButtonContainer = styled.div`
	with: auto;
	margin: 0 10px 0 0;
`;

export const StyledTabContentWrapper = styled.div`
	width: 100%;
	height: 50vh;
	margin-top: 5px;
`;