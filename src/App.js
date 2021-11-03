import CardSection from './Components/Card/CardSection';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import { OuterLayout } from './styles/Layouts';
import ChartSection from './Components/Chart/ChartSection';
import MessagingSection from 'Components/Message/MessagingSection';

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
          <ChartSection />
          <MessagingSection />
        </MainStyled>
      </OuterLayout>
    </div>
  );
}

const MainStyled = styled.main``;

export default App;
