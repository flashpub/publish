import tw from 'twin.macro';

const Styled = {
  Wrapper: tw.div`flex items-center justify-center rounded-lg w-full`,
  Button: tw.button`rounded-lg text-center border-2 w-full`,
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
const Button: React.FC<Props> = (props) => {
  return (
    <Styled.Wrapper>
      <Styled.Button {...props}>{props.title}</Styled.Button>
    </Styled.Wrapper>
  );
};

export default Button;
