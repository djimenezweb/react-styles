import Circle1 from '../circle1/Circle1';
import Circle2 from '../circle2/Circle2';
import Square1 from '../square1/Square1';
import Square2 from '../square2/Square2';
import { StyledContainer } from './styles';

const Container = () => {
	return (
		<>
			<StyledContainer>
				<Circle1 />
				<Circle2 />
				<Square1 />
				<Square2 />
			</StyledContainer>
		</>
	);
};

export default Container;
