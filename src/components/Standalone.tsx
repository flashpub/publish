import tw from 'twin.macro';

const StyledDiv = tw.div`flex items-center justify-center`;

const Standalone: React.FC = () => {
  //
  return (
    <StyledDiv>
      <StyledDiv>
        <input placeholder="input" />
      </StyledDiv>
    </StyledDiv>
  );
};

export default Standalone;
