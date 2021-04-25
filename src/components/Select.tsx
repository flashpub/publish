import tw from 'twin.macro';
import ReactSelect from 'react-select';
import { Props } from 'react-select';

const Styled = {
  Wrapper: tw.div`flex items-center justify-center rounded-lg w-full`,
  Select: tw(ReactSelect)`rounded-lg text-center border-2 w-full`,
};

const Select: React.FC<Partial<Props>> = (props) => {
  //
  return (
    <Styled.Wrapper>
      <Styled.Select {...props} />
    </Styled.Wrapper>
  );
};

export default Select;
