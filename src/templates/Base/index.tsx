import * as Styled from './styles';
import { Footer } from 'components/Footer';
import { GoTop } from 'components/GoTop';
import { ToggleTheme } from 'components/ToggleTheme';

export type BaseProps = {
  children: React.ReactNode;
};

export const Base = ({ children }: BaseProps) => {
  return (
    <Styled.Wrapper>
      <ToggleTheme />
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml="Feito por André Carvalho" />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
