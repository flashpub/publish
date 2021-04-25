import tw from 'twin.macro';

const Styled = {
  Wrapper: tw.div`flex items-center justify-center border-2 rounded-lg`,
  Input: tw.input`px-6 py-1 rounded-lg text-center`,
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input: React.FC<InputProps> = (props) => {
  //
  return (
    <Styled.Wrapper>
      <Styled.Input {...props} />
    </Styled.Wrapper>
  );
};

export default Input;
